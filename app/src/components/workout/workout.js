'use client'
import Workoutinput from './workoutinput';
import FinishWorkout from './finishWorkout';



export default function Workout({ exercises,delExercise,finWorkout })
{

    
// const handleFin = ({ exerciseName, rows, sets }) => {
//     //Transfer it to hardcoded values no editing and a completed workout
//     console.log("Exercise Name:", exerciseName);
//     console.log("Rows:", rows);
//     console.log("Sets:", sets);
// };


    return(
        <div>
            
            

            {exercises.map((exercise,index) =>
            <Workoutinput delExercise={delExercise} key={index} name={exercise} finWorkout={finWorkout}/>
            )
            }

                


        </div>
    );
}