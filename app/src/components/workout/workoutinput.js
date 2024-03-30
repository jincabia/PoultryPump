'use client'
import { useState} from 'react';
import SetRow from './set';


export default function Workoutinput({name,delExercise,finWorkout})
{
  const [counter, setCounter] = useState(1);
  //this means 1 for the first
  const [setRows, setSetRows] = useState([counter]);

  // have a data like rep: {} weight: {}
  // have an array of items like this, and for every update onto the set weight and reps we remove it using the filter thing and then add it again with updated vals
  /**const item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
      }; */

  const [setData,setSetData] = useState([]);


  const handleFin = () =>
  {
    //function to get the setrows 
    finWorkout(name,counter, /*weight and reps from sets lol */)
  }

  const getSets = (number,weight,reps) =>
  {
    // setSetData(setData.filter(() => number !== setRows.length));
    const filteredData = setData.filter((item) => item.number !== number);
    const newSetInfo = {
      number: number,
      weight: weight,
      reps: reps
    }
    setSetData(setData)
    setSetData([...filteredData, newSetInfo]);  }

  const delSetRow = () =>
  {
    //if no sets then remove the exercise
    if(setRows.length==1 )
    {
      {delExercise(name)};
      return
    }
    
    

    setSetRows(setRows.filter((number) => number !== setRows.length));

    setCounter((prevCounter) => prevCounter - 1);
    
  }
      //List of all exercises
  const exerciseName = name;
  // const [setRows, setSetRows] = useState([<SetRow number={counter} key={0} delSet={delSetRow} />]);
  

  const addSetRow = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    // setSetRows([...setRows, <SetRow number={newCounter} key={setRows.length} delSet={delSetRow} />]);
      setSetRows([...setRows, newCounter]);
   

    
  };


  

return(
    <div className="group px-4 py-2 text-white bg-slate-900 rounded w-1/3 cursor-pointer " >
      <h2 className="font-bold text-xl flex border-b-2 m-2 border-slate-700  ">{exerciseName}</h2>

      {setRows.map((row) => (
        <SetRow number={row} key={row} delSet={delSetRow} getRepsWeight={getSets} />
      ))}
      <div className='flex justify-start align-middle'>

        <button className=' border-2 border-slate-700 text-slate-300 p-2 hover:bg-slate-600 w-fit rounded' onClick={addSetRow}>Add Set</button>

      </div>

      <button className='bg-red-500' onClick={()=>console.log(setData)}>Testing for working set data</button>

      {/* CHANGE TO JUSTIFY CENTER FOR LATER */}
      <div className='flex justify-start align-middle border-2 border-black rounded w-fit m-2 p-2 bg-green-700 hover:bg-green-500'>
      <button onClick={() => finWorkout({ exerciseName: name, rows: counter, sets: setData })}>Finish Workout</button>            </div>

      

    </div>
);

}