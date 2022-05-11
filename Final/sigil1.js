function Sigil1(x,y,terminator) {
    // defining path elements - which can be vector? //
    
    this.beginX = x;
    this.beginY = y;

    this.endX = x;
    this.endY = y+ 150 + terminator;

    this.terminator = terminator;

    // for percentage of distance traveled //
    let step = 0.01;
    let pct = 0.0;


    // storing draw path //
    this.history = [];
    
    // animate as update //

    this.animate = function() {
        this.distX = this.endX - this.beginX;
        this.distY = this.endY - this.beginY;
    }

    // I wanted this to trigger the next draw feature, but had problems with it not refreshing in the draw loop //
    // this.finished = function() {
    //     pct >= 1.;
    //     return true;
    // }

    this.show = function() {
        noStroke();
        fill("red");
        rect(this.goX, this.goY, 10, 10);
        
        var v = createVector(this.goX, this.goY)
        this.history.push(v);
        
        beginShape();
        pct += step;
        if (pct < 1.0) {
            this.goX = round(this.beginX + pct * this.distX);
            this.goY = round(this.beginY + pct * this.distY);
        } 

        // Drawing History //
        for (var i = 1; i < this.history.length; i++) {

            var position = this.history[i];
            fill("red");
            rect(position.x, position.y, 10, 10); 
        }
        endShape();


    }
    transferX = this.endX;
    transferY = this.endY;
}
