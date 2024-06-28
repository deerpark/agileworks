const fs = require("fs");
const path = require("path");

const packagesDir = path.resolve(__dirname, "packages");
// const distDir = path.resolve(__dirname, "dist");

// 패키지 디렉토리 내의 모든 패키지를 가져옴
const packageDirs = fs.readdirSync(packagesDir).filter((file) => {
  return fs.statSync(path.join(packagesDir, file)).isDirectory();
});

packageDirs.forEach((packageDir) => {
  const packageJsonPath = path.join(packagesDir, packageDir, "package.json");
  const packageJson = require(packageJsonPath);
  const distPackageJsonPath = path.join(
    packagesDir,
    packageDir,
    "dist",
    "package.json"
  );

  const replaceWorkspaceDependencies = (dependencies) => {
    if (!dependencies) return;
    for (const [key, value] of Object.entries(dependencies)) {
      if (value === "workspace:*") {
        const dependencyPackageJsonPath = path.resolve(
          packagesDir,
          key.replace("@", ""),
          "package.json"
        );
        const dependencyPackageJson = require(dependencyPackageJsonPath);
        dependencies[key] = dependencyPackageJson.version;
      }
    }
  };

  replaceWorkspaceDependencies(packageJson.dependencies);
  replaceWorkspaceDependencies(packageJson.devDependencies);
  replaceWorkspaceDependencies(packageJson.peerDependencies);

  // dist 디렉토리가 존재하지 않으면 생성
  if (!fs.existsSync(path.dirname(distPackageJsonPath))) {
    fs.mkdirSync(path.dirname(distPackageJsonPath), { recursive: true });
  }

  fs.writeFileSync(distPackageJsonPath, JSON.stringify(packageJson, null, 2));
});
