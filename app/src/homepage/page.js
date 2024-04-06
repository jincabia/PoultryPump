'use client'
import { useState, useEffect,useId } from 'react';
import { loadExercises } from '../components/exercise/fetchExcercises';
import Exercise from '../components/exercise/exercise';
import { useUserAuth } from "../_utils/auth-context"; // Imported useUserAuth custom hook
import { getWorkouts, addWorkout } from '../_services/poultry-pump-service'; // Imported getItems and addItem functions from shopping-list-service
import Header from '../components/headers/poultryHeader';
import PendingWorkoutForm from '../components/workout/pendingWorkoutForm';
import CompletedWorkout from '../components/workout/completedWorkout';




export default function App() {

  //TO DO

  /*
  Add a finsihed workout component.
  Adding, and getting things
  
  
  
  
  
  
  
  
  */ 

  const { user } = useUserAuth();
  // console.log(user);

  //List of all exercises
  const [exercises, setExercises] = useState([]);
  //Select option
  const [muscle, setMuscles] = useState("Abdominals")
  //Name for 
  const [muscleName, setmuscleName] = useState ("Abdominals");

  

  // const updatedExercises = exercises.filter(exercise => exercise !== exerciseToRemove);
  //Stuff for the workout part

  const [pendingWorkout,setPendingWorkout] = useState([]);

  const [plannedWorkouts,setPlannedWorkouts] = useState([]);

  const addChosenExercise = (exercise) =>
  {

    if(!pendingWorkout.includes(exercise)) setPendingWorkout(prevExercises => [...prevExercises, exercise]);
    else console.log({exercise},'is already included');


    // console.log(chosenExercises);
  };

  const delChosenExercise = (exerciseToRemove) =>
  {
    const updatedChosen = pendingWorkout.filter(exercise=> exercise !== exerciseToRemove);
    setPendingWorkout(updatedChosen);
    console.log(pendingWorkout);
  }

  const createWorkout = async (workoutName, exercises) => {
    try {
      // Create an object with workoutName as a property and exercises as its value
      const workoutData = { workoutName, exercises };
  
      // Call addItem with the user ID and the workout data object
      await addWorkout(user.uid, workoutData);
      
      console.log("Workout added successfully:", workoutData);
    } catch (error) {
      console.error("Error adding workout:", error);
    }
  };
  
      // Function to fetch workouts from Firestore
    const fetchWorkouts = async () => {
      try {
        // Fetch workouts using the getItems function
        const workoutsData = await getWorkouts(user.uid); // Assuming you have userId defined somewhere
        // setWorkouts(workoutsData); // Set the retrieved workouts in state
        setPlannedWorkouts(workoutsData)
        console.log(workoutsData)
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    // Call fetchWorkouts function to fetch workouts when the component mounts
    useEffect(() => {
      fetchWorkouts();
    }, []);



  //Functions for Exercises and show the exercises

  //When a user changes the select option
  const changeMuscle = event =>
  {
    setMuscles(event.target.value);
    loadExercises(event.target.value,setExercises,setmuscleName);
    handleMuscleName(event.target.value); 
  }


  //Format for the name
  const handleMuscleName = (muscle) =>
  {
    //capitalizing the first character 
    const newName = (muscle.charAt(0).toUpperCase() + muscle.slice(1)).replace('_', ' ');
    setmuscleName(newName);
    
  }

  // Display the first option of exercises
    useEffect(() =>
    {
      loadExercises(muscle,setExercises,setmuscleName);
    },[]);

 
  return (
    <div>

      

    {/* Component, displays the header */}
      <Header></Header>

        {plannedWorkouts.map((workout, index) => (
          <div key={index}>
            {console.log(workout)}
            <CompletedWorkout workoutName={workout.workoutName} exercises={workout.exercises}></CompletedWorkout>
          </div>
        ))}


      {/* <h1>{pendingWorkout}</h1> */}

      <PendingWorkoutForm exercises={pendingWorkout} delChosen={delChosenExercise} submitWorkout={createWorkout}></PendingWorkoutForm>

      <button className='bg-green-500 p-4 m-5' onClick={fetchWorkouts}>get data</button>

      <h3>Search for Exercises by muscle</h3>

      <form >
      <select id="dropdown" className='text-black font-family: Arial m-4 p-4 rounded' onChange={changeMuscle} value={muscle}>
  <option value="" disabled>Select a muscle group</option>
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
          {exercises.map((exercise,index) => (
          <Exercise addChosen={addChosenExercise} key={index} name={exercise.name} />
        ))}

        </div>
     
      )}
      </div>


    </div>
  );
}
