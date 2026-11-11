import banner from '../assets/images/banner1.png'

const Ai = () => {
  return (
    <>
    <div>
      <img src={banner} />
    </div>
    <div className='flex-col p-10 gap-5'>
      <h3 className='font-bold'>Introduction:</h3>
      <p className='mx-3'>Artificial Intelligence (AI) is a branch of computer science that focuses on creating systems capable of performing tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, understanding language, and recognizing patterns.</p>
    </div>
    </>
    
  )
}

export default Ai
