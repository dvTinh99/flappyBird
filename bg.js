var bg = function(game){
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
        this.image.src = 'image/10.png';
    }
    this.update = function(){
        
        this.x--;
        if (this.x == -360) {
        this.x =0 ;
        }
    }
    this.draw = function(){
      
        if(self.loaded == false){
            return ;
        }
        self.game.context.drawImage(this.image, this.x,0);
        self.game.context.drawImage(this.image, this.x + 360,0);
    }
}