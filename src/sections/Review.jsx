/* eslint-disable no-unused-vars */
import { ReviewCard } from "../constant"

const Review = () => {
  return (
    <section className="container flex flex-wrap justify-center items-center gap-8">
      {
        ReviewCard.map(({ id, name, title, img, review }) => (
          <div key={id} className="py-12 px-6 space-y-8 rounded-[32px] max-w-[380px] backdrop-blur-md backdrop-brightness-[.9]">
            <div className="size-14 rounded-full bg-[#3D3F54] flex justify-center items-center">
              <img src="/quot.svg" alt="quot image" className="size-6" />
            </div>
            <p className="font-poppins text-base">{review}</p>
            <div className="flex justify-start items-start gap-2">
              <img src={img} alt={name} className="size-12 rounded-full" />
              <div className="">
                <p className="font-medium text-base">{name}</p>
                <p className="text-[12px] text-secondary">{title}</p>
              </div>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default Review