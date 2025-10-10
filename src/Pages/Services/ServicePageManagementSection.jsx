import React from "react";

function ServicePageManagementSection() {
  const ValueCards = [
    {
      img: "src/Pages/Services/images/ValueCard1.png",
      head: "Tenant Harmony",
      text: "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
    },
    {
      img: "src/Pages/Services/images/ValueCard2.png",
      head: "Maintenance Ease",
      text: "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
    },
    {
      img: "src/Pages/Services/images/ValueCard3.png",
      head: "Financial Peace of Mind",
      text: "Managing property finances can be complex. Our financial experts take care of rent collection",
    },
    {
      img: "src/Pages/Services/images/ValueCard4.png",
      head: "Legal Guardian",
      text: "Stay compliant with property laws and regulations effortlessly.",
    },
  ];
  return (
    <>
      <section className="bg-[#141414]">
        <div className="max-w-[90%] px-6 md:px-8 lg:px-18 py-12 md:py-16 lg:py-20">
          <img src="src/Pages/Services/images/Stars.png" alt="stars" />
          <h2 className="text-white font-semibold text-[28px] md:text-[38px] lg:text-[48px] mb-5">
            Effortless Property Management
          </h2>
          <p className="text-[#999999]/60 font-medium text-[14px] md:text-[16px] lg:text-[18px]">
            Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you.
          </p>
        </div>
        <div className="max-w-[90%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ValueCards.map((item, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] rounded-xl p-4 md:p-8 flex flex-col gap-2 lg:gap-6 cursor-pointer border-1 border-[#262626]"
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
            <div className="md:col-span-2 bg-[#1A1A1A] rounded-xl p-4 md:p-8 flex flex-col gap-2 lg:gap-6 cursor-pointer border-1 border-[#262626] bg-[url(src/Pages/Services/images/ValueBgImage.png)]">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <h3 className="text-white font-semibold text-[18px] md:text-[20px] lg:text-[24px]">Experience Effortless Property Management</h3>
                <button className="text-white hover:bg-[#703BF7] transition font-medium text-[14px] md:text-[16px] lg:text-[18px] px-4 py-3 rounded-xl border-1 border-[#262626] bg-[#141414] w-full md:w-auto cursor-pointer">Learn More</button>
              </div>
              <p className="text-[#999999]/60 font-medium text-[14px] md:text-[16px] lg:text-[18px]">Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicePageManagementSection;
