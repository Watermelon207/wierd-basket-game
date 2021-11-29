class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
        
        this.rank = null ;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

   //write a function for getPlayerAtEnd()
       static getPlayerAtEnd(){
        var getPlayerAtEndRef = database.ref('playerAtEnd');
        getPlayerAtEndRef.on("value",(data)=>
        {
            allPlayers = data.val()
        })

       }

   //write a function for  static updatePlayerAtEnd(rank)
        static updatePlayerAtEnd(rank){
            var updatePlayerAtEndRef = database.ref('playerAtEnd');
            updatePlayerAtEndRef.on("value",(data)=>
            {
                allPlayers = data.val()
            })
    
        }
    
}
