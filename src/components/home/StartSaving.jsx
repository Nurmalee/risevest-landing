import riseapp from '../../assets/riseapp-2.png'

const StartSaving = () => {
  return (
    <section className='section'>
      <div className='container-normal flex flex-col items-center justify-center gap-10 lg:flex-row'>
        <div className='flex flex-1 items-center justify-center'>
          <img src={riseapp} alt='' />
        </div>

        <div className='set-paragraph flex flex-1 flex-col gap-5'>
          <div>
            <p className='text-base tracking-tighter text-black lg:text-lg'>
              The Rise App
            </p>
            <h2 className='text-3xl font-semibold tracking-tighter'>
              Save for your future
            </h2>
          </div>

          <p className='w-full text-base tracking-tighter text-gray-600 sm:w-[80%] lg:w-[75%] lg:text-lg'>
            With Rise, you achieve your financial goals fatser. Save for school,
            your home, vacations, your children&apos;s future and more{' '}
          </p>

          <div>
            <button className='rounded-md bg-rise-green px-6 py-2 text-white'>
              Start Saving
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StartSaving
