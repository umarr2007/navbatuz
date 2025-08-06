import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";



function Queue() {
  const [check, setCheck] = useState(false);

  return (
    <div>
      <div className="container max-w-[1440px] m-auto px-4">
        <div className="queue_text text-center mt-[100px]">
          <h2 className="font-[700] text-[24px] md:text-[30px]">
            Navbatimni izlash
          </h2>
          <p className="font-[400] text-[16px] md:text-[20px] mt-[8px] text-[#8F919F]">
            Davlat xizmatlari markazi xizmatidan foydalanganingiz uchun <br />
            tashakkur bildiramiz.
          </p>
        </div>

        <div className="queue_inputs">
          <div className="left_inputs flex flex-col md:flex-row items-center justify-center mt-[80px] gap-[30px]">
            <div className="surname flex flex-col w-full md:w-auto">
              <label className="mb-[8px]" htmlFor="">
                Familiya
              </label>
              <input
                className="name w-full md:w-[315px] h-[42px] pl-[5px] rounded-[8px] border-[#E3E4E7] border-[1px]"
                placeholder="Familiya"
                type="text"
              />
            </div>
            <div className="name flex flex-col w-full md:w-auto mt-[20px] md:mt-0">
              <label className="mb-[8px]" htmlFor="">
                Ism
              </label>
              <input
                className="w-full md:w-[315px] h-[42px] pl-[5px] rounded-[8px] border-[#E3E4E7] border-[1px]"
                placeholder="Ism"
                type="text"
              />
            </div>
          </div>

          <div className="right_inputs flex justify-center mt-[30px] px-4">
            <div className="phone flex flex-col w-full md:w-auto">
              <label className="mb-[8px]" htmlFor="">
                Telefon raqami
              </label>
              <input
                className="w-full md:w-[680px] h-[42px] pl-[5px] rounded-[8px] border-[#E3E4E7] border-[1px]"
                placeholder="+998"
                type="tel"
              />
            </div>
          </div>
        </div>

        <div className="checkbox flex flex-col md:flex-row items-center justify-center mt-[40px] gap-[20px] px-4 text-center md:text-left">
          <input
            type="checkbox"
            onChange={() => {
              setCheck(!check);
            }}
          />
          <p className="font-[400] text-[#737687] text-[15px]">
            Navbat olish orqali siz shaxsiy ma'lumotlarni Maxfiylik{" "}
            <br className="hidden md:block" />
            to'g'risidagi bitim va Adliya foydalanuvchi shartnomasiga{" "}
            <br className="hidden md:block" />
            muvofiq qayta ishlashga rozilik bildirasiz.
          </p>
        </div>
        <div className="checkbox_button flex justify-center mt-[20px] px-4">
          <button
            style={{
              background: check ? "#FF6633" : "#F1F2F3",
              fontSize: "15px",
            }}
            className="w-full md:w-[245px] h-[40px] rounded-[8px] bg-[#FF6633] font-[500] text-[#fff]"
          >
            <Link to={"/bout"}> Izlash</Link>
          </button>
        </div>
        <div className="back_button flex justify-center mt-[20px] px-4">
          <button className="w-full md:w-[245px] h-[40px] rounded-[8px] bg-[#FF6633] font-[500] text-[#fff]">
            <Link to={"/line"}>Back</Link>
          </button> 
        </div>
      </div>
    </div>
  );
}

export default Queue;
