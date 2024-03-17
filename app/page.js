'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import  {loadExercises} from './src/components/fetchExcercises';

export default function App() {
  const [exercises, setExercises] = useState([]);
  const [muscle, setMuscles] = useState("")
  const [muscleName, setmuscleName] = useState ("");
  const apiKey = 'e29d3286f0msh7d1b166b41ec7b9p1a5505jsn8a40d290bfa8';

  const changeMuscle = event =>
  {
    setMuscles(event.target.value);

  }

  const handleSubmit = event =>
  {
    event.preventDefault();

    console.log(loadExercises);

    // setExercises([])
    // setExercises();
    setMuscles(loadExercises(muscle,setExercises,setmuscleName));
    setMuscles("");



  }

  



 

  return (
    <div>
      <h1>Fetch excercises</h1>
      <h3>Search for Excercises by muscle</h3>
      <form onSubmit={handleSubmit}>
      <input
        onChange={changeMuscle}
        value={muscle}
        className='text-black mb-4 w-max p-4'
        placeholder='Search by muscle'
         />


        <button className='ml-4 py-3 px-20 bg-blue-500 text-white rounded hover:bg-blue-700'>
                                Search
                            </button>

                
      </form>
      

      {/* Search Exercise */}
      {/* Code for search input and functionality can go here */}

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


  {exercises.length == 0 ? (
        <div>
        <h2>No exercises found </h2>
      </div>
        
      ) : (
        <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise.name}</li>
        ))}
      </ul>
      )}
        
        {/* <ul>
          {exercises.map((exercise, index) => (
            <li key={index}>{exercise.name}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}
