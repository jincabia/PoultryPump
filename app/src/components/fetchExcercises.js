import axios from 'axios';

export async function fetchExercises(muscle) {
  if (muscle === '') return null;

  const options = {
    method: 'GET',
    url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
    params: { muscle: muscle },
    headers: {
      'X-RapidAPI-Key': 'e29d3286f0msh7d1b166b41ec7b9p1a5505jsn8a40d290bfa8',
      'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    // map excercises
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch exercises:', error);
    return null;
  }
}

export async function loadExercises(muscle, setExercises,setMuscles) {
  const newExercises = await fetchExercises(muscle);
  setExercises(newExercises);

  // console.log(newExercises);
}
