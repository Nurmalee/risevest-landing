/* eslint-disable react/prop-types */
const AppStoreButton = ({ store }) => {
  return (
    <button className='flex w-full items-center justify-center gap-2 rounded-xl bg-[#2D2D2D] px-6 py-2 text-white hover:bg-black md:w-auto'>
      <img src={store.icon} alt='Google Play-store' className='h-10 w-10' />
      <p className='m-0 p-0 text-xs font-thin leading-none md:text-sm'>
        Download on the{' '}
        <span className='block text-base font-semibold md:text-lg'>
          {store.type}
        </span>
      </p>
    </button>
  )
}

export default AppStoreButton
