import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex border-b-[1px] border-[#cecece] ">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`px-4 py-2 pb-8 ${
            activeTab === index
              ? "text-[#747474] font-bold border-b-2 border-[#747474]"
              : "text-[#cecece] font-bold"
          }`}
        >
          {tab.title}
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
  );
};

export default Tabs;
