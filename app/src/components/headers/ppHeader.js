
import Link from "next/link";

export default function LandingHeader() {
  return (
    <div className="w-screen p-2 flex  justify-around align-middle pb-20">
       <button className="text-sm  bg-blue-500 rounded m-2 p-2 hover:bg-blue-400 ease-in-out duration-300 text-center"> 
            <Link href="/src/create">Visit Poultry Pump</Link>
          </button>
    </div>
  );
}
