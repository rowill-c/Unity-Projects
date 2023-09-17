game.LossScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        me.game.world.addChild(new me.ColorLayer("background", "#000000"), 0);

        me.game.world.addChild(new (me.Renderable.extend ({
            // constructor
            init : function () {
                this._super(me.Renderable, 'init', [0, 0, me.game.viewport.width, me.game.viewport.height]);
                this.titleFont = new me.Font('Serif', 72, '#FFFFFF', "center");
                this.btnFont = new me.Font('Serif', 32, '#FFFFFF', "center");
            },
            draw : function (renderer) {
                this.titleFont.draw(renderer, "LOSS", me.game.viewport.width / 2, 200);
                this.btnFont.draw(renderer, "PRESS ENTER TO RESTART", me.game.viewport.width / 2, 350);
            },
            update : function (dt) {
              return true;
            },
            onDestroyEvent : function () {
            }    
        })), 2);

        me.input.bindKey(me.input.KEY.ENTER, "restart", true);
        this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
            if (action === "restart") {
                me.state.change(me.state.PLAY);
                game.level = 1;
            }
        });
    },   

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        me.input.unbindKey(me.input.KEY.ENTER);
        me.event.unsubscribe(this.handler);
    }
});
