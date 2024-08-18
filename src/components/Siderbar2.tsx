import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar2 = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    localStorage.clear();
  };

  return (
    <>
      <aside className="fixed top-0 left-0 h-full z-[99] shadow-[5px_0px_20px_rgba(0,0,0,0.04)] bg-white opacity-90 sm:w-[250px] w-[300px] transform -translate-x-full sm:translate-x-0 transition-transform duration-300 ease-in-out">
        <button className="flex gap-1 items-center text-[#213f7d] text-base ml-[1.2rem] mb-[3.3125rem]">
          <img src="/briefcase-icon.svg" alt="briefcase" />
          <span>Switch Organization</span>
          <img src="/dropdown.svg" alt="dropdown" />
        </button>
        <div className="flex gap-2 items-center ml-[1.875rem]">
          <img src="/home.svg" alt="home" />
          <p className="text-[#213f7d]/70 text-lg">Dashboard</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#545f7d] text-sm font-medium mt-10 ml-[1.875rem]">
            CUSTOMERS
          </p>
          <ul className="flex flex-col gap-2">
            <li className="bg-[#39cdcc]/[0.07] border-l-4 border-[#39cdcc]">
              <a
                href={"/dashboard/users"}
                className="flex gap-2 items-center py-4 pl-6 text-[#213f7d] text-lg"
              >
                <img src="/user-friends.svg" alt="user-friends" />
                Users
              </a>
            </li>
            <li className="border-l-4 border-transparent hover:bg-[#39cdcc]/[0.07]">
              <a
                href={"/dashboard/users"}
                className="flex gap-2 items-center py-4 pl-6 text-[#213f7d]/70 text-lg"
              >
                <img src="/users.svg" alt="users" />
                Guarantors
              </a>
            </li>
            <li className="border-l-4 border-transparent hover:bg-[#39cdcc]/[0.07]">
              <a
                href={"/dashboard/users"}
                className="flex gap-2 items-center py-4 pl-6 text-[#213f7d]/70 text-lg"
              >
                <img src="/sack.svg" alt="sack" />
                Loans
              </a>
            </li>
            <li className="border-l-4 border-transparent hover:bg-[#39cdcc]/[0.07]">
              <a
                href={"/dashboard/users"}
                className="flex gap-2 items-center py-4 pl-6 text-[#213f7d]/70 text-lg"
              >
                <img src="/handshake.svg" alt="handshake" />
                Decision Models
              </a>
            </li>
            <li className="border-l-4 border-transparent hover:bg-[#39cdcc]/[0.07]">
              <a
                href={"/dashboard/users"}
                className="flex gap-2 items-center py-4 pl-6 text-[#213f7d]/70 text-lg"
              >
                <img src="/piggy-bank.svg" alt="piggybank" />
                Savings
              </a>
            </li>
            <li className="border-l-4 border-transparent hover:bg-[#39cdcc]/[0.07]">
              <a
                href={"/dashboard/users"}
                className="flex gap-2 items-center py-4 pl-6 text-[#213f7d]/70 text-lg"
              >
                <img src="/loan-request.svg" alt="loan-request" />
                Loan Requests
              </a>
            </li>
            <li className="border-l-4 border-transparent hover:bg-[#39cdcc]/[0.07]">
              <a
                href={"/dashboard/users"}
                className="flex gap-2 items-center py-4 pl-6 text-[#213f7d]/70 text-lg"
              >
                <img src="/user-check.svg" alt="user-check" />
                Whitelist
              </a>
            </li>
            <li className="border-l-4 border-transparent hover:bg-[#39cdcc]/[0.07]">
              <a
                href={"/dashboard/users"}
                className="flex gap-2 items-center py-4 pl-6 text-[#213f7d]/70 text-lg"
              >
                <img src="/user-times.svg" alt="user-times" />
                Karma
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#545f7d] text-sm font-medium mt-10 ml-[1.875rem]">
            BUSINESSES
          </p>
          <ul className="flex flex-col gap-2">
            <li className="border-l-4 border-transparent hover:bg-[#39cdcc]/[0.07]">
              <a
                href={"/dashboard/users"}
                className="flex gap-2 items-center py-4 pl-6 text-[#213f7d]/70 text-lg"
              >
                <img src="/briefcase-icon-2.svg" alt="briefcase" />
                Organization
              </a>
            </li>
            <li className="border-l-4 border-transparent hover:bg-[#39cdcc]/[0.07]">
              <a
                href={"/dashboard/users"}
                className="flex gap-2 items-center py-4 pl-6 text-[#213f7d]/70 text-lg"
              >
                <img src="/loan-request.svg" alt="loan-request" />
                Loan Products
              </a>
            </li>
            <li className="border-l-4 border-transparent hover:bg-[#39cdcc]/[0.07]">
              <a
                href={"/dashboard/users"}
                className="flex gap-2 items-center py-4 pl-6 text-[#213f7d]/70 text-lg"
              >
                <img src="/savings.svg" alt="savings" />
                Savings Products
              </a>
            </li>
            <li className="border-l-4 border-transparent hover:bg-[#39cdcc]/[0.07]">
              <a
                href={"/dashboard/users"}
                className="flex gap-2 items-center py-4 pl-6 text-[#213f7d]/70 text-lg"
              >
                <img src="/coins-solid-icon.svg" alt="coins" />
                Fees and Charges
              </a>
            </li>
            <li className="border-l-4 border-transparent hover:bg-[#39cdcc]/[0.07]">
              <a
                href={"/dashboard/users"}
                className="flex gap-2 items-center py-4 pl-6 text-[#213f7d]/70 text-lg"
              >
                <img src="/transaction.svg" alt="transaction" />
                Transactions
              </a>
            </li>
            <li className="border-l-4 border-transparent hover:bg-[#39cdcc]/[0.07]">
              <a
                href={"/dashboard/users"}
                className="flex gap-2 items-center py-4 pl-6 text-[#213f7d]/70 text-lg"
              >
                <img src="/user-cog.svg" alt="user-cog" />
                Service Account
              </a>
            </li>
            <li className="border-l-4 border-transparent hover:bg-[#39cdcc]/[0.07]">
              <a
                href={"/dashboard/users"}
                className="flex gap-2 items-center py-4 pl-6 text-[#213f7d]/70 text-lg"
              >
                <img src="/scroll-icon.svg" alt="scroll-icon" />
                Settlements
              </a>
            </li>
            <li className="border-l-4 border-transparent hover:bg-[#39cdcc]/[0.07]">
              <a
                href={"/dashboard/users"}
                className="flex gap-2 items-center py-4 pl-6 text-[#213f7d]/70 text-lg"
              >
                <img src="/chart-bar-icon.svg" alt="chart-bar" />
                Reports
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#545f7d] text-sm font-medium mt-10 ml-[1.875rem]">
            SETTINGS
          </p>
          <ul className="flex flex-col gap-2">
            <li className="border-l-4 border-transparent hover:bg-[#39cdcc]/[0.07]">
              <a
                href={"/dashboard/users"}
                className="flex gap-2 items-center py-4 pl-6 text-[#213f7d]/70 text-lg"
              >
                <img src="/sliders.svg" alt="sliders" />
                Preferences
              </a>
            </li>
            <li className="border-l-4 border-transparent hover:bg-[#39cdcc]/[0.07]">
              <a
                href={"/dashboard/users"}
                className="flex gap-2 items-center py-4 pl-6 text-[#213f7d]/70 text-lg"
              >
                <img src="/badge-percent-icon.svg" alt="badge-percent" />
                Fees and Pricing
              </a>
            </li>
            <li className="border-l-4 border-transparent hover:bg-[#39cdcc]/[0.07]">
              <a
                href={"/dashboard/users"}
                className="flex gap-2 items-center py-4 pl-6 text-[#213f7d]/70 text-lg"
              >
                <img src="/clipboard-list.svg" alt="audit" />
                Audit Logs
              </a>
            </li>
            <li className="border-l-4 border-transparent hover:bg-[#39cdcc]/[0.07]">
              <a
                href={"/dashboard/users"}
                className="flex gap-2 items-center py-4 pl-6 text-[#213f7d]/70 text-lg"
              >
                <img src="/tire.svg" alt="notifications" />
                System Messages
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-16 pt-5 border-t border-[#213f7d]/10">
          <button
            onClick={handleLogout}
            className="flex gap-2 items-center text-[#213f7d] text-base ml-[1.875rem]"
          >
            <img src="/sign-out.svg" alt="signout" />
            Logout
          </button>
          <p className="text-sm text-[#213f7d] ml-[1.875rem]">v1.2.0</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar2;
