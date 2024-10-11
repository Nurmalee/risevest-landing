import { useEffect, useState } from 'react'

const testimonials = [
  {
    name: 'Nuruden Lawal',
    title: 'Tech Lead at LeeEffect',
    image:
      'https://nurudeenlawal-portfolio.vercel.app/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F70635657%3Fv%3D4&w=128&q=75',
    quote:
      'Investing with Rise has been a game-changer for me. As someone who doesn’t have a deep understanding of the stock market, Rise made it easy for me to grow my wealth. Their expert team and diversified investment options give me confidence that my money is in good hands. I love that I can track my investments anytime, and their customer support has always been top-notch. With Rise, I feel empowered to reach my financial goals without the stress of managing everything on my own.',
  },
  {
    name: 'Candice Snapshot',
    title: 'CTO at TechCorp',
    image:
      'https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote:
      'I was hesitant to invest at first, but Rise changed my perspective entirely. Their user-friendly platform and educational resources helped me understand the investment process better. The team is incredibly knowledgeable and always ready to assist. Since I started investing with Rise, I’ve seen consistent growth in my portfolio. I appreciate their transparency and the way they prioritize my financial goals. I can’t recommend Rise enough for anyone looking to secure their financial future!',
  },
  {
    name: 'Mufti Menk',
    title: 'Designer at DesignWorks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROoAcrf9NekztDBw0ifEhKUlNxsloMCjtfx9tqywJ4Rn0KOL3htD5Iol0PfsQJf3FyUNSYzn5hyYQ4Cvw5AvkGlBA729LImjysYDz0jw',
    quote:
      'I choose Rise because of the leadership, wealth of knowledge, and the people who support them. I invest in Rise to protect my savings and investments from being depleted by devaluation and inflation, which are at an all-time high in Nigeria.',
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide effect for testimonials
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearTimeout(timer)
  }, [currentIndex])

  // Handlers for manual slider controls
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <div className='section flex flex-col items-center justify-center p-10 py-20 text-center md:py-28'>
      <h2 className='text-3xl font-semibold tracking-tighter text-rise-green'>
        From the people who use Rise
      </h2>

      <p className='mx-auto w-full text-base tracking-tighter text-gray-800 sm:w-[80%] lg:w-[50%] lg:text-lg'>
        We serve over 80,000 amazing users. Our mission at Rise is to empower
        more people just like you to achieve your personal financial goals.
      </p>

      {/* Testimonial section with slider functionality */}
      <div className='mx-auto mt-10 w-full max-w-3xl rounded-lg bg-white px-3 py-8 shadow-lg'>
        <div className='relative'>
          {/* Testimonial content */}
          <div className='set-paragraph flex flex-col space-y-4 px-10'>
            <p className='text-sm text-gray-700'>
              {testimonials[currentIndex].quote}
            </p>
            <div className='flex gap-2'>
              <div>
                <img
                  alt={`${testimonials[currentIndex].name}'s profile`}
                  className='mx-auto h-10 w-10 rounded-full shadow-lg'
                  src={testimonials[currentIndex].image}
                />
              </div>

              <div>
                <p className='font-semibold text-gray-900'>
                  {testimonials[currentIndex].name}
                </p>
                <p className='text-sm text-gray-500'>
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </div>
          </div>

          {/* Slider Controls for navigation */}
          <div className='absolute inset-0 flex items-center justify-between'>
            <button
              className='rounded-full p-2 text-3xl text-black hover:bg-gray-200 focus:outline-none'
              aria-label='Previous Testimonial'
              onClick={prevSlide}>
              &#8249;
            </button>
            <button
              className='rounded-full p-2 text-3xl text-black hover:bg-gray-200 focus:outline-none'
              aria-label='Next Testimonial'
              onClick={nextSlide}>
              &#8250;
            </button>
          </div>
        </div>

        {/* Dots to indicate current testimonial */}
        <div className='mt-4 flex justify-center gap-2'>
          {testimonials.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-3 w-3 cursor-pointer rounded-full ${
                idx === currentIndex ? 'bg-rise-green' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
