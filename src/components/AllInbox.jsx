import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { TbReload } from "react-icons/tb";

function AllInbox({ data, loadMail }) {
  const reloadHandler = async () => {
    const token = localStorage.getItem("token");

    try {
      await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Failed to reload inbox:", error);
    }
  };

  if (!Array.isArray(data)) {
    console.error("Data is not an array:", data);
    return null;
  }

  return (
    <div className="border-r-2 bg-[#FAFAFA] dark:bg-black dark:border-[#33383F] border-[#E0E0E0] h-full overflow-hidden">
      <div className="px-4 pt-4 flex justify-between items-center">
        <div className="px-4">
          <div className="text-2xl py-3 text-[#4285F4] font-semibold flex items-center">
            All Inbox(s){" "}
            <FaAngleDown className="ml-2 font-normal cursor-pointer" />
          </div>
          <div className="dark:text-white text-black font-bold">
            {data.length}/25{" "}
            <span className="text-[#7F7F7F] font-normal">Inboxes selected</span>
          </div>
        </div>
        <button
          className="p-3 mt-3 dark:bg-[#25262B] bg-white border border-gray-200 dark:border-gray-800 mr-4 rounded-xl h-min cursor-pointer"
          onClick={reloadHandler}
        >
          <TbReload className="text-black dark:text-white" />
        </button>
      </div>

      <div className="my-4 px-8">
        <div className="relative">
          <input
            placeholder="Search"
            className="w-full dark:bg-[#23272C] bg-[#F4F6F8] rounded-md p-1 pl-8 border dark:border-[#FFFFFF1A] border-[#DFE3E8]"
          />
          <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
        <div className="flex justify-between py-4">
          <div className="dark:text-white text-black">
            <span className="dark:bg-[#222426] bg-[#ECECEC] text-[#5C7CFA] px-2 py-1 rounded-3xl">
              {data.length}
            </span>{" "}
            New Replies
          </div>
          <div className="flex items-center dark:text-white text-black">
            Newest <FaAngleDown className="ml-3 text-xl" />
          </div>
        </div>
      </div>

      <div>
        {data.map((email) => (
          <Mail
            key={email.id}
            fromEmail={email.fromEmail}
            subject={email.subject}
            threadId={email.threadId}
            loadMail={loadMail}
          />
        ))}
      </div>
    </div>
  );
}

function Mail({ fromEmail, subject, threadId, loadMail }) {
  const trimSubject = (subject, wordCount) => {
    const words = subject.split(" ");
    return words.length > wordCount
      ? `${words.slice(0, wordCount).join(" ")} ...`
      : subject;
  };

  const handleMailClick = () => {
    loadMail(threadId);
  };

  return (
    <div
      className="border-t-2 dark:border-[#ffffff25] border-[#8b8b8b64] mx-8 py-4 cursor-pointer"
      onClick={handleMailClick}
    >
      <div>
        <div className="flex justify-between">
          <div className="dark:text-white text-black text-lg font-normal">
            {fromEmail}
          </div>
          <div className="dark:text-[#FCFCFC66] text-[#919EAB] font-thin pr-3">
            Mar 7
          </div>
        </div>
        <div className="py-2 dark:text-[#E1E0E0] text-gray-600 font-normal">
          {trimSubject(subject, 7)}
        </div>
        <div className="flex">
          <div className="dark:bg-[#222426] bg-[#F0F0F0] px-3 py-1 rounded-2xl text-[#57E0A6] text-sm flex items-center">
            <GoDotFill className="mr-1 text-lg" />
            Interested
          </div>
          <div className="dark:bg-[#222426] text-slate-500 font-semibold text-xs dark:text-white bg-[#F0F0F0] px-3 py-1 rounded-2xl ml-2 flex items-center">
            <IoIosSend className="mr-1 text-lg" />
            Campaign Name
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllInbox;
