'use client'
import { useState} from 'react';

export default function SetRow({number,delSet})
{
  //Name for 
    const [reps, setReps] = useState (0);
    const [weight, setWeight] = useState (0);
    const [numberID,setNumberID ] = useState(number)

    const changeWeight = event =>
    {
        setWeight(event.target.value);
        
    }

    const changeReps = event =>
    {
        // event.prevent.default;
        setReps(event.target.value);
    }

    return(
        <div className='grid auto-rows-auto grid-flow-col gap-4  pt-4 my-2 w-fit bg-slate-800 rounded'>

        {/* Weight  */}
        <div className='flex flex-row '>
        <p className='p-2 text-slate-500'>{numberID}</p>
        <h4 className='p-2'>Weight: </h4>
          <input
                            required
                            onChange={changeWeight}
                            value={weight}
                            className='text-black mb-4 w-1/2 h-10 rounded pl-4   '
                            type='number'
                        />
          </div>

          <div className='flex flex-row'>
        <h4 className='p-2'>Reps:</h4>
          <input
                            required
                            onChange={changeReps}
                            value={reps}
                            className='text-black mb-4 w-1/2 h-10 rounded pl-4   '
                            type='number'
                        />
      <button onClick={() => delSet(numberID)} className="bg-white text-black hover:bg-red-500 px-3  rounded m-auto ease-in-out duration-300 ">-</button>
          </div>
      



      </div>

    );
}