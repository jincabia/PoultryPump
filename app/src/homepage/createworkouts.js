'use client'
import { useState, useEffect,useId } from 'react';
import { loadExercises } from '../components/exercise/fetchExcercises';
import Exercise from '../components/exercise/exercise';
import { useUserAuth } from "../_utils/auth-context"; // Imported useUserAuth custom hook
import { getWorkouts, addWorkout } from '../_services/poultry-pump-service'; // Imported getItems and addItem functions from shopping-list-service
import Header from '../components/headers/poultryHeader';
import PendingWorkoutForm from '../components/workout/pendingWorkoutForm';
import CompletedWorkout from '../components/workout/completedWorkout';




export default CreateWorkout()
{

}