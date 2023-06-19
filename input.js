let connection;

const setupInput = function(conn) {
  connection = conn;// Assign the conn object to the connection variable
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      // Ctrl + C was pressed, terminate the game
      process.exit();
    } else if (key === 'w') {
      connection.write("Move: up"); // Use the movement command from the MOVEMENT_COMMANDS constant.
    } else if (key === 'a') {
      connection.write("Move: left");
    } else if (key === 's') {
      connection.write("Move: down");
    } else if (key === 'd') {
      connection.write("Move: right");
    } else if (key === 'q') {
      connection.write("Say: Hello!");
    } else if (key === 'e') {
      connection.write("Say: I'm having fun!");
    } else if (key === 'r') {
      connection.write("Say: Good Bye!");
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};
module.exports = { setupInput };