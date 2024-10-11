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
    <footer className='bg-green-100 pb-0 pt-8 font-schibsted text-gray-800 dark:bg-white'>
      <div className='section'>
        <div className='container-medium grid grid-cols-2 gap-8 md:px-20 lg:grid-cols-4'>
          {/* Logo Section */}
          <div>
            <Link to='/' aria-label='Go to homepage'>
              <img src={riseLogo} className='h-14 w-14' alt='Rise logo' />
            </Link>

            <ul className='mt-4 space-y-2 text-sm text-gray-600'>
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} aria-label={link.name}>
                    {link.name}
                  </Link>
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
                  <Link
                    to={link.path}
                    className='flex items-center'
                    aria-label={link.name}>
                    {link.name}{' '}
                    <span className='ml-1' aria-hidden='true'>
                      ↗
                    </span>
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
                  <Link to={link.path} aria-label={link.name}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className='text-lg font-semibold'>Contact Us</h2>
            <ul className='mt-4 space-y-2 text-sm text-gray-600'>
              <li>
                <a
                  href='tel:+08164800735'
                  aria-label='Call us at 0816 480 0735'>
                  0816 480 0735 ↗
                </a>
              </li>
              <li>
                <a
                  href='mailto:lawalnurudeenfocus@gmail.com'
                  aria-label='Email us at hello@rise.capital'>
                  hello@rise.capital ↗
                </a>
              </li>
              <li>
                <a href='#' aria-label='Subscribe to our newsletter'>
                  Newsletter ↗
                </a>
              </li>
              <li>
                <a href='#' aria-label='Follow us on Instagram'>
                  Instagram ↗
                </a>
              </li>
              <li>
                <a href='#' aria-label='Follow us on Twitter'>
                  Twitter ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className='mt-10 text-center text-sm text-gray-600'>
          &copy; {new Date().getFullYear()} Created and completed by{' '}
          <b>Nurudeen Lawal</b> <br />
          Risevest Frontend Engineer Role
        </p>
      </div>
    </footer>
  )
}

export default Footer
