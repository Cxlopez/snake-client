let connection;

// Handles input
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// Function controls: game exit and snake directions
const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("Game exited");
    process.exit();
  }
  if (key === 'w') connection.write('Move: up');
  if (key === 'a') connection.write('Move: left');
  if (key === 's') connection.write('Move: down');
  if (key === 'd') connection.write('Move: right');
  if (key === "q") connection.write("Say: Bobba!");
  if (key === "e") connection.write("Say: Squirrel!");

};


module.exports = setupInput;