import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      <div className="z-10 bg-white p-4 shadow-lg w-[750px] border-[#ffa8c5] border-4 relative">
      <button
          className="absolute right-0 rounded-full px-4 top-0 p-2 bg-white text-lg text-black rounded focus:outline-none"
          onClick={onClose}
        >
          X
        </button>
        {children}
        
      </div>
    </div>
  );
};

export default Modal;
