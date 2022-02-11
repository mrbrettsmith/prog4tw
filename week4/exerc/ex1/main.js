// select empty div from HTML (document.) and assign it a variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");

// take variable and add H1 inside of it
// create element
const heading = document.createElement('h1');
heading.innerHTML = 'Live llamas from the lebanese llama lovers leaugue';
heading.style.cursor = 'pointer';

myEmptyDiv.appendChild(heading);

// adding Listener
heading.addEventListener('click', handleHeadingClick);
function handleHeadingClick() {
    console.log('heading has been clicked!');
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'lightblue';
}
