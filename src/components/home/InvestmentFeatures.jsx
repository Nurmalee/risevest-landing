import caseThreeIllustration from '../../assets/caseThreeIllustration.png'
import caseFourIllustration from '../../assets/caseFourIllustration.png'
import caseOneIllustration from '../../assets/caseOneIllustration.png'
import caseTwoIllustration from '../../assets/caseTwoIllustration.png'

const investmentFeatures = [
  {
    title: 'Invest your money in dollars',
    description:
      "No two people are the same and everyone's financial goals are different. By holding your investments in a stable currency, your money grows more over time and retains its value.",
    illustration: caseOneIllustration,
  },
  {
    title: "Choose what's best for you",
    description:
      'Unlike other platforms, Rise lets you pick between stocks, US real estate, and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place.',
    illustration: caseTwoIllustration,
  },
  {
    title: 'Set goals and reach them',
    description:
      'You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budget, or create a goal of your own and invest periodically to achieve them.',
    illustration: caseThreeIllustration,
  },
  {
    title: "We remember so you don't have to",
    description:
      'Our Auto-invest feature makes it easy to stay consistent, even if you forget. Set a funding amount, frequency, and payment method, and Rise will automatically fund your investment on schedule.',
    illustration: caseFourIllustration,
  },
]

const InvestmentFeatures = () => {
  return (
    <section className='section'>
      <div className='container-normal flex flex-col gap-8 md:gap-10 lg:gap-2'>
        {investmentFeatures.map((feature, index) => (
          <div
            key={index}
            className='flex flex-col items-center gap-2 lg:flex-row lg:gap-28 lg:odd:flex-row-reverse'>
            <div className='green-bord flex max-h-96 max-w-96 flex-1 items-center justify-center'>
              <img
                src={feature.illustration}
                className='object-contain'
                alt={feature.title}
              />
            </div>

            <div className='set-paragraph flex flex-1 flex-col'>
              <h2 className='text-2xl font-semibold tracking-tighter'>
                {feature.title}
              </h2>
              <p className='w-full text-base tracking-tighter text-gray-600 lg:text-lg'>
                {feature.description}
              </p>

              <button className='mt-5 text-rise-green'>
                Start Investing Now &#10170;
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default InvestmentFeatures
