var express = require("express");
var http = require("http");
// var websocket = require("ws");

// var gameStatus = require("./public/gameStats");
// var Game = require("./public/game");

var port = process.argv[2];
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/play", function(req, res) {
  res.sendFile("game.html", { root: "./public" });
});

app.get("/", function (req, res) {
  res.sendFile("splash.html", {root: "./public"});
})

http.createServer(app).listen(port);

// var server = http.createServer(app);
// const wss = new websocket.Server({ server });

// var websockets = {};

// var currentGame = new Game(gameStatus.gamesInitialized++);
// var connectionID = 0;

// wss.on("connection", function connection(ws)) {
//   let con = ws;
//   con.id = connectionID++;
//   let playerType = currentGame.addPlayer(con);
//   websockets[con.id] = currentGame;


// }
