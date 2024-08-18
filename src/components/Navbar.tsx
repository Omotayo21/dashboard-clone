import React, { useState } from "react";

interface NavbarProps {
  onToggleSidebar: () => void;
  onSearch: (term: string) => void;
}
const Navbar : React.FC<NavbarProps> = ({ onToggleSidebar, onSearch }) => {
  const [openMobileDropdown, setOpenMobileDropdown] = useState<boolean>(false);
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const handleOpenMobileDropdown = () => {
    setOpenMobileDropdown(!openMobileDropdown);
  };
   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     onSearch(e.target.value);
    
   };
  return (
    <nav className="fixed sm:z-[999] w-full bg-white flex justify-between items-center px-6 py-3 lg:px-16">
      <div className="flex items-center">
        <button className="lg:hidden" onClick={onToggleSidebar}>
          <img src="/hamburger.svg" alt="menu" />
        </button>
        <img
          src={"/Group.svg"}
          alt="logo"
          width={173.76}
          height={36}
          className="hidden lg:block"
        />
        <img
          src={"/Group.svg"}
          alt="logo"
          width={40.63}
          height={40.84}
          className="block lg:hidden"
        />
      </div>

      <div className="relative ">
        <input
          type="search"
          placeholder="Search for username"
          className="border outline-none border-gray-300 p-[0.39rem] rounded-lg lg:w-96 md:w-96 sm:w-48"
          onChange={handleSearchChange}
        />
        <span className="absolute top-0 right-0 bg-[#39cdcc] py-3 sm:px-2 lg:px-6 md:px-6 rounded-r-lg">
          <img src="/search.svg" alt="search" />
        </span>
      </div>

      <div className="lg:hidden">
        <button onClick={handleOpenMobileDropdown}>
          <img src="/dropdown-menu-icon.svg" alt="dropdown" />
        </button>
        {openMobileDropdown && (
          <div className="absolute right-0 mt-2 bg-white p-4 shadow-lg rounded-lg">
            <div className="flex items-center justify-between">
              <img
                src={"/profile.svg"}
                alt="avatar"
                width={48}
                height={48}
                className="rounded-full"
              />
              <p>Adedeji</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <img src="/notifications.svg" alt="notifications" />
              <p>Docs</p>
            </div>
          </div>
        )}
      </div>

      <div className="hidden lg:flex items-center space-x-12">
        <p className="text-[#213f7d] underline">Docs</p>
        <div className="flex items-center space-x-6">
          <img src="/notifications.svg" alt="notifications" />
          <div className="flex items-center space-x-4">
            <img
              src={"/profile.svg"}
              alt="avatar"
              width={48}
              height={48}
              className="rounded-full"
            />
            <p className="text-[#213f7d] font-medium">Adedeji</p>
            <button className="ml-8">
              <img src="/dropdown-menu-icon.svg" alt="dropdown" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
