import React, { useState } from "react";
import { BsFiles, BsBell } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";

import { FiDisc } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header className="fixed w-full top-0 z-50 text-txtGrey bg-bgBlack border-b md:flex md:items-center md:justify-between  px-3 pb-0 shadow-lg  md:px-5">
        {/* <!-- Logo text or image --> */}
        <div className="flex items-center   md:mb-0">
          <div className="max-w-full h-auto flex justify-center items-center ">
            <NavLink to="/">
              <img
                className="my-4 ml-16"
                src="https://s3-alpha-sig.figma.com/img/600a/fd47/f8085be5339ed47f4db68bc7f789c4c7?Expires=1658102400&Signature=DPjFIRWUQrdfxA6-U5uPO1ffGG3h8nSmzdx1C4kUhzdz06a2LJdXj2CBMKu4msXU1LV~zV91LjBKYB-xByBPLuuTx1Trtwwa0kCxNBnNRUeNH3PKVoqNmIenp2mn-RH8~TXYgw7sXyRRKCQ3OeUcxv5zpLZ0lWgOzSTRU8q-fP~i~5mFiog5FyX~C-TszsZPsDhNhw70B73yjsFGFFF6GPNeU52J-X3URL2CurVKn-n70~UZOCG4gBg1QiUx4CjdkOKmvdSHccVM6sjhq5tYb0tnWIMfZc8VJXBwkfRqrEFUM7Fy632GYdnPPn3V-jsUAh3G0d~aDCBvxN5Rrikzxg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="logo"
              ></img>
              {/* {item.name} */}
            </NavLink>
          </div>
          <div className="mx-16 flex flex-row">
            <div className="flex flex-row rounded-full bg-black p-2 py-1 w-80">
              <CgSearch className="mt-1 mx-3" />
              <div>Search..</div>
            </div>
          </div>
          <div className="mx-1 flex flex-row">
            <div className="flex flex-row rounded-lg bg-bgYl p-2 px-5">
              <div className="text-black">Magic Eden</div>
            </div>
          </div>
          <div className="md:hidden flex-row flex">
            <a
              className="flex-row flex text-left justify-start items-start mr-3 cursor-pointer"
              //   rel="noopener noreferrer"
              //   href="tel:8003909540"
            >
              {/* <IoIosCall className="mr-1" size={28} /> */}
              <p className="text-base font-semibold"> Marketplace </p>
            </a>
            {/* </li> */}
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              onClick={() => setOpen(!open)}
            >
              {/* <Menu size={16} className="text-gray-900" /> */}
            </button>
          </div>
        </div>

        <nav>
          <ul
            className={`${
              open ? "block" : "hidden"
            } list-reset md:flex md:items-center md:justify-center mr-40 `}
          >
            <li className="hidden md:block md:ml-2">
              <a
                className="flex-row flex text-left justify-start items-start hover:text-black text-txtGrey "
                href=" "
                target="_blank"
                rel="noreferrer"
              >
                {/* <IoIosCall className="mr-1" size={32} /> */}
                <BsFiles className="mx-1 mt-1" />
                <p className="ml-1 text-base font-semibold text-txtGrey">
                  {" "}
                  Marketplace{" "}
                </p>
              </a>
            </li>

            <li className="md:ml-3">
              <a
                className="no-underline hover:underline py-2 text-txtGrey hover:text-black flex-row flex text-left justify-start items-start "
                href="/"
              >
                <AiOutlineQuestionCircle className="mx-1 mt-1" />
                <p>Faq</p>
              </a>
            </li>
            <li className="md:ml-3">
              <a
                className="no-underline hover:underline py-2 text-txtGrey hover:text-black flex-row flex text-left justify-start items-start "
                href="/"
              >
                <BsBell className="mx-1 mt-1" />
              </a>
            </li>
            <li className="md:ml-3">
              <a
                className="no-underline hover:underline py-2 text-txtGrey hover:text-black flex-row flex text-left justify-start items-start "
                href="/"
              >
                <FiDisc className="mx-1 mt-1" />
                <p>143</p>
              </a>
            </li>
            <li className="md:ml-3">
              <div className="flex flex-row">
                <IoSettingsOutline className="mx-1 mt-1" />
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
