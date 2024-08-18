
import { useEffect, useState } from "react";


const ProfileCard = () => {
   const [details, setDetails] = useState(null);

   useEffect(() => {
     // Fetch your data here
     fetch("/data.json")
       .then((response) => response.json())
       .then((data) => setDetails(data[0])); 
   }, []);

   if (!details) {
     return <div>Loading...</div>; 
   }

  return (
    <div className="bg-white">
      <div className="flex lg:flex-row sm:flex-col md:flex-col gap-6  sm:items-center sm:justify-center sm:my-8  lg:justify-start ">
        <img src={"/avatar.svg"} alt="avatar" width={100} height={100} />
        <div className="flex lg:flex-row sm:flex-col md:flex-col lg:gap-10 sm:gap-6 lg:my-20 sm:items-center sm:justify-center lg:items-start  ">
          <div className="flex flex-col">
            <p className="font-bold">{details?.full_name}</p>
            <p>{details?.id}</p>
          </div>
          <div className="bg-gray-500 lg:h-12 lg:w-[0.1rem] sm:h-[0.1rem] sm:w-full "></div>
          <div className="flex flex-col text-blue-900 font-semibold">
            <p>User’s Tier</p>
            <div className="flex flex-row">
              <img src="/full-star.svg" alt="full star" />
              <img src="/empty-star.svg" alt="" />
              <img src="/empty-star.svg" alt="" />
            </div>
          </div>
          <div className="bg-gray-500 lg:h-12 lg:w-[0.1rem] sm:h-[0.1rem] sm:w-full"></div>
          <div className="flex flex-col text-center">
            <p className="font-bold lg:text-lg"> {details?.financial_details.balance}</p>
            <p className="sm:text-[0.6rem] lg:text-[0.875rem]">
              {details?.financial_details.bank_account}/
              {details?.financial_details.bank_account}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row overflow-x-auto sm:w-[22rem] md:w-full lg:w-full outline-none lg:gap-16 sm:gap-8 md:gap-16 font-semibold text-blue-900 lg:ml-8 ">
        <button className="text-green-700 border-b-2 border-green-700 px-4 py-2">
          General Details
        </button>
        <button>Documents</button>
        <button>Bank Details</button>
        <button >Loans</button>
        <button >Savings</button>
        <button >App and System</button>
      </div>
    </div>
  );
};

export default ProfileCard;
