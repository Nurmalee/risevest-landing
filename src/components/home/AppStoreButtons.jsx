import play from '../../assets/google-play-white-filled.svg'
import apple from '../../assets/apple-white-filled.svg'

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

const AppStoreButtons = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start'>
      {appStores.map((store) => (
        <a
          className='flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#2D2D2D] px-6 py-2 text-white hover:no-underline dark:bg-rise-green md:w-auto'
          aria-label={`Download on the ${store.type}`}
          href={store.link}
          key={store.type}>
          <img
            alt={`Download from ${store.type}`}
            className='h-10 w-10'
            src={store.icon}
          />
          <p className='m-0 p-0 text-xs font-thin leading-none md:text-sm'>
            Download on the{' '}
            <span className='block text-base font-semibold md:text-lg'>
              {store.type}
            </span>
          </p>
        </a>
      ))}
    </div>
  )
}

export default AppStoreButtons
