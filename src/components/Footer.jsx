import { Link } from 'react-router-dom'
import riseLogo from '/rise.svg'

const links = [
  { name: 'About Us', path: '/about' },
  { name: 'Careers', path: '/careers' },
  { name: 'FAQs', path: '/faqs' },
  { name: 'Contact Info', path: '/contact-info' },
  { name: 'Press', path: '/press' },
  { name: 'Rise Impact', path: '/rise-impact' },
]

const exploreLinks = [
  { name: 'Investment Club', path: '/investment-club', external: true },
  { name: 'Blog', path: '/blog', external: true },
]

const productLinks = [
  { name: 'Rise App', path: '/rise-app' },
  { name: 'Wallets', path: '/wallets' },
  { name: 'Asset Classes', path: '/asset-classes' },
]

const Footer = () => {
  return (
    <footer className='bg-green-100 py-8 font-schibsted text-gray-800'>
      <div className='section'>
        <div className='container-medium grid gap-8 sm:grid-cols-2 md:px-20 lg:grid-cols-4'>
          {/* Logo Section */}
          <div>
            <h2 className='sr-only'>Rise Logo</h2>
            <Link to='/'>
              <img src={riseLogo} className='h-14 w-14' alt='Rise logo' />
            </Link>

            <ul className='mt-4 space-y-2 text-sm text-gray-600'>
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <h2 className='text-lg font-semibold'>Explore</h2>
            <ul className='mt-4 space-y-2 text-sm text-gray-600'>
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className='flex items-center'>
                    {link.name} <span className='ml-1'>↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h2 className='text-lg font-semibold'>Products</h2>
            <ul className='mt-4 space-y-2 text-sm text-gray-600'>
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className='text-lg font-semibold'>Contact Us</h2>
            <ul className='mt-4 space-y-2 text-sm text-gray-600'>
              <li>
                <a href='tel:+08164800735'>0816 480 0735 ↗</a>
              </li>
              <li>
                <a href='mailto:lawalnurudeenfocus@gmail.com'>
                  hello@rise.capital ↗
                </a>
              </li>
              <li>
                <a href='#'>Newsletter ↗</a>
              </li>
              <li>
                <a href='#'>Instagram ↗</a>
              </li>
              <li>
                <a href='#'>Twitter ↗</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
