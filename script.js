const apiUrl = `https://api.api-ninjas.com/v1/exercises?muscle=`
const muscleGroups = [
        'abdominals',
        'abductors',
        'adductors',
        'biceps',
        'calves',
        'chest',
        'forearms',
        'glutes',
        'hamstrings',
        'lats',
        'lower_back',
        'middle_back',
        'neck',
        'quadriceps',
        'traps',
        'triceps',
]

const toggle = document.getElementById('toggle');
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

const workouts =  []
const muscleDiv = document.getElementById('muscleGroupDiv')
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
  // create checkboxes for muscles
  let muscleDiv = document.getElementById('muscleGroupDiv');
  
  let muscleCheckbox = document.createElement('input');
  muscleCheckbox.type = 'checkbox';
  muscleCheckbox.className = `${muscle} muscles-helper`;
  muscleCheckbox.id = muscle;
  muscleCheckbox.value = muscle;
  muscleDiv.appendChild(muscleCheckbox);

  muscleCheckbox.addEventListener('change', function () {
    // Uncheck all other checkboxes
    let checkboxes = document.getElementsByClassName('muscles-helper');
    for (let i = 0; i < checkboxes.length; i++) {
      let checkbox = checkboxes[i];
      if (checkbox !== muscleCheckbox) {
        checkbox.checked = false;
      }
    }
    // if box is unchecked
    if (!muscleCheckbox.checked) {
      //clear workout array
      workouts.innerHTML = '';
      return
    }

    // Call displayWorkouts function here
    displayWorkouts();
  });

  let muscleLabel = document.createElement('label');
  muscleLabel.for = `${muscle}`;
  muscleLabel.textContent = muscle;
  muscleDiv.appendChild(muscleLabel);
}

function displayWorkouts() {
  const checkboxes = document.getElementsByClassName('muscles-helper');
  const selectedMuscles = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

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
}

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
muscleGroups.forEach(muscle => {
    renderMuscles(muscle)
    })
