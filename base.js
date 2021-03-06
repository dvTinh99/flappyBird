var base = function(game){
    this.game = game ;
    this.image = null;
    this.loaded = false ;
    var self = this;
    this.x =0 ;
    this.init = function(){
        this.loadImage();
    }

    this.loadImage = function(){
        this.image = new Image();
        this.image.onload = function(){
            self.loaded = true ;
            console.log('image loaded');
        }
        this.image.src = 'image/9.png';
    }
    this.update = function(){
        
        this.x-=4;
        if (this.x == -368) {
        this.x =0 ;
        }
    }
    this.draw = function(){
        
        if(self.loaded == false){
            return ;
        }
        self.game.context.drawImage(this.image, this.x,this.game.height - 120);
        self.game.context.drawImage(this.image, this.x + 360,this.game.height - 120);
    }
}