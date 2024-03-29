import Image from 'next/image'


export default function Header() {
    return (
      <div className="w-screen flex  justify-between mb-10 mt-5 ">
  
  {/* Top left, name */}
        <div className="">
        
            {/* project name and logo*/}
            <div className="flex flex-row  justify-self-start">
                <Image className=" m-0 p-0"width={60} height={30} src={require('./logo.png')} alt="Dumbbell"/>
                {/* // <a href="https://www.vecteezy.com/vector-art/3179657-dumbbell-equipment-gym-line-style-icon">dumbbell equipment gym line style icon Vectors by Vecteezy</a>*/}
                <h1 className="font-semibold text-l p-4 " >Poultry Pump</h1>
                {/* This p-4 is for to align everything */}
            </div>

        </div>
        {/* Middle div, Home search and create */}
        <div className="justify-self-center  ">
              <ul className='flex flex-row pt-4'>
                <li className='mx-5'>Home</li>
                <li className='ml-5'>Exercises</li>
                <li className='mx-5'>Workouts</li>
              </ul>
                            
        </div>

        {/* Top right, Contact button */}

        <div className='justify-self-end'>
        <p className="p-4">Contact Me</p>
        </div>


    

        
  
        
  
        
  
  
       
      </div>
    );
  }
  