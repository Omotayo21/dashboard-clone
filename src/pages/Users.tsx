import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import DataTable from "../components/data-table/data-table";
import Filter from "../components/Filter";
import ActionBtn from "../components/data-table/action-btn";
import { useOutletContext } from "react-router-dom";
const Users: React.FC = () => {

  const {searchTerm} = useOutletContext<{searchTerm: string}>()
   const [data, setData] = useState([]);
 const apiUrl = 'https://api.jsonbin.io/v3/b/67019006acd3cb34a891cac1'
        const apiKey = '$2a$10$Hz9vTESkcpmqRFawksCfYenkkhs.wLNWsIihEBXR2EHfFNa95Pmha'; // Replace with your actual API key

  useEffect(() => {
    
    fetch(`${apiUrl}/latest`, {
                headers: {
                    'X-Master-Key': apiKey
                }
            })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className=" lg:h-[calc(100vh-0.75rem)] block overflow-auto mt-4 outline-none">
        <h1 className="text-2xl  font-bold text-[#213f7d] my-8">Users</h1>
        <div className="flex lg:flex-row sm:flex-col md:flex-col gap-2.5 mb-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="lg:w-full sm:w-40 md:w-48 p-3 shadow-2xl flex flex-col bg-white"
          >
            <img src="/users-page.svg" alt="users page" width={50} />
            <p className="font-medium text-[#545f7d] uppercase">Users</p>
            <p className="font-semibold text-2xl text-[#213f7d]">2,453</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="lg:w-full sm:w-40 md:w-48 p-3 shadow-2xl flex flex-col bg-white"
          >
            <img src="/active-users.svg" alt="active users" width={50} />
            <p className="font-medium text-[#545f7d] uppercase">Active Users</p>
            <p className="font-semibold text-2xl text-[#213f7d]">2,453</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="lg:w-full p-3 sm:w-40 md:w-48 shadow-2xl flex flex-col bg-white"
          >
            <img src="/users-loans.svg" alt="users with loans" width={50} />
            <p className="font-medium text-[#545f7d] uppercase">
              Users with Loans
            </p>
            <p className="font-semibold text-2xl text-[#213f7d]">12,453</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="lg:w-full p-3 sm:w-40 md:w-48 shadow-2xl flex flex-col bg-white"
          >
            <img src="/users-savings.svg" alt="users with savings" width={50} />
            <p className="font-medium text-[#545f7d] uppercase">
              Users with Savings
            </p>
            <p className="font-semibold text-2xl text-[#213f7d]">102,453</p>
          </motion.div>
        </div>
        <div className="p-4">
          <h1 className="text-xl mb-4">Users Table</h1>
          <DataTable data={data} searchTerm={searchTerm} />
        </div>
      </div>
    </>
  );
};

export default Users;
