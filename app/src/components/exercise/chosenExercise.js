export default function ChosenExercise({ name, delChosen }) {



    return (
        <div >
            <div className="group my-4 p-4 text-white bg-slate-900 rounded w-1/2 h-1/3 hover:bg-slate-500 flex items-center cursor-pointer " >
            <h2 className="font-bold text-xl flex-grow mr-4">{name}</h2>
            <button onClick={() => delChosen(name)} className="text-slate-900  group-hover:text-white group-hover:bg-red-400 px-3 pb-1 rounded ml-auto ease-in-out duration-300 ">-</button>
        
            </div>

        </div>
      
    );
  }
  