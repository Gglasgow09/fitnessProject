const apiUrl = `https://api.api-ninjas.com/v1/exercises?muscle=`
const workouts = []
const muscleDiv = document.getElementById('muscleGroupDiv')
const toggle = document.getElementById('toggle');
const workoutInfoDiv = document.getElementById('workout-details');

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
    //appends to workout list
    listUl.appendChild(workoutLi);
    workoutCheckbox.addEventListener('change', function () {
      if (workoutCheckbox.checked) {
        showSpecificWorkout(workout);
      } else {
        workoutInfoDiv.hidden = true
        //workoutInfoDiv.innerHTML = '';
      }
    });
  })
}

// // shows workout information
function showWorkoutInfo(workoutCheckbox) {
  const workoutId = workoutCheckbox.muscle
  const workoutUrl = apiUrl + workoutId;
  console.log(workoutUrl)
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

// const newWorkout = document.getElementById('workout-list')
// const filterWorkout = document.querySelector("#filter-type")

// const handleDB = () => {
//   fetch("http://localhost:3000/exercises/")
//   .then(res => res.json())
//   .then(data => {
//     newWorkout.innerHTML = ""
//   data.sort((a,b) => b.likes - a.likes)
//   data.forEach(element => renderData(element))
//   filterJokes.onchange = (e) => {
//       if (e.target.value === "") {
//           divJokes.innerHTML = ""
//           data.forEach(el => renderData(el))
//       } else {
//           divJokes.innerHTML = ""
//           data.filter(item => item.category === e.target.value).forEach(item => {renderData(item)})
//       }
//   }
//   })
// }
// // creates a delete button

// const deleteBtn = document.createElement('button')
//     deleteBtn.className = "deleteBtn"
//     deleteBtn.innerText = "Delete"
//     deleteBtn.addEventListener('click', () => {
//         fetch(`http://localhost:3000/exercises/${element.id}`, {method: "DELETE"})
//         .then(res => res.json())
//         .then(data =>{ divJokesContent.remove()
//         handleDB()
//         })
//     })


// //submit form
// const submitWorkoutForm = document.getElementById('workout-form')

// submitWorkoutForm.addEventListener('submit', (e) => {
//   e.preventDefault()
//   const selectName = document.getElementById('workout-form-name')
//   // const selectType = document.getElementById('workout-form-type')
//   // const selectInstructions = document.getElementById('workout-form-instruction')
//   if (selectName.value === "") {
//     alert("Please select a Name")
// } else {
//     const newSubmitObj = {
//         jokes: e.target.name.value,
//         category: selectName.value,
//         likes: '0'
//     }
//     fetch('http://localhost:3000/exercises/', {
//     method: "POST",
//     headers: {
//     'Content-type':'application/json',
//         },
//     body:JSON.stringify(newSubmitObj)
//     })
//     .then(res => res.json())
//     .then(data => handleDB())
//     submitWorkoutForm.reset()
// }  
// })


