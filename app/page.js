'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import  {loadExercises} from './src/components/fetchExcercises';
import Header from "./src/components/headers/ppHeader";

export default function App()
{
  //Make a landing page, talking abt me and the app then let them know they need to sign in using github 
  //make a header and a footer for the page
  return(
    <div>
      <Header/>

      {/* https://tailwindcss.com/docs/transition-property */}


      {/* body/main */}
      {/* Show the app imgs of app, what it does and the reason i made it */}
      <div className="justify-evenly flex">

                  {/* Text talking abt the app */}
                  <div className="pl-10 ">

                      <div className=" justify-start text-center items-center flex">
                      <p className=" w-1/2 font-bold text-4xl p-4 ">    
                      Poultry Pump -    
                      Exercise Planner    
                      </p>

                    </div>      

                    <div className=" justify-start text-center items-center flex">
                      <p className=" w-1/2 text-sm p-4 text-gray-600 ">    
                      Simplify your fitness routine with our sleek workout planner. 
                      Stay focused and achieve your goals effortlessly
                      </p>

                    </div>      

                    <div className=" justify-start text-center items-center flex">
                      <p className=" w-1/8 text-sm p-4 border-4 ">    
                      Button Here to go visit it
                      </p>

                    </div>      

                  

      </div>

         {/* Img displaying the app */}

                  <div className="justify-end">
                      <h1> Dummy Img</h1>
                      
                    </div>


              
      

      </div>
      

{/* Why I made it, and what it uses */}
      <div>

      </div>
    </div>
  );
}

