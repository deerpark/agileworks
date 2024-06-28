const fs = require("fs");
const path = require("path");

const componentsDir = path.resolve(__dirname, "."); // '.' 는 현재 스크립트가 실행되는 디렉토리
const indexPath = path.join(componentsDir, "index.tsx");

// 현재 디렉토리의 모든 .tsx 파일을 읽음 (index.tsx 제외)
const files = fs
  .readdirSync(componentsDir)
  .filter((file) => file.endsWith(".tsx") && file !== "index.tsx");

// index.tsx 파일의 내용을 만듦
const content = files
  .map((file) => `export * from './${path.basename(file, ".tsx")}';`)
  .join("\n");

// index.tsx 파일에 내용을 씀
fs.writeFileSync(indexPath, content, "utf8");

console.log(`Generated ${indexPath} with exports:\n${content}`);
