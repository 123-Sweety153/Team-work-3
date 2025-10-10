import React from "react";

function ServicesPageHeroSection() {
  const HeroCards = [
    {
      img: "src/Pages/Services/images/HomeIcon.png",
      arrow: "src/Pages/Services/images/ArrowIcon.png",
      text: "Find Your Dream Home",
    },
    {
      img: "src/Pages/Services/images/ValueIcon.png",
      arrow: "src/Pages/Services/images/ArrowIcon.png",
      text: "Unlock Property Value",
    },
    {
      img: "src/Pages/Services/images/PropertyIcon.png",
      arrow: "src/Pages/Services/images/ArrowIcon.png",
      text: "Effortless Property Management",
    },
    {
      img: "src/Pages/Services/images/InvestmentIcon.png",
      arrow: "src/Pages/Services/images/ArrowIcon.png",
      text: "Smart Investments, Informed Decisions",
    },
  ];
  return (
    <>
      <section className="bg-[#141414]">
        <div className="max-w-[90%] px-6 md:px-8 lg:px-18 py-12 md:py-16 lg:py-20">
          <h1 className="text-white font-semibold text-[28px] md:text-[38px] lg:text-[48px] mb-5">
            Elevate Your Real Estate Experience
          </h1>
          <p className="text-[#999999]/60 font-medium text-[14px] md:text-[16px] lg:text-[18px]">
            Welcome to Estatein, where your real estate aspirations meet expert
            guidance. Explore our comprehensive range of services, each designed
            to cater to your unique needs and dreams.
          </p>
        </div>
        <div className="bg-[#141414] p-4 border-y-2 border-[#262626] shadow-[0_0_0_12px_rgba(25,25,25,1)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {HeroCards.map((item, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] rounded-xl p-4 flex flex-col items-center gap-2 relative cursor-pointer"
              >
                <img src={item.arrow} alt="" className="absolute right-3 w-[26px] h-[26px] lg:w-[34px] lg:h-[34px]" />
                <img src={item.img} alt="" className="h-[48px] w-[48px] md:h-[60px] md:w-[60px] lg:h-[82px] lg:w-[82px]"/>
                <h6 className="text-white text-center font-semibold text-[14px] md:text-[16px] lg:text-[20px ]">{item.text}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPageHeroSection;
