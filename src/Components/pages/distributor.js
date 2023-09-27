import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Accordion from "../common/Accordion";
import { faqs, testimonial } from "../api/all_api";

function Distributor() {
  const [testimonials, setTestimonials] = useState([]);
  const [faq, setFaq] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

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
      <Header />
      <section className="md:px-16 px-5">
        <div>
          <div className="grid grid-cols-12 gap-8 my-10">
            <div className="md:col-span-6 col-span-12">
              <img
                src="../distributor/distributor.webp"
                className="h-[300px] w-full"
                alt="Distributor Image"
              />
            </div>
            <div className="md:col-span-6 col-span-12">
              <h3 className="font-semibold text-[#699dea] text-3xl py-5">
                Who are Babybrands Partners?
              </h3>
              <p>
                Baby Brands works with a network of healthcare professionals who
                assists us in distributing sample bags to new and expecting moms
                that contain items they need for themselves and their newborn.
                Today we’re proud to say that we work with over 1700 Hospitals,
                Doctors Offices, Doulas/Midwives, OBGYNs, Nursing Stations,
                Clinics and other Medical-related Centres
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8 my-10">
            <div className="md:col-span-6 col-span-12">
              <h3 className="font-semibold text-[#699dea] text-3xl py-5">
                Why become a baby brands partner?
              </h3>
              <p>
                We partner with healthcare centers to distribute the baby brands
                gift bags in order to reach parents at the right time. These
                gift bags are filled with samples focusing on new and Expecting
                moms who are looking for new products that would help them
                through their journey with their newborn. Receiving the baby
                brands gift bag at this ideal time allows them to experience it
                before purchasing.
              </p>
              <p>
                If you are a healthcare professional and looking to join the
                Baby Brands Gift Club program for free baby product samples,
                please click the registration button.
              </p>
              <p className="mt-5 text-center">
                <a
                  href="https://babybrands.ca/distributor-application.php"
                  target="_blank"
                  className="px-5 py-3 text-white font-semibold bg-[#ffaec9] rounded-lg"
                >
                  Register Now
                </a>
              </p>
            </div>
            <div className="md:col-span-6 col-span-12">
              <img
                src="../distributor/distributor1.png"
                alt="Distributor Image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="my-10">
        <div>
          <h3 className="font-semibold text-[#699dea] text-center text-5xl py-5">
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
      <section className="md:px-16 px-5 mb-16" id="faq">
        <div className="py-5">
          <h3 className="font-semibold text-[#699dea] text-center md:text-5xl text-xl py-5">
            FAQ's Section
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
      <Footer />
    </>
  );
}

export default Distributor;
