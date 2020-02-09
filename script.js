# Jokes-Generator

const jokeEl= document.getElementById("joke_el");

const joke_btn= document.getElementById("get_joke");

//get event listener on joke_btn

joke_btn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke(){
  //call api
   const jokeResolve=  await fetch('https://icanhazdadjoke.com/', { headers : {
     'Accept': 'application/json'
   }});
  let joke= await jokeResolve.json();
    
  //set new Joke
  jokeEl.innerHTML = joke.joke;
}
