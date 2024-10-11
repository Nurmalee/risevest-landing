import play from '../../assets/google-play-white-filled.svg'
import apple from '../../assets/apple-white-filled.svg'
import appDemo from '../../assets/app-demo.png'
import AppStoreButton from './AppStoreButton'

const appStores = [
  {
    type: 'App Store',
    icon: apple,
  },
  {
    type: 'Google Play',
    icon: play,
  },
]

export const DownloadApp = () => {
  return (
    <section className='section' aria-labelledby='download-heading'>
      <div className='container-normal'>
        {/* Main Content Wrapper */}
        <div className='relative flex h-[400px] flex-col items-center justify-center gap-10 overflow-hidden rounded-3xl bg-[#ECFEFE] p-4 md:p-8 lg:flex-row'>
          {/* Left Section: Headline, Description, and Buttons */}
          <div className='flex flex-1 flex-col items-start justify-center gap-5 text-left sm:items-center sm:text-center lg:items-start lg:text-left'>
            {/* Heading and Subtitle */}
            <div>
              <p className='text-base tracking-tighter text-rise-green lg:text-lg'>
                Download The Rise App
              </p>
              <h2
                id='download-heading'
                className='w-full text-3xl font-semibold tracking-tighter lg:w-[70%]'>
                Join our 100,000 users investing and setting long-term goals
              </h2>
            </div>

            {/* Description */}
            <p className='w-full text-base tracking-tighter text-gray-600 sm:w-[80%] lg:w-[75%] lg:text-lg'>
              Dollar investments that help you grow
            </p>

            {/* App Store Buttons */}
            <div className='flex w-full flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start'>
              {appStores.map((store) => (
                <AppStoreButton key={store.type} store={store} />
              ))}
            </div>
          </div>

          {/* Right Section: App Demo Image */}
          <div className='absolute -bottom-24 right-20 z-10 hidden flex-1 items-center justify-center lg:flex'>
            <img
              className='z-10 rounded-3xl bg-white p-4 shadow-lg'
              alt='Phone showcasing the Rise app'
              src={appDemo}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
