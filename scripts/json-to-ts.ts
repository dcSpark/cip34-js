import fs from "fs";
import path from "path";

const inputFilePath = process.argv[2];

if (!inputFilePath) {
  console.error("Please provide the path to the JSON file.");
  process.exit(1);
}

const outputFilePath = path.join(
  path.dirname(inputFilePath),
  `${path.basename(inputFilePath, ".json")}.ts`
);

let data;
try {
  data = fs.readFileSync(inputFilePath, "utf8");
} catch (err) {
  console.error("Error reading the JSON file:", err);
  process.exit(1);
}

const jsonData: unknown = JSON.parse(data);
const tsContent = `import type { Registry } from "./registryTypes.js";\n\nexport default ${JSON.stringify(jsonData, null, 2)} as const satisfies Registry;\n`;

try {
  fs.writeFileSync(outputFilePath, tsContent, "utf8");
} catch (err: unknown) {
  console.error("Error writing the TypeScript file:", err);
  process.exit(1);
}

console.log(`Successfully converted ${inputFilePath} to ${outputFilePath}`);
