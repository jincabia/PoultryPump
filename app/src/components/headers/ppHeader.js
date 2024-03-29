


export default function Header() {
  return (
    <div className="w-screen p-2 flex  justify-evenly align-middle pb-40">

{/* Top left, name */}
      <div className="flex">
      
        {/* name div */}
        <div className="flex flex-row">
          {/* <h1 className="p-2">Dumbell dummy </h1> */}
          
          <h1 className="font-semibold text-xl p-2">Jin Cabia</h1>
        </div>
      </div>


      

      


      {/* Empty divs to move it */}
      <div></div>
      <div></div>
      <div></div>



      {/* Navigation div */}
      <nav>
        <ul className="flex">
          <li className="p-2">Contact Me</li>
          <li className="ml-10 p-2 px-4 bg-emerald-600 rounded justify-self-center text-center font-semibold">My Projects</li>

        </ul>
      </nav>
    </div>
  );
}
