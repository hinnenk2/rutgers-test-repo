async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    const contents = document.querySelector('textarea[name="post-contents"]').value.trim();

    if (title !== "" && contents !== "") {    //if the comment to be editted already exits (has title and contents) then proceed with editting
        const response = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            title,
            contents
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          document.location.replace('/dashboard/'); //redirects user to dashboard to confirm that comment was updated
        } else {
          alert(response.statusText); //no message needed
        }
    } else {
        if (title === "" && contents === "") {    //alerts user to update comment by populating the appropriate fields
          alert("Enter a title and description")
        } else if (title === "") {
          alert("Enter a title")
        } else if (contents === "") {
          alert("Enter a description")
        } else {
        }
    }
}

  document.querySelector('.editpost-form').addEventListener('submit', editFormHandler);
  