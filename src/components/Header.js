import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full py-4 px-7 bg-stone-800/95">
        <Link to="/">
          <p className="text-4xl font-bold text-white">CodeQuest</p>
        </Link>
      </div>
    </>
  );
};

export default Header;
