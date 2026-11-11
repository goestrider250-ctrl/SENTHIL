import machine from '../assets/images/ml.jpg'

const Ml = () => {
  return (
    <>
    <div>
      <img src={machine}  className='w-200 h-100 mx-auto p-5'/>
    </div>
    <div className='flex flex-col gap-1 p-5' >
      <h3 className='font-bold'>Machine Learning and Modern AI</h3>
      <h3 className='font-bold'>Introduction:</h3>
      <p>Machine Learning is a branch of AI that enables computers to learn patterns from data and make predictions or decisions without requiring every rule to be explicitly programmed.</p>
    </div>
    </>
   
  )
}

export default Ml
