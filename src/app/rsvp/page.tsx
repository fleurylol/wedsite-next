"use client";
import { findGuest } from "@/server/db/queries";
import React from "react";

const RSVP = () => {
  const [guestName, setGuestName] = React.useState("");
  const [notFound, setNotFound] = React.useState(false);
  const handleInput = () => (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuestName(e.target.value);
  };
  const handleRSVP = async () => {
    const guest = await findGuest(guestName);
    if (guest.length === 0) {
      setNotFound(true);
      return;
    }
    console.log(guest);
  };
  return (
    <div>
      <input type="text" placeholder="Name" onChange={handleInput()} />
      {notFound && <div>Guest not found</div>}
      <button onClick={() => handleRSVP()}>RSVP</button>
    </div>
  );
};

export default RSVP;
