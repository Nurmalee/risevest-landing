/* eslint-disable react/prop-types */
const AppStoreButton = ({ store }) => {
  return (
    <a
      href={store.link}
      className='flex w-full items-center justify-center gap-2 rounded-xl bg-[#2D2D2D] px-6 py-2 text-white hover:no-underline md:w-auto'
      aria-label={`Download on the ${store.type}`}>
      <img
        src={store.icon}
        alt={`Download from ${store.type}`}
        className='h-10 w-10'
      />
      <p className='m-0 p-0 text-xs font-thin leading-none md:text-sm'>
        Download on the{' '}
        <span className='block text-base font-semibold md:text-lg'>
          {store.type}
        </span>
      </p>
    </a>
  )
}

export default AppStoreButton
