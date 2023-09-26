import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Carousel from "react-multi-carousel";
import Accordion from "../common/Accordion";
import "react-multi-carousel/lib/styles.css";
import Modal from "../common/Modal";
import { faqs, testimonial } from "../api/all_api";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL
console.log(API_URL)

axios.defaults.baseURL = API_URL
function Client() {
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [faq, setFaq] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (event) => {
    const fd = new FormData();
    fd.append("first_name", fname);
    fd.append("last_name", lname);
    fd.append("email", email);
    fd.append("phone_number", phone);
    fd.append("company_name", company);
    fd.append("subject", subject);
    event.preventDefault();

    axios.post("contact_us", fd).then((res) => {
      console.log(res);
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAccordionToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(
    () => {
      testimonial()
        .then((result) => {
          setTestimonials(result);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    faqs()
      .then((result) => {
        setFaq(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
  );
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h3 className="text-center text-3xl font-semibold mt-5 text-[#fd92b4]">
          Contact US
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-8 gap-y-4 py-8 px-8">
            <div>
              <label className="py-5">Your First Name *</label> <br />
              <input
                type="text"
                placeholder="Your First Name"
                name="first_name"
                onChange={(e) => setFname(e.target.value)}
                className="h-10 mt-3 pl-3 border-2 w-full border-pink"
              />
            </div>
            <div>
              <label className="py-5">Your Last Name</label> <br />
              <input
                type="text"
                placeholder="Your Last Name"
                name="last_name"
                onChange={(e) => setLname(e.target.value)}
                className="h-10 mt-3 pl-3 border-2 w-full border-pink"
              />
            </div>
            <div>
              <label className="py-5">Your Email</label> <br />
              <input
                type="email"
                placeholder="Your Email address"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="h-10 mt-3 pl-3 border-2 w-full border-pink"
              />
            </div>
            <div>
              <label className="py-5">Your Phone Number</label>
              <br />
              <input
                type="number"
                placeholder="Your Phone Number"
                name="phone_number"
                onChange={(e) => setPhone(e.target.value)}
                className="h-10 mt-3 pl-3 border-2 w-full border-pink"
              />
            </div>
            <div className="col-span-2">
              <label className="py-5">Company Name</label>
              <br />
              <input
                type="text"
                placeholder="Your Company Name"
                name="company_name"
                onChange={(e) => setCompany(e.target.value)}
                className="h-10 mt-3 pl-3 border-2 w-full border-pink"
              />
            </div>
            <div className="col-span-2">
              <label className="py-5">Subject</label>
              <br />
              <textarea
                rows={4}
                name="subject"
                onChange={(e) => setSubject(e.target.value)}
                className="mt-3 pl-3 border-2 w-full border-pink"
              ></textarea>
            </div>
          </div>
          <p className="mt-1 px-8 text-center">
            <button
              type="submit"
              className="bg-[#fd92b4] text-white px-4 py-3 text-lg"
            >
              Submit
            </button>
          </p>
        </form>
      </Modal>

      <Header />
      <section className="md:px-16 px-5">
        <div className="grid grid-cols-12 gap-8 py-10">
          <div className="md:col-span-6 col-span-12">
            <img src="../client/client.jpg" alt="Client Image" />
          </div>
          <div className="md:col-span-6 col-span-12">
            <h3 className="font-semibold text-[#699dea] text-3xl py-5">
              Why include your product in our Sample Bag?{" "}
            </h3>
            <p>
              Placing a sample in our gift bag puts the product into parent’s
              hands. Having that product at their fingertips lets them try the
              product, enjoy it, then purchase the product! Not only we are
              creating consumer product placement and also allowing them to
              experience it at the right time.
            </p>
            <p className="mt-5">
              <a
                onClick={openModal}
                className="cursor-pointer border-2 text-[#fd92b4] font-semibold mt-5 px-4 py-3 text-lg"
              >
                Contact Us
              </a>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8 py-10">
          <div className="md:col-span-6 col-span-12">
            <h3 className="font-semibold text-[#699dea] text-3xl py-5">
              What is a Baby Brands Gift Bag?{" "}
            </h3>
            <p>
              The Baby Brands Gift Club creates a gift bag of items for new
              parents which contains samples, brochures and coupons for mothers
              to use themselves or for their newborns. We distribute the bag
              through healthcare professionals whom they trust and rely on for
              guidance. Brands trust starts when Doctors, Doulas, Nurses or an
              Educators offers product samples and explain why they should be
              used and how to use them while they are expecting and after their
              bundle of joy is born.
            </p>
            <p className="mt-5">
               <Link to="" className="bg-[#fd92b4] text-white px-4 py-3 text-lg">
                Get Quote
                </Link>
            </p>
          </div>
          <div className="md:col-span-6 col-span-12">
            <img src="../client/client3.png" alt="Baby Brands Gift Bag" />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8 py-10">
          <div className="md:col-span-6 col-span-12">
            <img
              src="../client/client4.png"
              className="w-full"
              alt="BUYER’s GUIDE"
            />
          </div>
          <div className="md:col-span-6 col-span-12">
            <h1 className="font-semibold text-[#699dea] text-4xl py-5">
              BUYER’s GUIDE
            </h1>
            <h3 className="font-semibold text-[#699dea] text-3xl py-5">
              Lookbook for Brands
            </h3>
            <p>
              Buyer’s guide helps brand which cannot be accommodated in the gift
              bags due to several reasons such as size, production cost and
              transportation reach and engage with parents all across Canada.
            </p>
            <p>
              Our reliable distribution network guarantees extensive brand and
              product awareness, while our content keeps parents highly engaged
              and informed. Seize this unmissable chance to connect with your
              target audience and leave a lasting impression.
            </p>
            <p className="mt-5">
              <Link
                to="buyer"
                className=" bg-[#fd92b4] text-white  px-4 py-3 text-lg"
              >
                Learn More
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="md:px-16 px-5">
        <div className="bg-[#ffecf2]">
          <h1 className="font-semibold text-[#699dea] md:text-3xl text-xl py-5 text-center">
            By joining our program, you receive the following benefits:{" "}
          </h1>

          <div className="grid grid-cols-12 md:gap-12 gap-4 px-10 py-5">
            <div className="md:col-span-4 col-span-12 bg-white rounded-full text-center md:px-16 md:py-16 p-5">
              <p className="md:text-lg text-base">
                Cost-effective marketing at the lowest price connects you to
                your target audience.
              </p>
            </div>
            <div className="md:col-span-4 col-span-12 bg-white rounded-full text-center md:px-16 md:py-16 p-5 ">
              <p className="md:text-lg text-base">
                Immediate consumer confidence in your product through the
                trusted healthcare community.
              </p>
            </div>
            <div className="md:col-span-4 col-span-12 bg-white rounded-full text-center md:px-16 md:py-16 p-5 ">
              <p className="md:text-lg text-base">
                Your target audience sharing their experiences with other
                consumers about their satisfaction with your product.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-16 px-5">
        <div className="">
          <h1 className="font-semibold text-[#699dea] text-3xl py-5 text-center">
            Our Stats
          </h1>
          <ul className="list-disc ml-10">
            <li className="py-3">
              80% of bags distributed are given to first time moms{" "}
            </li>
            <li className="pb-3">
              98% of our bags are distributed through healthcare centers
              throughout Canada
            </li>
            <li className="pb-3">
              We distribute over 264,700 sample bags every year
            </li>
            <li className="pb-3">100% of our consumers open the gift bags.</li>
          </ul>
          <p>
            43% of the estimated 359,533 births in Canada are to first-time
            parents. 85% of these parents are between the ages of 25 – 35.
          </p>
          <p>
            These parents are getting our gift bags and will continue to use
            your products as their families grow. Why lose a large portion of
            your target audience when you can deliver your product and have an
            OBGYN do the market for you? Think of the return you get by
            providing a product for our gift bag.
          </p>
          <p>
            85% of your target audience is in the prime age of childbearing and
            will have one to two more children. This single group purchases many
            baby products in just one year. A large market will be introduced to
            your products in the coming year.
            <br />
            New and expecting mothers are likelier to purchase products
            recommended by healthcare providers than magazines and TV ads. You
            are saving money while building brand loyalty. Is that an
            opportunity you can afford to miss?
          </p>
        </div>
      </section>

      <section className="md:px-16 px-5 my-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="md:col-span-6 col-span-12">
            <img
              src="../client/client1.jpg"
              className="w-full h-[300px]"
              alt="Our Healthcare Distributors"
            />
          </div>
          <div className="md:col-span-6 col-span-12 self-center">
            <h3 className="font-semibold text-[#699dea] text-3xl py-5">
              Our Healthcare Distributors
            </h3>
            <p>
              We’ve over 1700 Hospitals, Doctors Offices, Doulas/Midwives,
              OBGYNs, Nursing Stations, Clinic and other medical-related Centres
              assisting us in distributing Gift Bags to new and expecting
              parents all across Canada.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8 py-10">
          <div className="md:col-span-6 col-span-12 self-center">
            <h3 className="font-semibold text-[#699dea] text-3xl py-5">
              Canada wide Distribution
            </h3>
            <p>These are the following distributors:</p>
            <p>
              Hospitals, Doctors Offices, Doulas/Midwives, OBGYNs, Nursing
              Stations, Clinics and other medical-related Centres
            </p>
          </div>
          <div className="md:col-span-6 col-span-12">
            <img src="../client/client2.jpg" alt="Canada wide Distribution" />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div className="md:col-span-6 col-span-12">
            <img src="../client/client6.png" alt="Email Marketing" />
          </div>
          <div className="md:col-span-6 col-span-12 self-center">
            <h3 className="font-semibold text-[#699dea] text-3xl py-5">
              Email Marketing Campaign{" "}
            </h3>
            <p>
              Our Email marketing campaigns allows consumers to connect with
              your brands, services and products to take them to next step.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8 py-10">
          <div className="md:col-span-6 col-span-12 self-center">
            <h3 className="font-semibold text-[#699dea] text-3xl py-5">
              Benefits of Baby Show Exhibitions
            </h3>
            <p>
              We will help you achieve this goal by placing your Product in the
              Babybrands show bag which will be given to new and expecting moms.
              We exhibit at various baby expos all over Canada to support our
              brands in connecting with expecting moms.
            </p>
          </div>
          <div className="md:col-span-6 col-span-12">
            <img src="../client/client5.png" alt="Exhibitions" />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div className="md:col-span-6 col-span-12">
            <img
              src="../client/about5.jpg"
              className="h-[250px] w-full"
              alt="Social Media"
            />
          </div>
          <div className="md:col-span-6 col-span-12 self-center">
            <h3 className="font-semibold text-[#699dea] text-3xl py-5">
              Our Social Media
            </h3>
            <p>
              Our social media campaigns on Facebook, Instagram, LinkedIn, and
              Twitter allow social media users the chance to share your products
              with friends and family members, bringing increased traffic to
              your Brand platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="my-10">
        <div>
          <h3 className="font-semibold text-[#699dea] text-center text-5xl py-5">
            {" "}
            Testimonials
          </h3>
        </div>
        <Carousel
          className=""
          infinite={true}
          autoPlaySpeed={1000}
          autoPlay={true}
          arrows={true}
          responsive={responsive}
        >
          {Object.values(testimonials).map((partner, index) => (
            <div
              className="text-center md:mx-20 mx-5 bg-[#fff4f8] py-10"
              key={index}
            >
              <img
                src="../hashtag.png"
                className="md:h-[150px] md:w-[150px] h-[50px] w-[50px] mb-10 mx-auto"
                alt="hashtag Image"
              />
              <div className="mx-auto max-w-4xl">
                <p className="md:text-lg text-base text-[#7f7e7e] font-semibold">
                  {partner.text}
                </p>
                <p className="md:text-lg text-base text-[#7f7e7e] font-bold pt-5">
                  -{partner.name}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
      <section className="md:px-16 px-5 mb-8">
        <div className="py-5" id="faq">
          <h3 className="font-semibold text-[#699dea] text-center text-5xl py-5">
            FAQ's
          </h3>
        </div>
        {faq.map((section, index) => (
          <Accordion
            key={index}
            index={index}
            activeIndex={activeIndex}
            onToggle={handleAccordionToggle}
            {...section}
          />
        ))}
      </section>
      <section className="mb-5 md:px-16 px-5">
        <div className="bg-[#fff4f8] py-10">
          <h3 className="font-semibold text-[#699dea] text-center md:text-5xl text-xl py-5">
            Get An Online Quote
          </h3>
          <div className="flex justify-center">
            <a
              href="buyer"
              className="border-2 rounded-lg font-bold border-[#fd92b4] text-[#fd92b4]  px-4 py-3 text-lg cursor-pointer"
            >
              Click Here
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Client;
