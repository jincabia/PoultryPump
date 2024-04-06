import { db } from "../_utils/firebase";
import { query,where,collection, getDocs, addDoc } from "firebase/firestore";


export async function getWorkouts(userId) {
  const workoutsCollection = collection(db, "users", userId, "Workouts"); // Reference to the Workouts subcollection under the user's document
  const workoutsQuery = query(workoutsCollection); // Create a query for the workouts collection
  const querySnapshot = await getDocs(workoutsQuery); // Execute the query and get a snapshot of the results
  // Convert the snapshot to an array of workout objects
  const workouts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return workouts;
}

export async function addWorkout(userId, workout) {
  const itemsCollection = collection(db, "users", userId, "Workouts");
  const docRef = await addDoc(itemsCollection, workout);
  return docRef.id;
}
