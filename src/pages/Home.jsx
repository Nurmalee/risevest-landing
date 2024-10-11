import InvestmentFeatures from '../components/home/InvestmentFeatures'
import InvestmentOptions from '../components/home/InvestmentOptions'
import { DownloadApp } from '../components/home/DownloadApp'
import Testimonials from '../components/home/Testimonials'
import Regulations from '../components/home/Regulations'
import StartSaving from '../components/home/StartSaving'
import Banner from '../components/home/Banner'
import JoinUs from '../components/home/JoinUs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='flex flex-col gap-5'>
      <Banner />
      <InvestmentFeatures />
      <InvestmentOptions />
      <StartSaving />
      <Regulations />
      <Testimonials />
      <JoinUs />
      <DownloadApp />
      <Footer />
    </div>
  )
}

export default Home
