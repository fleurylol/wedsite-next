import React from "react";

const NavBar = () => {
  return (
    <>
      <Logo />
      <ul className="flex bg-yellow-300 w-full justify-center">
        <li className="p-2">Dress Code</li>
        <li className="p-2">FAQ</li>
        <li className="p-2">Travel</li>
        <li className="p-2">RSVP</li>
      </ul>
    </>
  );
};

const Logo = () => {
  return <div className="size-64 border"></div>;
};

export default NavBar;
