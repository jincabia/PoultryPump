import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Header() {
  return (
      <div className="w-screen flex  justify-between mb-10 mt-5 ">
  
        {/* Top left, name */}
        <div className="">
        
          {/* project name and logo*/}
          <div className="flex flex-row  justify-self-start">
            <Image className="m-0 pl-5" width={80} height={30} src={require('./armlogo.png')} alt="Dumbbell"/>
            <h1 className="font-semibold text-l p-6 " >Poultry Pump</h1> 
          </div>

        </div>

        {/* Middle div, Home search and create */}
        <div className="justify-self-center">
          <ul className='flex flex-row pt-6'>
            <li className='mx-5'> <Link href="/src/homepage">Home</Link></li>
            <li className='mx-5'>Browse Exercises</li>
            <li className='mx-5'> <Link href="/src/workoutpage">Workouts</Link> </li>
          </ul>
        </div>

        {/* Top right, Contact button */}
        <div className='justify-self-end'>
          <p className="p-6 pr-20">Contact Me</p>
        </div>

      </div>

  );
}
