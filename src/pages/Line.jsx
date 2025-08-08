  import React from "react";
  import Layout from "../../Layout";
  import { Link } from "react-router-dom";
  import { Switch } from "antd";
  import LocationOnIcon from "@mui/icons-material/LocationOn";
  import { Select, MenuItem, Radio } from "@mui/material";
  import { useState } from "react";
  import { RadioGroup } from "@mui/material";
  import TextField from "@mui/material/TextField";
  import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
  import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
  import { DatePicker } from "@mui/x-date-pickers/DatePicker";
  import { TimePicker } from "@mui/x-date-pickers/TimePicker";

  function Line() {
    const onChange = (checked) => {
      console.log(`switch to ${checked}`);
    };

    const [value, setValue] = useState("");

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    const [country, setCountry] = useState("");
    const [district, setDistrict] = useState("");
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    const [step4, setStep4] = useState(false);
    const [birth, setBirth] = useState("");
    const [marry, setMarry] = useState("");
    const [divorce, setDivorce] = useState("");
    const [die, setDie] = useState("");
    const [archive, setArchive] = useState("");
    const [box, setBox] = useState("");
    return (
      <div>
        <Layout>
          <div className="container max-w-[1440px] m-auto px-4 md:px-6 lg:px-8">
            {/* 1. Breadcrumb section */}
            <div className="line_text mt-[35px] flex flex-wrap gap-4 md:gap-[38px]">
              <Link to={"/"} className="font-[400] text-[#737687] text-[16px]">
                Asosiy sahifa
              </Link>
              <p className="text-[#111112] font-[500]">Entry ticket</p>
            </div>

            {/* 2. Title section */}
            <div className="entry_ticket mt-6 md:mt-[32px]">
              <h4 className="font-[600] text-[#242526] text-[20px] md:text-[25px]">
                Entry ticket
              </h4>
              <p className="font-[400] text-[#737687] text-[14px] mt-1 md:mt-[5px]">
                Ushbu navbat turidan qanday maqsadda foydalanish yoziladi
              </p>
            </div>

            {/* 3. Structure selection */}
            <div>
              <div className="entry_left mt-6 md:mt-[33px]">
                <div className="entry_border_1 w-full max-w-[953px] h-auto md:h-[220px] border-[2px] border-[#FF6633] rounded-[12px] p-4 md:p-0">
                  <div className="circle_wrapper mt-4 md:mt-[25px] flex flex-col md:flex-row gap-4 md:gap-[40px] items-start md:items-center">
                    <div className="circle_left w-[40px] h-[38px] md:ml-[25px] rounded-[17px] border-[2px] border-[#E3E4E7]">
                      <h2 className="font-[600] text-[20px] text-center">1</h2>
                    </div>
                    <div className="circle_right">
                      <h4 className="font-[700] text-[18px] md:text-[20px] text-[#111112]">
                        Strukturani tanlang
                      </h4>
                      <p className="font-[400] text-[14px] text-[#737687]">
                        Ushbu navbat turidan qanday maqsadda foydalanish yoziladi
                      </p>
                    </div>
                  </div>

                  <div className="fhdy_wrapper flex  gap-4 md:gap-0 mt-4 md:mt-0">
                    <div className="fhdy_border w-full md:w-[48%] lg:w-[446px] h-[92px] md:ml-[20px] mt-[20px] rounded-[12px] border-[2px] border-[#E3E4E7]">
                      <div className="fhdy flex items-center gap-4 md:gap-[23px] pt-[12px] pl-3 md:pl-[16px]">
                        <div className="fhdy_left">
                          <img src="/dxa.png" alt="" className="w-10 md:w-auto" />
                        </div>
                        <div className="fhdy_right">
                          <div className="flex justify-between mr-[20px]">
                            <h4 className="font-[600] text-[16px] md:text-[17px] text-[#111112]">
                              FHDY
                            </h4>

                            <input
                              type="checkbox"
                              onChange={(e) => setStep2(e.target.checked)}
                            />
                          </div>
                          <p className="font-[400] text-[13px] text-[#737687] hidden md:block">
                            Ushbu navbat turidan qanday maqsadda foydalanish
                            yoziladi
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="fhdy_border w-full md:w-[48%] lg:w-[446px] h-[92px] md:ml-[20px] mt-[20px] rounded-[12px] border-[2px] border-[#E3E4E7]">
                      <div className="fhdy flex items-center gap-4 md:gap-[23px] pt-[12px] pl-3 md:pl-[16px]">
                        <div className="fhdy_left">
                          <img
                            src="/dxa_01.png"
                            alt=""
                            className="w-10 md:w-auto"
                          />
                        </div>
                        <div className="fhdy_right">
                          <div className="flex justify-between mr-[20px]">
                            <h4 className="font-[600] text-[16px] md:text-[17px] text-[#111112]">
                              Davlat xizmatlar markazi
                            </h4>
                            <input
                              type="checkbox"
                              onChange={(e) => setStep2(e.target.checked)}
                            />
                          </div>
                          <p className="font-[400] text-[13px] text-[#737687] hidden md:block">
                            Ushbu navbat turidan qanday maqsadda foydalanish
                            yoziladi
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {!step2 && (
                <div className=" h-[100px] bg-[#fff] border-[2px] w-auto border-[#E3E4E7] mt-[40px] rounded-[10px]">
                  <div className="entry_border_2 w-full max-w-[953px] h-auto border-[2px]rounded-[12px] p-4 md:p-0">
                    <div className="circle_wrapper md:mt-[25px] flex  md:flex-row gap-4 md:gap-[40px] items-start md:items-center">
                      <div className="circle_left w-[40px] h-[38px] md:ml-[25px] rounded-[17px] border-[2px] border-[#E3E4E7]">
                        <h2 className="font-[600] text-[20px] text-center">2</h2>
                      </div>
                      <div className="circle_right">
                        <h4 className="font-[700] text-[18px] md:text-[20px] text-[#111112]">
                          Hudud ma'lumotlari
                        </h4>
                        <p className="font-[400] text-[14px] text-[#737687]">
                          Ushbu navbat turidan qanday maqsadda foydalanish
                          yoziladi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {step2 && (
                <div className="area mt-6 md:mt-[30px]">
                  <div className="entry_border_2  w-auto h-auto  border-[2px] border-[#FF6633] rounded-[12px] mt-[7px] md:p-0">
                    <div className="circle_wrapper mt-4 md:mt-[25px] flex  md:flex-row gap-4 md:gap-[40px] items-start md:items-center">
                      <div className="circle_left w-[40px] h-[38px] md:ml-[25px] rounded-[17px] border-[2px] border-[#E3E4E7]">
                        <h2 className="font-[600] text-[20px] text-center">2</h2>
                      </div>
                      <div className="circle_right">
                        <div className="flex items-center justify-between ">
                          <h4 className="font-[700] text-[18px] md:text-[20px] text-[#111112]">
                            Hudud ma'lumotlari
                          </h4>

                          <div className="checkbox ">
                            {step2 && (
                              <input
                                onChange={(e) => setStep2(e.target.checked)}
                                type="checkbox"
                              />
                            )}
                          </div>
                        </div>
                        <p className="font-[400] text-[14px] text-[#737687]">
                          Ushbu navbat turidan qanday maqsadda foydalanish
                          yoziladi
                        </p>
                      </div>
                    </div>

                    <div className="location w-full  md:w-[calc(100%-40px)] h-[85px] bg-[#F8F8F9] rounded-[9px] md:ml-[20px] mt-[20px] p-4">
                      <div className="location_wrapper flex items-center justify-between gap-4 md:gap-[20px]">
                        <div className="location_left">
                          <LocationOnIcon className="text-[#737687]" />
                        </div>

                        <div className="location_right flex-1 ">
                          <h5 className="font-[500] text-[16px] md:text-[18px]">
                            Lokatsiyaga ruxsat berish
                          </h5>
                          <p className="font-[400] text-[14px] text-[#737687]">
                            Sizga yaqin bo'lgan viloyat, tuman va bo'limlar
                            ko'rinadi
                          </p>
                        </div>

                        <div className="flex items-center justify-center">
                          <Switch defaultChecked onChange={onChange} />
                        </div>
                      </div>
                    </div>

                    <div className="palce_wrapper flex flex-col lg:flex-row gap-4 md:gap-0 mt-4 md:mt-0">
                      <div className="place flex flex-col mt-4 md:mt-[40px] md:ml-[20px] w-full">
                        <div className="left">
                          <label className="font-[500]">Viloyat</label>
                        </div>
                        <div className="right mt-2 md:mt-[12px]">
                          <select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="w-full md:w-[440px] h-[42px] pl-[5px] rounded-[8px] border-[#E3E4E7] border-[1px]"
                          >
                            <option value="toshkent">Toshkent viloyati</option>
                            <option value="andijon">Andijon viloyati</option>
                            <option value="buxoro">Buxoro viloyati</option>
                            <option value="samarqand">Samarqand viloyati</option>
                            <option value="navoiy">Navoiy viloyati</option>
                          </select>
                        </div>
                      </div>
                      <div className="place flex flex-col mt-4 md:mt-[40px] md:ml-[15px] w-full">
                        <div className="left">
                          <label className="font-[500]">Tuman</label>
                        </div>
                        <div className="right mt-2 md:mt-[12px]">
                          <select
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                            className="w-full md:w-[440px] h-[42px] pl-[5px] rounded-[8px] border-[#E3E4E7] border-[1px]"
                          >
                            <option value="toshkent">Toshkent shahri</option>
                            <option value="andijon">Andijon shahri</option>
                            <option value="buxoro">Buxoro shahri</option>
                            <option value="samarqand">Samarqand shahri</option>
                            <option value="navoiy">Navoiy shahri</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {country && district && (
                      <div className="region w-full md:w-[calc(100%-40px)] h-[75px] border-[1px] border-[#FF6633] rounded-[9px] mt-4 md:mt-[20px] md:ml-[20px] flex gap-4 md:gap-[20px] p-4">
                        <div className="region_wrapper flex items-center">
                          <input
                            onChange={(e) => {
                              setStep3(e.target.checked);
                            }}
                            type="checkbox"
                            className="w-5 h-5"
                          />
                        </div>
                        <div className="region_right">
                          <h3 className="font-[500] text-[16px] md:text-[17px]">
                            {country} {district} FHDY bo'limi
                          </h3>
                          <p className="font-[400] text-[14px] text-[#737687]">
                            Ushbu navbat turidan qanday maqsadda foydalanish
                            yoziladi
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {!step3 && (
              <div className="w-auto h-[120px] bg-[#fff] border-[2px]  border-[#E3E4E7] mt-[40px] rounded-[10px]">
                <div className="entry_border_2 w-full max-w-[953px] h-auto border-[2px]rounded-[12px] p-4 md:p-0">
                  <div className="circle_wrapper md:mt-[25px] flex md:flex-row gap-4 md:gap-[40px] items-start md:items-center">
                    <div className="circle_left w-[40px] h-[38px] md:ml-[25px] rounded-[17px] border-[2px] border-[#E3E4E7]">
                      <h2 className="font-[600] text-[20px] text-center">3</h2>
                    </div>
                    <div className="circle_right">
                      <h4 className="font-[700] text-[18px] md:text-[20px] text-[#111112]">
                        Hudud ma'lumotlari
                      </h4>
                      <p className="font-[400] sm:text-[11px]  text-[14px] text-[#737687]">
                        Ushbu navbat turidan qanday maqsadda foydalanish yoziladi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step3 && (
              <div className=" w-full max-w-[953px] h-auto border-[2px] border-[#FF6633] rounded-[12px] mt-6 md:mt-[20px] p-4 md:p-0">
                <div className="w-auto h-[100px] bg-[#fff]  mt-[40px] rounded-[10px]">
                  <div className="entry_border_2 w-full max-w-[953px] h-auto border-[2px]rounded-[12px] p-4 md:p-0">
                    <div className="circle_wrapper  mt-4 md:mt-[25px] flex  md:flex-row gap-4 md:gap-[40px] items-start md:items-center">
                      <div className="circle_left w-[40px] h-[38px] md:ml-[25px]  rounded-[17px] border-[2px] border-[#E3E4E7]">
                        <h2 className="font-[600] text-[20px] text-center">3</h2>
                      </div>
                      <div className="circle_right">
                        <h4 className="font-[700] text-[18px] md:text-[20px] text-[#111112]">
                          Hudud ma'lumotlari
                        </h4>
                        <p className="font-[400] text-[14px] text-[#737687]">
                          Ushbu navbat turidan qanday maqsadda foydalanish
                          yoziladi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <input
                    className="w-full h-[42px] pl-[5px] rounded-[8px] border-[#E3E4E7] border-[1px] mt-4 md:mt-[20px]"
                    placeholder="Xizmat turini izlash"
                    type="text"
                  />
                </div>
                <div className="wrapper flex items-center md:mt-[20px] gap-[10px] ml-[20px] pt-[30px]">
                  <div className="left">
                    <input className="w-5" type="checkbox" />
                  </div>

                  <div className="right">
                    <h4 className="font-[500] text-[16px]">
                      Tug'ilganlikni qayd qilish{" "}
                    </h4>
                  </div>
                </div>

                <div className="wrapper flex items-center md:mt-[20px] gap-[10px] ml-[20px] ">
                  <div className="left">
                    <input className="w-5" type="checkbox" />
                  </div>

                  <div className="right">
                    <h4 className="font-[500] text-[16px]">
                      Nikohni qayd qilish{" "}
                    </h4>
                  </div>
                </div>

                <div className="wrapper flex items-center md:mt-[20px] gap-[10px] ml-[20px] ">
                  <div className="left">
                    <input className="w-5" type="checkbox" />
                  </div>

                  <div className="right">
                    <h4 className="font-[500] text-[16px]">
                      Nikohdan ajratish qayd qilish{" "}
                    </h4>
                  </div>
                </div>

                <div className="wrapper flex items-center md:mt-[20px] gap-[10px] ml-[20px] ">
                  <div className="left">
                    <input className="w-5" type="checkbox" />
                  </div>

                  <div className="right">
                    <h4 className="font-[500] text-[16px]">
                      O'limni qayd qilish{" "}
                    </h4>
                  </div>
                </div>

                <div className="wrapper flex items-center md:mt-[20px] gap-[10px] ml-[20px] ">
                  <div className="left">
                    <input className="w-5" type="checkbox" />
                  </div>

                  <div className="right">
                    <h4 className="font-[500] text-[16px]">Arxiv </h4>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Layout>
      </div>
    );
  }
  export default Line;