// Questions String
// const questOne = {
//     question: 'What did the egg say to the frying pan?',
//     answer: 'You crack me up.'
// };
// const questTwo = {
//     question: 'How do you get an alien baby to sleep?',
//     answer: 'You rocket.'
// };
// const questThree = {
//     question: 'What kind of tea is sometimes hard to swallow?',
//     answer: 'Reality.'
// };
// const questFour = {
//     question: 'What is the definition of a farmer?',
//     answer: 'Someone is good in their field.'
// };
// const questFive = {
//     question: "Why dont lobster's share?",
//     answer: "Because they are shellfish."
// };
// const questSix = {
//     question: "How do you communicate with a fish?",
//     answer: "You drop it a line."
// };
// const questSeven = {
//     question: "What kind of horses go out after dusk?",
//     answer: "Nightmares!"
// };
// const questEight = {
//     question: "Why did the banana go to the doctor?",
//     answer: "He wasn't peeling well!"
// };
// const questNine = {
//     question: "What did 0 say to 8?",
//     answer: "Nice belt!"
// };
// const questTen = {
//     question: "Whats the vest way to carve wood?",
//     answer: "Whittle by whittle."
// };
// const questEleven = {
//     question: "Who took the frog's car?",
//     answer: "It was toad."
// };
// Randomizer v1
// const riddles = [questOne, questTwo, questThree, questFour, questFive, questSix, questSeven, questEight, questNine, questTen, questEleven];
// const randomQuest = math.round(math.random() * riddles.length - 1);

// Questions Index
const quest = [
    {    question: 'What did the egg say to the frying pan?',
    answer: 'You crack me up.'
},
{
    question: 'How do you get an alien baby to sleep?',
    answer: 'You rocket.'
},
{
    question: 'What kind of tea is sometimes hard to swallow?',
    answer: 'Reality.'
},
{
    question: 'What is the definition of a farmer?',
    answer: 'Someone is good in their field.'
},
{
    question: "Why dont lobster's share?",
    answer: "Because they are shellfish."
},
{
    question: "How do you communicate with a fish?",
    answer: "You drop it a line."
},
{
    question: "What kind of horses go out after dusk?",
    answer: "Nightmares!"
},
{
    question: "Why did the banana go to the doctor?",
    answer: "He wasn't peeling well!"
},
{
    question: "What did 0 say to 8?",
    answer: "Nice belt!"
},
{
    question: "Whats the vest way to carve wood?",
    answer: "Whittle by whittle."
},
{
    question: "Who took the frog's car?",
    answer: "It was toad."
},]
// Randomizer index
const randomQuest = math.round(math.random() * quest.length - 1);

console.log(randomQuest)


// console.log ('The riddle:', quest[].question, 'You answered' userResponse, 'The punchline:' quest[].answer);