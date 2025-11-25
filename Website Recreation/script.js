// Activate Menu Button
let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');
}

// to remove menu bar on scroll
window.onscroll = () => {
    menuBtn.classList.remove('bx-x');
    menuBar.classList.remove('active');
}

//scroll reveal animation
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2100,
    delay: 200
});
ScrollReveal().reveal('.home-bio h1, .about-resume, .animate, .heading', { origin: 'bottom' });
ScrollReveal().reveal('.home-bio p', { origin: 'bottom' });
ScrollReveal().reveal('.home-bio, heading', { origin: 'bottom' });
ScrollReveal().reveal('.profile-pic, .about-items, .skills-row, .education-row, .project-items, .form', { origin: 'bottom' });

//typing wala animation
const animText = new Typed('.animated-text', {
    strings: ['', 'Front-end Developer.', 'Web Designer.', 'Novice Digital Artist.', 'Budding Coder.', 'Learner.', 'Enthusiast.'],
    backSpeed: 70,
    typeSpeed: 60,
    backDelay: 100,
    startDelay: 600,
    loop: true
});

//scroll section
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 100;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             //for active menu-bar
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             })
//         }
//     });
// }

// Get all the navigation links
const navLinks = document.querySelectorAll('.menu-bar a');

// Add click event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        // Remove the 'active' class from all navigation links
        navLinks.forEach(navLink => navLink.classList.remove('active'));

        // Add the 'active' class to the clicked navigation link
        this.classList.add('active');

        // Get the target section ID from the href attribute
        const targetSectionId = this.getAttribute('href');

        // Scroll to the target section smoothly
        document.querySelector(targetSectionId).scrollIntoView({
            behavior: 'smooth'
        });

        // Prevent the default link behavior
        event.preventDefault();
    });
});

// Add scroll event listener to change active section
window.addEventListener('scroll', function () {
    // Get the current scroll position
    const currentScrollPos = window.pageYOffset;

    // Iterate over each section to find the active one
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if the current scroll position is within the section's boundaries
        if (currentScrollPos >= sectionTop && currentScrollPos < sectionTop + sectionHeight) {
            // Get the section ID
            const sectionId = '#' + section.id;

            // Remove the 'active' class from all navigation links
            navLinks.forEach(link => link.classList.remove('active'));

            // Find the corresponding navigation link and add the 'active' class
            const activeNavLink = document.querySelector(`.menu-bar a[href="${sectionId}"]`);
            if (activeNavLink) {
                activeNavLink.classList.add('active');
            }
        }
    });
});



// for dark and light mode
const toggle_btn = document.querySelector('#checkbox');
// console.log(toggle_btn);

toggle_btn.addEventListener('change' , () =>{
    if(toggle_btn.checked){
        console.log("toggle_btn checked");
        document.body.classList.add('dark-mode');
    }
    else{
        document.body.classList.remove('dark-mode');
    }
})
