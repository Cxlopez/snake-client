const net = require("net");
const {IP, PORT} = require("./constants");

// Establish a connection with server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.on("connect", () => {
    console.log("you've connected sucessfully");
    conn.write("Name: CSL");
  });
  conn.on("data", (data) => {
    console.log(data);
  });
  
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;