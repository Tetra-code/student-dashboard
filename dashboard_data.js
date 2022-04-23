const dashboard_data = function() {
    this.course = [];
    this.grade = [];
    this.deadline = [];
    this.event = [];
};

// pairing.prototype.addPlayerAndConnection = function(p, c) {
//     if (this.gameState == 2) {
//         return new Error(
//         `Invalid call. This pairing is full`
//         );
//     }
//     if (this.player1 == null) {
//         this.player1 = p;
//         this.player1Connection = c;
//         this.gameState = 1;
//         return "1";
//     } 
//     else {
//         this.player2 = p;
//         this.player2Connection = c;
//         this.gameState = 2;
//         return "2";
//     }
// };

module.exports = dashboard_data;