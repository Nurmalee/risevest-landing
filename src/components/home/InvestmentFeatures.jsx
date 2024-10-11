import { useEffect, useRef, useState } from 'react'
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
  const [visibleFeatures, setVisibleFeatures] = useState([])
  const featureRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            if (!visibleFeatures.includes(index)) {
              setVisibleFeatures((prev) => [...prev, index])
            }
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 10% of the element is visible
      }
    )

    featureRefs.current.forEach((feature) => {
      observer.observe(feature)
    })

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      featureRefs.current.forEach((feature) => {
        observer.unobserve(feature)
      })
    }
  }, [visibleFeatures])

  return (
    <section className='section' aria-labelledby='investment-features-heading'>
      <div className='container-normal flex flex-col gap-8 md:gap-10 lg:gap-2'>
        {/* Section heading for accessibility */}
        <h2 id='investment-features-heading' className='sr-only'>
          Investment Features of Rise
        </h2>

        {/* Feature list mapping */}
        {investmentFeatures.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (featureRefs.current[index] = el)} // Assigning ref to each feature
            data-index={index} // Storing index for identifying the feature
            className={`flex flex-col items-center gap-2 transition-transform duration-700 lg:flex-row lg:gap-28 lg:odd:flex-row-reverse ${
              visibleFeatures.includes(index)
                ? 'translate-x-0 opacity-100'
                : index % 2 === 0
                  ? 'translate-x-[200px] opacity-0' // Even index: animate in from right
                  : 'translate-x-[-200px] opacity-0' // Odd index: animate in from left
            }`}>
            {/* Feature illustration */}
            <div className='green-bord flex max-h-80 max-w-80 flex-1 items-center justify-center'>
              <img
                alt={`Illustration depicting: ${feature.title}`}
                src={feature.illustration}
                className={`${index % 2 === 0 ? `lg:-rotate-3` : `lg:rotate-3`} transform rounded-lg object-contain transition-transform duration-300 ${index % 2 === 0 ? `lg:hover:-rotate-6` : `lg:hover:rotate-6`} `}
              />
            </div>

            {/* Feature text content: title, description, and call-to-action */}
            <div className='set-paragraph flex flex-1 flex-col'>
              <h3 className='text-2xl font-semibold tracking-tighter dark:text-white'>
                {feature.title}
              </h3>
              <p className='w-full text-base tracking-tighter text-gray-600 lg:text-lg dark:text-gray-300'>
                {feature.description}
              </p>

              <button
                className='mt-5 text-rise-green'
                aria-label={`Start investing in ${feature.title}`}>
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
