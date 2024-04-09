'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUserAuth } from '../../_utils/auth-context';


export default function Header() {

  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignOut = () =>
    {
        firebaseSignOut();
    }

    const handleSignIn = () =>
    {
      gitHubSignIn();
    }



  return (
      <div className="w-screen flex  justify-between mb-10 mt-5 ">


      {/* {user && <p>{user.email}</p>} */}
        {/* Top left, name */}
        <div className="">
        
          {/* project name and logo*/}
          <div className="flex flex-row  justify-self-start">
            <Image className="m-0 pl-5" width={80} height={30} src={require('./armlogo.png')} alt="Dumbbell"/>
            <h1 className="font-semibold text-l p-6 " ><Link href="/src/homepage">Poultry Pump</Link></h1> 
          </div>

        </div>

        {/* Middle div, Home search and create */}
        <div className="justify-self-center">
          <ul className='flex flex-row pt-6'>
            <li className='mx-5 hover:text-blue-500 ease-in-out duration-300 hover:underline-offset-2 hover:underline'> <Link href="/src/homepage">Home</Link></li>
            <li className='mx-5 hover:text-blue-500 ease-in-out duration-300 hover:underline-offset-2 hover:underline'><Link href="/">Browse Exercises</Link></li>
            <li className='mx-5 hover:text-blue-500 ease-in-out duration-300 hover:underline-offset-2 hover:underline'> <Link href="/src/workoutpage">Workouts</Link> </li>
          </ul>
        </div>

        <div className='justify-self-end'>
          {!user &&           
          <button 
          onClick={handleSignIn}
           className='my-6 mr-20 hover:text-red-500 ease-in-out duration-300 hover:underline-offset-2 hover:underline'>
            Sign In
            </button>
          }

          {user && <button onClick={handleSignOut} className='my-6 mr-20 hover:text-red-500 ease-in-out duration-300 hover:underline-offset-2 hover:underline'>Sign out</button>
 }
        </div>

      </div>

  );
}
