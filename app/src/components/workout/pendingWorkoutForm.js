'use client'
import { useState } from "react"
import ChosenExercise from "../exercise/chosenExercise";

export default function PendingWorkoutForm({exercises,delChosen})
{
    //these exercises are chosen
    //then it sends these to a handler to submit it into firebase

    const [workoutName,setWorkoutName] = useState("")

    const handleWorkoutNameChange = (event) =>
    {
        setWorkoutName(event.target.value);
    }


    const listExercises = exercises.map((exercise,index) => <ChosenExercise key={index} delChosen={delChosen} name={exercise}></ChosenExercise>)

    return(
        <div>
            <div className="bg-slate-700 p-4 m-0  w-1/2 p-1/2">
                <input
                required
                className="text-gray-500 rounded-sm p-4 w-max bg-transparent border-b-grey-500 border-b-2 focus:outline-none  focus:text-white" 
                placeholder="Name for workout"
                value={workoutName}
                onChange={handleWorkoutNameChange}
                />
                {exercises == 0 ?
                (<h1>Click an exercise to add it to a workout.</h1>):
                (<div>
                    {listExercises}
                </div>)}

                <button className="bg-green-400 p-2 rounded ease-in-out duration-300 hover:bg-green-700">Create workout</button>

                
               

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

















            <p>-----------------</p>


            




        </div>
    );
    



}