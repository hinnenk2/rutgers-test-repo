async function signupFormHandler(event) {
  event.preventDefault();
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username !== "" && password !== "") {   //if username and pw are populated
    
  if (username && password) {           //if username and pw are valid
      const response = await fetch('/api/users', {    //access userroute
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
          document.location.replace('/');   //redirects user to homepage upon successful signup
      } else {
          alert(response.statusText);
      }
    }
    
  } else {
    if (username === "" && password === "") {   //alerts user if username and/or pw fields are left empty during signup
      alert("Enter a username and password")
    } else if (username === "") {
      alert("Enter a username")
    } else if (password === "") {
      alert("Enter a password")
    } else {
    }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);