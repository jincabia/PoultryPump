"use client";
import Link from 'next/link';
import { useUserAuth } from './_utils/auth-context';
// import { useEffect } from 'react'; // Importing useEffect if you're using it
// import { useUserAuth } from "../app/src/_utils/auth-context";

export default function App() {
  //i have a problem here
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth() || {};


    
    function handleSignIn() {
        gitHubSignIn();
        
    }

    function handleSignOut()
    {
        firebaseSignOut();
    }

    

    // console.log(user);

    return (
        <main>
            <strong>
            <h1 className='text-5xl'>Poultry Pump</h1>
                </strong>
            {!user && <button className='m-4 p-2  bg-slate-600 hover:bg-slate-400 ' onClick={handleSignIn}>Sign in with GitHub</button>}
            {user && (
                <div>
                    <p>
                        You are signed in as <strong>{user.email}</strong>
                    </p>
                    <p>
                    <strong><Link href="./week-8/shopping-list">Shopping List</Link></strong>

                    </p>
                    <button onClick={handleSignOut}>Sign out</button>
                </div>
            )}
        </main>
    );
}
