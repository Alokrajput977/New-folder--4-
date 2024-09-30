import React from "react";
import { assets } from "../../assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <div className=" text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6  md:w-2/4 text-sm text-gray-600">
          <p>
            With National Doctors Day coming up on Saturday, March 30th, 2024,
            now’s the perfect time to start prepping your favorite Doctors Day
            quotes to show appreciation.{" "}
          </p>
          <p>
            Saying thanks on Doctor’s Day is important because it encourages and
            motivates our MD’s. 58% of physicians often have feelings of
            burnout. Take advantage of the opportunity to thank the healthcare
            professionals who have helped keep our families and friends safe and
            healthy.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            An excellent way to celebrate National Doctor’s Day is by giving an
            online card with a message of gratitude for their hard work in the
            healthcare industry. Try including heartfelt wishes, quotes, or
            funny messages to help patients say thank you Remember, you can
            personalize the following messages further to make them more special
            for the special doctors in your life.{" "}
          </p>
        </div>
      </div>

      <div className="text-xl my-4 ">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:text-white hover:bg-primary transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifeStyle
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:text-white hover:bg-primary transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>
            Healing is a matter of time, but it is sometimes also a matter of
            opportunity.” – Hippocrates.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:text-white hover:bg-primary transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>
            “Wherever the art of Medicine is loved, there is also a love of
            Humanity.” -Hippocrates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
