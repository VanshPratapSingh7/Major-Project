// login.js

document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tab-link');
    const authForms = document.querySelectorAll('.auth-form');

    // Switch between login and signup tabs
    tabLinks.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');

            // Remove active class from all tabs and forms
            tabLinks.forEach(t => t.classList.remove('active'));
            authForms.forEach(form => form.classList.remove('active'));

            // Add active class to the clicked tab and corresponding form
            tab.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Login Form Submission
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Basic validation
        if (!email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate login (replace with actual backend call)
        console.log('Logging in with:', { email, password });
        alert('Login successful!');
    });

    // Signup Form Submission
    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        // Basic validation
        if (!name || !email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate signup (replace with actual backend call)
        console.log('Signing up with:', { name, email, password });
        alert('Signup successful!');
    });
});