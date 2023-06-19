async function logout(event) {
  event.preventDefault();
  
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      alert("Logging out...")

      document.location.replace('/');   //redirects user to home page after successful logout
    } else {
      alert("You are logged out")
    }
  }
  
  document.querySelector('#logout').addEventListener('click', logout);