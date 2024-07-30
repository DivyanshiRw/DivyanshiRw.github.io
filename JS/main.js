// Contact Form
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    // const phoneField = document.getElementById('phone');
    const subjectField = document.getElementById('subject');
    const messageField = document.getElementById('message');
    const errorMessages = document.querySelectorAll('.error-txt');

    form.addEventListener('submit', function(event) {
        let valid = true;

        // Clear all previous error messages
        errorMessages.forEach(error => {
            error.style.display = 'none';
        });

        // Validate name field
        if (nameField.value.trim() === '') {
            nameField.nextElementSibling.style.display = 'block';
            valid = false;
        }

        // Validate email field
        if (emailField.value.trim() === '') {
            emailField.nextElementSibling.style.display = 'block';
            valid = false;
        } else if (!validateEmail(emailField.value.trim())) {
            emailField.nextElementSibling.textContent = 'Please enter a valid email address';
            emailField.nextElementSibling.style.display = 'block';
            valid = false;
        }

        // Validate phone field
        // if (phoneField.value.trim() === '') {
        //     phoneField.nextElementSibling.style.display = 'block';
        //     valid = false;
        // }

        // Validate subject field
        if (subjectField.value.trim() === '') {
            subjectField.nextElementSibling.style.display = 'block';
            valid = false;
        }

        // Validate message field
        if (messageField.value.trim() === '') {
            messageField.nextElementSibling.style.display = 'block';
            valid = false;
        }

        // If any field is invalid, prevent form submission
        if (!valid) {
            event.preventDefault();
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }

    // Add input event listeners to remove error messages when user starts typing
    const fields = [nameField, emailField, subjectField, messageField];
    fields.forEach(field => {
        field.addEventListener('input', function() {
            const errorText = field.nextElementSibling;
            if (errorText && errorText.classList.contains('error-txt')) {
                errorText.style.display = 'none';
            }
        });
    });
});


// Toggle Icon navbar @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let menuIcon= document.querySelector("#menu-icon")
let navbar= document.querySelector('.navbar')

menuIcon.onclick= ()=>{
    menuIcon.classList.toggle("fa-xmark")
    navbar.classList.toggle('active')
}

// Scroll section active link ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let sections= document.querySelectorAll('section')
let navlinks= document.querySelectorAll('header nav a')

window.onscroll= ()=>{
    sections.forEach(sec =>{
        let top= window.scrollY
        let offset= sec.offsetTop - 150
        let height= sec.offsetHeight
        let id= sec.getAttribute('id')

        if (top >= offset && top< offset+ height){
            navlinks.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    // Stick navbar~~~~~~~~~~~~~~~~~~~~~~~~
    let header= document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY> 100 )

    // remove toggle icon and navbar~~~~~~~~~
    menuIcon.classList.remove("fa-xmark")
    navbar.classList.remove('active')


}


// Typed JS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const typed= new Typed('.multiple-text', {
    strings: ['Software Developer', 'Web Developer', 'ML Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,

})