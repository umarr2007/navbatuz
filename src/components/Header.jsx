import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Line from "../pages/Line";

function Header() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "8px",
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [checked, setChecked] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [district, setDistrict] = useState("");

  const handleSecondOpen = () => {
    setOpen(false); 
    setSecondOpen(true); // ikkinchisi ochiladi
  };
  const handleSecondClose = () => setSecondOpen(false);
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
              <button
                onClick={handleOpen}
                className="w-full sm:w-[145px] h-[40px] flex items-center justify-center rounded-[8px] bg-[#FF6633] font-[500] text-white text-sm sm:text-base"
              >
                Navbatimni izlash
              </button>
            </div>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{ ...style, width: 400, height: 400 }}>
            <Typography
              style={{
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "26px",
                textAlign: "center",
              }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              search_my_queue
            </Typography>
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "20px",
                color: "rgb(143, 145, 159)",
                textAlign: "center",
              }}
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              search_my_queue_description
            </Typography>

            <form className="w-full">
              {/* First name & surname */}
              <div className="flex flex-col sm:flex-row gap-[20px] mt-[30px] w-full">
                <div className="flex flex-col flex-1">
                  <label className="font-[500] text-[12px] leading-[22px] text-[#111112] sm:text-[14px]">
                    First Name
                  </label>
                  <input
                    className="h-[42px] pl-[5px] rounded-[8px] border-1 border-[#000] md:mt-[10px] w-full"
                    placeholder="First Name"
                    type="text"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-[500] text-[12px] leading-[22px] text-[#111112] sm:text-[14px]">
                    Surname
                  </label>
                  <input
                    className="h-[42px] pl-[5px] rounded-[8px] border-1 border-[#000] md:mt-[10px] w-full"
                    placeholder="Surname Name"
                    type="text"
                  />
                </div>
              </div>

              {/* Phone number */}
              <div className="flex flex-col mt-[10px] w-full">
                <label className="font-[500] text-[12px] leading-[22px] text-[#111112] sm:text-[14px]">
                  Phone Number
                </label>
                <input
                  className="w-full h-[42px] pl-[5px] rounded-[8px] border-1 border-[#000] md:mt-[10px]"
                  placeholder="Phone"
                  type="tel"
                />
              </div>
            </form>

            <div className="flex items-center gap-2 mt-[20px]">
              <input
                onChange={(e) => setChecked(e.target.checked)}
                type="checkbox"
              />
              <span className="font-[400] text-[14px] leading-[22px] text-[#000000d9]">
                field_you_agree
              </span>
            </div>
            <button
              onClick={handleSecondOpen}
              className="w-[145px] h-[40px] rounded-[8px] font-[500] text-[#fff] mt-[20px]"
              style={
                checked ? { background: "#FF6633" } : { background: "#C4C4C4" }
              }
            >
              Action_search
            </button>
          </Box>
        </Modal>

        <Modal open={secondOpen} onClose={() => setSecondOpen(false)}>
          <Box sx={style}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "700",
                textAlign: "center",
                mb: 3,
              }}
            >
              Sizning elektron navbatlaringiz
            </Typography>

            {/* <div className="flex justify-between w-full mb-6 bg-[#F1F2F3] rounded-lg h-14 px-3">
              <div className="flex-1 bg-white rounded-lg flex items-center justify-center mx-1 font-semibold text-lg">
                Faol
              </div>
              <div className="flex-1 rounded-lg flex items-center justify-center mx-1 font-semibold text-lg">
                Arxiv
              </div>
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="border-2 border-[#E3E4E7] rounded-lg p-4 max-w-[320px] mx-auto"
                >
                  <div className="flex gap-4 mb-4">
                    <img src="/mygov.png" alt="logo" className="w-12 h-12" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">
                        Norin tumani Davlat xizmatlar markazi
                      </h4>
                      <div className="flex flex-wrap gap-4 text-[#8F919F] font-medium mt-1">
                        <p>08:49:41, 2025-04-25</p>
                        <p className="text-[#29CC39]">Faol</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 px-1">
                    <p className="text-[#8F919F] font-normal whitespace-nowrap">
                      Xizmat turi:
                    </p>
                    <h4 className="font-semibold text-base">
                      Nogironligi bo‘lgan 18 yoshgacha <br /> bolalarga nafaqa
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Header;
