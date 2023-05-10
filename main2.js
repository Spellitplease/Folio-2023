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




//changement de classe barre nav
 
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', window.scrollY > 0);
});

//burger menu
let menu = document.querySelector('#menu-toggle');
let navbar = document.querySelector('.navbar');

menu.onclick = function() {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = function() {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const fadeIn = ScrollReveal({
    distance: '50px',
    duration: 2000,
    reset: true

})




 