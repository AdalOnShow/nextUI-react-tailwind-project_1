import { footerLinks } from "../constant"

const Footer = () => {
  return (
    <section className="bg-[#2928343D] backdrop-blur-md backdrop-brightness-[.9] pt-[60px] pb-[135px]">
      <div className="container flex flex-wrap gap-8">
        <div className="min-w-[392px]">
          <a href="/" className="">
            <img src="/footer-logo.svg" alt="footer logo" className="w-[162px] h-6 object-contain" />
          </a>
          <p className="paragraph pt-2.5 max-w-[287px]">Discover the power of our secure and rewarding credit cards</p>
        </div>

        {footerLinks.map(({ id, title, links }) => (
          <div key={id} className="min-w-[170px] flex flex-col justify-start items-start gap-2.5">

            <h4 className="font-bold text-[16px] leading-6 pb-4">{title}</h4>

            {
              links.map(({ url, title }) => (
                <a href={url} key={id} className="text-[16px] text-secondary hover:text-primary">
                  {title}
                </a>
              ))
            }
          </div>
        ))}
      </div>
    </section>
  )
}

export default Footer