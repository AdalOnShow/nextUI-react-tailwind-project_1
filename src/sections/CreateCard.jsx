import { Button } from '@nextui-org/react';

const CreateCard = () => {
  return (
    <section className="container flex flex-col-reverse md:flex-row justify-between items-center">
      <div className="">
        <h2 className="font-bold text-[40px]">Wern Debit Card</h2>
        <p className="paragraph my-6 max-w-[420px]">More than just a card, it&apos;s a bridge to a new financial experience. Embrace the simplicity and security of spending your Cardano with the Wern Card.</p>
        <Button variant='solid' color='primary' radius='full' size='lg'>
          Create New Card
          <img src="/right-arrow.svg" alt="arrow" className='w-[22.5px] h-[16.5px]' />
        </Button>

        <p className="font-bold text-base text-[#772AB3] ml-[16px] mt-[2px]">Will be available soon</p>
      </div>

      <div className="max-w-[680px]">
        <img src="/CreateCard.svg" alt="CreateCard" className="w-full object-contain" />
      </div>
    </section>
  )
}

export default CreateCard