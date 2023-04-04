const apiUrl = `https://api.api-ninjas.com/`

fetch( apiUrl, {
    method: 'GET',
    headers: {
        'content-type': 'application/json',
        'X-Api-Key': apiKey
    }
})
.then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });
