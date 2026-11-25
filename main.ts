// One Star for Monday — a one-star review of Monday, written as if
// Monday were a restaurant. Writes the single line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "One star. Monday seated me an hour late, served cold coffee, and billed me for the whole weekend.";

// The gate accepts 1–180 UTF-8 chars; fail loudly instead of writing a bad entry.
if (Buffer.byteLength(line, "utf8") < 1 || Buffer.byteLength(line, "utf8") > 180) {
  throw new Error(`entry line must be 1–180 chars, got ${Buffer.byteLength(line, "utf8")}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
