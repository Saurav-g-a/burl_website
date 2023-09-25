import React, { useState } from 'react';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa';
const Accordion = ({ faq_title, faq_text, activeIndex, index, onToggle }) => {
  const isActive = index === activeIndex;

  return (
    <div className="border">
      <button
        className="w-full text-left font-semibold text-[#699dea] text-xl p-4 flex justify-between font-semibold"
        onClick={() => onToggle(index)}
      >
        {faq_title} 
        {isActive ?  <FaArrowDown/>  : <FaArrowRight/> }
      </button>
      {isActive && (
        <div className="p-4 bg-white">
          <p className="text-gray-700 text-lg">{faq_text}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
