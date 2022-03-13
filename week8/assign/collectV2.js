// const randomColor = Math.floor(Math.random()*16777215).toString(16);
//   document.body.style.backgroundColor = "#" + randomColor;
//   color.innerHTML = "#" + randomColor;
// }



let mv = Vue.createApp({ 
    data(){
      return {
        rocks: [
        {
            name: "Ledge Lump",
            place: "'The Ledges', Alfred, New York",
            who: "Erin Smith",
            dimensions: "4.5, 4, 1.75",
            description: "Smooth, flat bottom with a pitted fossil haunted top. Collected from the rocky ledges my sister 3D scanned for ceramic printing.",
        },
        {
            name: "Alamo Pebble",
            place: "The Alamo, San Antonio, Texas",
            who: "Beth Checkola",
            dimensions: "1.5, 1.5, 1",
            description: "Small, egg-shaped rock. Pale color. Taken from an interior wall of the Alamo",
        },
        {
            name: "Snow Canyon Lava",
            place: "Snow Canyon State Park, Utah",
            who: "Molly Raben",
            dimensions: "7.5, 4, 4",
            description: "Black lava rock with dusty red mottlin over a pitted surface. Gathered from the area 'The Conqueror' was filmed. Used for an art exhibition at the White Page Gallery in Minneapolis",
        },
        {
            name: "Weird Y Coral",
            place: "Hawaii",
            who: "Matt Miller",
            dimensions: "1, 2, .5",
            description: "Smooth glossy white coral with with branching arms.",
        },
        {
            name: "Crazy Horse Fragment",
            place: "Crazy Horse, South Dakota",
            who: "Sophie Weil",
            dimensions: "6, 4, 4.5",
            description: "Blast trailing from the monumental sculpture",
        },
        ]
      }
    }
  }).mount("#rockCollect");