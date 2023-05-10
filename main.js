const lname = document.querySelector('#name');
const firstname = document.querySelector('#firstname');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const submit = document.querySelector('.form-contact');
const bouton = document.querySelector("#bouton");
// formulaire
submit.addEventListener('submit', (e) => {
    e.preventDefault();
    let nameInput = document.querySelector('input[type="text"]');
    let emailInput = document.querySelector('input[type="email"]');
    let messageInput = document.querySelector('textarea');
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
        alert("Please fill in all fields.");
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        alert("Please enter a valid email address.");
    }
//mise en forme du mail
    let eBody =
        `<b>Name: </b>${lname.value}
        <br>
        <b>Firstname: </b>${firstname.value}
        <br>
        <b>Email: </b>${email.value}
        <br>
        <b>Message : ${message.value}</b>`

    Email.send({
        SecureToken: "dd005072-fff1-4ff1-9d65-f70ee0753170",
        To: 'thomcodeunlimited@gmail.com',
        From: "thomcodeunlimited@gmail.com",
        Subject: "Message received " + email.value,
        Body: eBody
    }).then(
        function(ok) {
            alert("Your message has been sent. Thank you.");
            window.location.reload();
            lname.value = '';
            firstname.value = '';
            email.value = '';
            message.value = '';



        }
    );
});


const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', window.scrollY > 0);
});


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

fadeIn.reveal('.home-text', { delay: 100, origin: 'bottom' })
fadeIn.reveal('.about, .services, .portfolio, .contact', { delay: 300, origin: 'bottom' });

let heart = document.querySelectorAll('.bx-heart');
heart.forEach(heart =>
    heart.addEventListener('click', () => {
        heart.classList.toggle('red');

    }));


