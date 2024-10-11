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

const Header = () => {
  const [activeLink, setActiveLink] = useState('Home')

  const toggleMenu = () => {
    return null
  }

  return (
    <header className='fixed z-30 w-full bg-opacity-50 px-8 py-2 backdrop-blur-lg'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between'>
        <Link to='/'>
          <img src={riseLogo} className='h-14 w-14' alt='Rise logo' />
        </Link>

        <ul className='hidden items-center gap-7 md:flex'>
          {navLinks.map((link) => (
            <li
              className={`relative px-1 font-schibsted text-sm text-rise-green ${
                activeLink === link.name ? 'font-bold' : 'font-normal'
              }`}
              onClick={() => setActiveLink(link.name)}
              key={link.name}>
              <Link to={link.url}>{link.name}</Link>

              {activeLink === link.name && (
                <span className='absolute bottom-[-10px] left-0 right-0 mx-auto h-[5px] w-[5px] rounded-full bg-rise-green'></span>
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

export default Header
