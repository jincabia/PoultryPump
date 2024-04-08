export default function Exercise({ name, addChosen }) {



   return (
     <div className="group m-4 p-4 text-gray-100 bg-gray-700 bg-opacity-80 rounded w-11/12 h-1/3 hover:bg-gray-600 flex items-center cursor-pointer " >
      <h2 className="font-bold text-xl flex-grow ">{name}</h2>
      <button onClick={() => addChosen(name)} className="text-slate-900  group-hover:text-white hover:bg-green-400 px-3 pb-1 rounded ml-auto ease-in-out duration-300 ">+</button>

     </div>
   );
 }
 