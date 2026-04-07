const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const packageJsonPath = path.join(repoRoot, "package.json");
const packageLockPath = path.join(repoRoot, "package-lock.json");
const changelogPath = path.join(repoRoot, "CHANGELOG.md");

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const packageLock = JSON.parse(fs.readFileSync(packageLockPath, "utf8"));
const changelog = fs.readFileSync(changelogPath, "utf8");

const version = packageJson.version;
const errors = [];

if (packageLock.version !== version) {
  errors.push(
    `package-lock.json root version is ${packageLock.version}, expected ${version}`
  );
}

if (!packageLock.packages || !packageLock.packages[""]) {
  errors.push("package-lock.json is missing the root package entry");
} else if (packageLock.packages[""].version !== version) {
  errors.push(
    `package-lock.json root package version is ${packageLock.packages[""].version}, expected ${version}`
  );
}

if (!changelog.includes(`## [${version}]`)) {
  errors.push(`CHANGELOG.md is missing a heading for version ${version}`);
}

if (errors.length > 0) {
  console.error(`Release metadata check failed for version ${version}:`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Release metadata aligned for version ${version}`);
