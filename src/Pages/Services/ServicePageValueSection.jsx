import React from "react";

function ServicePageValueSection() {
  const ValueCards = [
    {
      img: "src/Pages/Services/images/ValueCard1.png",
      head: "Valuation Mastery",
      text: "Discover the true worth of your property with our expert valuation services.",
    },
    {
      img: "src/Pages/Services/images/ValueCard2.png",
      head: "Strategic Marketing",
      text: "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
    },
    {
      img: "src/Pages/Services/images/ValueCard3.png",
      head: "Negotiation Wizardry",
      text: "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
    },
    {
      img: "src/Pages/Services/images/ValueCard4.png",
      head: "Closing Success",
      text: "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
    },
  ];
  return (
    <>
      <section className="bg-[#141414]">
        <div className="max-w-[90%] px-6 md:px-8 lg:px-18 py-12 md:py-16 lg:py-20">
          <img src="src/Pages/Services/images/Stars.png" alt="stars" />
          <h2 className="text-white font-semibold text-[28px] md:text-[38px] lg:text-[48px] mb-5">
            Unlock Property Value
          </h2>
          <p className="text-[#999999]/60 font-medium text-[14px] md:text-[16px] lg:text-[18px]">
            Selling your property should be a rewarding experience, and at
            Estatein, we make sure it is. Our Property Selling Service is
            designed to maximize the value of your property, ensuring you get
            the best deal possible. Explore the categories below to see how we
            can help you at every step of your selling journey.
          </p>
        </div>
        <div className="max-w-[90%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ValueCards.map((item, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] rounded-xl p-4 md:p-8 flex flex-col gap-2 lg:gap-6 cursor-pointer border-1 border-[#262626]"
              >
                <div className="flex items-center gap-4">
                  <img src={item.img} alt="" className="h-[48px] w-[48px] md:h-[60px] md:w-[60px] lg:h-[82px] lg:w-[82px]" />
                  <h4 className="text-white font-semibold text-[18px] md:text-[20px] lg:text-[24px]">
                    {item.head}
                  </h4>
                </div>
                <p className="text-[#999999]/60 font-medium text-[14px] md:text-[16px] lg:text-[18px]">
                  {item.text}
                </p>
              </div>
            ))}
            <div className="md:col-span-2 bg-[#1A1A1A] rounded-xl p-4 md:p-8 flex flex-col gap-2 lg:gap-6 cursor-pointer border-1 border-[#262626] bg-[url(src/Pages/Services/images/ValueBgImage.png)]">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <h3 className="text-white  font-semibold text-[18px] md:text-[20px] lg:text-[24px]">Unlock the Value of Your Property Today</h3>
                <button className="text-white hover:bg-[#703BF7] transition font-medium text-[14px] md:text-[16px] lg:text-[18px] px-4 py-3 rounded-xl border-1 border-[#262626] bg-[#141414] w-full md:w-auto cursor-pointer">Learn More</button>
              </div>
              <p className="text-[#999999]/60 font-medium text-[14px] md:text-[16px] lg:text-[18px]">Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicePageValueSection;
