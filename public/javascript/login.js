async function loginFormHandler(event) {

  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

    if (username !== "" && password !== "") { //if user's login credentials are valid, redirect the user to the home page

      if (username && password) { //if username and pw are valid, then stringify them and submit for login approval
        const response = await fetch('/api/users/login', {
          method: 'post',
          body: JSON.stringify({
            username,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
          document.location.replace('/'); //redirects user to home page upon successful login.
        } else {
          alert("Invalid login credentials, try again or sign up to make an account."); //alerts of invalid login
        }
      }

    } else {
      if (username === "" && password === "") {
        alert("Enter a username and password")
      } else if (username === "") {
        alert("Enter a username")
      } else if (password === "") {
        alert("Enter a password")
      } else {
      }
    }
}
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
