let blockX = 0;
let blockY = 0;
let drawTimer;
let distance = 10;
let speed = 30;

function setup() {
    createCanvas(500, 300);
    background("blue");
    
}

function drawBlock(x,y, color) {
    fill(color || "pink");
    rect(x, y, 50, 50);
    
}

drawTimer = window.setInterval(() => {
        if (blockX -50 <= 400) {
        drawBlock(blockX,blockY,"red"); 
        blockX += distance;
    } else {
        blockX = 0;
        blockY += 50;
    }
    if (blockX - 50 > height && blockx - 50 > width)
        window.clearInterval(drawTimer);
        // alert('collison!');
}, speed); 