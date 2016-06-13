var points = function() {
    //generates an array of all the invisible div id's for use later with click listeners
        var points = [];
        var boardSize = 9
        var alphaNumeric = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','X','Z'];
        for (i = 0; i < boardSize; i++) {
            for (x = 0; x < boardSize - 1; x++){
                var points = points.concat(alphaNumeric[i].concat(alphaNumeric[x]));
            };
            var points = points.concat(alphaNumeric[i].concat(alphaNumeric[x]));
        };
        return(points);
};
var game = function() {
        var turn = 0
        var currentPlayer = 1;
        var whiteScore = 0;
        var blackScore = 0;
        var winner = false;
        var leng = points().leng;
        var selectPoint = function(){
            for (i = 0; i < leng; i++) {
                var point = points()[i];
            };
            return(point);
        };

        while (!winner){
        //stops when there is a winner
            var placeStone = function(selectPoint) {
                var listenHere = document.getElementById(selectPoint);
                listenHere.addEventListener('click', placeStone(selectPoint));
                var stoneHere = document.getElementById(selectPoint);
                if (!(stoneHere.hasChildNodes())) {
                //checks if there is already a stone in the clicked div
                    var currentPlayerStone = function(){
                        if (currentPlayer=1){
                            currentPlayerStone = '<div id="blackStone"></div>'
                        } else {
                            currentPlayerStone = '<div id="whiteStone"></div>'
                        };
                        return(currentPlayerStone);
                    };
                    //adds the stone
                    stoneHere.insertAdjacentHTML('afterbegin', currentPlayerStone);


                    var checkLiberties = function(currentPlayer) {
                        if (adjacentEnemyStone && !checked){
                        //checks stone(s) in the immediate vacinity for opposing color and if it has been checked

                            if (lastLibtery){
                            //checks if stone(s) are surrounded by enemy stone(s)/board edge
                                var removeStone = function() {
                                };
                            };
                        }
                    };
                    

                    //changes the player and checks to see if there is a winner to stop the while loop
                    if (currentPlayer=1) {
                        currentPlayer++;
                    } else {
                        currentPlayer--;
                    };
                    var turn = turn++;
                };
                return(turn);
            };
        //click listeners for above game functions - is this in the right place?
            
            

        };

        //function to an alert for the color of the winner
        var winnerColor = function(){
            if (whiteScore<blackScore){
                winnerColor = "Black Wins!"
            } else {
                winnerColor = "White Wins!"
            };
        window.alert(winnerColor());
        };
};
points();
game();
