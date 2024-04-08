export default function ChosenExercise({ name, delChosen }) {



    return (
        <div >
            <div className="group my-4 p-4 text-white bg-gray-700 bg-opacity-80 rounded w-11/12 h-100 hover:bg-gray-600 flex items-center cursor-pointer " >
            <h2 className="font-bold text-xl flex-grow mr-4">{name}</h2>
            <button onClick={() => delChosen(name)} className="text-slate-900  hover:text-white hover: hover:bg-red-400 px-3 pb-1 rounded ml-auto ease-in-out duration-300 ">-</button>
        
            </div>

        </div>
      
    );
  }
  