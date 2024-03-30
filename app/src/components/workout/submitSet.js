'use client'
import { useState} from 'react';

export default function SubmitSetRow({number,delSet,weight,reps})
{
  //Name for 
    
    return(
        <div className='grid auto-rows-auto grid-flow-col gap-4  pt-4 my-2 w-fit bg-slate-800 rounded'>

        {/* Weight  */}
        <div className='flex flex-row '>
        <p className='p-2 text-slate-500'>{numberID}</p>
        <h4 className='p-2'>Weight: </h4>
        <p   className='text-black mb-4 w-1/2 h-10 rounded pl-4'> 
        {weight}</p>
          </div>

          <div className='flex flex-row'>
        <h4 className='p-2'>Reps:</h4>
        <p className='text-black mb-4 w-1/2 h-10 rounded pl-4   '>{reps}</p>
          
      <button onClick={() => delSet(numberID)} className="bg-white h-10 mb-5 w-10 mx-5 text-black hover:bg-red-500 px-3  rounded m-auto ease-in-out duration-300 ">-</button>
          </div>
      



      </div>

    );
}