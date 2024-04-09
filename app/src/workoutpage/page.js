'use client'
import { useState, useEffect,useId } from 'react';
import { loadExercises } from '../components/exercise/fetchExcercises';
import Exercise from '../components/exercise/exercise';
import { useUserAuth } from "../_utils/auth-context"; // Imported useUserAuth custom hook
import { getWorkouts, addWorkout, deleteWorkout } from '../_services/poultry-pump-service'; // Imported getItems and addItem functions from shopping-list-service
import Header from '../components/headers/poultryHeader';
import PendingWorkoutForm from '../components/workout/pendingWorkoutForm';
import CompletedWorkout from '../components/workout/completedWorkout';
import Link from 'next/link';




export default function CreateWorkout()
{

    const { user, gitHubSignIn} = useUserAuth();
    const [pendingWorkout,setPendingWorkout] = useState([]);
    const [plannedWorkouts,setPlannedWorkouts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignIn = () =>
    {
      gitHubSignIn();
    }



        // Function to fetch workouts from Firestore
        const fetchWorkouts = async () => {
          setLoading(true);
            try {
              
              // Fetch workouts using the getItems function
              const workoutsData = await getWorkouts(user.uid); // Assuming you have userId defined somewhere
              // setWorkouts(workoutsData); // Set the retrieved workouts in state
              setPlannedWorkouts(workoutsData)
              
            } catch (error) {
              console.error("Error fetching workouts:", error);
            }finally {
              setLoading(false);
          }
          };
      
          // Call fetchWorkouts function to fetch workouts when the component mounts
          useEffect(() => {
            if (user) {
              // Fetch workouts only if the user is signed in
              fetchWorkouts();
            } else {
              // If user signs out, reset the plannedWorkouts state to an empty array
              setPlannedWorkouts([]);
            }
          }, [user]);
          


          

          const handleDeleteWorkout = async (workoutId) => {
            setLoading(true);
            try {
                await deleteWorkout(user.uid, workoutId);
                // After successful deletion, fetch the updated list of workouts
                fetchWorkouts();
                setSuccessMessage('Workout deleted successfully');
                console.log("Workout deleted successfully!");
            } catch (error) {
                console.error("Error deleting workout:", error);
            }finally {
              setLoading(false);
          }
        };
          // console.log(user);

          return (
            <main>
                <Header />
                <div className='w-1/2 m-auto'>
                    <h1 className='text-3xl font-semibold text-center mb-4'>Your Workouts</h1>


                </div>
                {loading && <p>Loading...</p>}
                {successMessage && <p className="text-green-600 font-bold  text-center">{successMessage}</p>}
                {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                {plannedWorkouts.length > 0 && <div className=' justify-center grid grid-cols-3 px-10 gap-4'>
                    {/* Show all the Workouts then at the bottom add workouts */}
                    {plannedWorkouts.map((workout, index) => (
                        <div key={index} className="mt-0 ml-0 ">
                            {/* Add mt-0 and ml-0 classes to remove any top and left margin */}
                            <CompletedWorkout workoutName={workout.workoutName} exercises={workout.exercises} deleteExercise={handleDeleteWorkout} ID={workout.id}></CompletedWorkout>
                            {/* <button className="text-slate-100 mt-2 hover:bg-red-700  bg-red-500 px-3 pb-1 rounded ml-5 ease-in-out duration-300 " onClick={() => handleDeleteWorkout(workout.id)}>
                            Delete
                        </button> */}
                        </div>
                    ))}
                </div>}
                {!user && <div className='w-1/2 m-auto flex justify-center'>
                  <button className='text-center
                   text-white
                    bg-green-400 
                    p-2 
                    rounded 
                    ease-in-out 
                    duration-300
                     hover:bg-green-800'
                     onClick={handleSignIn} >Sign in to Create a Workout</button>
                  {/* className="text-slate-900  group-hover:text-white group-hover:bg-green-400 px-3 pb-1 rounded ml-auto ease-in-out duration-300 " */}

                </div>}
                
                
            </main>
        );
          
      

}