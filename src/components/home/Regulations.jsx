const Regulations = () => {
  return (
    <section
      className='flex flex-col items-center justify-center gap-3 bg-custom-radial-gradient p-10 py-20 text-center md:py-28'
      aria-labelledby='regulations-heading'>
      {/* Section heading describing the regulations */}
      <h2
        className='text-3xl font-semibold tracking-tighter dark:text-rise-green'
        id='regulations-heading'>
        How we are regulated
      </h2>

      {/* Paragraph with detailed explanation about regulations */}
      <p className='mx-auto w-full text-base tracking-tighter text-gray-800 sm:w-[80%] lg:w-[50%] lg:text-lg'>
        Rise is registered and regulated both in the US and in Nigeria. Our team
        is made up of US-registered advisers. Our Nigerian users are covered by
        our SEC-licensed trustees, ARM Trustees, and all of our assets are held
        with regulated third parties in all relevant jurisdictions.
      </p>
    </section>
  )
}

export default Regulations
