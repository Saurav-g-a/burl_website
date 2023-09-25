import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {

  return (
    <section className=" bg-[#fff4f8] md:mx-12 mx-5 pt-20 mb-10">
      <div className="grid grid-cols-12 gap-6 md:px-16 px-5">
        <div className="md:col-span-2 col-span-6">
          <h3 className="text-lg font-bold text-[#838282]">Who we are?</h3>
          <p className="py-3 text-[#838282]">

             <Link to="/about">About us</Link>
          </p>
        </div>
        <div className="md:col-span-2 col-span-6">
          <h3 className="text-lg font-bold text-[#838282]">Support</h3>
          <ul>
            <li className="py-3 text-[#838282]">
            <Link to="/client#faq">Client FAQ</Link>
            </li>
            <li className="pb-3 text-[#838282]">
            <Link to="">Healthcare FAQ</Link>
            </li>
            <li className="pb-3 text-[#838282]">
            <Link to="">Terms of use</Link>
            </li>
            <li className="pb-3 text-[#838282]">
            <Link to="">Contest Rules</Link>
            </li>
            <li className="pb-3 text-[#838282]">
            <Link to="">Privacy policy</Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2 col-span-12">
          <h3 className="text-lg font-bold text-[#838282]">SITE MAP</h3>
          <ul>
            <li className="py-3 text-[#838282]">
            <Link to="">Partner with us</Link>
            </li>
            <li className="pb-3 text-[#838282]">
            <Link to="">Healthcare</Link>
            </li>
            <li className="pb-3 text-[#838282]">
            <Link to="/blog">Blogs</Link>
            </li>
            <li className="pb-3 text-[#838282]">
            <Link to="/event">Events</Link>
            </li>
            <li className="pb-3 text-[#838282]">
            <Link to="/offers">Offers</Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-6 col-span-12">
          <h2 className="text-2xl mb-4 text-[#6f6f6f] font-bold uppercase">
            Baby Brands Gift club
          </h2>
          <p className="text-base mb-5">
            In addition to distributing Gift Bags, our Gift Club offers coupons,
            information, shopping and oppartunities to win Gift and Prize! Gift
            Baskets, Red Wagons and Social Media Giveaways keep us feeling like
            Santa all year long.
          </p>
          <Link
            to="https://www.babybrands.ca/../regcon-v3-f4/"
            target="_blank"
            className="bg-[#fd92b4] tex-base text-white font-semibold rounded-lg py-3 px-5"
          >
            Register now
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 bg-[#fd92b4] py-10 mt-10">
        <div className="md:col-span-4 col-span-12">
          <div className="text-center mb-3">
            <FaMapMarkerAlt className="h-8 w-8 text-white mx-auto mb-3" />
            <p className="text-white text-base">2121 McCowan Rd.</p>
            <p className="text-white text-base">Scarborough, ON M1S 3Y6</p>
          </div>
        </div>
        <div className="md:col-span-4 col-span-12">
          <div className="text-center mb-3">
            <FaPhoneAlt className="h-8 w-8 text-white mx-auto mb-3" />
            <p className="text-white text-base">
              Phone:  <Link to="tel:905-803-9227"> 905-803-9227 </Link>{" "}
            </p>
            <p className="text-white text-base">
              Fax:  <Link to="tel:905-803-9874"> 905-803-9874 </Link>
            </p>
          </div>
        </div>
        <div className="md:col-span-4 col-span-12">
          <div className="text-center mb-3">
            <FaEnvelope className="h-8 w-8 text-white mx-auto mb-3" />
            <p className="text-white text-base">
               <Link to="mailto:Info@babybrands.ca">Info@babybrands.ca </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between py-10 md:px-16 px-5">
      <Link to={'/'}> <img src="../logo-remove.png" className="w-20" alt="logo" /></Link>
        <div className="flex  self-center">
          <div className="border border-black rounded-full p-2 cursor-pointer">
            <Link
              to="https://www.linkedin.com/company/baby-brands-gift-club/"
              target="_blank"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </Link>
          </div>
          <div className="border border-black rounded-full p-2 mx-5 cursor-pointer">
            <Link
              to="https://www.facebook.com/babybrandsgiftclub1"
              target="_blank"
            >
              <FaFacebookF className="w-6 h-6" />
            </Link>
          </div>
          <div className="border border-black rounded-full p-2 cursor-pointer">
            <Link
              to="https://www.instagram.com/babybrandsgiftclub/?hl=en"
              target="_blank"
            >
              <FaInstagram className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
