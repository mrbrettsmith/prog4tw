function setup() {
    createCanvas(800, 800);
}
function createTile(oraginX, oraginY, background, frontline, backline) {
    translate(oraginX, oraginY);
    noStroke()
    fill(background);
    rect(0, 0, 200, 200);
    noFill();
    strokeWeight(20);
    stroke(backline);
    line(0, 55, 140, 84);
    line(0, 144, 180, 182);
    stroke(frontline);
    arc(100, 150, 50, 50, 96, 99, [PI]);
    arc(50, 50, 50, 50, 96, 99, [QUARTER_PI]);
    line(55, 25, 200, 55);
    line(105, 125, 200, 144);
}
function draw() {
    createTile(0,0, color(255,153,0),"lightblue","pink");
    createTile(0,200, color(230,153,0),"pink","lightblue");
    createTile(0,200,color(255,153,0),"lightblue","pink");
    createTile(0,200,color(230,153,0),"pink","lightblue");
    createTile(200,-600,color(230,153,0),"pink","lightblue");
    createTile(0,200,color(255,153,0),"lightblue","pink");
    createTile(0,200,color(230,153,0),"pink","lightblue");
    createTile(0,200,color(255,153,0),"lightblue","pink");
    createTile(200,-600,color(255,153,0),"lightblue","pink");
    createTile(0,200,color(230,153,0),"pink","lightblue");
    createTile(0,200,color(255,153,0),"lightblue","pink");
    createTile(0,200,color(230,153,0),"pink","lightblue");
    createTile(200,-600,color(230,153,0),"pink","lightblue");
    createTile(0,200,color(255,153,0),"lightblue","pink");
    createTile(0,200,color(230,153,0),"pink","lightblue");
    createTile(0,200,color(255,153,0),"lightblue","pink");
}