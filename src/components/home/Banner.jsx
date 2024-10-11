import { useEffect, useState } from 'react'
import appDemo from '../../assets/app-demo.png'
import AppStoreButtons from './AppStoreButtons'

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className='section' aria-labelledby='banner-heading'>
      <div className='container-medium relative mt-20 flex flex-col items-center justify-center gap-5 pb-20 pt-20 text-center md:pt-10 lg:mt-10 lg:flex-row lg:gap-2'>
        {/* Left Section: Headline and App Store Buttons */}
        <div
          className={`relative flex flex-1 flex-col gap-7 text-left transition-opacity duration-1000 sm:text-center lg:text-left ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
          {/* Main Heading */}
          <h1
            className='text-4xl font-semibold leading-tight tracking-tighter text-rise-green md:text-5xl lg:text-6xl dark:text-white'
            id='banner-heading'>
            Dollar investments that help you{' '}
            <span className='font-abel font-normal italic text-black dark:text-rise-green'>
              grow.
            </span>
          </h1>

          {/* Descriptive Paragraph */}
          <p className='text-lg leading-normal tracking-tighter text-gray-600 lg:text-xl dark:text-gray-300'>
            We put your money in high-quality assets that help you build wealth
            and achieve your financial goals.
          </p>

          {/* App Store Buttons */}
          <AppStoreButtons />

          {/* Background Decorative Bubbles */}
          <div
            className='animate-bubble absolute -top-20 left-10 h-4 w-4 rounded-full bg-rise-green opacity-30 dark:bg-white'
            aria-hidden='true'></div>
          <div
            className='animate-bubble absolute -top-32 left-48 h-16 w-16 rounded-full bg-rise-green opacity-30'
            aria-hidden='true'></div>
          <div
            className='animate-bubble absolute -bottom-32 left-40 h-10 w-10 rounded-full bg-rise-green opacity-30'
            aria-hidden='true'></div>
        </div>

        {/* Right Section: App Demo Image */}
        <div className='relative flex flex-1 justify-end p-3 md:p-10'>
          <img
            className={`z-10 rounded-3xl bg-white p-4 shadow-2xl transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-95'}`}
            alt='Preview of the Rise app on a mobile device'
            src={appDemo}
          />

          {/* Background Decorative Bubbles */}
          <div
            className='animate-bubble absolute -bottom-3 right-2 h-16 w-16 rounded-full bg-rise-green opacity-30'
            aria-hidden='true'></div>
          <div
            className='animate-bubble absolute bottom-0 left-14 h-8 w-8 rounded-full bg-rise-green opacity-30 dark:bg-white'
            aria-hidden='true'></div>

          <div className='animate-bubble absolute right-20 z-0 h-60 w-60 lg:left-56'>
            <img
              src='https://risevest.com/_next/static/media/ball.d87b5b9d.webp'
              alt=''
            />
          </div>
        </div>
      </div>

      {/* Supporter Logos Section */}
      <div className='border-1 relative mx-auto flex w-fit flex-col items-start rounded-lg border border-gray-600 border-opacity-20 p-1 px-5 md:items-center'>
        <p className='text-base leading-normal text-gray-600 lg:text-lg dark:text-white'>
          We are supported by
        </p>
        <img
          src='https://risevest.com/_next/static/media/partners.f7ddc63e.webp'
          alt='Logos of partner companies supporting Rise'
        />

        <span className='absolute -right-2 -top-2 flex h-4 w-4'>
          <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75'></span>
          <span className='relative inline-flex h-4 w-4 rounded-full bg-rise-green'></span>
        </span>
      </div>
    </section>
  )
}

export default Banner
