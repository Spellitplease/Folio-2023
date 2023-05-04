const bouton = document.querySelector("#bouton");

 bouton.onclick = () => {
     fetch("https://official-joke-api.appspot.com/jokes/random")
         .then(response => response.json())
         .then(res => {
             const joke = document.querySelector("#joke");
             joke.innerHTML = res.setup;
            const answer = document.querySelector("#answer");
             answer.innerHTML = res.punchline;
         })
         .catch(error => console.error(error));
 };