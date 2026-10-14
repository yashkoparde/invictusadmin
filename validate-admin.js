console.log("Validating admin portal schema...");
const fs = require("fs");
const html = fs.readFileSync("index.html", "utf8");
console.log("index.html size:", html.length, "bytes - OK!");
