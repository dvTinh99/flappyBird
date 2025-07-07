var bird = function(game){
    this.game = game ;
    this.images = [];
    this.loaded = false  ;
    this.img1Loaded = false ;
    this.img2Loaded = false ;
    this.img3Loaded = false ;

    this.currentImage = null;
    this.currentFrame = 0;

    this.y = 0 ;
    this.x = 100;
    this.speedY = 0;
    this.giaToc = 1;
    this.direction = 'down';
    var self = this;

    this.init = function(){
        this.loadImages();
    }
    this.loadImages = function(){
        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();

        img1.onload = function(){
            self.img1Loaded = true ;
            console.log('img1 loaded');
        }
        img2.onload = function(){
            self.img2Loaded = true ;
            console.log('img2 loaded');
        }
        img3.onload = function(){
            self.img3Loaded = true ;
            console.log('img3 loaded');
        }
        //load image right here
        img1.src ='image/1.png';
        img2.src ='image/2.png';
        img3.src ='image/3.png';

        this.images.push(img1);
        this.images.push(img2);
        this.images.push(img3);

    }
    this.update = function(){
     self.currentFrame ++;
     if (self.currentFrame == 30) {
         self.currentFrame = 0 ;
     }

     if (self.currentFrame <= 9) {
         self.currentImage = self.images[0];
     }
     else if(self.currentFrame < 19 && self.currentFrame > 9){
        self.currentImage = self.images[1];
     }else{
     self.currentImage = self.images[2];
     }
     //chú chim của chúng ta luôn rơi xuống nhanh dần đều
     if (this.y <= 500) {
         if (this.direction == 'down') {
            this.speedY += this.giaToc ;
         }else{
            this.speedY -= this.giaToc ;
        }
        this.y += this.speedY; 
     }
     if(this.y > 500){
         this.y = 500;
     }
     if (this.y > 499) {
         this.game.gameOver = true ;
     }
     //check hit
    this.checkHitPipe();
    }
    this.checkHitPipe = function(){
        if (
            (
            this.x -60 > this.game.pipe.x &&
            this.x < this.game.pipe.x+200
            )
             &&
            (
            this.y + 18<this.game.pipe.y - 100 ||
            this.y + 24 > this.game.pipe.y
            )
            ) {
            this.game.gameOver= true;
        }
    }
    
    this.flap = function(){
      
        this.speedY = -10;

    }
    this.draw = function(){
        if (self.img1Loaded && self.img2Loaded && self.img3Loaded) {
            self.game.context.drawImage(this.currentImage,this.x,this.y)
        }
    }
    
}