async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const contents = document.querySelector('textarea[name="post-contents"]').value.trim();

    if (title !== "" && contents !== "") {    //opens the post-route and posts the comment if the titel and content fields have been populated by the user
  
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          contents
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        document.location.replace('/dashboard');  //redirects user to the dashboard after posting a comment
      } else {
        alert(response.statusText);
      }
    } else {

      if (title === "" && contents === "") {      //alerts a message to the user if title and contents are empty
        alert("Enter a title and description")
      } else if (title === "") {
        alert("Enter a title")
      } else if (contents === "") {
        alert("Enter a description")
      } else {
      } 
  }
}

  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  