let bog1;
let bog2;
let bog3;
let bog4;
let button;
let sliderRate1;
let sliderRate2;
let sliderRate3;
let sliderRate4;
var amp1;
var amp2;
var amp3;
var amp4;
var pulse1;
var pulse2;
var pulse3;
var pulse4;


function preload() {
  bog1 = loadSound('sound/808kick.mp3');
  bog2 = loadSound('sound/darkhousenote.mp3');
  bog3 = loadSound('sound/frogBass.mp3');
  bog4 = loadSound('sound/loopmellophone.mp3');
}

function setup(){

  createCanvas(windowWidth, 800);
  
  // sounds //
  bog1.loop();
  bog2.loop();
  bog3.loop();
  bog4.loop();
  
  // Rate Slider1 //
  sliderRate1 = createSlider(-1, 1.2, 0, 0.01);
  sliderRate1.position(50,75);
  // sliderRate1.parent("sliders");


  // styling 2//
  // sliderRate1.style('-webkit-appearance', 'none');
  // sliderRate1.style('background-color', 'black');sliderRate1.style('outline', '2px, solid, white');
  

  // Rate Slider2 //
  sliderRate2 = createSlider(-0.3, 0.3, 0, 0.01);
  sliderRate2.position(50,225);
  

  // Rate Slider3 //
  sliderRate3 = createSlider(-0.5, 0.5, 0, 0.01);
  sliderRate3.position(50,375);
  

  // Rate Slider4 //
  sliderRate4 = createSlider(-0.3, 0.3, 0, 0.01);
  sliderRate4.position(50, 525);
  

  // Color Pulse 1 //
  amp1 = new p5.Amplitude();
  amp1.setInput(bog1);
  

  // Color Pulse 2 //
  amp2 = new p5.Amplitude();
  amp2.setInput(bog2);

  // Color Pulse 3 //
  amp3 = new p5.Amplitude();
  amp3.setInput(bog3);

  // Color Pulse 4 //
  amp4 = new p5.Amplitude();
  amp4.setInput(bog4);
  
}


function draw() {
  background("black")
  noStroke();

  // instructions//

  text('SWAMP CALLER - use the slidets to sing like a bog', 100, 25,)
  // Sound 1 //
  
  
  pulse1 = amp1.getLevel() * 300;
  // console.log(pulse1)
  fill (71, 102, 42, pulse1)
  // fill (71, 102, 42, amp1.getLevel() * 500);
  rect(0, 0, windowWidth, 150)
  bog1.rate(sliderRate1.value());
  // fill (bog1.rate() * 10, 102, 42);
  // amp1.getLevel() * 1000

  // Sound 2 //

  pulse2 = amp2.getLevel() * 500;
  fill (100, 107, 41, pulse2);
  rect(0, 150, windowWidth, 150)
  bog2.rate(sliderRate2.value());

  
  // Sound 3 //

  pulse3 = amp3.getLevel() * 500;
  fill (107, 104, 41, pulse3);
  rect(0, 300, windowWidth, 150)
  bog3.rate(sliderRate3.value());

  // Sound 4 //

  pulse4 = amp4.getLevel() * 500;
  fill (107, 92, 41, pulse4);
  rect(0, 450, windowWidth, 150)
  bog4.rate(sliderRate4.value());


}




  // Button Breaks slider for rate - wont modify, but base rate reads //


  // button1 = createButton('bog1');
  // button1.mousePressed(togglePlay1);

  // sliderRate = createSlider(0, 3, 3, 0.1);
  // bog1.setVolume(volume, [rampTime], [timeFromNow])(sliderRate.value());
  // noLoop()


// function togglePlay1() {
//   if(!bog1.isPlaying()) {
//     bog1.loop();
//     button.html('pause');
//   } else {
//     bog1.pause();
//     button.html('play');
//   }
// }




 // Loaded Test //
//setup
// bog1 = loadSound('sound/808kick.mp3', loaded);
// bog2 = loadSound('sound/darkhousenote.mp3', loaded);
// bog3 = loadSound('sound/frogBass.mp3', loaded);
// bog4 = loadSound('sound/loopmellophone.mp3', loaded);

// function loaded() {
//   bog1.loop();
//   bog2.loop();
//   bog3.loop();
//   bog4.loop();
// }

//// -  OR with button- ////

// function loaded() {
//   button1 = createButton(bog1);
//   button1.mousePressed(togglePlay1);
//   button2 = createButton(bog2);
//   button2.mousePressed(togglePlay2);
//   button3 = createButton(bog3);
//   button3.mousePressed(togglePlay3);
//   button4 = createButton(bog4);
//   button4.mousePressed(togglePlay4);
// }