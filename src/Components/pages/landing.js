import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Banner from "../common/banner";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import { landings, winner } from "../api/all_api";

function Landing() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [landing_data, setLanding_data] = useState("");
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  // console.log(landing_data);

  const openModal = () => {
    navigate("/comming-soon");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const data = {
    partner: "./Partner_logo/1.png",
    partner1: "/Partner_logo/2.png",
    partner2: "./Partner_logo/3.png",
    partner3: "./Partner_logo/4.png",
    partner4: "./Partner_logo/5.png",
    partner5: "./Partner_logo/6.png",
    partner6: "./Partner_logo/7.png",
    partner7: "./Partner_logo/8.png",
    partner8: "./Partner_logo/9.png",
    partner9: "./Partner_logo/10.png",
  };

  const tools = [
    {
      img: "./section/tools1.webp",
      logo: "./section/stroller.png",
      title: "Baby Name",
    },
    {
      img: "./section/tool2.webp",
      logo: "./section/query.png",
      title: "Pregnacy due date calculator",
    },
    {
      img: "./section/tool3.jpg",
      logo: "./section/calendar.png",
      title: "Pregnancy calendar",
    },
    {
      img: "./section/tool4.jpg",
      logo: "./section/ballon.png",
      title: "baby shower",
    },
  ];

  useEffect(() => {

    landings()
      .then((result) => {
        if (result) {
          setLanding_data(result);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    winner()
      .then((result) => {
        if (result) {
          setImages(result);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

  }, []);


  return (
    <>
      <Header />

      <Banner />

      <section className="py-10">
        <Carousel
          className=""
          infinite={true}
          autoPlaySpeed={1000}
          autoPlay={true}
          arrows={false}
          responsive={responsive}
        >
          {Object.values(data).map((partner, index) => (
            <div className="px-10" key={index}>
              <img
                src={partner}
                height="200"
                width="200"
                className="md:h-[100px] w-[100%] m-auto"
                alt="partner logo"
              />
            </div>
          ))}
        </Carousel>
      </section>

      <section className="grid grid-cols-12 gap-6 md:px-16 px-5 mb-20">
        <div className="md:col-span-6 col-span-12">
          <img
            src="./section/section3.jpg"
            className="w-full h-[300px] md:scale-x-[-1]	"
            height={100}
            width={100}
            alt="baby brand"
          />
        </div>
        <div className="md:col-span-6 col-span-12 self-center">
          <h3 className="text-[#699dea] text-3xl mb-4 font-semibold">
            What is Baby Brands?
          </h3>
          <p className="mb-4 text-lg	">
            BabyBrands Gift Club is Canada&#39;s largest distributor of the gift
            bags to NEW and EXPECTING MOMS. The gift bags contain product
            samples, coupons and brochures and are given to the parents by our
            healthcare partners in order for you to TRY it and EXPERIENCE it!
          </p>
          <a
            href="/About"
            className="bg-[#fd92b4] text-white px-5 py-3 rounded-lg"
          >
            Learn More
          </a>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-6 mb-10 md:px-16 px-5">
        <div className="md:col-span-6 col-span-12 self-center">
          <h3 className="text-[#699dea] text-3xl font-semibold mb-4">
            How to get a free sample bag?
          </h3>
          <p className="text-lg mb-4">
            If you are a NEW or EXPECTING parent in Canada visiting your
            healthcare professional, ask them for the Baby Brands Gift bag full
            of product samples and brochures. We have over 1700 Hospitals,
            Doctors Offices, Doulas/Midwives, OBGYNs, Nursing Stations, Clinics
            and other medical-related Centres assisting us in distributing Gift
            Bags across Canada.
          </p>
        </div>
        <div className="md:col-span-6 col-span-12">
          <img
            src="./section/section4.jpg"
            className="w-full h-[300px]"
            height={100}
            width={100}
            alt="baby brand"
          />
        </div>
      </section>

      <section className="py-8 md:px-16 px-5">
        <div>
          <h1 className="text-[#699dea] text-center font-semibold text-5xl mb-10">
            How to win the gift baskets?
          </h1>
        </div>
        <div className="grid grid-cols-12 md:gap-12 pb-10 ">
          <div className="col-span-12 md:col-span-4 text-center">
            <img
              src="./section/register.svg"
              width={"40%"}
              className="mx-auto h-[150px] "
              alt="register"
            />
            <a
              href="https://www.babybrands.ca/../regcon-v3-f4/"
              target="_blank"
              className="text-[#699dea] text-2xl mt-3"
            >
              Register with Baby brands
            </a>
          </div>
          <div className="col-span-12 md:col-span-4 relative text-center ">
            <div className="md:after:content-[''] md:after:w-[180px] md:after:absolute after:top-[47%] after:left-[-81px] after:h-[2px] after:bg-[#eaeaea] md:before:content-[''] md:before:w-[180px] md:before:absolute before:top-[47%] before:right-[-81px] before:h-[2px] before:bg-[#eaeaea]">
              <img
                src="./section/prize.svg"
                width={"40%"}
                className="mx-auto  h-[150px]"
                alt="register"
              />
              <p className="text-[#699dea] text-2xl mt-3">Enter the draw</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 text-center">
            <div className="">
              <img
                src="./section/monthly.svg"
                width={"40%"}
                className="mx-auto h-[150px] p-4 "
                alt="register"
              />
            </div>
            <p className="text-[#699dea] text-2xl mt-3">
              Wait for the monthly draw
            </p>
          </div>
        </div>
        <div className="border-t-4 border-[#f4f1f2] my-10 pt-3">
          <p className="text-center text-base text-[#b6b5b5]">
            it is a long established fact that a reader will be distracted by
            the readable content
          </p>
        </div>
      </section>

      {images.data?.length > 0 ? (
        <section className="md:px-16 px-5">
          <div className="max-w-5xl mx-auto">
            <h1 className="py-12 text-center text-5xl font-semibold text-[#699dea]">
              This Months Winners
            </h1>
            <div className="grid grid-cols-12 gap-2">
              <div className="md:col-span-6 col-span-12">
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-6 h-full">
                    <img
                      src={images?.data[0]}
                      width={"100%"}
                      className="h-[250px]"
                      alt="winner"
                    />
                  </div>
                  <div className="col-span-6 h-full">
                    <img
                      src={images?.data[1]}
                      width={"100%"}
                      className="h-[250px]"
                      alt="winner"
                    />
                  </div>
                  <div className="col-span-12">
                    <img
                      src={images?.data[2]}
                      width={"100%"}
                      className="h-[400px]"
                      alt="winner"
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 col-span-12">
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-12">
                    <img
                      src={images?.data[3]}
                      width={"100%"}
                      className="h-[400px]"
                      alt="winner"
                    />
                  </div>
                  <div className="col-span-6">
                    <img
                      src={images?.data[4]}
                      width={"100%"}
                      className="h-[250px]"
                      alt="winner"
                    />
                  </div>
                  <div className="col-span-6">
                    <img
                      src={images?.data[5]}
                      width={"100%"}
                      className="h-[250px]"
                      alt="winner"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}

      <section className="grid grid-cols-12 gap-6 md:px-16 px-5 my-8">
        <div className="md:col-span-6 col-span-12 self-center">
          <h3 className="text-[#699dea] text-3xl">
            {landing_data[0]?.peekapoo_title}
          </h3>
          <p className="py-5 text-lg">{landing_data[0]?.peekapoo_text}</p>
          <button
            className="bg-[#fd92b4] text-white px-5 py-3 rounded-lg"
            type="button"
          >
            Learn More
          </button>
        </div>
        <div className="md:col-span-6 col-span-12">
          <img
            src={landing_data[0]?.peekapoo_image}
            className="w-[90%] h-[90%] py-10"
            height={100}
            width={100}
            alt="baby brand"
          />
        </div>
      </section>

      <section className="grid grid-cols-12 gap-6 md:px-16 px-5">
        <div className="md:col-span-6 col-span-12">
          <img
            src={landing_data[0]?.story_image}
            className="w-full h-full"
            height={100}
            width={100}
            alt="baby brand"
          />
        </div>
        <div className="md:col-span-6 col-span-12 self-center">
          <h3 className="text-center text-[#699dea] text-4xl">Top Stories</h3>
          <h3 className="text-[#699dea] text-3xl pt-5">
            {landing_data[0]?.story_title}
          </h3>
          <p className="py-5 text-lg">{landing_data[0]?.story_text}</p>
          <a
            className="bg-[#fd92b4] text-white px-5 py-3 rounded-lg"
            href="/Blog"
          >
            Learn More
          </a>
        </div>
      </section>

      <section className="md:px-16 px-5 py-12">
        <h1 className="text-center text-4xl text-[#699dea] font-semibold pb-12">
          Try Our parenting tools
        </h1>
        <div className="grid grid-cols-12 gap-4">
          {Object.values(tools).map((tool, index) => (
            <div
              className="md:col-span-3 col-span-6 cursor-pointer"
              onClick={openModal}
              key={index}
            >
              <img
                src={tool.img}
                width={"100%"}
                className="w-full h-[170px]"
                alt="parenting tools"
              />
              <div className="relative">
                <div className="bg-white p-4 border-blue border rounded-full h-[80px] w-[80px] absolute top-[-37px]  left-[35%] mx-auto">
                  <img
                    src={tool.logo}
                    width={"100px"}
                    height={"100px"}
                    className=" scale-x-[-1] rounded-full]"
                    alt="parenting logo"
                  />
                </div>
                <p className="uppercase pt-12 text-[#699dea] text-lg font-semibold text-center w-2/3 mx-auto">
                  {tool.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Landing;
