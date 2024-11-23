import { offerCard } from './../constant/index';

const Offer = () => {
  return (
    <section className="container space-y-[64px]">
      <h2 className="font-bold text-[40px] text-center">What do we offer?</h2>

      <div className="flex flex-wrap items-center justify-between">
        {offerCard.map(({ img, title, desc }, i) => (
          <div key={i} className="flex justify-start items-start gap-6">
            <div className="size-[66px] rounded-3xl bg-[#3D3F54] flex items-center justify-center">
              <img src={img} alt={title} className="size-[34px]" />
            </div>
            <div className=" max-w-[270px]">
              <h4 className="font-medium text-2xl">{title}</h4>
              <p className="paragraph">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Offer