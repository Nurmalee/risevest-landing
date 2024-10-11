import { Link } from 'react-router-dom'
import { useState } from 'react'

import hamburgerIcon from '../assets/hamburger.svg'
import riseLogo from '/rise.svg'

const navLinks = [
  { name: 'Home', url: '/' },
  { name: 'Products', url: '/products' },
  { name: 'Investment Club', url: '/investment-club' },
  { name: 'Blog', url: '/blog' },
  { name: 'About Us', url: '/about-us' },
  { name: 'FAQs', url: '/faqs' },
]

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className='fixed z-30 w-full bg-opacity-50 px-8 py-2 backdrop-blur-lg'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between'>
        {/* Logo */}
        <Link to='/'>
          <img src={riseLogo} className='h-14 w-14' alt='Rise logo' />
        </Link>

        {/* Desktop Menu */}
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

        {/* Hamburger Icon for Mobile */}
        <div className='block md:hidden'>
          <button onClick={toggleMobileMenu}>
            <img src={hamburgerIcon} alt='Open menu' className='h-5 w-5' />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed right-0 top-0 h-screen w-2/3 transform bg-white shadow-lg ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50 transition-transform duration-300 ease-in-out md:hidden`}>
        <button
          onClick={toggleMobileMenu}
          className='absolute right-4 top-4 text-gray-700'>
          ✕
        </button>

        <ul className='mt-16 space-y-8 px-8 text-lg'>
          {navLinks.map((link) => (
            <li
              className={`font-schibsted text-sm ${
                activeLink === link.name
                  ? 'font-bold text-rise-green'
                  : 'font-normal'
              }`}
              onClick={() => {
                setActiveLink(link.name)
                toggleMobileMenu()
              }}
              key={link.name}>
              <Link to={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
