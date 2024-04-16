'use client'
import { useState } from "react";

export default function ExerciseNoUser({ exercise, addChosen }) {

  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

 


   return (
     <div className="group m-4 p-4 text-gray-100 bg-gray-700 bg-opacity-80 rounded w-11/12 h-1/3  hover:bg-gray-600 cursor-pointer  " onClick={toggleExpand} >
      <div className="flex justify-between">

      <h1 className="font-bold text-xl flex ">{exercise.name}</h1>
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
      {/* https://tailwindui.com/components/application-ui/elements/dropdowns */}

      </div>
      
        
      {expanded &&
      // No more flex here
      (<div className="flex-col">
        <p className="my-4 text-sm text-gray-300">{exercise.instructions}</p>
        {/* <button onClick={() => addChosen(exercise)} className=" bg-green-600 hover:bg-green-400 px-3 pb-1 rounded  ease-in-out text-center duration-300 w-full">Add to Workout</button> */}
      </div>)
      }


     </div>
   );
 }
 