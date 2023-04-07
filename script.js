const apiUrl = `https://api.api-ninjas.com/v1/exercises?muscle=`
const workouts = []
const muscleDiv = document.getElementById('muscleGroupDiv')
const toggle = document.getElementById('toggle');
const workoutInfoDiv = document.getElementById('workout-details');
const myWorkoutList = document.getElementById('workout-list')

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
  fetch(apiUrl + muscle, {
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

// create image for muscles
function renderMuscles(muscle) {
let muscleContainer = document.createElement('div');
muscleContainer.style.width = 'auto';
muscleContainer.style.height = 'auto';
muscleContainer.style.textAlign = 'center';
muscleContainer.style.marginRight = '10px'; // add margin

let muscleLabel = document.createElement('label');
muscleLabel.for = `${muscle.name}`;
muscleLabel.textContent = muscle.name.charAt(0).toUpperCase() + muscle.name.slice(1);
muscleContainer.appendChild(muscleLabel);


let muscleImage = document.createElement('img');
muscleImage.src = muscle.url;
muscleImage.className = `${muscle.name} muscles-helper`;
muscleImage.alt = muscle.name;
muscleImage.setAttribute('list-panel', muscle.name);
muscleContainer.appendChild(muscleImage);


muscleDiv.appendChild(muscleContainer);

//event listener for when image is clicked
muscleImage.addEventListener('click', function () {
  // Uncheck all other images
  let clickImages = document.getElementsByClassName('muscles-helper');
  for (let i = 0; i < clickImages.length; i++) {
    let clickImage = clickImages[i];
    if (clickImage !== muscleImage) {
      clickImage.checked = false;
    }
  }
  //check selected image
  muscleImage.checked = true;
  displayWorkouts(muscle);
});

  

}

function displayToggleWorkouts() {
  let contentDiv = document.getElementById('list-panel');
  if (contentDiv.display === 'none') {
    //hide workout array
    contentDiv.style.display = 'block';
  } else {
    //show workout array
    contentDiv.style.display = 'none';
  }
}


function displayWorkouts() {

  const selectedMuscles = Array.from(document.getElementsByClassName('muscles-helper'))
    .filter(muscleImage => muscleImage.checked)
    .map(muscleImage => muscleImage.getAttribute('list-panel'));
    const muscleUrl = apiUrl + `${selectedMuscles.join(',')}`;

  //console.log(muscleUrl);

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
}

function renderWorkouts(workouts) {
  const listUl = document.getElementById('list');
  listUl.innerHTML = '';
  const checkboxes = [];

  workouts.forEach((workout) => {
    const workoutLi = document.createElement('li');
    const workoutCheckbox = document.createElement('input');
    workoutCheckbox.type = 'checkbox';
    workoutCheckbox.className = 'workout-helper';
    workoutCheckbox.id = workout.id;
    workoutCheckbox.value = workout.id;
    checkboxes.push(workoutCheckbox);
    workoutLi.appendChild(workoutCheckbox);

    const workoutLabel = document.createElement('label');
    workoutLabel.for = workout.id;
    workoutLabel.textContent = workout.name;
    workoutLi.appendChild(workoutLabel);

    listUl.appendChild(workoutLi);

    workoutCheckbox.addEventListener('change', function () {
      if (workoutCheckbox.checked) {
        checkboxes.forEach(function (otherCheckbox) {
          if (otherCheckbox !== workoutCheckbox) {
            otherCheckbox.checked = false;
          }
        });
        showSpecificWorkout(workout);
      } else {
        workoutInfoDiv.hidden = true;
        //workoutInfoDiv.innerHTML = '';
      }
    });
  });
}


// // shows workout information
function showWorkoutInfo(workoutCheckbox) {
  const workoutId = workoutCheckbox.muscle
  const workoutUrl = apiUrl + workoutId;
  
  fetch(workoutUrl, {
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
      console.log(result)
    })
    .catch(error => {
      console.error('There was a problem fetching the data:', error);
    });
  }

function showSpecificWorkout(workout) {
  //send workout information to DOM
  workoutInfoDiv.hidden = false
  const workoutName = document.getElementById("workout-name");
  workoutName.innerText = 'Workout Name' + ':' + workout.name.charAt(0).toUpperCase() + workout.name.slice(1);
  const workoutType = document.getElementById("type");
  workoutType.innerText = 'Type' + ':' + workout.type.charAt(0).toUpperCase() + workout.type.slice(1);
  const workoutMuscle = document.getElementById("muscle");
  workoutMuscle.innerText = 'Muscle' + ':' + workout.muscle.charAt(0).toUpperCase() + workout.muscle.slice(1);
  const workoutEquipment = document.getElementById("equipment");
  workoutEquipment.innerText = 'Equipment' + ':' + workout.equipment.charAt(0).toUpperCase() + workout.equipment.slice(1);
  const workoutDifficulty = document.getElementById("difficulty");
  workoutDifficulty.innerText = 'Difficulty' + ':' + workout.difficulty.charAt(0).toUpperCase() + workout.difficulty.slice(1);
  const workoutInstructions = document.getElementById("instructions");
  workoutInstructions.innerText = 'Instructions' + ':' + workout.instructions.charAt(0).toUpperCase() + workout.instructions.slice(1);
}

const newWorkoutForm = document.getElementById('workout-form');

newWorkoutForm.onsubmit = (event) => {
  console.log('i am clicked')
  event.preventDefault();

  const newWorkout = {
    'name': newWorkoutForm.name,
    'type': newWorkoutForm.type,
    'instructions': newWorkoutForm.instructions
  }

  let newWorkoutDiv = document.createElement('div');

  let newWorkoutName = document.createElement('h2');
  newWorkoutName.innerHTML = newWorkout.name.value;
  newWorkoutDiv.appendChild(newWorkoutName);

  let newWorkoutType = document.createElement('p');
  newWorkoutType.innerHTML = newWorkout.type;
  newWorkoutDiv.appendChild(newWorkoutType);

  let newWorkoutInstructions = document.createElement('p');
  newWorkoutInstructions.innerHTML = newWorkout.instructions.value;
  newWorkoutDiv.appendChild(newWorkoutInstructions);

  

  //add new workout to workout list
  myWorkoutList.appendChild(newWorkoutDiv);
  document.body.appendChild(myWorkoutList)

  newWorkoutForm.reset();
}
