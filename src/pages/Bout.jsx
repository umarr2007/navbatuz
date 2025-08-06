import React from "react";
import { useNavigate } from "react-router-dom";

function Bout() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container max-w-[1440px] m-auto px-4">
        <div className="section_top flex justify-center mt-[60px] text-center">
          <div className="section_text">
            <h3 className="font-[600] text-[22px] sm:text-[26px]">
              Sizning elektron navbatlaringiz
            </h3>
            <div className="tab_box mt-[30px] mx-auto flex pt-[5px] w-[314px] h-[60px] rounded-[12px] bg-[#F1F2F3]">
              <div className="left w-[149px] ml-[8px] h-[48px] rounded-[8px] bg-[#FFFFFF]">
                <p className="font-[600]  text-[18px] text-center pt-[10px]">
                  Faol
                </p>
              </div>
              <div className="right w-[149px] ml-[8px] h-[48px] rounded-[8px]">
                <p className="font-[600]  text-[18px] text-center pt-[10px]">
                  Arxiv
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid bo'limini responsive qilamiz */}
        <div className="div grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[60px]">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="section_borders w-full max-w-[464px] h-auto rounded-[8px] border-[2px] border-[#E3E4E7] mx-auto"
            >
              <div className="section_logo flex gap-[10px] mt-[15px]">
                <div className="section_left ml-[20px]">
                  <img src="/mygov.png" alt="" />
                </div>
                <div className="section_right">
                  <h4 className="font-[600] text-[18px]">
                    Norin tumani Davlat xizmatlar markazi
                  </h4>
                  <div className="flex flex-wrap gap-[14px]">
                    <p className="text-[#8F919F] font-[500]">
                      08:49:41, 2025-04-25
                    </p>
                    <p className="text-[#29CC39] font-[500]">Faol</p>
                  </div>
                </div>
              </div>
              <div className="service flex flex-col sm:flex-row gap-[20px] mt-[20px] px-[14px]">
                <p className="text-[#8F919F] font-[400]">Xizmat turi:</p>
                <h4 className="font-[600] text-[16px]">
                  Nogironligi bo‘lgan 18 yoshgacha <br /> bolalarga nafaqa
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => navigate(-2)}
            className="w-[145px] h-[40px] rounded-[8px] bg-[#FF6633] font-[500] text-[#fff] mt-[20px]"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bout;
