// const login = async (event) => {
//     event.preventDefault();

//     const email = document.getElementById('#email').value.trim();
//     const password = document.getElementById('#password').value.trim();

//     if (email && password) {
//         const response = await fetch('/api/users/login', {
//             method: 'POST',
//             body: JSON.stringify({ email, password }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             document.location.href = '/';
//         } else {
//             alert('Failed to log in.');
//         }
//     }
// };

// const signupFormHandler = async (event) => {
//     event.preventDefault();

//     const username = document.getElementById('#name').value.trim();
//     const email = document.getElementById('#email').value.trim();
//     const password = document.getElementById('#password').value.trim();

//     if (username && email && password) {
//         const response = await fetch('/api/users/register', {
//             method: 'POST',
//             body: JSON.stringify({ username, email, password }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             alert('Welcome!')
//             document.location.href('/');
//         } else {
//             alert('Failed to sign up.');
//         }
//     }
// };

// document
//     .querySelector('.login-form')
//     .addEventListener('submit', loginFormHandler);

// document
//     .querySelector('.signup-form')
//     .addEventListener('submit', signupFormHandler);
