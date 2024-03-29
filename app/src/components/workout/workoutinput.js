'use client'
import { useState} from 'react';
import SetRow from './set';


export default function Workoutinput({name,delExercise})
{
  const [counter, setCounter] = useState(1);

  const delSetRow = (numbToRemove) =>
  {
    
    //if no sets then remove the exercise
    if(numbToRemove==1 )
    {
      {delExercise(name)};
      return
    }

    setSetRows(setRows.filter((number) => number != numbToRemove));

    setCounter((prevCounter) => prevCounter - 1);
    
  }
      //List of all exercises
  const exerciseName = name;
  const [setRows, setSetRows] = useState([<SetRow number={counter} key={0} delSet={delSetRow} />]);
  

  const addSetRow = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    setSetRows([...setRows, <SetRow number={counter} key={setRows.length} delSet={delSetRow} />]);
   

    
  };


  

return(
    <div className="group px-4 py-2 text-white bg-slate-900 rounded w-1/3 cursor-pointer " >
      <h2 className="font-bold text-xl flex border-b-2 m-2 border-slate-700  ">{exerciseName}</h2>

      {setRows.map((setRow, index) => (
        <div  key={index}>{setRow}</div>
      ))}

      <button className='hover:bg-slate-500 w-fit' onClick={addSetRow}>Add a Set</button>

      

    </div>
);

}