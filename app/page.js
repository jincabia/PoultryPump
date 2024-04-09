import LandingHeader from "./src/components/headers/ppHeader";
import Link from 'next/link'
import Footer from "./src/components/footer/myfooter";


export default function App() {
  // Make a landing page, talking about me and the app then let them know they need to sign in using GitHub 
  // Make a header and a footer for the page
  return (
    <div>
      <LandingHeader />
       <div> 
            <div className="text-center table-cell align-middle border-2 w-1/4 ">



            {/* App name */}
              <p className=" font-bold text-4xl "> 
                  Poultry Pump 
              </p>

              <p className=" font-bold text-3xl"> 
                Exercise Planner
                </p>



            {/* App description */}
                <p className="text-sm  text-gray-600 mt-2">
                  Simplify your fitness routine with our sleek workout planner. 
                </p>
                <p className="text-sm  text-gray-600 mb-2">
                  Stay focused and achieve your goals effortlessly.
                </p>

            {/* Link to App */}

                <button className="text-sm border-2 rounded m-2 p-2 hover:bg-slate-600"> 
                  <Link href="/src">
                    Visit Poultry Pump
                  </Link>
                </button>

                

            </div>


        </div>
        <Footer/>

    </div>
  );
}
