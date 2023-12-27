let jokeContainer = document.getElementsByClassName('joke')[0]; 
let btn = document.getElementsByTagName('button')[0];
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


function getJoke(){
    jokeContainer.classList.remove('fade');
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.innerHTML=item.joke; 
        jokeContainer.classList.add('fade');
    });
}
 
btn.addEventListener("click", getJoke); 