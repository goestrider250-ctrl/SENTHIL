import React from 'react'

const Home = () => {
  return (
   

   <>
      <p><strong>Learn • Explore • Build the Future</strong></p>
      <div className='flex flex-col p-10 gap-5 '>
        <div>
           <h3 className='font-bold'>Introduction:</h3>
             <p className='mx-5'>Artificial Intelligence is transforming the way we live, work, learn, and communicate. From smart assistants to self-driving vehicles, AI is creating new possibilities and changing the world around us.
            AI Knowledge Hub is an educational platform designed to explain artificial intelligence, explore its real-world applications, and discover how this technology may shape our future.</p>
        </div>
        <div className='flex flex-col p-5 gap-1' >
          <h3 className='font-bold'>Why Learn About AI?</h3>
          <ul className='flex flex-col gap-1 p-2 list-disc pl-6 space-y-2'>
            <li>Understand modern technology.</li>
            <li>Discover how intelligent systems work</li>
            <li>Explore new innovations and opportunities.</li>
            <li>Prepare for a technology-driven future.</li>
          </ul>
          
        </div>
       

      </div>

      </>
      
   
  )
}

export default Home
