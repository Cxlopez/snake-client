let connection;


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("Game exited");
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === "q") {
    connection.write("Say: Hola!");
  }
  if (key === "e") {
    connection.write("Say: Bye!");
  }
  if (key === "r") {
    connection.write("Say: Yum");
  }
  if (key === "f") {
    connection.write("Say: get good");
  }


};


module.exports = setupInput;