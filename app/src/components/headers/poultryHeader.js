import Image from 'next/image'


export default function Header() {
    return (
      <div className="w-screen flex  justify-between mb-10 mt-5 ">
  
  {/* Top left, name */}
        <div className="">
        
            {/* project name and logo*/}
            <div className="flex flex-row  justify-self-start">
                <Image className="m-0 pl-5"width={80} height={30} src={require('./armlogo.png')} alt="Dumbbell"/>
                {/* {/* https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fbicep-icon&psig=AOvVaw3yTOW1ZiLQmjq463vJ317S&ust=1711873489437000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNCO7I3Jm4UDFQAAAAAdAAAAABAE                */}
                 <h1 className="font-semibold text-l p-6 " >Poultry Pump</h1> 
                {/* This p-4 is for to align everything */}
            </div>

        </div>
        {/* Middle div, Home search and create */}
        <div className="justify-self-center  ">
              <ul className='flex flex-row pt-6'>
                <li className='mx-5'>Home</li>
                <li className='ml-5'>Exercises</li>
                <li className='mx-5'>Workouts</li>
              </ul>
                            
        </div>

        {/* Top right, Contact button */}

        <div className='justify-self-end'>
        <p className="p-6 pr-20">Contact Me</p>
        </div>


    

        
  
        
  
        
  
  
       
      </div>
    );
  }
  