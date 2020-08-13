var pipe = function(game){
    this.game = game ;
    this.image = null;
    this.loaded = false ;
    var self = this;
    this.x =380 ;
    this.y = 300;
    this.init = function(){
        this.loadImage();
    }

    this.loadImage = function(){
        this.image = new Image();
        this.image.onload = function(){
            self.loaded = true ;
            console.log('image 6 loaded');
        }
        this.image.src = 'image/13.png';
    }
    this.update = function(){
        this.x-=4;
        if (this.x == -184) {
        this.x =380 ;
        this.y= Math.floor(200+(Math.random()*300));
        }
    }
    this.draw = function(){
       
        if(self.loaded == false){
            return ;
        }
        self.game.context.drawImage(this.image, this.x,this.y-100-320);
        self.game.context.drawImage(this.image, this.x,this.y);
    }
}