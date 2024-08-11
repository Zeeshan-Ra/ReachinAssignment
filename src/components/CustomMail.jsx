import axios from "axios";
import { useState } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import {
  FaCaretDown,
  FaEye,
  FaImage,
  FaRegSmile,
  FaUserMinus,
} from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbSquareLetterA } from "react-icons/tb";

function CustomMail({ threadId, onClose }) {
  const [replyData, setReplyData] = useState({
    to: "",
    from: "",
    subject: "",
    body: "",
  });

  const handleSendReply = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`,
        replyData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log("Reply sent successfully");
    } catch (error) {
      console.error("Error sending reply:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className=" fixed top-16 left-[66px] flex justify-center items-center h-[98%] w-[95%] z-20">
      <div className="dark:bg-[#141517] bg-white border dark:border-[#343A40] w-1/2 h-4/5 rounded-lg ">
        <div className="flex justify-between items-center px-4 dark:bg-[#141517] bg-white border dark:border-[#343A40] rounded-t-lg py-2 border-b">
          <div className="pl-4 text-sm dark:text-white text-slate-600 font-semibold">Reply</div>
          <div onClick={onClose}>
            <RxCross2 className="text-2xl cursor-pointer dark:text-white text-slate-600" />
          </div>
        </div>
        <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
          <div className="text-[#BAB9BD]">To :</div>
          <input
            className="bg-transparent ml-4"
            placeholder="Recipient's Email"
            name="to"
            value={replyData.to}
            onChange={handleChange}
          />
        </div>

        <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
          <div className="text-[#BAB9BD]">From :</div>
          <input
            className="bg-transparent ml-4"
            placeholder="Your Email"
            name="from"
            value={replyData.from}
            onChange={handleChange}
          />
        </div>

        <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
          <div className="text-[#BAB9BD]">Subject :</div>
          <input
            className="bg-transparent ml-4"
            placeholder="Subject"
            name="subject"
            value={replyData.subject}
            onChange={handleChange}
          />
        </div>

        <div className="flex text-sm py-2 border-b border-[#41464B] px-4 pr-8 pt-8 h-2/3">
          <textarea
            className="bg-transparent ml-4 w-full h-full"
            placeholder="Message Body"
            name="body"
            value={replyData.body}
            onChange={handleChange}
          />
        </div>

        <div className="flex space-x-8 items-center h-16 ml-4 pb-2 pt-2 -mt-3">
          <button
            className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] text-sm px-5 py-2 rounded-md flex items-center cursor-pointer"
            onClick={handleSendReply}
          >
            Send <FaCaretDown className="ml-4" />
          </button>
          <div className="flex items-center text-[#ADADAD]">
            <BsLightningChargeFill className="mr-3" />
            Variables
          </div>
          <div className="flex items-center text-[#ADADAD]">
            <FaEye className="mr-3" />
            Preview Email
          </div>
          <div className="flex space-x-3 text-xl text-[#ADADAD]">
            <div>
              <TbSquareLetterA />
            </div>
            <div>
              <IoLinkSharp />
            </div>
            <div>
              <FaImage />
            </div>
            <div>
              <FaRegSmile />
            </div>
            <div>
              <FaUserMinus />
            </div>
            <div>
              <IoMdCode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomMail;