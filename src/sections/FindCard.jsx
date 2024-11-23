import { Button } from '@nextui-org/react';

const FindCard = () => {
  return (
    <section className="container flex flex-col md:flex-row justify-between items-center">
      <div className="w-1/2 max-w-[600px]">
        <img src="/FindCard.svg" alt="CreateCard" className="w-full object-contain" />
      </div>

      <div className="mt-8 md:mt-0 w-10/12 md:w-1/2">
        <h2 className="font-bold text-3xl md:text-[40px]">Find the Perfect Card for You</h2>
        <p className="paragraph my-6 max-w-[420px]">Unlocking the Power of Crypto, Both Virtually and Physically
          Manage your crypto effortlessly and spend it seamlessly with Wern. Our virtual card allows for instant and secure online transactions, while the physical Wern Card empowers you to convert and spend your crypto at millions of merchants worldwide. Experience the flexibility and convenience of both options, all within the secure and user-friendly Wern ecosystem.</p>
        <Button variant='solid' color='primary' radius='full' size='lg'>Learn More</Button>
      </div>
    </section>
  )
}

export default FindCard