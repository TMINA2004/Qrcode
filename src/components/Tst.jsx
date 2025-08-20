import React, { useContext } from "react";
import { MyContext } from "../UseCntx";

const Tst = () => {
  const { varr,seturl } = useContext(MyContext);

  return (
    <div className="md:w-1/2 md:shadow-around md:shadow-lightgray md:flex md:justify-center md:items-center   ">
      {/* Input Form Section */}
      <div className="md:rounded-[16px]    md:flex-col  p-4 md:w-full ">
        {/* URL */}
        {varr === "URL" && (
          <div className="">
            <input
              type="text"
              onChange={(e)=>{seturl(e.target.value)}}
              placeholder="Enter your website URL"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Enter your website URL")}
              className="w-full px-2 py-2 bg-transparent text-white placeholder-white text-[20px] outline-none font-medium "
            />
            <p className="text-sm text-white pl-2 text-[12px]">
              Your QR code will be generated automatically
            </p>
          </div>
        )}

        {/* Text */}
        {varr === "Text" && (
          <div>
            <input
             onChange={(e)=>{seturl(e.target.value)}}

              type="text"
              placeholder="Enter your Text"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Enter your Text")}
              className="w-full px-2 py-2 bg-transparent text-white placeholder-white text-[20px] outline-none font-medium"
            />
            <p className="text-sm text-white pl-2 text-[14px]">
              Your QR code will be generated automatically
            </p>
          </div>
        )}

        {/* Mail */}
        {varr === "Mail" && (
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Enter your email")}
              className="mb-5 w-full bg-transparent text-white placeholder-white text-[20px] outline-none border-b-[0.5px] py-1"
            />
            <input
              type="text"
              placeholder="Enter email subject"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Enter email subject")}
              className="mb-5 w-full bg-transparent text-white placeholder-white text-[20px] outline-none border-b-[0.5px] py-1"
            />
            <input
              type="text"
              placeholder="Enter your message"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Enter your message")}
              className="w-full bg-transparent text-white placeholder-white text-[20px] outline-none border-b-[0.5px] py-1"
            />
            <p className="mt-3 text-sm text-white text-[14px]">
              Your QR code will be generated automatically after filling the form
            </p>
          </div>
        )}

        {/* WiFi */}
        {varr === "wifi" && (
          <div>
            <input
              type="text"
              placeholder="Enter SSID"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Enter SSID")}
              className="mb-5 w-full bg-transparent text-white placeholder-white text-[20px] outline-none border-b-[0.5px] py-1"
            />
            <input
              type="text"
              placeholder="Enter password"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Enter password")}
              className="mb-5 w-full bg-transparent text-white placeholder-white text-[20px] outline-none border-b-[0.5px] py-1"
            />

            <label className="block text-white mb-2">Encryption ?</label>
            <div className="flex items-center gap-4 text-white text-sm">
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="encryption" value="none" className="accent-[#0E6BA8]" />
                None
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="encryption" value="wpa" className="accent-[#0E6BA8]" />
                WPA/WPA2
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="encryption" value="wep" className="accent-[#0E6BA8]" />
                WEP
              </label>
            </div>

            <p className="mt-3 text-sm text-white text-[14px]">
              Your QR code will be generated automatically after filling the form
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tst;
