import LandingHeader from "./src/components/headers/ppHeader";
import Link from 'next/link'


export default function App() {
  // Make a landing page, talking about me and the app then let them know they need to sign in using GitHub 
  // Make a header and a footer for the page
  return (
    <div>
      <LandingHeader />

      {/* body/main */}
      {/* Show the app images of the app, what it does, and the reason I made it */}
      <div className="flex justify-evenly">

        {/* Text talking about the app */}
        <div className="pl-10">

          <div className="text-center">
            <p className="w-1/2 font-bold text-4xl p-4">
              Poultry Pump - Exercise Planner
            </p>
          </div>

          <div className="text-center">
            <p className="w-1/2 text-sm p-4 text-gray-600">
              Simplify your fitness routine with our sleek workout planner. Stay focused and achieve your goals effortlessly
            </p>
          </div>

          <div className="w-5/6 ml-auto">
            <button className="text-sm p-2 border-2 rounded hover:bg-slate-600">
              <Link href="/src">
                Visit Poultry Pump
              </Link>
            </button>
          </div>
        </div>

        {/* Image displaying the app */}
        <div>
          <h1>Dummy Img</h1>
        </div>

      </div>

      {/* Why I made it, and what it uses */}
      <div>
        {/* Add content here */}
      </div>
    </div>
  );
}
