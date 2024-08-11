import { useEffect, useState } from "react";
import SubView from "../components/SubView";
import MainPage from "../components/MainPage";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { useLocation, useNavigate } from "react-router-dom";

function OneBox() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", `Bearer ${token}`);
    } else {
      navigate("/login");
    }
  }, [token, navigate]);

  const [selectedComponent, setSelectedComponent] = useState("/");

  const handleMenuItemClick = (path) => {
    setSelectedComponent(path);
  };

  const renderComponent = () => {
    const components = {
      "/": <SubView />,
      "/search": <SubView />,
      "/mail": <SubView />,
      "/send": <SubView />,
      "/stack": <SubView />,
      "/inbox": <MainPage />,
      "/stacks": <SubView />,
    };
    return components[selectedComponent] || <SubView />;
  };

  return (
    <div className="h-screen w-screen dark:bg-black bg-white flex">
      <SideBar onMenuItemClick={handleMenuItemClick} />
      <div className="flex flex-col flex-grow pl-14">
        <TopBar />
        <div className="flex-grow">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default OneBox;
