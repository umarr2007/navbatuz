import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-[#fff] h-auto [box-shadow:0_1px_3px_0_rgba(0,_0,_0,_0.08)]">
      <div className="container max-w-[1440px] mx-auto py-4 px-4">
        <div className="header_wrapper flex flex-wrap justify-between items-center gap-4">
          {/* Logo */}
          <div className="logo_wrapper flex items-center gap-2">
            <div className="logo_left">
              <img src="/logo.png" alt="Logo" className="w-[50px] h-auto" />
            </div>
            <div className="logo_right">
              <h1 className="font-[400] text-[#8F919F] text-sm sm:text-base">
                O’zbekiston Respublikasi Adliya vazirligi
              </h1>
              <p className="font-[600] text-sm sm:text-base">“E-navbat”</p>
            </div>
          </div>

          {/* Language + Button */}
          <div className="header_right w-full sm:w-auto">
            <div className="buttons flex flex-wrap sm:flex-nowrap items-center gap-4">
              <select className="border rounded px-2 py-1 text-sm sm:text-base">
                <option value="uz">Uz</option>
                <option value="ru">Ru</option>
              </select>
              <Link
                to="/queue"
                className="w-full sm:w-[145px] h-[40px] flex items-center justify-center rounded-[8px] bg-[#FF6633] font-[500] text-white text-sm sm:text-base"
              >
                Navbatimni izlash
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
