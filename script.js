const apiUrl = `https://api.api-ninjas.com/v1/exercises?muscle=`
const apiAbdominals = apiUrl +`abdominals`
const apiAbductors =  apiUrl +`abductors`
const apiAdductors = apiUrl + `adductors`
const apiBiceps = apiUrl + `biceps`
const apiCalves = apiUrl + `calves`
const apiChest = apiUrl + `chest`
const apiForearms = apiUrl +`forearms`
const apiGlutes = apiUrl +  `glutes`
const apiHamstrings = apiUrl + `hamstrings`
const apiLats = apiUrl + `lats`
const apiLowerBack = apiUrl + `lower_back`
const apiMiddleBack = apiUrl + `middle_back`
const apiNeck = apiUrl + `neck`
const apiQuadriceps = apiUrl + `quadriceps`
const apiTraps = apiUrl + `traps`
const apiTriceps = apiUrl + `triceps`


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

