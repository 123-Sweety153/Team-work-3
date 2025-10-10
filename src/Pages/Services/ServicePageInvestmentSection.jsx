import React from "react";

function ServicePageInvestmentSection() {
  const InvestmentCards = [
    {
        img: "src/Pages/Services/images/ValueCard1.png",
        head: "Market Insight",
        text: "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions"
    },
     {
        img: "src/Pages/Services/images/InvestmentCard2.png",
        head: "ROI Assessment",
        text: "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments"
    },
     {
        img: "src/Pages/Services/images/InvestmentCard3.png",
        head: "Customized Strategies",
        text: "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs"
    },
     {
        img: "src/Pages/Services/images/InvestmentIcon.png",
        head: "Diversification Mastery",
        text: "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations"
    }
];
  return (
    <>
      <section className="bg-[#141414]">
        <div className="max-w-[90%] py-12 md:py-16 lg:py-20 mx-auto">
          <img src="src/Pages/Services/images/Stars.png" alt="stars" />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            <div className="flex flex-col">
              <h2 className="text-white font-semibold text-[28px] md:text-[38px] lg:text-[48px] mb-5">Smart Investments, Informed Decisions</h2>
              <p className="text-[#999999]/60 font-medium text-[14px] md:text-[16px] lg:text-[18px] mb-4 lg:mb-10">
                Building a real estate portfolio requires a strategic approach.
                Estatein's Investment Advisory Service empowers you to make
                smart investments and informed decisions.
              </p>
              <div className="md:col-span-2 bg-[#1A1A1A] rounded-xl p-4 md:p-8 flex flex-col gap-2 lg:gap-6 cursor-pointer border-1 border-[#262626] bg-[url(src/Pages/Services/images/ValueBgImage.png)]">
                  <h3 className="text-white font-semibold text-[18px] md:text-[20px] lg:text-[24px]">
                    Unlock Your Investment Potential
                  </h3>
                <p className="text-[#999999]/60 font-medium text-[14px] md:text-[16px] lg:text-[18px]">
                  Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
                </p>
                <button className="text-white hover:bg-[#703BF7] transition font-medium text-[14px] md:text-[16px] lg:text-[18px] px-4 py-3 rounded-xl border-1 border-[#262626] bg-[#141414] w-full md:w-auto cursor-pointer">
                    Learn More
                  </button>
              </div>
            </div>
            <div className="mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {InvestmentCards.map((item, index)=> (
                        <div
                key={index}
                className="bg-[#1A1A1A] rounded-xl p-4 md:p-8 flex flex-col gap-2 lg:gap-6 cursor-pointer border-1 border-[#262626] shadow-[0_0_0_12px_rgba(25,25,25,1)]"
              >
                <div className="flex items-center gap-3 md:gap-4">
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
                </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicePageInvestmentSection;
