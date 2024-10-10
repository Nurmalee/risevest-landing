import { Link } from 'react-router-dom'

import hamburgerIcon from '../assets/hamburger.svg'
import riseLogo from '/rise.svg'
import { useState } from 'react'

const navLinks = [
	{ name: 'Home', url: '/' },
	{ name: 'Products', url: '/products' },
	{ name: 'Investment Club', url: '/investment-club' },
	{ name: 'Blog', url: '/blog' },
	{ name: 'About Us', url: '/about-us' },
	{ name: 'FAQs', url: '/faqs' },
]

const Navbar = () => {
	const [activeLink, setActiveLink] = useState('Home')

	const toggleMenu = () => {
		return null
	}

	return (
		<header className='w-full fixed px-8 py-2 backdrop-blur-lg bg-opacity-50 z-30'>
			<nav className='flex justify-between items-center max-w-7xl mx-auto'>
				<a
					href='https://risevest.com/'
					rel='noopener noreferrer'
					className='px-1'
					target='_blank'>
					<img src={riseLogo} className='h-14 w-14' alt='Rise logo' />
				</a>
				<ul className='hidden md:flex items-center gap-7'>
					{navLinks.map((link) => (
						<li
							className={`relative px-1 text-riseGreen font-bricolage text-sm ${
								activeLink === link.name ? 'font-bold' : 'font-normal'
							}`}
							onClick={() => setActiveLink(link.name)}
							key={link.name}>
							<Link to={link.url}>{link.name}</Link>

							{activeLink === link.name && (
								<span className='absolute left-0 right-0 bottom-[-10px] mx-auto h-[5px] w-[5px] rounded-full bg-riseGreen'></span>
							)}
						</li>
					))}
				</ul>

				<div className='block md:hidden'>
					<button onClick={toggleMenu}>
						<img src={hamburgerIcon} alt='' className='h-5 w-5' />
					</button>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
