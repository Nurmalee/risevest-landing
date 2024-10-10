/* eslint-disable react/prop-types */
import play from '../assets/google-play-white-filled.svg'
import apple from '../assets/apple-white-filled.svg'
import subtract from '../assets/subtract.png'

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

const AppStoreButton = ({ store }) => {
	return (
		<button className='w-full md:w-auto flex items-center justify-center gap-2 rounded-xl bg-[#2D2D2D] hover:bg-black text-white px-6 py-2'>
			<img src={store.icon} alt='Google Play-store' className='h-10 w-10' />
			<p className='font-thin text-xs md:text-sm leading-none m-0 p-0'>
				Download on the{' '}
				<span className='block font-semibold text-base md:text-lg'>
					{store.type}
				</span>
			</p>
		</button>
	)
}

const Banner = () => {
	return (
		<section className='relative overflow-hidden mx-auto max-w-[90rem] font-bricolage p-8'>
			<div className='mt-20 lg:mt-10 md:p-14 pt-32 md:pt-20 pb-20 flex flex-col lg:flex-row text-center items-center justify-center gap-5 lg:gap-2 mx-auto max-w-[85rem]'>
				<div className='relative flex-1 flex flex-col gap-7 text-left sm:text-center lg:text-left w-full sm:w-[80%] md:w-[75%] lg:w-full'>
					<h1 className='text-riseGreen font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight'>
						Dollar investments that help you{' '}
						<span className='italic font-abel font-normal text-black'>
							grow.
						</span>
					</h1>

					<p className='text-lg lg:text-xl text-gray-600 leading-normal'>
						We put your money in high quality assets that help you build wealth
						and achieve your financial goals
					</p>

					<div className='flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full'>
						{appStores.map((store) => (
							<AppStoreButton key={store.type} store={store} />
						))}
					</div>

					{/* Background Bubbles */}
					<div className='absolute -top-20 left-10 w-8 h-8 bg-riseGreen rounded-full opacity-30'></div>
					<div className='absolute -top-32 left-48 md:left-[500px] w-16 h-16 bg-riseGreen rounded-full opacity-30'></div>
					<div className='absolute -bottom-32 left-40 w-10 h-10 bg-riseGreen rounded-full opacity-30'></div>
				</div>

				<div className='flex-1 p-3 md:p-10 flex justify-end relative'>
					<img
						className='p-4 shadow-lg rounded-3xl z-10'
						src={subtract}
						alt='phone'
					/>

					{/* Background Bubbles */}
					<div className='absolute -bottom-3 right-2 w-16 h-16 bg-riseGreen rounded-full opacity-30'></div>
					<div className='absolute bottom-0 left-14 w-8 h-8 bg-riseGreen rounded-full opacity-30'></div>
				</div>
			</div>

			<div className='p-1 px-5 mx-auto flex flex-col items-start md:items-center rounded-lg border border-1 w-fit'>
				<p className='text-base lg:text-lg text-gray-600 leading-normal'>
					We are supported by
				</p>
				<img
					src='https://risevest.com/_next/static/media/partners.f7ddc63e.webp'
					alt='supporters'
				/>
			</div>
		</section>
	)
}

export default Banner
