var player;

function beginGame() 
{
    gameArea.start();
    player = new actor(30, 30, "blue", 10, 120);
}

var gameArea = 
{
    
    canvas : document.createElement("canvas"),
    start : function() 
    {
        this.canvas.width = 800;
        this.canvas.height = 640;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    
    clear : function()
    {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function actor(width, height, color, x, y)
{
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y; 
    
    this.update = function()
    {
        ctx = gameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function updateGameArea()
{
    gameArea.clear();
    player.update();
}