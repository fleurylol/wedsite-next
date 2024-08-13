"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Dancing_Script, Libre_Baskerville, Pacifico } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"], // Specify the weights you need
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"], // Specify the weights you need
});

const RSVPpage = () => {
  const [guest, setGuest] = React.useState(false);
  const addGuestDemo = () => {
    guest ? setGuest(false) : setGuest(true);
  };

  return (
    <div className="flex flex-col justify-center m-auto p-2 item-center h-screen bg-blue-600">
      <div className="border rounded-3xl p-2">
        <div className="text-slate-300">
          <h1
            className={`text-6xl font-bold text-center ${dancingScript.className}`}
          >
            RSVP
          </h1>
          <h1
            className={`text-6xl font-bold text-center ${dancingScript.className}`}
          >
            to
          </h1>
          <h1
            className={`text-6xl font-bold text-center ${dancingScript.className}`}
          >
            Our Wedding!
          </h1>
          <h6
            className={`text-4xl font-bold text-center ${dancingScript.className}`}
          >
            at The Wagner House
          </h6>
          <h4
            className={`text-2xl font-bold text-center ${libreBaskerville.className}`}
          >
            on January 30th, 2026
          </h4>
          <h6
            className={`text-lg font-bold text-center ${libreBaskerville.className}`}
          >
            1 E Spring St Ste 4338, Freeport, IL
          </h6>
          <p className={`text-xs text-center ${libreBaskerville.className}`}>
            Please add name and each member of your party below
          </p>
        </div>
        <div className="flex items-center gap-2 p-4">
          <span
            className={`text-3xl font-bold ${dancingScript.className} text-slate-300 p2`}
          >
            The
          </span>
          <Input placeholder="" className="" id="party" />
          <span
            className={`text-3xl font-bold ${dancingScript.className} text-slate-300 p2`}
          >
            Party
          </span>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col gap-3 p-4 rounded-2xl bg-blue-500 text-white">
            <Label htmlFor="name">Name</Label>
            <Input placeholder="First & Last Name" id="name" />
            <Label htmlFor="song">Song Request</Label>
            <p className="text-xs">
              Enter a song to be considered for the playlist
            </p>
            <Input placeholder="Song Title & Artist" id="song" />
          </div>
          {!guest && (
            <Button
              variant={"outline"}
              className="size-fit text-black rounded-lg p-2"
              onClick={() => {
                addGuestDemo();
              }}
            >
              Add
            </Button>
          )}

          {guest && (
            <div className="flex flex-col gap-3 p-4 rounded-2xl bg-blue-500 text-white">
              <Label htmlFor="name">Name</Label>
              <Input placeholder="First & Last Name" id="name" />
              <Label htmlFor="song">Song Request</Label>
              <p className="text-xs">
                Enter a song to be considered for the playlist
              </p>
              <Input placeholder="Song Title & Artist" id="song" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RSVPpage;
