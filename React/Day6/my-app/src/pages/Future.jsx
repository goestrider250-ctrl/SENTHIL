import future from '../assets/images/fu.webp'

const Future = () => {
  return (
    <>
    <div className='flex flex-col gap-1 p-5'>
      <div>
        <img src={future} className='w-200 h-100 mx-auto p-5' />
      </div>
      <div>
        <h3 className='font-bold'>The Future of Artificial Intelligence</h3>
        <h3 className='font-bold'>Introduction:</h3>
        <p className='mx-10'>Artificial Intelligence is developing rapidly and may play an increasingly important role in future societies. Advances in computing, robotics, language technologies, and scientific research could transform how people work, learn, create, and solve global challenges.</p>
      </div>
    </div>
    </>
  )
}

export default Future
