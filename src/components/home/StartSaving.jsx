import riseapp from '../../assets/riseapp-2.png'

const StartSaving = () => {
  return (
    <section className='section'>
      <div className='container-normal flex flex-col items-center justify-center gap-10 lg:flex-row'>
        {/* Image showcasing the Rise app */}
        <div className='flex flex-1 items-center justify-center'>
          <img src={riseapp} alt='Screenshot of the Rise app on a smartphone' />
        </div>

        {/* Textual content encouraging users to start saving */}
        <div className='set-paragraph flex flex-1 flex-col gap-5'>
          {/* App name and main heading */}
          <div>
            <p className='text-base tracking-tighter text-black lg:text-lg dark:text-rise-green'>
              The Rise App
            </p>
            <h2 className='text-3xl font-semibold tracking-tighter dark:text-white'>
              Save for your <span className='text-[#8C6BB1]'>future</span>
            </h2>
          </div>

          {/* Description of the app’s benefits */}
          <p className='w-full text-base tracking-tighter text-gray-600 sm:w-[80%] lg:w-[75%] lg:text-lg dark:text-gray-300'>
            With Rise, you achieve your financial goals faster. Save for school,
            your home, vacations, your children&apos;s future, and more.
          </p>

          {/* CTA button to start saving */}
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
