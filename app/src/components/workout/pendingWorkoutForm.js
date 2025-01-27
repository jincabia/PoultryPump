'use client'
import { useState } from "react"
import ChosenExercise from "../exercise/chosenExercise";

export default function PendingWorkoutForm({exercises,delChosen,submitWorkout})
{
    //these exercises are chosen
    //then it sends these to a handler to submit it into firebase

    const [workoutName,setWorkoutName] = useState("")

    const handleWorkoutNameChange = (event) =>
    {
        setWorkoutName(event.target.value);
    }


    const listExercises = exercises.map((exercise,index) => <ChosenExercise key={index} delChosen={delChosen} exercise={exercise}></ChosenExercise>)

    return(
        <div className="m-4 text-center">
          <h1 className="text-xl font-bold">Create a Workout</h1>
            <div className="bg-gray-800 bg-opacity-80 rounded-md p-4 m-0  w-full p-1/2">
                <input
                required
                className="text-gray-300/100 font-semibold rounded-sm p-4 w-max bg-transparent border-b-grey-500 border-b-2 focus:outline-none text-center focus:text-white" 
                placeholder="Name for workout"
                value={workoutName}
                onChange={handleWorkoutNameChange}
                />
                {exercises == 0 ?
                
                (<div>
                  <h1 className="p-2 text-gray-500 font-bold">Add an exercise to the workout.</h1>
                  <h1 className="p-2 text-gray-500 font-bold">Click on an exercise to get started</h1>


                  </div>):
                (<div>
                    {listExercises}
                </div>)}

                <button onClick={() => submitWorkout(workoutName,exercises,setWorkoutName)} className="bg-green-600 p-2 rounded ease-in-out duration-300 hover:bg-green-7
                400">Create workout</button>
            </div>
            
            


            {/* { exercises == null ||exercises.length == 0 ? (
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
  ); */}



















            




        </div>
    );
    



}