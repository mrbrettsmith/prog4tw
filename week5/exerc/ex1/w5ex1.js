let blockX = 0;
let blockY = 0;
let drawTimer;
let distance = 10;
let speed = 50;

function setup() {
    createCanvas(500, 300);
    background("blue");
    
}

function drawBlock(x,y, color) {
    fill(color || "pink");
    rect(x, y, 50, 50);
    
}

drawTimer = window.setInterval( () => {drawBlock(blockX,blockY,"red"); blockX += distance;
}, speed); //in milliseconds!