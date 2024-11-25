import { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react"
import { faqContent } from './../constant/index';

const Faq = () => {

  const [selectedKeys, setSelectedKeys] = useState('1')

  return (
    <section className="max-w-[1020px] mx-auto px-4">
      <h2 className="font-bold leading-tight text-center text-[40px] pb-[64px]">FAQs</h2>

      <Accordion
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        {faqContent.map(({ id, title, content }) => (
          <AccordionItem key={id} title={title} aria-label={title} classNames={{ title: "font-bold text-[24px] text-white", subtitle: "font-poppins text-[16px] leading-6 text-secondary" }}>
            {content}
          </AccordionItem>
        ))}
      </Accordion>

    </section>
  )
}

export default Faq