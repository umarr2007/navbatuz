import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function generateRandomCode(length = 6) {
  let result = "";
  const characters = "0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const Ticket = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setCode(generateRandomCode());
  }, []);

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.1774942361146!2d69.27461131512191!3d41.31115110805327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2bd0f2f10f%3A0x1924315e17f508ca!2sToshkent!5e0!3m2!1sen!2s!4v1691744581339!5m2!1sen!2s";

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-10">
        {/* Ticket box */}
        <div className="flex-1 max-w-md rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            ticket_uzb_ministry
          </h1>
          <p className="text-xl text-gray-600 mb-8 text-center">
            ticket_welcome
          </p>

          <div className="bg-gray-100 rounded-lg p-8 mb-8 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              ticket_your_code
            </h2>
            <p className="text-6xl font-extrabold tracking-widest text-orange-500 select-all">
              {code}
            </p>
          </div>

          {/* Action Home button */}
          <button
            onClick={() => navigate("/")}
            className="mt-auto bg-[#FF6633] hover:bg-[#e65520] transition-colors text-white font-semibold py-3 rounded-lg text-lg"
          >
            Action Home
          </button>
        </div>

        {/* Map box */}
        <div className="flex-1 max-w-3xl rounded-lg overflow-hidden border border-gray-300 shadow-sm">
          <iframe
            title="location-map"
            src={mapSrc}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
