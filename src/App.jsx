import Dashboard from "./pages/Dashboard";
import logo from "./assets/images.png";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-[#0B1120] min-h-screen" : "bg-[#f3f4f6] min-h-screen"}>

      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-3 flex items-center justify-between">
          
          <img src={logo} alt="logo" className="h-14" />

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm px-3 py-1 border rounded-md"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

        </div>
      </div>

      <Dashboard darkMode={darkMode} />

    </div>
  );
}