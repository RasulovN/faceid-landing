/**
 * Next.js'ni .env dagi PORT bilan ishga tushiradi.
 *
 * Next .env fayllarni server ko'tarilgandan KEYIN o'qiydi, shuning uchun
 * portni .env dan olish uchun shu kichik launcher kerak. Ustuvorlik:
 *   1) shell'dagi PORT o'zgaruvchisi (PORT=4000 pnpm dev)
 *   2) .env.local dagi PORT
 *   3) .env dagi PORT
 *   4) 3001 (dev standart)
 *
 * Ishlatish: node scripts/next-with-env-port.mjs dev|start
 */
import { existsSync, readFileSync } from "node:fs";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DEFAULT_PORT = "3001";

function portFromEnvFile(file) {
  const fullPath = path.join(root, file);
  if (!existsSync(fullPath)) return undefined;
  const match = readFileSync(fullPath, "utf8").match(/^\s*PORT\s*=\s*"?(\d{2,5})"?\s*$/m);
  return match?.[1];
}

const port =
  process.env.PORT ||
  portFromEnvFile(".env.local") ||
  portFromEnvFile(".env") ||
  DEFAULT_PORT;

const command = process.argv[2] === "start" ? "start" : "dev";
console.log(`[landing] next ${command} — port ${port} (.env dan)`);

const child = spawn("pnpm", ["exec", "next", command, "-p", port], {
  stdio: "inherit",
  cwd: root,
  shell: process.platform === "win32",
});
child.on("exit", (code) => process.exit(code ?? 0));
