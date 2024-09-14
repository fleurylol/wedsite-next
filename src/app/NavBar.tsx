import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <Logo />
      <ul className="flex bg-blue-400 rounded-lg w-full text-white justify-center m-2">
        <li className="p-2 text-outline">
          <Link href="/gallery">Gallery</Link>
        </li>
        <li className="p-2 text-outline">Dress Code</li>
        <li className="p-2 text-outline">FAQ</li>
        <li className="p-2 text-outline">Travel</li>
        <li className="p-2 text-outline">RSVP</li>
      </ul>
    </>
  );
};

const Logo = () => {
  return <div className="size-64 border"></div>;
};

export default NavBar;