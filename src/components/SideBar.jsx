import { useState } from "react";
import { RiHome5Fill, RiMailFill, RiUserSearchLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { SiElasticstack } from "react-icons/si";
import { FaInbox } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import logo from '../assets/logo.svg';

function SideBar({ onMenuItemClick }) {
  const [selectedItem, setSelectedItem] = useState('/');

  const handleMenuItemClick = (path) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };

  return (
    <div className="dark:bg-[#101113] bg-white h-full w-14 flex flex-col justify-between items-center py-6 border-r-2 dark:border-[#343A40] border-[#E0E0E0] fixed top-0 left-0 z-10">
      <div className="rounded-xl">
        <img src={logo} className="h-8 invert dark:invert-0 rounded-sm w-8 object-left" alt="Logo" />
      </div>
      <div className="text-[#AEAEAE] text-2xl space-y-5" style={{ marginTop: "-150px" }}>
        <div
          aria-label="Home"
          className={`cursor-pointer p-1 ${selectedItem === '/' ? 'bg-gray-600 rounded-lg' : ''}`}
          onClick={() => handleMenuItemClick('/')}
        >
          <RiHome5Fill />
        </div>
        <div
          aria-label="Search"
          className={`cursor-pointer p-1 ${selectedItem === '/search' ? 'bg-gray-600 rounded-lg' : ''}`}
          onClick={() => handleMenuItemClick('/search')}
        >
          <RiUserSearchLine />
        </div>
        <div
          aria-label="Mail"
          className={`cursor-pointer p-1 ${selectedItem === '/mail' ? 'bg-gray-600 rounded-lg' : ''}`}
          onClick={() => handleMenuItemClick('/mail')}
        >
          <RiMailFill />
        </div>
        <div
          aria-label="Send"
          className={`cursor-pointer p-1 ${selectedItem === '/send' ? 'bg-gray-600 rounded-lg' : ''}`}
          onClick={() => handleMenuItemClick('/send')}
        >
          <IoIosSend />
        </div>
        <div
          aria-label="Stack"
          className={`cursor-pointer p-1 ${selectedItem === '/stack' ? 'bg-gray-600 rounded-lg' : ''}`}
          onClick={() => handleMenuItemClick('/stack')}
        >
          <SiElasticstack />
        </div>
        <div
          aria-label="Inbox"
          className={`relative cursor-pointer p-1 ${selectedItem === '/inbox' ? 'bg-gray-600 rounded-lg' : ''}`}
          onClick={() => handleMenuItemClick('/inbox')}
        >
          <FaInbox />
          <div className="absolute -top-2 -right-2 text-white bg-red-500 h-4 w-4 rounded-full flex items-center justify-center text-[8px]">
            12+
          </div>
        </div>

        <div
          aria-label="Stats"
          className={`cursor-pointer p-1 ${selectedItem === '/stacks' ? 'bg-gray-600 rounded-lg' : ''}`}
          onClick={() => handleMenuItemClick('/stacks')}
        >
          <IoStatsChartSharp />
        </div>
      </div>
      <div className="text-white text-center bg-green-800 w-8 h-8 rounded-full flex items-center justify-center" aria-label="Profile Status">
        AS
      </div>
    </div>
  );
}

export default SideBar;
