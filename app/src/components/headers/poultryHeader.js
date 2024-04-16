import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUserAuth } from '../../_utils/auth-context';

export default function Header() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignOut = () => {
    firebaseSignOut();
  }

  const handleSignIn = () => {
    gitHubSignIn();
  }

  return (
    <div className="w-screen flex flex-row justify-between items-center mb-10 mt-5 px-4">

      {/* Top left, name */}
      <div className="flex items-center">
        {/* project name and logo*/}
        <div className="flex items-center">
          <Image className="m-0 pl-2" width={60} height={30} src={require('./armlogo.png')} alt="Dumbbell" />
          <h1 className="font-semibold text-l"><Link href="/">Poultry Pump</Link></h1>
        </div>
      </div>

      {/* Middle div, Home search and create */}
      <div className="flex flex-grow justify-center pb-7">
        <ul className='flex flex-row pt-6'>
        <li className='mx-5  hover:bg-blue-400 ease-in-out duration-300 hover:underline-offset-2 hover:underline  bg-blue-500 rounded-md px-4 py-2'><Link href="/">Home</Link></li>
          <li className='mx-5  hover:bg-blue-400 ease-in-out duration-300 hover:underline-offset-2 hover:underline  bg-blue-500 rounded-md px-4 py-2'><Link href="/src/create">Create Workout</Link></li>
          <li className='mx-5 hover:bg-blue-400 ease-in-out duration-300 hover:underline-offset-2 hover:underline  bg-blue-500 rounded-md px-4 py-2'><Link href="/src/workoutpage">View Workouts</Link></li>
        </ul>
      </div>

      <div className='flex items-center'>
        {!user &&
          <button onClick={handleSignIn} className='mx-5 hover:bg-green-400 ease-in-out duration-300 hover:underline-offset-2 hover:underline  bg-green-500 rounded-md px-4 py-2'>
            Sign In
          </button>
        }

        {user && 
          <button onClick={handleSignOut} className='mx-5 hover:bg-red-400 ease-in-out duration-300 hover:underline-offset-2 hover:underline  bg-red-500 rounded-md px-4 py-2'>Sign out</button>
        }
      </div>

    </div>
  );
}
