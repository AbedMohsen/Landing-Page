/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build the navigation bar

function navigation(){
    sections.forEach(function (section) { // Loop over sections
        const createList = document.createElement('li');  // Create li elements in the navbar
        createList.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;  // Add HTML to list
        document.querySelector('#navbar__list').appendChild(createList);  // Add li elements to the ul parent
        anchorScroll(createList, section);  // Add scroll behavior to anchor sections
        });
        function anchorScroll(createList, section){  // Scroll behavior function declaration
            createList.addEventListener('click', function(scroll){  // Click individual section to scroll
                scroll.preventDefault();  // Prevent the default click handling
                window.scrollTo({
                    top: section.offsetTop,  // Scroll to the top of each section
                    behavior:"smooth"  // Smooth scrolling
                });
            });
        }        
    document.querySelector('.navbar__menu').appendChild(document.querySelector('#navbar__list'));  // Add the ul to the nav bar
}

navigation();  // Invoke the function


// Add class 'active' to section when near top of viewport

function active(){
    const activeSection = document.querySelectorAll(".menu__link");  // Select all "menu__link" classes
    sections.forEach(function (section, i) {  // Loop over sections
        const viewport = section.getBoundingClientRect();  // Provide information about the size of an element and its position relative to the viewport
        if (viewport.top <= 680 && viewport.bottom >= 300) {  // Check if the section is in viewport or not according to top and bottom
            section.classList.add("your-active-class");  // Add 'your-active-class' if it's in view/focus
        } else {
            section.classList.remove("your-active-class");  // Remove 'your-active-class' if it's not in view/focus
        }
    })
}

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

document.addEventListener('scroll', function() {
    active();
});  // Listen for a scroll to invoke
