const apiUrl = `https://api.api-ninjas.com/`
const apiAbdominals = `https://api.api-ninjas.com/v1/exercises?muscle=abdominals`
const apiAbductors = `https://api.api-ninjas.com/v1/exercises?muscle=abductors`
const apiAdductors = `https://api.api-ninjas.com/v1/exercises?muscle=adductors`
const apiBiceps = `https://api.api-ninjas.com/v1/exercises?muscle=biceps`
const apiCalves = `https://api.api-ninjas.com/v1/exercises?muscle=calves`
const apiChest = `https://api.api-ninjas.com/v1/exercises?muscle=chest`
const apiForearms = `https://api.api-ninjas.com/v1/exercises?muscle=forearms`
const apiGlutes = `https://api.api-ninjas.com/v1/exercises?muscle=glutes`
const apiHamstrings = `https://api.api-ninjas.com/v1/exercises?muscle=hamstrings`
const apiLats = `https://api.api-ninjas.com/v1/exercises?muscle=lats`
const apiLowerBack = `https://api.api-ninjas.com/v1/exercises?muscle=lower_back`
const apiMiddleBack = `https://api.api-ninjas.com/v1/exercises?muscle=middle_back`
const apiNeck = `https://api.api-ninjas.com/v1/exercises?muscle=neck`
const apiQuadriceps = `https://api.api-ninjas.com/v1/exercises?muscle=quadriceps`
const apiTraps = `https://api.api-ninjas.com/v1/exercises?muscle=traps`
const apiTriceps = `https://api.api-ninjas.com/v1/exercises?muscle=triceps`


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

  fetch( apiAbdominals, {
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

  fetch( apiAdductors, {
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

  fetch( apiBiceps, {
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


  fetch( apiCalves, {
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

  fetch( apiChest, {
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

  fetch( apiForearms, {
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

  fetch( apiGlutes, {
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

  fetch( apiHamstrings, {
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

  fetch( apiLats, {
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

  fetch( apiLowerBack, {
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

  fetch( apiMiddleBack, {
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

  fetch( apiNeck, {
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

  fetch( apiQuadriceps, {
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

  fetch( apiTraps, {
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

  fetch( apiTriceps, {
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

