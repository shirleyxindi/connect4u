(function(exports){
    exports.WINNER_LENGTH = 4; /* if tokens have this length, player wins */
    exports.MAX_LENGTH = 6; /* column can have a maximum of this length */
    exports.WEB_SOCKET_URL = "ws://localhost:3000"; /* WebSocket URL */
    exports.TOTAL_GAMES_PLAYED = 0 /* todo */
})(typeof exports === "undefined" ? (this.Setup = {}) : exports);