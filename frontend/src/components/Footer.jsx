import React from "react";
import { assets } from "../../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* this is the left section*/}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam ut
            placeat eligendi, accusamus maiores beatae obcaecati impedit. Autem
            itaque, aliquid tenetur deleniti unde atque temporibus rem
            perferendis. Alias, provident rerum!
          </p>
        </div>

        {/*this is the center section  */}
        <div className="text-xl font-medium mb-5">
          <p>COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contect us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* this is the right section */}

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-3456-78910</li>
            <li>yashbhai@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* this is the copyright section */}
      <div>
        <hr />
        <p className="py-5 text-sm  text-center">Copyright @2024 Alok-rajput--All right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
