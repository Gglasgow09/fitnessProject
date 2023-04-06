const apiUrl = `https://api.api-ninjas.com/v1/exercises?muscle=`
const workouts =  []
const muscleDiv = document.getElementById('muscleGroupDiv')
const toggle = document.getElementById('toggle');

//light and dark mode
toggle.addEventListener('click', (e) => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.textContent = 'Dark mode';
    } else {
        html.classList.add('dark');
        e.target.textContent = 'Light mode';
    }
});

//renders all muscles
muscleGroups.forEach(muscle => {
  renderMuscles(muscle)
})


function fetchAllMuscleGroups(muscle) {
    fetch(apiUrl + muscle , {
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
}

function renderMuscles(muscle) {
  
  // create image for muscles
  let muscleImage = document.createElement('img');
  muscleImage.src = muscle.url;
  muscleImage.className = `${muscle.name} muscles-helper`;
  muscleImage.alt = muscle.name;
  muscleDiv.appendChild(muscleImage);

  


  //set size of images
  muscleImage.style.width = '100px'
  muscleImage.style.height = '100px'
  
  muscleImage.addEventListener('click', function () {
    // Uncheck all other images
    let clickImages = document.getElementsByClassName('muscles-helper');
    for (let i = 0; i < checkboxes.length; i++) {
      let clickImage = clickImages[i];
      if (clickImage !== muscleImage) {
        clickImage.checked = false;
      }
    }
    displayWorkouts();
  });

  let muscleLabel = document.createElement('label');
  muscleLabel.for = `${muscle.name}`;
  muscleLabel.textContent = muscle.name.charAt(0).toUpperCase() + muscle.name.slice(1);
  muscleDiv.appendChild(muscleLabel);
}


function displayToggleWorkouts() {
  let contentDiv = document.getElementById('list-panel');
  if (contentDiv.display === 'none') {
    //hide workout array
    contentDiv.style.display = 'block';
  } else {
    //show workout array
    contentDiv.style.display = 'none';
  }}
  
function displayWorkouts() {

  const selectedMuscles = Array.from(document.getElementsByClassName('muscles-helper'))
  .filter(muscleImage => muscleImage.checked)
  .map(muscleImage => muscleImage.getAttribute('list-panel'));

  const muscleUrl = apiUrl + `${selectedMuscles.join(',')}`;
  fetch(muscleUrl, {
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
      renderWorkouts(result);
    })
    .catch(error => {
      console.error('There was a problem fetching the data:', error);
    });

    displayToggleWorkouts()
}



function renderWorkouts(workouts) {
  const listUl = document.getElementById('list')
  listUl.innerHTML = ''
  workouts.forEach((workout) => {
    const workoutLi = document.createElement('li')
    const workoutCheckbox = document.createElement('input');
    workoutCheckbox.type = 'checkbox';
    workoutCheckbox.className = `workout-helper`;
    workoutCheckbox.id = workout.id;
    workoutCheckbox.value = workout.id;
    workoutLi.appendChild(workoutCheckbox);
    
    const workoutLabel = document.createElement('label');
    workoutLabel.for = `${workout.id}`;
    workoutLabel.textContent = workout.name;
    workoutLi.appendChild(workoutLabel);
    
    listUl.appendChild(workoutLi);
    
    workoutCheckbox.addEventListener('change', function () {
      if (workoutCheckbox.checked) {
        displayWorkoutInfo(workout.id);
      } else {
        const workoutInfoDiv = document.getElementById('workout-info');
        workoutInfoDiv.innerHTML = '';
      }
    });
  })
}


// for the workout Div
// function showWorkoutInfo (muscle) {
  //         //get the array to show up so we can append to the li
  // }

  
  // function displayWorkoutInfo(muscle) {
  //   const workoutId = muscle.target.value;
  
  //   // Get the workout from the workouts array using its ID
  //   const workout = workouts.find((workout) => workout.id === workoutId);
  
  //   // Get the workout details from the API using the workout's name
  //   fetch(muscleUrl, {
  //     method: 'GET',
  //     headers: {
  //       'content-type': 'application/json',
  //       'X-Api-Key': apiKey
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then(result => {
  //       // Update the workout details on the page
  //       const detailImage = document.getElementById("detail-image");
  //       // detailImage.src = workout.image;
  //       //
  //       const workoutName = document.getElementById("workout-name");
  //       workoutName.innerText = workout.name;
  //       const workoutType = document.getElementById("type");
  //       workoutType.innerText = workout.type;
  //       const workoutMuscle = document.getElementById("muscle");
  //       workoutMuscle.innerText = workout.muscle;
  //       const workoutEquipment = document.getElementById("equipment");
  //       workoutEquipment.innerText = workout.equipment;
  //       const workoutDifficulty = document.getElementById("difficulty");
  //       workoutDifficulty.innerText = workout.difficulty;
  //       const workoutInstructions = document.getElementById("instructions");
  //       workoutInstructions.innerText = workout.instructions;
  //     })
  //     .catch((error) => console.error(error));
  // }