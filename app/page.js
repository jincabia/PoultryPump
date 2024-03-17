'use client'
import { useState, useEffect } from 'react';
import  {loadExercises} from './src/components/fetchExcercises';
import { Excercise } from './src/excercise/exercise';

export default function App() {
  const [exercises, setExercises] = useState([]);
  const [muscle, setMuscles] = useState("Abdominals")
  const [muscleName, setmuscleName] = useState ("");
  // const apiKey = 'e29d3286f0msh7d1b166b41ec7b9p1a5505jsn8a40d290bfa8';

  const changeMuscle = event =>
  {
    setMuscles(event.target.value);
  }


  const handleMuscleName = (muscle) =>
  {
    //capitalizing the first character 
    const newName = (muscle.charAt(0).toUpperCase() + muscle.slice(1)).replace('_', ' ');
    setmuscleName(newName);
  }

  

  const handleSubmit = event =>
  {
    event.preventDefault();

    // console.log(loadExercises);
    loadExercises(muscle,setExercises,setmuscleName);
    handleMuscleName(muscle);
    
    // setmuscleName(muscle);
    

  }
 
  return (
    <div>
      <h1>Fetch excercises</h1>
      <h3>Search for Excercises by muscle</h3>

      <form onSubmit={handleSubmit}>
      <select id="dropdown" className='text-black font-family: Arial m-4 p-4' onChange={changeMuscle}
        value={muscle}>
        <option className='font-family: Arial' disabled>Select a muscle group</option>
        <option value="abdominals" className='font-family: Arial'>Abdominals</option>
        <option value="abductors" className='font-family: Arial'>Abductors </option>
        <option value="adductors" className='font-family: Arial'>Adductors</option>
        <option value="biceps" className='font-family: Arial'>Biceps</option>
        <option value="calves" className='font-family: Arial'>Calves</option>
        <option value="chest" className='font-family: Arial'>Chest</option>
        <option value="forearms" className='font-family: Arial'>Forearms</option>
        <option value="glutes" className='font-family: Arial'>Glutes</option>
        <option value="hamstrings" className='font-family: Arial'>Hamstrings</option>
        <option value="lats" className='font-family: Arial'>Lats</option>
        <option value="lower_back" className='font-family: Arial'>Lower back</option>
        <option value="middle_back" className='font-family: Arial'>Middle back</option>
        <option value="neck" className='font-family: Arial'>Neck</option>
        <option value="quadriceps" className='font-family: Arial'>Quadriceps</option>
        <option value="traps" className='font-family: Arial'>Traps</option>
        <option value="triceps" className='font-family: Arial'>Triceps</option>

        
      </select>
        <button className='ml-4 py-3 px-20 bg-blue-500 text-white rounded hover:bg-blue-700'>
                                Search
                            </button>

                
      </form>
      

  

      {/* Display Exercises */}
      <div>
      {muscleName ? (
        <div>
          <h2>Exercises for {muscleName}</h2>
        </div>
      ) : (
        <div>
          <h2>Search for an exercise </h2>
        </div>
      )}


  { exercises == null ||exercises.length == 0 ? (
        <div>
        <h2>No exercises found </h2>
      </div>
        
      ) : (
        <div>
          {exercises.map((exercise, index) => (
          <Excercise name={exercise.name} id = {index} />
        ))}

          
        </div>
     
      )}
      </div>
    </div>
  );
}
