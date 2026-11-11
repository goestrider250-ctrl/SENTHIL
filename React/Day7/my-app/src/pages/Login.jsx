import {useState} from 'react'

const Login = () => {
  const [login, setlogin] = useState( )
  return (
    <>
    <div className="bg-amber-500 p-3">
      
         
     
         <div className='flex justify-end items-center gap-10 mx-30'>
           <button onClick={()=> setlogin(true)} className='bg-blue-300 p-3 rounded-2xl h-10  flex justify-center items-center'>Login</button>
          <button onClick={()=> setlogin(false)} className='bg-red-300 p-3 rounded-2xl h-10   flex justify-center items-center'>Log out</button>
       
       </div>
   
    </div>

    {login ? 
    (<>
    <div className='p-5 flex flex-col gap-3'>
      <h2><strong>The World of Technology:</strong></h2> 
      <p>Technology makes our lives easier and faster. It helps us communicate, learn, work, and solve problems. Computers, smartphones, and artificial intelligence are some examples of modern technology.</p>
    </div>
    </>)
: <h2 className='text-xl font-bold text-center p-4'>Please log in</h2>}
  

    </>
  )
}

export default Login