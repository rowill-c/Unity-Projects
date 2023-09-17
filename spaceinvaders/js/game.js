var game = {

    // an object where to store game information
    data : {
        // score
        score : 0
    },

 
    // Run on page load.
    "onload" : function () {
        
        if (!me.video.init(960, 640, {wrapper : "screen", scale : "auto"})) {
            alert("Current browser does not support HTML5 Canvas. Please begin update or switch broswers.");
            return;
        }

      
        // Initialize the audio.
        me.audio.init("mp3,ogg");

      
        me.loader.preload(game.resources, this.loaded.bind(this));
    },

	
    // Run on game resources loaded.
    "loaded" : function () {
        me.pool.register("player", game.Player);
        me.pool.register("enemy", game.Enemy);
        me.pool.register("laser", game.Laser);

        this.playScreen = new game.PlayScreen();
        me.state.set(me.state.PLAY, this.playScreen);
        me.state.set(me.state.GAME_END, new game.WinScreen());
        me.state.set(me.state.GAMEOVER, new game.LossScreen());
        me.state.set(me.state.MENU, new game.HelpScreen());
        
        game.level = 1;
        // Start the game.
        me.state.change(me.state.PLAY);
    }
};
