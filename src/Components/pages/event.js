import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { FaSearch } from "react-icons/fa";
import { events, upcomingEvents } from "../api/all_api";

function Event() {
  const [event_data, setEvent_data] = useState([]);
  const [upevent_data, setUpevent_data] = useState([]);

  useEffect(() => {
    events()
      .then((result) => {
        if (result) {
          setEvent_data(result);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    upcomingEvents()
      .then((result) => {
        if (result) {
          setUpevent_data(result);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="items-center bg-[#fd92b4] py-8 mx-auto">
        <div className="md:w-[40%] w-[80%] mt-0 relative mx-auto">
          <input
            type="text"
            className="px-4 py-2 text-center border w-full border-gray-300 rounded-full  focus:ring focus:ring-blue-200 focus:border-blue-500 outline-none"
            placeholder="Search events"
          />
          <div className="absolute top-[13px]  right-[13px] pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-[#717171]" />
          </div>
        </div>
      </div>
      <section className="grid grid-cols-12 gap-6 md:px-16 py-14 px-5">
        <div className="md:col-span-6 col-span-12 md:ltr">
          <img
            src={event_data[0]?.latest_event_image}
            className="w-full h-[300px] md:ms-14"
            height={100}
            width={100}
            alt="baby brand"
          />
        </div>
        <div className="md:col-span-6 col-span-12 self-center md:px-14">
          <h3 className="text-[#57534e] text-2xl mb-4 font-semibold">
            {event_data[0]?.latest_event_title}
          </h3>
          <p className="mb-4 text-l	">{event_data[0]?.latest_event_text}</p>
          <button
            className="bg-[#fd92b4] text-base text-white font-semibold rounded-lg py-3 px-5"
            type="button"
          >
            Learn More
          </button>
        </div>
      </section>
      <section className="md:px-10 py-8">
        <h3 className="text-[#699dea] text-2xl font-semibold md:mx-12 px-7 mb-8">
          Latest Event
        </h3>
        <div className="grid grid-cols-12 gap-0 ">
          {event_data.map((data, index) => (
            <div className="md:col-span-6 col-span-12 mb-8 " key={index}>
              <div className="grid grid-cols-12 gap-8">
                <div className="md:col-span-6 col-span-12 md:ltr">
                  <img
                    src={data.latest_event_image}
                    className="w-full h-[220px] md:ms-14 px-6"
                    height={100}
                    width={100}
                    alt="baby brand"
                  />
                </div>
                <div className="md:col-span-6 col-span-12 self-center px-6">
                  <h3 className="text-[#57534e] text-lg mb-4 font-semibold">
                    {data.latest_event_title}
                  </h3>
                  <p className="mb-4 text-base">{data.latest_event_text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12 md:px-16 px-5">
        <h3 className="text-[#699dea] text-2xl font-semibold md:mx-12 mb-8">
          Upcoming Event
        </h3>
        <div className="grid grid-cols-12 md:mx-12 gap-5">
          {upevent_data.map((data, index) => (
            <div className="md:col-span-4 col-span-12 mx-auto" key={index}>
              <img
                src={data.upcoming_event_image}
                className="w-full h-[220px]"
                height={100}
                width={100}
                alt="baby brand"
              />
              <p className="text-[#699dea]  text-lg font-semibold mt-5  ">
                {data.upcoming_event_title}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Event;
