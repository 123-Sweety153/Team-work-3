import React from "react";
import LastSectionBg1 from "./images/LastSectionBg1.png";
import LastSectionBg2 from "./images/LastSectionBg2.png";

function ServicePageLastSection() {
  return (
    <>
      <section
        className="bg-[#141414] border-y-2 border-[#262626]"
        style={{
          backgroundImage: `url(${LastSectionBg1}), url(${LastSectionBg2})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "left top, right bottom",
        }}
      >
        <div className="max-w-[90%] py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-16 mx-auto">
          <div className="lg:max-w-[70%]">
            <h2 className="text-white font-semibold text-[28px] md:text-[38px] lg:text-[48px] mb-5">
              Start Your Real Estate Journey Today
            </h2>
            <p className="text-[#999999]/60 font-medium text-[14px] md:text-[16px] lg:text-[18px]">
              Your dream property is just a click away. Whether you're looking
              for a new home, a strategic investment, or expert real estate
              advice, Estatein is here to assist you every step of the way. Take
              the first step towards your real estate goals and explore our
              available properties or get in touch with our team for
              personalized assistance.
            </p>
          </div>
          <button className="bg-[#703BF7] hover:bg-[#703BF7]/70 px-4 py-3 rounded-xl cursor-pointer text-white font-medium text-[14px] md:text-[16px] lg:text-[18px] w-full md:w-auto">
            Explore Properties
          </button>
        </div>
      </section>
    </>
  );
}

export default ServicePageLastSection;
