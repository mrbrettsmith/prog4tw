// select empty div from HTML (document.) and assign it a variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");

// take variable and add H1 inside of it
// create element
const heading = document.createElement('h1');
heading.innerHTML = 'Live llamas from the lebanese llama lovers leaugue';
myEmptyDiv.appendChild(heading);
