var game = function(){
    this.canvas = null ;
    this.context = null;
    this.width = 360;
    this.height = 640;
    this.bird = null ;
    this.bg =null; 
    this.base = null ;
    this.pipe = null;
    //game over
    this.gameOver = false ;
    var self = this ;
    this.init = function(){
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('id','canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        // this.canvas.setAttribute('style','height :100%');
        document.body.appendChild(this.canvas);

        //create backgroud
        this.bg = new bg(this); 
        this.bg.init();

        //create base
        this.base = new base(this); 
        this.base.init();

        //create pipe
        this.pipe = new pipe(this); 
        this.pipe.init();

        //create new bird
        this.bird = new bird(this);
        this.bird.init();
        //add listener
        this.listenMouse();
        this.listenKey();

        this.loop();
    }
    this.listenMouse = function(){
        this.canvas.addEventListener('click',function(){
           self.bird.flap();
        });
    }
    this.listenKey = function(){
        document.body.onkeypress = function(e){
            if(e.keyCode == 32){
                self.bird.flap();
            }
        }
    }
    this.touchMobile = function(){
        document.body.ontouchstart = function(e){
            self.bird.flap();
        }
    }
    
    this.loop = function(){
        self.draw()
        self.update()
        console.log('loop');
       // this.update();
        //this.draw();
        setTimeout(self.loop, 33);
    }
    this.update = function(){
        if (this.gameOver) {
            return;
        }
        this.bird.update();
        this.bg.update();
        this.base.update();
        this.pipe.update();
    }

    this.draw = function(){
        
        this.bg.draw();
        this.pipe.draw();
        this.base.draw();
        this.bird.draw();
        
        
        
    }
}
var game = new game();
game.init();
