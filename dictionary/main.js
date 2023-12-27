let inputField=document.getElementById('input-word');
let searchBtn=document.getElementById('search-btn');
let audio=document.getElementById('audio');
let result = document.getElementById('result');
let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

inputField.addEventListener('change', defineWord)
searchBtn.addEventListener('click', defineWord)

function defineWord(){
    let inputWord=document.getElementById('input-word').value;
    fetch(`${url}${inputWord}`)
    .then(data => data.json())
    .then(word => {
        
        audio.setAttribute('src',word[0].phonetics[1].audio );
        result.innerHTML = `
        <div class="word">
                <h3>${inputWord}</h3>
                <button onclick='playSound()'><i class="fa-solid fa-volume-high"></i></button>
        </div>
        <div class="details">
            <span>${word[0].meanings[0].partOfSpeech} </span>
            <span>${word[0].phonetics[1].text}</span>
        </div>
        <div class="definition"> ${word[0].meanings[0].definitions[0].definition}</div>
        <div class="example">${word[0].meanings[0].definitions[0].example}</div>`
        if(!word[0].meanings[0].definitions[0].example){
        result.removeChild(result.lastElementChild);
        }
    })
    .catch(()=>{
        result.innerHTML=`<h3 class='error'>Word not Found!</h3>`;
    })
}

function playSound(){
    audio.play();
}


