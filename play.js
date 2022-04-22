const connect = require("./client");
const setupInput  = require("./input");


console.log("Connecting ...");
let connection = connect();

// eslint-disable-next-line no-undef
setupInput(connection);