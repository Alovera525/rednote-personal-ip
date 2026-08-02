#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../", import.meta.url));
const PLUGIN_NAME = "rednote-personal-ip";
const CLAUDE_MARKETPLACE = ".claude-plugin/marketplace.json";
const CLAUDE_MANIFEST = "plugins/rednote-personal-ip/.claude-plugin/plugin.json";
const CODEX_MANIFEST = "plugins/rednote-personal-ip/.codex-plugin/plugin.json";
const README = "README.md";
const RELEASE_PATHS = [
  CLAUDE_MARKETPLACE,
  ".agents/plugins/marketplace.json",
  "plugins/rednote-personal-ip",
];
const STRICT_SEMVER = /^(\d+)\.(\d+)\.(\d+)$/;

function readText(relativePath) {
  return readFileSync(new URL(relativePath, new URL(`file://${ROOT}/`)), "utf8");
}

function writeText(relativePath, content) {
  writeFileSync(new URL(relativePath, new URL(`file://${ROOT}/`)), content);
}

function readJson(relativePath) {
  return JSON.parse(readText(relativePath));
}

function writeJson(relativePath, value) {
  writeText(relativePath, `${JSON.stringify(value, null, 2)}\n`);
}

function marketplacePlugin(marketplace) {
  const plugin = marketplace.plugins?.find((entry) => entry.name === PLUGIN_NAME);
  if (!plugin) {
    throw new Error(`${CLAUDE_MARKETPLACE} 缺少 ${PLUGIN_NAME} 条目`);
  }
  return plugin;
}

function readCurrentState() {
  const marketplace = readJson(CLAUDE_MARKETPLACE);
  const claudeManifest = readJson(CLAUDE_MANIFEST);
  const codexManifest = readJson(CODEX_MANIFEST);
  const readme = readText(README);
  const readmeMatch = readme.match(/当前版本：`([^`]+)`/);
  if (!readmeMatch) {
    throw new Error(`${README} 缺少“当前版本”字段`);
  }

  return {
    marketplace,
    marketplacePlugin: marketplacePlugin(marketplace),
    claudeManifest,
    codexManifest,
    readme,
    versions: {
      claudeMarketplace: marketplace.version,
      claudeMarketplacePlugin: marketplacePlugin(marketplace).version,
      claudeManifest: claudeManifest.version,
      codexManifest: codexManifest.version,
      readme: readmeMatch[1],
    },
  };
}

function assertSynchronized(state) {
  const entries = Object.entries(state.versions);
  const unique = new Set(entries.map(([, version]) => version));
  if (unique.size !== 1) {
    throw new Error(
      `版本号不一致：\n${entries.map(([name, version]) => `- ${name}: ${version}`).join("\n")}`,
    );
  }
  const version = entries[0][1];
  if (!STRICT_SEMVER.test(version)) {
    throw new Error(`发布版本必须是 x.y.z 格式，当前为 ${version}`);
  }
  return version;
}

function parseVersion(version) {
  const match = STRICT_SEMVER.exec(version);
  if (!match) {
    throw new Error(`无法解析版本 ${version}；发布版本必须是 x.y.z 格式`);
  }
  return match.slice(1).map(Number);
}

function bumpPatch() {
  const state = readCurrentState();
  const current = assertSynchronized(state);
  const [major, minor, patch] = parseVersion(current);
  const next = `${major}.${minor}.${patch + 1}`;

  state.marketplace.version = next;
  state.marketplacePlugin.version = next;
  state.claudeManifest.version = next;
  state.codexManifest.version = next;

  writeJson(CLAUDE_MARKETPLACE, state.marketplace);
  writeJson(CLAUDE_MANIFEST, state.claudeManifest);
  writeJson(CODEX_MANIFEST, state.codexManifest);
  writeText(README, state.readme.replace(/当前版本：`[^`]+`/, `当前版本：\`${next}\``));

  console.log(`${current} -> ${next}`);
}

function readBaseVersion(base) {
  const raw = execFileSync("git", ["show", `${base}:${CLAUDE_MANIFEST}`], {
    cwd: ROOT,
    encoding: "utf8",
  });
  return JSON.parse(raw).version;
}

function checkRelease(base) {
  if (!base) {
    throw new Error("check-release 需要一个 Git base SHA 或 ref");
  }

  const current = assertSynchronized(readCurrentState());
  const changed = execFileSync("git", ["diff", "--name-only", base, "--", ...RELEASE_PATHS], {
    cwd: ROOT,
    encoding: "utf8",
  })
    .trim()
    .split("\n")
    .filter(Boolean);

  if (changed.length === 0) {
    console.log("没有插件发布内容变更；无需提升版本。");
    return;
  }

  const previous = readBaseVersion(base);
  const [previousMajor, previousMinor, previousPatch] = parseVersion(previous);
  const expected = `${previousMajor}.${previousMinor}.${previousPatch + 1}`;
  if (current !== expected) {
    throw new Error(
      `检测到插件发布内容变更，版本必须从 ${previous} 精确提升到 ${expected}；当前为 ${current}`,
    );
  }

  console.log(`版本递增有效：${previous} -> ${current}`);
}

function main() {
  const [command = "check", argument] = process.argv.slice(2);
  if (command === "check") {
    const version = assertSynchronized(readCurrentState());
    console.log(`版本同步有效：${version}`);
    return;
  }
  if (command === "bump") {
    bumpPatch();
    return;
  }
  if (command === "check-release") {
    checkRelease(argument);
    return;
  }
  throw new Error(`未知命令：${command}`);
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
