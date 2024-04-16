import LandingHeader from "./src/components/headers/ppHeader";
import Link from 'next/link'
import Footer from "./src/components/footer/myfooter";
import Image from "next/image";

export default function App() {
  // Make a landing page, talking about me and the app then let them know they need to sign in using GitHub 
  // Make a header and a footer for the page
  return (
    <div>
      <LandingHeader />

      {/* App title,description, link and img */}
      <div className="flex flex-row justify-evenly items-center mt-10 snap-y"> 

        <div className="text-center w-1/3  p-4">
          {/* App name */}
          <p className="font-bold text-4xl">Poultry Pump</p>
          <p className="font-bold text-4xl">-</p>
          <p className="font-bold text-4xl">Exercise Planner</p>
          {/* App description */}
          <p className="text-sm text-gray-600 mt-2">
            Simplify your fitness routine with our sleek workout planner.
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Stay focused and achieve your goals effortlessly.
          </p>
          {/* Link to App */}
          <button className="text-sm  bg-blue-500 rounded m-2 p-2 hover:bg-blue-400 ease-in-out duration-300"> 
            <Link href="/src/create">Visit Poultry Pump</Link>
          </button>
        </div>

        <div className="flex justify-end ">
          <Image
          className="mr-3/5"
           src={'/laptop.png'} height={500} width={500} 
           
           priority={true}
           alt="Poultry Pump example"/>
        </div>

      </div>

      <div className="mx-auto flex justify-between items-center py-2 border-t-2 border-opacity-50 border-gray-400 w-4/5 mt-48 mb-20"></div>


      

      {/* What does it use? */}
      <div className=" flex flex-col justify-center">
        
        {/* Title div */}
        <div className=" flex items-center w-screen justify-center mb-5 snap-always">
          <h1 className="pl-1/2 w-max font-bold text-4xl"> What does Poultry Pump Use?</h1>
        </div>


        {/* Tech div */}
        <div className="flex justify-center items-center mb-40 ">

          {/* Grid div */}
            <div className="grid grid-cols-3 gap-4 ">

              {/* Firebase */}
                <div className="flex flex-col justify-center align-center text-center items-center w-auto">
                  <Image className="bg-slate-400 p-2 rounded-full border-slate-200 border-2 mb-2" src={'/firebaselogo.svg'} alt="Firebase Logo" width={50} height={50} loading = 'lazy'/> 
                    <h1 className="font-semibold text-md text-center">
                    Firebase Authentication and Cloud Storage
                    </h1>
                    <p className="text-sm w-4/5 text-slate-400">
                    This project utilizes Firebase for it's seamless user authentication and efficient data handling.                    </p>                
                </div>


              {/* React */}
                <div className="flex flex-col justify-center align-center text-center items-center">
                  <Image className="bg-slate-400 p-2 rounded-full border-slate-200 border-2 mb-2" src={'/reactlogo.svg'} alt="React" width={50} height={50} loading = 'lazy'/>
                  <h1 className="font-semibold text-md text-center">
                    React.js
                  </h1>
                  <p className="text-sm w-4/5 text-slate-400">
                  React.js was utilized for the project's UI, stateful logic, and dynamic rendering based off user inputs.
                  </p>    
                </div>



              {/* API ninja  */}
                <div className="flex flex-col justify-center align-center text-center items-center">
                  <Link href={'https://rapidapi.com/apininjas/api/exercises-by-api-ninjas'}> <Image loading = 'lazy' className="bg-slate-400 hover:bg-slate-200 p-2 rounded-full border-slate-200 border-2 mb-2 ease-in-out duration-300" src={'/ninjaapi.png'} width={50} height={50} alt="API Ninja"></Image>
</Link>
                  <h1 className="font-semibold text-md text-center">
                    Exercises by API-Ninjas
                  </h1>

                  <p className="text-sm w-4/5 text-slate-400">
                    The primary API used in the project, to fetch exercises grouped by specific muscle groups.
                  </p>  


                </div>

                

              {/* Grid Div */}
            </div>

                
        </div>



      {/* Outter div */}
      </div>

      

      <Footer/>
    </div>
  );
}
