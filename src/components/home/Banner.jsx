import play from '../../assets/google-play-white-filled.svg'
import apple from '../../assets/apple-white-filled.svg'
import appDemo from '../../assets/app-demo.png'
import AppStoreButton from './AppStoreButton'

const appStores = [
  {
    type: 'App Store',
    icon: apple,
    link: '/',
  },
  {
    type: 'Google Play',
    icon: play,
    link: '/',
  },
]

const Banner = () => {
  return (
    <section className='section' aria-labelledby='banner-heading'>
      <div className='container-medium mt-20 flex flex-col items-center justify-center gap-5 pb-20 pt-20 text-center md:pt-10 lg:mt-10 lg:flex-row lg:gap-2'>
        {/* Left Section: Headline and App Store Buttons */}
        <div className='relative flex flex-1 flex-col gap-7 text-left sm:text-center lg:text-left'>
          {/* Accessible Heading */}
          <h1
            className='text-4xl font-semibold leading-tight tracking-tighter text-rise-green md:text-5xl lg:text-6xl'
            id='banner-heading'>
            Dollar investments that help you{' '}
            <span className='font-abel font-normal italic text-black'>
              grow.
            </span>
          </h1>

          {/* Descriptive Paragraph */}
          <p className='text-lg leading-normal tracking-tighter text-gray-600 lg:text-xl'>
            We put your money in high-quality assets that help you build wealth
            and achieve your financial goals.
          </p>

          {/* App Store Buttons */}
          <div className='flex w-full flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start'>
            {appStores.map((store) => (
              <AppStoreButton key={store.type} store={store} />
            ))}
          </div>

          {/* Background Decorative Bubbles */}
          <div
            aria-hidden='true'
            className='absolute -top-20 left-10 h-8 w-8 rounded-full bg-rise-green opacity-30'></div>
          <div
            aria-hidden='true'
            className='absolute -top-32 left-48 h-16 w-16 rounded-full bg-rise-green opacity-30 md:left-[500px]'></div>
          <div
            aria-hidden='true'
            className='absolute -bottom-32 left-40 h-10 w-10 rounded-full bg-rise-green opacity-30'></div>
        </div>

        {/* Right Section: App Demo Image */}
        <div className='relative flex flex-1 justify-end p-3 md:p-10'>
          <img
            className='z-10 rounded-3xl bg-white p-4 shadow-lg'
            alt='Preview of the Rise app on a mobile device'
            src={appDemo}
          />

          {/* Background Decorative Bubbles */}
          <div
            aria-hidden='true'
            className='absolute -bottom-3 right-2 h-16 w-16 rounded-full bg-rise-green opacity-30'></div>
          <div
            aria-hidden='true'
            className='absolute bottom-0 left-14 h-8 w-8 rounded-full bg-rise-green opacity-30'></div>
        </div>
      </div>

      {/* Supporter Logos Section */}
      <div className='border-1 mx-auto flex w-fit flex-col items-start rounded-lg border p-1 px-5 md:items-center'>
        <p className='text-base leading-normal text-gray-600 lg:text-lg'>
          We are supported by
        </p>
        <img
          src='https://risevest.com/_next/static/media/partners.f7ddc63e.webp'
          alt='Logos of partner companies supporting Rise'
        />
      </div>
    </section>
  )
}

export default Banner
