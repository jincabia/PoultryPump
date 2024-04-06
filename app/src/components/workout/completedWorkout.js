'use client'
import { useState } from "react";
export default function CompletedWorkout({workoutName,exercises})
{
   return(

    <div className="bg-slate-600 p-4">
        <h1 className="text-xl">{workoutName}</h1>
        {exercises.map((exerciseName,index) => (

        <div key={index} className="group my-2 p-4 text-white bg-slate-900 rounded w-1/2 h-1/3 hover:bg-slate-500 flex items-center cursor-pointer " >
        <h2 className="font-bold text-xl flex-grow mr-4">{exerciseName}</h2>


        </div>

        ))}
         <p>----------------------------------</p>
           

    </div>
   );
}