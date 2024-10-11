import fixedIncome from '../../assets/fixed-income.png'
import realEstate from '../../assets/real-estate.png'
import stocks from '../../assets/stocks.png'

const investmentOptions = [
  {
    title: 'Stocks',
    description:
      'We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.',
    historicalReturns: '14% per annum',
    riskLevel: 'Medium',
    icon: stocks,
    background: '#FFF4F0',
  },
  {
    title: 'Real Estate',
    description:
      'Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.',
    historicalReturns: '14% per annum',
    riskLevel: 'Medium',
    icon: realEstate,
    background: '#F6F2FF',
  },
  {
    title: 'Fixed Income',
    description:
      'A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.',
    historicalReturns: '14% per annum',
    riskLevel: 'Medium',
    icon: fixedIncome,
    background: '#ECFEFE',
  },
]

const InvestmentOptions = () => {
  return (
    <section className='section' aria-labelledby='investment-options-heading'>
      {/* Container for the investment options */}
      <div className='container-normal text-center'>
        {/* Main section heading for accessibility */}
        <h2
          id='investment-options-heading'
          className='text-3xl font-semibold tracking-tighter dark:text-white'>
          Asset Classes
        </h2>

        {/* Short description of asset classes */}
        <p className='dark:text-white'>
          It&apos;s your money, choose where you invest it
        </p>

        {/* Flex container for the different investment options */}
        <div className='flex flex-col gap-8 py-10 lg:flex-row'>
          {investmentOptions.map((option, index) => (
            <div
              key={index}
              className='flex flex-1 flex-col items-center gap-12 rounded-lg border-2 border-gray-200 bg-white text-center shadow-sm hover:shadow-lg dark:bg-gray-100'>
              {/* Image container with dynamic background color */}
              <div
                className='relative h-32 w-full rounded-t-lg'
                style={{ background: option.background }}>
                {/* Icon in a centered circular container */}
                <div className='absolute -bottom-16 left-1/2 z-10 mb-4 flex h-24 w-24 -translate-x-1/2 transform items-center justify-center rounded-full bg-white'>
                  <img
                    src={option.icon}
                    alt={`Icon representing ${option.title} investment`}
                    className='p-3'
                  />
                </div>
              </div>

              {/* Textual details and button */}
              <div className='flex flex-1 flex-col items-center justify-between gap-3 p-3'>
                <div>
                  {/* Title of the investment option */}
                  <h3 className='mb-2 text-xl font-semibold tracking-tighter'>
                    {option.title}
                  </h3>

                  {/* Description of the investment option */}
                  <p className='mb-4 text-base tracking-tighter text-gray-600 lg:text-lg'>
                    {option.description}
                  </p>

                  {/* Historical returns of the investment */}
                  <p className='text-sm font-thin text-gray-500 lg:text-base'>
                    Historical returns:{' '}
                    <span className='font-normal text-black'>
                      {option.historicalReturns}
                    </span>
                  </p>

                  {/* Risk level of the investment */}
                  <p className='text-sm font-thin text-gray-500 lg:text-base'>
                    Risk Level:{' '}
                    <span className='font-normal text-black'>
                      {option.riskLevel}
                    </span>
                  </p>
                </div>

                {/* Call to action button */}
                <button
                  className='mt-4 bg-transparent px-4 py-2 text-rise-green transition'
                  aria-label={`Learn how ${option.title} investment works`}>
                  Learn how {option.title} works &#10170;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InvestmentOptions
