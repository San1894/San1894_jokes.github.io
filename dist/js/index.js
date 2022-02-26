const box = document.querySelector('.container')
const head = document.getElementById('header')
const content = document.getElementById('content')

  function getJoke(){
     fetch('https://api.blablagues.net/?rub=blagues')
    .then(res => res.json())
    .then((data) => {
        head.textContent = data.data.content.text_head; 
        console.log(data.data.content);
            content.textContent = 
             data.data.content.text !==""
               ? data.data.content.text
               : data.data.content.text_hidden;
        
    } 
    // .then( (data) =>  )
)}
document.body.addEventListener('click', getJoke)
