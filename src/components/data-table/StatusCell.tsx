import React, { useState } from "react";
import ActionBtn from "./action-btn";

interface StatusCellProps {
  status: string;
  onOptionsClick: () => void;
}

const StatusCell: React.FC<StatusCellProps> = ({ status, onOptionsClick }) => {
    const [openOption, setOpenOption] = useState(false)
    const handleOpen = () => {
      setOpenOption((prevOpenOption) => !prevOpenOption);
    };
  const getStatusStyle = () => {
    switch (status.toLowerCase()) {
      case "active":
        return "text-green-600 bg-green-100";
      case "inactive":
        return "text-red-600 bg-red-100";
      case "pending":
        return "text-yellow-600 bg-yellow-100";
      case "blacklisted":
        return "text-gray-600 bg-gray-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="flex items-center justify-between px-2 py-1 rounded-lg">
      <span className={` text-center py-1 w-20 rounded-full ${getStatusStyle()}`}>
        {status}
      </span>
      <button onClick={onOptionsClick} className="ml-2">
        <img src="/more-icon.svg" alt="Options" onClick={handleOpen}  />
      </button>

      {openOption && (
        <div className="absolute"><ActionBtn /></div>
      )}
    </div>
  );
};

export default StatusCell;
