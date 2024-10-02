// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Dynamic Content Loader for Workouts Section
const workoutLevels = {
    beginner: ['All Knee Pushup', 'Incline Pushup', 'Normal Push-up', 'Chin-ups', 'Standard Squat'],
    intermediate: ['Wide Arm Push-up', 'Decline Pushup', 'Pull-up', 'Pistol Squat', 'Bar Dips'],
    advanced: ['Handstand Push-ups', 'One-Arm Push-up', 'Muscle-Up', 'Front Lever', 'Dragon Flag']
};

function loadWorkouts(level) {
    const workoutList = document.querySelector(`.${level} ul`);
    workoutList.innerHTML = ''; // Clear current content
    workoutLevels[level].forEach(exercise => {
        const li = document.createElement('li');
        li.textContent = exercise;
        workoutList.appendChild(li);
    });
}

// Load all workout levels on page load
window.onload = function () {
    loadWorkouts('beginner');
    loadWorkouts('intermediate');
    loadWorkouts('advanced');
};

// Email Subscription Form Validation
const form = document.querySelector('footer form');
const emailInput = document.querySelector('input[type="email"]');
const button = document.querySelector('footer button');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission to allow validation
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
        alert('Subscription successful!'); // Display a success message
        emailInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid email address.');
    }
});

// Simple Email Validation Function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    return emailPattern.test(email);
}

// Scroll Back to Top Button (Optional Feature)
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fa-solid fa-circle-up fa-bounce fa-2xl"></i>';
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '80px';
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.padding = '10px';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.borderRadius = '50px';
scrollToTopBtn.style.color = '#00008B';
scrollToTopBtn.style.fontSize = '20px';
scrollToTopBtn.style.display = 'none';
scrollToTopBtn.style.cursor = 'pointer';
document.body.appendChild(scrollToTopBtn);

// Show the button when the user scrolls down
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll('.cta-btn');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Thank you for your interest! We will get back to you shortly.');
        });
    });
});
