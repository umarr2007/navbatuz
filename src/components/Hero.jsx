import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F9F9F9] min-h-screen">
      <div className="container max-w-[1440px] mx-auto px-4 py-8">
        {/* Gerb */}
        <div className="flex justify-center mt-10">
          <img src="/gerb.png" alt="gerb" className="w-[100px] sm:w-[120px]" />
        </div>

        <div className="flex flex-col items-center mt-4 text-center px-4">
          <h3 className="font-[400] text-[#8F919F] text-sm sm:text-base max-w-xl">
            O’ZBEKISTON RESPUBLIKASI ADLIYA VAZIRLIGI DAVLAT XIZMATLAR MARKAZI
          </h3>
          <p className="font-[600] text-[22px] sm:text-[30px] mt-2 leading-tight">
            E-navbat olish platformasiga xush kelibsiz!
          </p>
        </div>

        {/* Title */}
        <h5 className="font-[400] text-[16px] sm:text-[18px] text-center mt-[40px] px-2">
          Quyidagi navbat turlaridan birini tanlang
        </h5>

        <div className="flex flex-wrap justify-center gap-6 mt-[30px]">
          {" "}
          <div
            onClick={() => navigate("/line")}
            className="w-full sm:w-[300px] md:w-[400px] lg:w-[467px]"
          >
            <div className="rounded-[12px] bg-[#fff] border border-amber-100 shadow-sm h-full p-6 flex flex-col items-center">
              <img
                src="/ticket.png"
                alt="ticket"
                className="w-[60px] sm:w-[80px] mt-6"
              />
              <h4 className="font-[600] text-[22px] sm:text-[26px] mt-5 text-center">
                Navbatim
              </h4>
              <p className="font-[400] text-[13px] text-[#737687] mt-2 text-center px-2">
                Ushbu navbat turidan qanday maqsadda foydalanish yoziladi
              </p>
            </div>
          </div>
          <div className="w-full sm:w-[300px] md:w-[400px] lg:w-[467px]">
            <div className="rounded-[12px] bg-[#fff] border border-amber-100 shadow-sm h-full p-6 flex flex-col items-center">
              <img
                src="/ticket.png"
                alt="ticket"
                className="w-[60px] sm:w-[80px] mt-6"
              />
              <Link className="font-[600] text-[22px] sm:text-[26px] mt-5 text-center">
                Mobile ticket
              </Link>
              <p className="font-[400] text-[13px] text-[#737687] mt-2 text-center px-2">
                Ushbu navbat turidan qanday maqsadda foydalanish yoziladi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
