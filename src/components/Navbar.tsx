import React from "react";

const Navbar: React.FC = () => {

  return (
    <div className="hidden md:flex flex-col items-end">
    <span className="text-xl font-medium">call_center</span>
    <div className="flex items-center space-x-1">
      <span className="text-green-100 text-xs">●</span>
      <span className="text-xs font-medium">24/7</span>
    </div>
  </div>
  );
};

export default Navbar;
