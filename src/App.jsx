import React from "react";
import logo from "./assets/logo.png";

const KemenkesPopup = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="relative bg-white p-6 rounded-xl shadow-xl w-[38rem] h-[26rem]">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div>
              <img src={logo} alt="Kemenkes Logo" className="h-24 w-[20rem]" />
            </div>
          </div>
        </div>
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex space-x-4 mt-12">
          <div className="flex-grow space-y-4 w-1/2">
            <input
              type="text"
              placeholder="Masukkan NIK anda"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="text"
              placeholder="Masukkan NIP anda"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="password"
              placeholder="Masukkan password anda"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="flex-grow w-1/2 h-40 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></div>
        </div>
        <button className="w-[13rem] mt-2 ml-[22rem] bg-cyan-500 text-white px-4 py-2 rounded-3xl hover:bg-cyan-600 focus:outline-none">
          Tanda tangani dokumen
        </button>
      </div>
    </div>
  );
};

export default KemenkesPopup;
