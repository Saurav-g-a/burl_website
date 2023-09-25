import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { offerss, cetagory } from "../api/all_api";

function Offers() {
  const [activeTab, setActiveTab] = useState(0);
  const [category, setCategory] = useState([]);
  const [offer, setOffer] = useState([]);

  useEffect(() => {
    cetagory()
      .then((result) => {
        if (result) {
          setCategory(result);
        }
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    offerss()
      .then((result) => {
        if (result) {
          setOffer(result);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="md:px-16 my-8 px-5">
        <div className="grid grid-cols-12 gap-8">
          <div className="md:col-span-6 col-span-12 self-center">
            <h3 className="text-[#699dea] text-3xl font-semibold">
              Featured Product
            </h3>
            <p className="my-5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="flex">
              <p className="text-[#fff] text-lg bg-[#fd92b4] px-3 py-2 rounded-md cursor-pointer">
                Learn More
              </p>
            </div>
          </div>
          <div className="md:col-span-6 col-span-12">
            <img src="../buyer/buyer.jpg" alt="Featured Product" />
          </div>
        </div>
      </div>

      <section className="md:px-20 my-8 px-5">
        <div className="flex flex-wrap border-b-[1px] border-[#cecece] ">
          {category.map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                console.log("Tab clicked:", index);
                setActiveTab(index);
              }}
              className={`px-4 py-2 pb-8 capitalize ${
                activeTab === index
                  ? "text-[#747474] font-bold border-b-2 border-[#747474]"
                  : "text-[#cecece] font-bold"
              }`}
            >
              {tab.name}
            </button>
          ))}
          <div className="relative ml-auto">
            <FaSearch className="absolute left-[10px] top-[15px] text-[#fd92b4]" />
            <input
              type="search"
              placeholder="Search Products"
              className="border-2 h-[48px] text-right rounded-md"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className={`p-4 grid grid-cols-12 gap-6`}>
            {offer.map((contentItem, contentIndex) => (
              <div
                key={contentIndex}
                className={`${
                  activeTab === contentItem?.category_id - 1
                    ? "block"
                    : "hidden"
                } md:col-span-4 col-span-12`}
              >
                <div className="bg-[#f4f4f4] p-4">
                  <h2 className="text-2xl text-[#747474] font-semibold mb-2">
                    {contentItem.product_title}
                  </h2>
                  <p className=" text-[#747474] mb-4">
                    {contentItem.product_text}
                  </p>
                  <img
                    src={contentItem.product_image}
                    alt={`Image for Content ${contentIndex + 1}`}
                    className="w-full max-w-md mx-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center flex justify-center my-8">
          <p className="text-[#777777] border-2 text-lg border-[#777777] p-3 rounded-lg cursor-pointer">
            Load More
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Offers;
