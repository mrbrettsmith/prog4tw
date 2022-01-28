// const favGames = [gameOne,gameTwo,gameThree,gameFour,gameFive];
// const yourGame = window.prompt('There are 5 games in my collection. pick a number to learn about a game');

const gameOne = {
    name: 'Settlers of Catan',
    theme: 'Agrarian Monopoly',
    numberOfplayers: '2-4',
    funRating: 1,
    agravationRating: 3
};
const gameTwo = {
    name: 'Wingspan',
    theme: 'Bird Watching',
    numberOfplayers: '1-5',
    funRating: 1,
    agravationRating: 2
};
const gameThree = {
    name: 'Cave Evil',
    theme: 'Necromantic Monster Breeding',
    numberOfplayers: '2-4',
    funRating:2,
    agravationRating:2
};
const gameFour = {
    name: 'Talisman',
    theme: 'Fantasy Wanderings',
    numberOfplayers: '1-8',
    funRating: 2,
    agravationRating: 3
};
const gameFive = {
    name: 'Lords of Waterdeep',
    theme: 'Fantasy Gang Managment',
    numberOfplayers: '1-5',
    funRating: 1,
    agravationRating: 2
};
console.log('You selected '+ gameOne.name, 'which is a game about ' + gameOne.theme + ".", gameOne.numberOfplayers + ' people can play, and though it ranks '+gameOne.funRating, 'in fun, it has difficulty ranking of '+ gameOne.agravationRating);

// console.log('You selected' favGames[yourGame-1].name,'which is a game about' +theme[yourgame-1].theme);

