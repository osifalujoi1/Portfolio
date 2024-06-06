


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*=============== MENU SHOW ===============*/
/* Validate if constant exists */
if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*============ MENU HIDDEN ==============*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    //When the scroll is greater than 50 viewport height, add the 
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_wigvbe2','template_0wvecg8','#contact-form','xhuLuzs_nyrxsgSAY')
    .then(() =>{
        //Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        //Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        //Clear input fields
        contactForm.reset()

    }, () =>{
        //Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add the
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
document.getElementById('theme-button').addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('dark-theme');  // Assuming 'dark-theme' is your class for the dark mode

    // Save the current theme to localStorage
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
});
document.addEventListener('DOMContentLoaded', function() {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark' || currentTheme === null) {
        document.body.classList.add('dark-theme'); 
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
    } 
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({ 
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
    // reset: true //animations repeat
})

sr.reveal('.home__perfil, .about__image', {origin: 'right'})
sr.reveal('.home__name, .home__info, .about__container', {origin: 'left'})

/*=============== SHOW / HIDE SECTIONS ===============*/
const homeBtn = document.querySelector(".nav__link[href='#home']");
const aboutBtn = document.querySelector(".nav__link[href='#about']");
const contactBtn = document.getElementById("contactBtn");
const resumeFooterBtn = document.getElementById("resumeBtn");
const aboutFooterBtn = document.getElementById("aboutBtn");

function showContactResume() {
    const contactResume = document.querySelectorAll(".contact, .resume");
    const homeAbout = document.querySelectorAll(".home, .about");

    contactResume.forEach(section => section.style.display = "block");
    homeAbout.forEach(section => section.style.display = "none");
}
 
//Show home, about, and resume
function showHomeAbout() {
    const contactResume = document.querySelectorAll(".contact, .resume");
    const homeAbout = document.querySelectorAll(".home, .about");

    contactResume.forEach(section => section.style.display = "none");
    homeAbout.forEach(section => section.style.display = "block");
}


homeBtn.addEventListener("click", showHomeAbout);
aboutBtn.addEventListener("click", showHomeAbout);
contactBtn.addEventListener("click", showContactResume);
resumeFooterBtn.addEventListener("click", showContactResume);
aboutFooterBtn.addEventListener("click", showHomeAbout);
showHomeAboutResume();

