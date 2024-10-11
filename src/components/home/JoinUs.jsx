import joinus from '../../assets/joinus.png'

const JoinUs = () => {
  return (
    <section className='section'>
      <div className='container-normal flex flex-col items-center justify-center gap-10 lg:flex-row'>
        <div className='flex flex-1 flex-col items-start justify-center gap-5 text-left sm:items-center sm:text-center lg:items-start lg:text-left'>
          <div>
            <h2 className='text-3xl font-semibold tracking-tighter'>
              Join The Rise Community
            </h2>
          </div>

          <p className='w-full text-base tracking-tighter text-gray-600 sm:w-[80%] lg:w-[75%] lg:text-lg'>
            If you want to go far, go together. Our Telegram community surrounds
            you with others who can help you along your financial journey with
            tips, support, advice and learning. it&apos;s completely free and
            open to new and seasoned investors
          </p>

          <div>
            <button className='rounded-md bg-[#A0DDE2] px-6 py-2 text-black'>
              Join our community
            </button>
          </div>
        </div>

        <div className='flex flex-1 items-center justify-center'>
          <img src={joinus} alt='Image of a connection of people' />
        </div>
      </div>
    </section>
  )
}

export default JoinUs
