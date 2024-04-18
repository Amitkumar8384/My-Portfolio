let sections =document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');

// toggell
let menuIcon = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick =() =>{
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}





window.onscroll = () =>{
    sections.forEach(sec =>{
        let top =window.scrollY;
        let offset =sec.offsetTop - 150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href=' + id +']').classList.add('active');

            });
        };

    });

    // stcky heder
    let header =document.querySelector('header');
    header.classList.toggle('sticy', window.scrollY > 100);

// remove toggle icon and navbar when ckick navbar link
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');

};

//scroll 
ScrollReveal({ 
    reset: true ,
    distance: 2000,
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin :'top' });
