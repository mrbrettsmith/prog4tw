let blockX = 0;
let blockY = 0;
let BlockColor = "pink";
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
function keyTyped() {
    let keyToNumber = number(key);
     if (isNaN(keyToNumber)){
        return;}
    keyToNumber = map(keyToNumber, 1, 9, 1, 255);
    BlockColor =keyToNumber;
    console.log('youpressed', keyToNumber);
   

}

drawTimer = window.setInterval(() => {
        if (blockX -50 <= 400) {
        drawBlock(blockX, blockY, BlockColor); 
        blockX += distance;
    } else {
        blockX = 0;
        blockY += 50;
    }
    if (blockX - 50 > width && blockY - 50 > height) {
        window.clearInterval(drawTimer);
        alert('collison!');
    }
}, speed); 