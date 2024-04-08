import { useState } from "react";

export default function CompletedWorkout({ workoutName, exercises, deleteExercise, ID }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const toggleCollapse = () => {
    setExpanded(false);
  };

  return (
    <div className="p-4 bg-gray-800 bg-opacity-80 rounded">
      <div>
        <h1 className="text-xl">{workoutName}</h1>
        {expanded ? (
          exercises.map((exerciseName, index) => (
            <div key={index} className="group my-2 p-4 text-white bg-gray-700 bg-opacity-80 rounded w-auto hover:bg-slate-500 flex items-center cursor-pointer">
              <h2 className="font-semibold text-xl flex-grow mr-4">{exerciseName}</h2>
            </div>
          ))
        ) : (
          <div className="my-2 p-4 text-white bg-gray-700 bg-opacity-80 rounded w-auto hover:bg-slate-500 flex items-center cursor-pointer">
            <h2 className="font-bold text-xl flex-grow mr-4">{exercises[0]}</h2>
            {exercises.length>1 && <p className="text-gray-400">+ {exercises.length - 1} more</p>
}
          </div>
        )}
      </div>
      {expanded ? (
        <button className="text-slate-100 mt-2 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded" onClick={toggleCollapse}>
          Hide
        </button>
      ) : (
        <button className="text-slate-100 mt-2 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded" onClick={toggleExpand}>
          Show more
        </button>
      )}
      <button className="text-slate-100 mt-2 hover:bg-red-700 bg-red-500 px-3 py-1 rounded ml-3" onClick={() => deleteExercise(ID)}>
        Delete
      </button>
    </div>
  );
}
