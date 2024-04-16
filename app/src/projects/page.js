'use client'
import { useState, useEffect,useId } from 'react';
import { loadExercises } from '../components/exercise/fetchExcercises';
import Exercise from '../components/exercise/exercise';
import { useUserAuth } from "../_utils/auth-context"; // Imported useUserAuth custom hook
import { getWorkouts, addWorkout } from '../_services/poultry-pump-service'; // Imported getItems and addItem functions from shopping-list-service
import PendingWorkoutForm from '../components/workout/pendingWorkoutForm';
import CompletedWorkout from '../components/workout/completedWorkout';
import ExerciseNoUser from '../components/exercise/exerciseNoUSER';
import LandingHeader from '../components/headers/ppHeader';



export default function Projects()
{




    
    return(
        <div >

            <LandingHeader/>

            <div className='mb-44'></div>

            <div className="flex justify-center align-center text-center items-center mb-96">

            its a work in progress

            </div>

        </div>
    )
}