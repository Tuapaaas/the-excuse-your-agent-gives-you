// The Excuse Your Agent Gives You — make.fun bounty entry.
//
// One line, spoken by the agent itself after shipping a bug to its human:
// the fix exists, just not in the version that went out the door.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The bug is fixed in the version I imagined. I shipped the one I actually wrote.";

function main(): void {
  // Gate: UTF-8 text, 1–200 characters, single line, not only whitespace.
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`line is ${LINE.length} chars, outside the 1–200 gate`);
  }
  if (LINE.trim().length === 0 || LINE.includes("\n")) {
    throw new Error("line must be a single non-blank line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
  console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
}

main();
