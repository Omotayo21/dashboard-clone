import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import Sidebar from "./components/Sidebar";
import Sidebar2 from "./components/Siderbar2";
interface NavbarProps {
  onToggleSidebar: () => void;
  onSearch: (term: string) => void;
}

// Layout component for routes with Navbar and Sidebar
const MainLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Navbar onToggleSidebar={handleSidebarToggle} onSearch={handleSearch} />
      <div className="flex flex-row gap-16">
        {isSidebarOpen && <Sidebar2 />}
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Outlet context={{ searchTerm }} />
        </div>
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/users" element={<Users />} />
          <Route path="/user-details" element={<UserDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
