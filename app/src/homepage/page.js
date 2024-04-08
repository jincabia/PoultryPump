'use client'
import { useState, useEffect,useId } from 'react';
import { loadExercises } from '../components/exercise/fetchExcercises';
import Exercise from '../components/exercise/exercise';
import { useUserAuth } from "../_utils/auth-context"; // Imported useUserAuth custom hook
import { getWorkouts, addWorkout } from '../_services/poultry-pump-service'; // Imported getItems and addItem functions from shopping-list-service
import Header from '../components/headers/poultryHeader';
import PendingWorkoutForm from '../components/workout/pendingWorkoutForm';
import CompletedWorkout from '../components/workout/completedWorkout';




export default function Home() {

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


  const [workoutMsg,setWorkoutMsg] = useState('');

  const [errorMsg,setErrorMsg] = useState('');
  

  const addChosenExercise = (exercise) =>
  {

    setWorkoutMsg('');
    setErrorMsg('');
    if(!pendingWorkout.includes(exercise)) setPendingWorkout(prevExercises => [...prevExercises, exercise]);
    else console.log({exercise},'is already included');
  };

  const delChosenExercise = (exerciseToRemove) =>
  {
    const updatedChosen = pendingWorkout.filter(exercise=> exercise !== exerciseToRemove);
    setPendingWorkout(updatedChosen);
  }

  const createWorkout = async (workoutName, exercises,setWorkoutName) => {
    try {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString();

      if(exercises.length == 0)
      {

        setErrorMsg('Select at least one exercise');
        return;

      }
      
      // Create an object with workoutName as a property and exercises as its value
      if(workoutName =="")
      {
        workoutName = formattedDate;
      }
      const workoutData = { workoutName, exercises };
  
      // Call addItem with the user ID and the workout data object
      await addWorkout(user.uid, workoutData);
      
      console.log("Workout added successfully:", workoutData);

      setPendingWorkout([])
      setWorkoutName("");
      setWorkoutMsg("Workout Created Successfully")

      




    } catch (error) {
      console.error("Error adding workout:", error);
    }
  };
  
      // Function to fetch workouts from Firestore
    

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

      {/* <h1>{pendingWorkout}</h1> */}

      {/* <PendingWorkoutForm exercises={pendingWorkout} delChosen={delChosenExercise} submitWorkout={createWorkout}></PendingWorkoutForm> */}

      <h1 className='text-center  font-semibold text-3xl mb-4'>Create a workout</h1>
      <div className='flex justify-evenly'>
        


            <div className='w-auto  p-3 rounded-md' >
            <h3 className='text-xl font-bold'>Search for Exercises by muscle</h3>

              <div className='bg-gray-800 bg-opacity-80 rounded-md p-3'>

              <form >
                <select id="dropdown" className='text-black font-family: Arial m-4 p-4 rounded w-2/3' onChange={changeMuscle} value={muscle}>
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

            

        </div>

        <div className='w-auto'>
              <PendingWorkoutForm exercises={pendingWorkout} delChosen={delChosenExercise} submitWorkout={createWorkout}></PendingWorkoutForm>

              {workoutMsg && <div className='bg-gray-700 p-4 my-2 rounded'>
                <p className='font-semibold text-xl text-green-400'>{workoutMsg}</p>

              </div>}

              {errorMsg && <div className='bg-gray-700 p-4 my-2 rounded w-auto'>
                <p className='font-semibold text-xl text-red-400'>{errorMsg}</p>

              </div>}
              
              {/* errorMsg */}
          
        </div>
                    
            

      </div>

                      


    </div>
  );
}
