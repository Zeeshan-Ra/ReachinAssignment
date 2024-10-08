import logo from "../assets/Logo12.png"

function AppBar() {
    return (
      <div className="border-[#25262B] bg-black border-b-2 fixed text-white h-16 w-screen flex items-center justify-center">
        <div>
          <img
            src={logo}
            alt="logo"
            className="h-6 w-[156.77px]"
          />
        </div>
      </div>
    );
  }
  
  export default AppBar;
  