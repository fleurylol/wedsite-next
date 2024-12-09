"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Guest } from "@/lib/types";
import { findGuest } from "@/server/db/queries";
import React, { useState } from "react";
import classnames from "classnames";

const RSVP = () => {
  const [guestName, setGuestName] = React.useState("");
  const [guest, setGuest] = useState<Guest | null>(null);
  const [attending, setAttending] = useState(false);
  const [hasPlusOne, setHasPlusOne] = useState(false);
  const [songRequest, setSongRequest] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuestName(e.target.value);
  };

  const handleRSVP = async () => {
    setGuest(null);
    const foundGuest = await findGuest(guestName);
    if (foundGuest) {
      setGuest(foundGuest);
      console.log(foundGuest);
    } else {
      console.log("Guest not found");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl">You&apos;re Invited!</h1>
      <p>Please enter your first & last name below to RSVP!</p>
      <Input
        className="w-2/4 m-2"
        value={guestName}
        onChange={handleInput}
        placeholder="First & Last Name"
      />
      <Button onClick={handleRSVP}>RSVP</Button>
      {guest && (
        <div>
          <h2>{guest[0].guestName}</h2>
          <p>Attending: {guest[0].attending ? "Yes" : "No"}</p>
          <Button onClick={() => setAttending(false)}>
            I will not be attending
          </Button>
          <Button onClick={() => setAttending(true)}>
            I will be attending
          </Button>
          <p>Plus One: {guest[0].hasPlusOne ? "Yes" : "No"}</p>
          <p>Song Request: {guest[0].songRequest}</p>
        </div>
      )}
    </div>
  );
};

export default RSVP;
