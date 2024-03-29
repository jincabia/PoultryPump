'use client'
import Workoutinput from './workoutinput';



export default function Workout({ exercises,delExercise })
{
    return(
        <div>
            
            

            {exercises.map((exercise,index) =>
            <Workoutinput delExercise={delExercise} key={index} name={exercise}/>
            )
            
            }

        </div>
    );
}