const net = require("net");
const { HOST, PORT, NAME } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: HOST, // IP address here,
    port: PORT, // PORT number here,
  });

  conn.setEncoding("utf8");
  conn.on("connect", function() {
    console.log("I AM successfully connected to game server.");
    conn.write(NAME);
  });
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  
  return conn;
};
console.log("Connecting ...");
module.exports = { connect };