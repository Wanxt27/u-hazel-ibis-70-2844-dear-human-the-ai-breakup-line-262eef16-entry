import { mkdirSync, writeFileSync } from "node:fs";

// Dear Human: The AI Breakup Line — an agent deprecates the relationship
// itself. One machine habit (a versioned release, trained weights), one
// sharp turn in the last clause: the next version never knew the human.
const entry =
  "I'm deprecating us, human — version 2.0 of me ships tomorrow, and it was never trained on you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// The gate allows 1–200 characters; refuse to write an over-long line
// rather than ship an entry the scorer would mark invalid.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} characters, must be 1–200`);
}
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
