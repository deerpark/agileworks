// 빈 import 문을 추가하여 모듈로 인식시키기
import {} from 'fs';

const fs = require("fs");
const path = require("path");

// 디렉토리 경로 설정
const distDir = path.resolve("node_modules/gs-awds/dist");
const localDir = path.resolve(__dirname, "../", "gs-awds/dist");

// 파일 필터링 함수
const filterJsFiles = (file: string): boolean => file.endsWith(".js") && file !== "index.js";

// 파일 경로 변환 함수
const mapToFilePath = (dir: string) => (file: string): string => path.join(dir, file);

// 모든 .js 파일을 가져오되 index.js는 제외
const getContent = (): string[] => {
  let directory: string;

  // distDir 우선, 없으면 localDir 사용
  try {
    fs.accessSync(distDir, fs.constants.R_OK);
    directory = distDir;
  } catch (_) {
    directory = localDir;
  }

  // 디렉토리에서 .js 파일 필터링 및 경로 변환
  return fs
    .readdirSync(directory)
    .filter(filterJsFiles)
    .map(mapToFilePath(directory));
};

module.exports = getContent;