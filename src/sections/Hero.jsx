import { Button } from '@nextui-org/react'

const Hero = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row gap-10 lg:gap-2.5 xl:gap-8 justify-between items-center container">
      <div className="space-y-[31px] sm:w-1/2">
        <h1 className="font-bold leading-tight text-4xl xl:text-5xl">Spend your Cardano <br className='hidden sm:block' /> anywhere, anytime.</h1>
        <p className="paragraph w-4/5">Our user-friendly platform enables businesses and individuals to seamlessly convert and spend their crypto for everyday purchases.</p>
        <Button variant='solid' color='primary' radius='full' size='lg'>
          Get Started
          <img src="/right-arrow.svg" alt="arrow" className='w-[22.5px] h-[16.5px]' />
        </Button>
      </div>
      <img src="/hero-card.png" alt="hero image" className="max-w-[800px] md:max-w-[310px] lg:max-w-[1000px] w-10/12 sm:w-1/2 relative 2xl:-right-40" />
    </section>
  )
}

export default Hero