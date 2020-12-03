const fse = require("fs-extra");
const path = require("path");

const {name: packageName} = fse.readJsonSync(
  path.join(__dirname, "./package.json"),
);

console.log({packageName});
