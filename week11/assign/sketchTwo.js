function setup(){
createCanvas(1000, 1000)
}
    
function draw(){
    var diamater = 10
    var width = diamater;
    var height = diamater;
    
    for (let x = 0; x < 49; x++) {
        for (let y = 0; y < 49; y++) {
            ellipse(20+ x * 20, 20+ y * 20, height, width); 
        }
    }
    function mouseOver() {
        let d = dist(mouseX, mouseY, x,y);
        if (d < 5) {
        swell();}
    }
    function swell() {
        diamater = diamater + random(1.5, 5);
        time(30);
    }

    }    

