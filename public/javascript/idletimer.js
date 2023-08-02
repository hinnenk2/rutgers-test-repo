function idleLogout() {
    let timer;
    window.onload = resetTimer;     //user stays logged in based on event activity
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer;      
    window.onclick = resetTimer;      
    window.onkeydown = resetTimer;   
    window.addEventListener('scroll', resetTimer, true); //keeps user logged in as long as they show activity (scrolling, clicking, typing)
  
    async function logout() {
        alert("Idle activity for 10 minutes, logging out...") //alerts user of logout due to inactivity

        const response = await fetch('/api/users/logout', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
          });
        
          if (response.ok) {
            alert("Logging out...")
            document.location.replace('/'); //redirects user to Home page after logout
          } else {
            alert("You have already been logged out")
          }
    }
  
    function resetTimer() {
        clearTimeout(timer);
        timer = setTimeout(logout, 600000);  // will automatically log out in 10 minutes (600,000 milliseconds)
    }
  }
  
  idleLogout();