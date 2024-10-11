/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

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

const ThemeToggler = ({ toggleDarkMode, darkMode }) => {
  return (
    <div className='flex items-center'>
      <span className='mr-1 text-sm'>🌞</span>
      <label className='relative inline-flex cursor-pointer items-center'>
        <input
          onChange={toggleDarkMode}
          className='sr-only'
          checked={darkMode}
          type='checkbox'
        />
        <div className='h-6 w-11 rounded-full bg-gray-300 transition-colors dark:bg-gray-600'></div>
        <span
          className={`absolute h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200 ease-in-out ${
            darkMode ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </label>
      <span className='ml-1 text-sm'>🌙</span>
    </div>
  )
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')
  const [darkMode, setDarkMode] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode === 'true') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
      document.body.style.backgroundColor = '#1a202c'
    } else {
      document.documentElement.classList.remove('dark')
      document.body.style.backgroundColor = '#ffffff'
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode
      localStorage.setItem('darkMode', newMode)
      if (newMode) {
        document.documentElement.classList.add('dark')
        document.body.style.backgroundColor = '#1a202c'
      } else {
        document.documentElement.classList.remove('dark')
        document.body.style.backgroundColor = '#ffffff'
      }
      return newMode
    })
  }

  return (
    <header className='fixed z-30 w-full bg-opacity-50 px-8 py-2 backdrop-blur-lg'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between'>
        {/* Logo */}
        <Link to='/'>
          <img src={riseLogo} className='h-14 w-14' alt='Rise logo' />
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden items-center gap-7 lg:flex'>
          {navLinks.map((link) => (
            <li
              className={`relative px-1 font-schibsted text-sm text-rise-green dark:text-white ${
                activeLink === link.name ? 'font-bold' : 'font-normal'
              }`}
              onClick={() => setActiveLink(link.name)}
              key={link.name}>
              <Link to={link.url}>{link.name}</Link>

              {activeLink === link.name && (
                <span className='absolute bottom-[-10px] left-0 right-0 mx-auto h-[5px] w-[5px] rounded-full bg-rise-green dark:bg-white'></span>
              )}
            </li>
          ))}

          <ThemeToggler toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className='block lg:hidden'>
          <button
            onClick={toggleMobileMenu}
            className='rounded border bg-transparent p-3 dark:bg-white'>
            <img src={hamburgerIcon} alt='Open menu' className='h-5 w-5' />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed right-0 top-0 h-screen w-2/3 transform bg-white shadow-lg ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50 transition-transform duration-300 ease-in-out lg:hidden`}>
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
          <ThemeToggler toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </ul>
      </div>
    </header>
  )
}

export default Header
