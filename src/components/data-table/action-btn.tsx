


import { useState } from "react";


const ActionBtn = () => {
  const [activeId, setActiveId] = useState<string | undefined>(undefined);

  const handleViewActions = (id: string) => {
    if (activeId === id) {
      setActiveId(undefined);
    } else {
      setActiveId(id);
    }
  };

  return (
    <div className="relative w-64">
      <ul className=" absolute top-[1.9rem] left-[-2rem] z-10 flex flex-col w-[8.25rem] gap-[1.25rem] border border-gray-100 rounded-md bg-white py-2">
        <li className="flex flex-row ">
          <a href={"/user-details"} className="text-sm flex flex-row gap-2 px-2 ">
            <img src="/views.svg" alt="views" />
            View Details
          </a>
        </li>
        <li className="flex flex-row gap-2 px-2">
          <img src="/delete-user.svg" alt="" />
          Blacklist User
        </li>
        <li className="flex flex-row gap-2 px-2">
          <img src="/activate-user-icon.svg" alt="" />
          Activate User
        </li>
      </ul>
    </div>
  );
};

export default ActionBtn;
