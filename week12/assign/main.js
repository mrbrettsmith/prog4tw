let bog1;
let bog2;
let bog3;
let bog4;
let button;
let sliderRate1;
let sliderRate2;
let sliderRate3;
let sliderRate4;
let sliderVolume;

  // bog1 = loadSound('sound/808kick.mp3');
  // bog2 = loadSound('sound/darkhousenote.mp3');
  // bog3 = loadSound('sound/frogBass.mp3');
  // bog4 = loadSound('sound/loopmellophone.mp3');


function setup(){
  bog1 = loadSound('sound/808kick.mp3', loaded);
  bog2 = loadSound('sound/darkhousenote.mp3', loaded);
  bog3 = loadSound('sound/frogBass.mp3', loaded);
  bog4 = loadSound('sound/loopmellophone.mp3', loaded);

  // sliderRate1 = createSlider(0, 3, 1, 0.01);
  sliderRate2 = createSlider(-1, 1.5, 0, 0.01);
  sliderRate3 = createSlider(-1, 1.5, 0, 0.01);
  sliderRate4 = createSlider(-1, 1.5, 0, 0.01);
}


function loaded() {
  // bog1.loop();
  bog2.loop();
  bog3.loop();
  bog4.loop();
  
  
}

function draw() {
//   button1 = createButton('bog1');
//   button1.mousePressed(togglePlay1);

  // bog1.rate(sliderRate1.value());

  bog2.rate(sliderRate2.value());
  bog3.rate(sliderRate3.value());
  bog4.rate(sliderRate4.value());




}

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

// function togglePlay2() {
//   if(!bog2.isPlaying()) {
//     bog2.loop();
//     button.html('pause');
//   } else {
//     bog2.pause();
//     button.html('play');
//   }
// }

// function togglePlay3() {
//   if(!bog3.isPlaying()) {
//     bog3.loop();
//     button.html('pause');
//   } else {
//     bog3.pause();
//     button.html('play');
//   }
// }

// function togglePlay4() {
//   if(!bog4.isPlaying()) {
//     bog4.loop();
//     button.html('pause');
//   } else {
//     bog4.pause();
//     button.html('play');
//   }
// }


// function draw() {
//   button1 = createButton('bog1');
//   button1.mousePressed(togglePlay1);


//   sliderRate = createSlider(0, 3, 3, 0.1);
//   bog1.setVolume(volume, [rampTime], [timeFromNow])(sliderRate.value());
//   noLoop()

// }

  // bog1 = loadSound('sound/808kick.mp3');
  // bog2 = loadSound('sound/darkhousenote.mp3');
  // bog3 = loadSound('sound/frogBass.mp3');
  // bog4 = loadSound('sound/loopmellophone.mp3');


  // button2 = createButton(bog2);
  // button2.mousePressed(togglePlay2);
  // bog2.setVolume(slider.value());


  // button3 = createButton(bog3);
  // button3.mousePressed(togglePlay3);
  // bog3.setVolume(slider.value());

  // button4 = createButton(bog4);
  // button4.mousePressed(togglePlay4);
  // bog4.setVolume(slider.value());

 
// Preload Practice//

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