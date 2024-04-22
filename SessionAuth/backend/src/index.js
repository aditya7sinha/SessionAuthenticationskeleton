// Set options as a parameter, environment variable, or rc file.
// eslint-disable-next-line no-global-assign

// npm init esm -y allows us to use the beloved import export in backend 
require = require("esm")(module/* , options */)
module.exports = require("./server.js")
