// One Star for Monday — a one-star review of Monday, written as if
// Monday were a restaurant. Writes the single line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "One star. Seated an hour late, coffee cold, and Monday charged me for the whole weekend anyway.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
