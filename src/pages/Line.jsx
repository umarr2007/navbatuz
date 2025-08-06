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
                      <img src="/dxa.png" alt="" className="w-10 md:w-auto"/>
                    </div>
                    <div className="fhdy_right">
                      <h4 className="font-[600] text-[16px] md:text-[17px] text-[#111112]">
                        FHDY
                      </h4>
                      <p className="font-[400] text-[13px] text-[#737687] hidden md:block">
                        Ushbu navbat turidan qanday maqsadda foydalanish yoziladi
                      </p>
                    </div>
                  </div>
                </div>

                <div className="fhdy_border w-full md:w-[48%] lg:w-[446px] h-[92px] md:ml-[20px] mt-[20px] rounded-[12px] border-[2px] border-[#E3E4E7]">
                  <div className="fhdy flex items-center gap-4 md:gap-[23px] pt-[12px] pl-3 md:pl-[16px]">
                    <div className="fhdy_left">
                      <img src="/dxa_01.png" alt="" className="w-10 md:w-auto"/>
                    </div>
                    <div className="fhdy_right">
                      <h4 className="font-[600] text-[16px] md:text-[17px] text-[#111112]">
                        Davlat xizmatlar markazi
                      </h4>
                      <p className="font-[400] text-[13px] text-[#737687] hidden md:block">
                        Ushbu navbat turidan qanday maqsadda foydalanish yoziladi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Region information */}
          <div className="area mt-6 md:mt-[30px]">
            <div className="entry_border_2 w-full max-w-[953px] h-auto border-[2px] border-[#FF6633] rounded-[12px] p-4 md:p-0">
              <div className="circle_wrapper mt-4 md:mt-[25px] flex flex-col md:flex-row gap-4 md:gap-[40px] items-start md:items-center">
                <div className="circle_left w-[40px] h-[38px] md:ml-[25px] rounded-[17px] border-[2px] border-[#E3E4E7]">
                  <h2 className="font-[600] text-[20px] text-center">2</h2>
                </div>
                <div className="circle_right">
                  <h4 className="font-[700] text-[18px] md:text-[20px] text-[#111112]">
                    Hudud ma'lumotlari
                  </h4>
                  <p className="font-[400] text-[14px] text-[#737687]">
                    Ushbu navbat turidan qanday maqsadda foydalanish yoziladi
                  </p>
                </div>
              </div>

              <div className="location w-full md:w-[calc(100%-40px)] h-[85px] bg-[#F8F8F9] rounded-[9px] md:ml-[20px] mt-[20px] p-4">
                <div className="location_wrapper flex items-center justify-between gap-4 md:gap-[20px]">
                  <div className="location_left">
                    <LocationOnIcon className="text-[#737687]" />
                  </div>

                  <div className="location_right flex-1">
                    <h5 className="font-[500] text-[16px] md:text-[18px]">
                      Lokatsiyaga ruxsat berish
                    </h5>
                    <p className="font-[400] text-[14px] text-[#737687]">
                      Sizga yaqin bo'lgan viloyat, tuman va bo'limlar ko'rinadi
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
                    <select className="w-full md:w-[440px] h-[42px] pl-[5px] rounded-[8px] border-[#E3E4E7] border-[1px]">
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
                    <select className="w-full md:w-[440px] h-[42px] pl-[5px] rounded-[8px] border-[#E3E4E7] border-[1px]">
                      <option value="toshkent">Toshkent shahri</option>
                      <option value="andijon">Andijon shahri</option>
                      <option value="buxoro">Buxoro shahri</option>
                      <option value="samarqand">Samarqand shahri</option>
                      <option value="navoiy">Navoiy shahri</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="region w-full md:w-[calc(100%-40px)] h-[75px] border-[1px] border-[#FF6633] rounded-[9px] mt-4 md:mt-[20px] md:ml-[20px] flex gap-4 md:gap-[20px] p-4">
                <div className="region_wrapper flex items-center">
                  <input type="radio" className="w-5 h-5"/>
                </div>
                <div className="region_right">
                  <h3 className="font-[500] text-[16px] md:text-[17px]">
                    Paxta tumani FHDY bo'limi
                  </h3>
                  <p className="font-[400] text-[14px] text-[#737687]">
                    Ushbu navbat turidan qanday maqsadda foydalanish yoziladi
                  </p>
                </div>
              </div>

              <div className="region w-full md:w-[calc(100%-40px)] h-[75px] border-[1px] border-[#FF6633] rounded-[9px] mt-4 md:mt-[20px] md:ml-[20px] flex gap-4 md:gap-[20px] p-4">
                <div className="region_wrapper flex items-center">
                  <input type="radio" className="w-5 h-5"/>
                </div>
                <div className="region_right">
                  <h3 className="font-[500] text-[16px] md:text-[17px]">
                    Andijon shahri FHDY bo'limi
                  </h3>
                  <p className="font-[400] text-[14px] text-[#737687]">
                    Ushbu navbat turidan qanday maqsadda foydalanish yoziladi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Service selection */}
          <div className="entry_border_3 w-full max-w-[953px] h-auto border-[2px] border-[#FF6633] rounded-[12px] mt-6 md:mt-[20px] p-4 md:p-0">
            <div className="circle_wrapper mt-4 md:mt-[25px] flex flex-col md:flex-row gap-4 md:gap-[40px] items-start md:items-center">
              <div className="circle_left w-[40px] h-[38px] md:ml-[25px] rounded-[17px] border-[2px] border-[#E3E4E7]">
                <h2 className="font-[600] text-[20px] text-center">3</h2>
              </div>
              <div className="circle_right">
                <h4 className="font-[700] text-[18px] md:text-[20px] text-[#111112]">
                  Xizmat turini tanlang
                </h4>
                <p className="font-[400] text-[14px] text-[#737687]">
                  Ushbu navbat turidan qanday maqsadda foydalanish yoziladi
                </p>
              </div>
            </div>
            
            <div className="px-0 md:px-[20px]">
              <input
                className="w-full h-[42px] pl-[5px] rounded-[8px] border-[#E3E4E7] border-[1px] mt-4 md:mt-[20px]"
                placeholder="Xizmat turini izlash"
                type="text"
              />

              <div className="selects mt-3 md:mt-[10px]">
                {[
                  "Ijtimoiy xizmatlar",
                  "Qishloq xo'jaligi",
                  "Ko'chmas mulk",
                  "Ta'lim",
                  "Fuqorolik",
                  "Transport va aloqa",
                  "Arxiv ishi",
                  "Ma'lumotnomalar",
                  "Kommunal soha",
                  "Soliqlar",
                  "Nashriyot ishi",
                  "Litsenziyalash"
                ].map((item, index) => (
                  <Select
                    key={index}
                    className="w-full mt-3 md:mt-[10px]"
                    value={value}
                    onChange={handleChange}
                    displayEmpty
                    size="small"
                  >
                    <MenuItem value="">
                      <div className="flex items-center gap-[10px]">
                        <img className="w-[24px] md:w-[30px]" src="/xizmatlar.png" alt="" />
                        <span className="text-[14px] md:text-base">{item}</span>
                      </div>
                    </MenuItem>

                    <MenuItem value="uzbekistan">
                      <Radio size="small" checked={value === "uzbekistan"} />
                      <span className="text-[14px] md:text-base">Ijtimoiy xizmatlar</span>
                    </MenuItem>

                    <MenuItem value="usa">
                      <Radio size="small" checked={value === "usa"} />
                      <span className="text-[14px] md:text-base">Ijtimoiy xizmatlar</span>
                    </MenuItem>

                    <MenuItem value="germany">
                      <Radio size="small" checked={value === "germany"} />
                      <span className="text-[14px] md:text-base">Ijtimoiy xizmatlar</span>
                    </MenuItem>
                  </Select>
                ))}
              </div>
            </div>
          </div>

          {/* 6. Date and time selection */}
          <div className="entry_border_4 w-full max-w-[953px] h-auto border-[2px] mt-6 md:mt-[20px] border-[#FF6633] rounded-[12px] p-4 md:p-0">
            <div className="circle_wrapper mt-4 md:mt-[25px] flex flex-col md:flex-row gap-4 md:gap-[40px] items-start md:items-center">
              <div className="circle_left w-[40px] h-[38px] md:ml-[25px] rounded-[17px] border-[2px] border-[#E3E4E7]">
                <h2 className="font-[600] text-[20px] text-center">4</h2>
              </div>
              <div className="circle_right">
                <h4 className="font-[700] text-[18px] md:text-[20px] text-[#111112]">
                  Sana va vaqtni tanlang
                </h4>
                <p className="font-[400] text-[14px] text-[#737687]">
                  Ushbu navbat turidan qanday maqsadda foydalanish yoziladi
                </p>
              </div>
            </div>

            <div className="data_wrapper mt-4 md:mt-[25px] flex flex-col sm:flex-row items-start md:items-center gap-4 md:gap-0 px-4 md:px-[20px]">
              <div className="date_left w-full sm:w-auto">
                <select className="w-full sm:w-[120px] h-[42px] pl-[5px] rounded-[8px] border-[#E3E4E7] border-[1px]">
                  <option>Yanvar</option>
                  <option>Fevral</option>
                  <option>Mart</option>
                  <option>Aprel</option>
                  <option>May</option>
                  <option>Iyun</option>
                  <option>Iyul</option>
                  <option>Avgust</option>
                  <option>Sentabr</option>
                  <option>Oktyabr</option>
                  <option>Noyabr</option>
                  <option>Dekabr</option>
                </select>
              </div>

              <div className="date_right w-full sm:w-auto sm:ml-4 md:ml-[20px]">
                <select className="w-full sm:w-[120px] h-[42px] pl-[5px] rounded-[8px] border-[#E3E4E7] border-[1px]">
                  <option>2025</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2012</option>
                  <option>2011</option>
                  <option>2010</option>
                  <option>2009</option>
                  <option>2008</option>
                  <option>2007</option>
                  <option>2006</option>
                  <option>2005</option>
                  <option>2004</option>
                  <option>2003</option>
                  <option>2002</option>
                  <option>2001</option>
                  <option>2000</option>
                </select>
              </div>
            </div>

            <div className="date_time mt-4 md:mt-[25px] px-4 md:px-[20px] pb-4 md:pb-0">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="w-full md:w-[250px]">
                    <DatePicker
                      label="Sanani tanlang"
                      renderInput={(params) => <TextField {...params} fullWidth size="small"/>}
                    />
                  </div>
                  <div className="w-full md:w-[250px]">
                    <TimePicker
                      label="Soatni tanlang"
                      renderInput={(params) => <TextField {...params} fullWidth size="small"/>}
                    />
                  </div>
                </div>
              </LocalizationProvider>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default Line;