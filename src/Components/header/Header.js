import React, { useState } from 'react';
import Modal from '../common/Modal';
import { Link } from 'react-router-dom';
// import Logo from './Logo-remove.png'

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-[#fff4f8] p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/" className="flex">
            <img src='../Logo-remove.png' className="h-[50px]" alt="logo" />
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } w-full lg:hidden mt-2`}
        >
          <div className="text-sm">
            <button
              onClick={openModal}
              className="block mt-4 text-lg font-semibold text-[#fd92b4] lg:inline-block lg:mt-0 mr-6"
            >
              Partner with us
            </button>
            <Link
              to="/blog"
              className="block mt-4 text-lg font-semibold mr-6 text-[#fd92b4] lg:inline-block lg:mt-0"
            >
              Blogs
            </Link>
            <Link
              to="/event"
              className="block mt-4 text-lg font-semibold text-[#fd92b4] lg:inline-block lg:mt-0 mr-6"
            >
              Events
            </Link>
            <Link
              to="/about"
              className="block mt-4 text-lg font-semibold text-[#fd92b4] lg:inline-block lg:mt-0 mr-6"
            >
              About Us
            </Link>
            <Link
              to="/offers"
              className="block mt-4 text-lg font-semibold text-[#fd92b4] lg:inline-block lg:mt-0 mr-6"
            >
              Offers
            </Link>
          </div>
          <div className="mt-4">
            <input type="search" placeholder="Search" className="h-10 pl-3" />
          </div>
          <div className="mt-4">
            <a
              href="https://www.babybrands.ca/../regcon-v3-f4/"
              target="_blank"
              className="inline-block bg-[#fd92b4] ml-3 px-4 py-2 text-lg leading-none border rounded text-white border-white hover:border-transparent"
            >
              Register Now
            </a>
          </div>
        </div>
<div className='hidden md:block'>
        <div
          className={`w-full block flex-grow ml-auto lg:flex lg:items-center lg:w-auto justify-end`}
        >
          <div className="text-sm">
            <button
              onClick={openModal}
              className="block mt-4 text-lg font-semibold text-[#fd92b4] lg:inline-block lg:mt-0 mr-6"
            >
              Partner with us
            </button>
            <Link
              to="/blog"
              className="block mt-4 text-lg font-semibold mr-6 text-[#fd92b4] lg:inline-block lg:mt-0"
            >
              Blogs
            </Link>
            <Link
              to="/event"
              className="block mt-4 text-lg font-semibold text-[#fd92b4] lg:inline-block lg:mt-0 mr-6"
            >
              Events
            </Link>
            <Link
              to="/about"
              className="block mt-4 text-lg font-semibold text-[#fd92b4] lg:inline-block lg:mt-0 mr-6"
            >
              About Us
            </Link>
            <Link
              to="/offers"
              className="block mt-4 text-lg font-semibold text-[#fd92b4] lg:inline-block lg:mt-0 mr-6"
            >
              Offers
            </Link>
          </div>
          <div className="">
            <input type="search" placeholder="Search" className="h-10 pl-3" />
          </div>
          <div className="">
            <a
              href="https://www.babybrands.ca/../regcon-v3-f4/"
              target="_blank"
              className="inline-block bg-[#fd92b4] ml-3 px-4 py-2 text-lg leading-none border rounded text-white border-white hover:border-transparent"
            >
              Register Now
            </a>
          </div>
        </div>
</div>
      </nav>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="grid grid-cols-12 gap-4 py-10">
          <div className="col-span-5 text-center py-5">
            <p className="text-lg text-[#699dea] font-bold">
              Are you A Brand ?
            </p>
            <p className="pt-12">
              <Link
                to="/client"
                className="border-[#ffa8c5] text-[#ffa8c5] font-bold border-2 p-3"
              >
                Click Here
              </Link>
            </p>
          </div>
          <div className="col-span-2">
            <div className="mx-auto w-[1px] h-10 mb-3 bg-[#699dea]"></div>
            <p className="text-lg text-center text-[#699dea] font-bold">Or</p>
            <div className="mx-auto w-[1px] h-10 mt-3 bg-[#699dea]"></div>
          </div>
          <div className="col-span-5 text-center py-5">
            <p className="text-lg text-[#699dea] font-bold">
              Are you A healthcare <br /> Professional ?
            </p>
            <p className="pt-5">
              <Link
                to="/distributor"
                className="border-[#ffa8c5] font-bold text-[#ffa8c5] border-2 p-3"
              >
                Click Here
              </Link>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Header;
