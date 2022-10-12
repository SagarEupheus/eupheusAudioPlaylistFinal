import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { HiMail } from "react-icons/hi";

import "./sidebar.css";

const Sidebar = ({ state, toggle }) => {
  // console.log(state  + " hoi aioshdaj")
  const [hidden, setHidden] = useState(true);
  // const [hamburger, setHamnburger] = useState(window.screen > 768 ? true : false )

  const hideSide = () => {
    toggle(false);
  };

  return (
    <>
      <div
        className={`flex flex-col items-center absolute lg:relative md:relative z-20 lg:!w-[20vw] md:!w-[20vw] ${
          state ? "sidebarwidth178" : "sidebarwidth80"
        }  h-[88vh] overflow-hidden text-gray-400 bg-gray-900 `}
      >
        <div className="flex  w-full px-3 mt-[40px]" href="#">
          {/* <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
				<path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
			</svg>
			<span className="ml-2 text-sm font-bold">Eupheus</span> */}
          <img
            className="bg-white h-10 fill-current rounded lg:px-[20px] lg:py-[2px]"
            src="https://www.eupheus.in/static/media/logo.f9fd97ff89ac44ae2b1f.png"
          ></img>
          <AiOutlineClose
            style={{ marginLeft: "auto" ,top:"-31px"}}
            className="lg:hidden md:hidden relative text-[#c4c4c4]  font-[18px]"
            onClick={hideSide}
          />
        </div>
        <div className="w-full px-2">
          <div className="flex flex-col  w-full  border-gray-700">
            {/* <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" >
					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
					<span className="search ml-2 text-sm lg:!block font-medium ">Search</span>
				</a> */}
            {/* <Link to="/" className="flex items-center w-full h-12 px-3 mt-2 text-gray-200 bg-gray-700 rounded" href="#">
					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
					</svg>
					<span className="ml-2 audiotext text-sm lg:!block font-medium">Audio</span>
				</Link> */}
            
              <div className="sideData  ml-[10px] mt-[30px]">
                <span className="text-gray-50 text-[10px] lg:text-[12px] font-[400]">
                  PROFICIENCY LEARNING <br />
                  SOLUTIONS PRIVATE LIMITED
                </span>
              </div>

              <div className="flex flex-col gap-1 mt-10 ml-[10px] ">
                <span className="text-gray-100 font-[400] lg:text-[14px]" >
                  Terms &amp; Conditions:
                </span>
                <span className="text-gray-100 text-[10px] lg:text-[12px] font-[400]">
                  You agree to share information <br /> entered on this page
                  with <br />
                  PROFICIENCY LEARNING SOLUTIONS <br /> PRIVATE LIMITED (owner
                  of this page), <br /> adhering to applicable laws.
                </span>
              </div>
              <div className="flex flex-col gap-1 mt-10">
                <span className="text-gray-100 ml-[8px] text-[10px] lg:text-[14px] ">Contact Us:</span>
                <span className="text-gray-100 flex ">
                  <HiMail
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv w-[15%] mr-[5px] mt-1 text-[#c4c4c4]"
                  >
                  </HiMail>{" "}
                  care@eupheus.in
                </span>
                <span className="text-gray-100 flex">
                  <IoCall
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv w-[15%] mr-[5px] mt-1 text-[#c4c4c4]"
                  >
                  </IoCall>{" "}
                  01161400200
                </span>
              </div>
            
          </div>
        </div>
        {/* <a className="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300" href="#">
			<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<span className="ml-2 text-sm font-medium">Account</span>
		</a> */}
      </div>
    </>
  );
};

export default Sidebar;
