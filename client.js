const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "192.168.1.18",
    port: 50541
  });
  conn.on("connect", () => {
    console.log("you've connected sucessfully");
  });
  conn.on("data", (data) => {
    console.log(data);
  });
  conn.on("connect", () => {
    conn.write("Name: CSL");
    // conn.write("Move: up");
    // setTimeout(() => conn.write("Move: up"), 100);
    // setTimeout(() => conn.write("Move: left"), 200);
    // setTimeout(() => conn.write("Move: down"), 500);


  });
  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;