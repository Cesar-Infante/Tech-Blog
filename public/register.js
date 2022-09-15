const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#register-name').value.trim();
    const email = document.querySelector('#register-email').value.trim();
    const password = document.querySelector('#register-password').value.trim();
    const confirmPassword = document.querySelector('#confirm-password').value.trim();

    if (!username) {
        return swal({
            title: "Error!",
            text: "Missing Username!",
            icon: "error",
            button: "Try Again"
        });
    } else if (!email) {
        return swal({
            title: "Error!",
            text: "Missing Email!",
            icon: "error",
            button: "Try Again"
        });
    } else if (!password) {
        return swal({
            title: "Error!",
            text: "Missing Password!",
            icon: "error",
            button: "Try Again"
        });
    } else if (!confirmPassword) {
        return swal({
            title: "Error!",
            text: "Please confirm your password!",
            icon: "error",
            button: "Try Again"
        });
    } else if (password !== confirmPassword) {
        return swal({
            title: "Error!",
            text: "Password did not match!",
            icon: "error",
            button: "Try Again"
        });
    }

    if (username && email && password) {
        const response = await fetch('/api/users/register', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            return swal({
                title: "Error!",
                text: "Failed to sign up",
                icon: "error",
                button: "Please Try Again"
            });
        }
    }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);