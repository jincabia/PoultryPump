'use client'
import { useState} from 'react';

export default function SetRow({number,delSet,getRepsWeight})
{

  /**const item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
      }; */

  //Name for 
    const [reps, setReps] = useState (0);
    const [weight, setWeight] = useState (0);


    

    const changeWeight = event =>
    {
        // setWeight(event.target.value);
        // getRepsWeight(number,weight,reps);

        const newWeight = parseInt(event.target.value);
        setWeight(newWeight);
        getRepsWeight(number, newWeight, reps);
        
    }

    const changeReps = event =>
    {
        // // event.prevent.default;
        // setReps(event.target.value);
        // getRepsWeight(number,weight,reps);


        const newReps = parseInt(event.target.value);
        setReps(newReps);
        getRepsWeight(number, weight, newReps);
    }

    return(
        <div className='grid auto-rows-auto grid-flow-col gap-4  pt-4 my-2 w-fit bg-slate-800 rounded'>

        {/* Weight  */}
        <div className='flex flex-row '>
        <p className='p-2 text-slate-500'>{number}</p>
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
      <button onClick={() => delSet(number)} className="bg-white h-10 mb-5 w-10 mx-5 text-black hover:bg-red-500 px-3  rounded m-auto ease-in-out duration-300 ">-</button>
          </div>

      



      </div>

    );
}