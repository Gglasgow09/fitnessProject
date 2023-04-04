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
    //<input type="checkbox" class="abdominals muscles-helper" 
    //id="abdominals"> <label for="abdominals">Abs</label>

    
    let muscleCheckbox = document.createElement('input')
    muscleCheckbox.type = 'checkbox'
    muscleCheckbox.className = `${ muscle } muscles-helper`
    muscleCheckbox.id = muscle
    muscleCheckbox.value = muscle
    muscleDiv.appendChild(muscleCheckbox)

    muscleCheckbox.addEventListener('input', () => {
        if (muscleCheckbox.checked) {
        displayWorkouts(muscle)
        }
    })
    
    
    let muscleLabel = document.createElement('label')
    muscleLabel.for = `${muscle}`
    muscleLabel.textContent = muscle
    muscleDiv.appendChild(muscleLabel)
}

function displayWorkouts(muscle) {
        console.log(muscle)
        const selectedMuscles = [];
        
        // Fetch the data using the updated apiUrl and filter the results
        fetchAllMuscleGroups(muscle)
}

// for the workout Div
// function showWorkoutInfo (muscle) {
//         //get the array to show up so we can append to the li
        
// }

muscleGroups.forEach(muscle => {
    renderMuscles(muscle)
    })
    


