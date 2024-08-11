import axios from "axios";
import img from "../assets/i.svg";
import { useEffect, useState } from "react";

function SubView() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function call() {
            try {
                const token = localStorage.getItem("token");
                await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
                    headers: {
                        Authorization: token,
                    },
                });
            } catch (err) {
                setError(err.message || "An error occurred");
            } finally {
                setLoading(false);
            }
        }
        call();
    }, []);

    if (loading) {
        return (
            <div className="dark:text-white text-[#5B5F66] bg-[#ECEFF3] dark:bg-black flex justify-center items-center h-screen">
                <div className="text-2xl">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="dark:text-white text-[#5B5F66] bg-[#ECEFF3] dark:bg-black flex justify-center items-center h-screen">
                <div className="text-2xl">Error: {error}</div>
            </div>
        );
    }

    return (
        <div className="dark:text-white text-[#5B5F66] bg-[#ECEFF3] dark:bg-black flex justify-center items-center h-screen flex-col">
            <div>
                <img src={img} alt="Illustration" />
            </div>
            <div className="text-2xl my-8">
                It’s the beginning of a legendary sales pipeline.
            </div>
            <div className="dark:text-[#9E9E9E] text-[#5B5F66]">
                When you have inbound E-mails you’ll see them here.
            </div>
        </div>
    );
}

export default SubView;
