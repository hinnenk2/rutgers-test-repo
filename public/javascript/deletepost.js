async function deleteFormHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');  //redirects user to dashboard to confirm that their comment was deleted.
    } else {
      alert(response.statusText);   //no alert needed
    }
  }
  
  document.querySelector('.deletepost-btn').addEventListener('click', deleteFormHandler);
  