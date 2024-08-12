"use client"
import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
});


const RSVPpage = () => {
  return (
    <div className='flex flex-col justify-center m-auto p-2 item-center h-screen bg-blue-600'> 
    <div className='p-6 text-slate-300'>
    <h1 className={`text-6xl font-bold text-center ${dancingScript.className}`}>RSVP</h1>
    <h1 className={`text-6xl font-bold text-center ${dancingScript.className}`}>to</h1>
    <h1 className={`text-6xl font-bold text-center ${dancingScript.className}`}>Our Wedding!</h1>
    <h4 className={`text-3xl font-bold ${dancingScript.className}`}>Date: 1/30/26</h4>
    <h6 className={`text-3xl font-bold ${dancingScript.className}`}>Location: The Wanger House</h6>
    <h6 className={`text-xl font-bold ${dancingScript.className}`}>1 E Spring St Ste 4338, Freeport, IL</h6>
    </div>
    <div className='flex flex-col gap-3 p-4 rounded-2xl bg-blue-500 text-white'>
    <Label htmlFor='name' >Name</Label>
    <Input placeholder='First & Last Name' id="name" />
    <Label htmlFor='song'>Song Request</Label>
    <p className='text-xs'>Enter a song to be considered for the playlist</p>
    <Input placeholder='Song Title & Artist' id="song" />
    </div>
    <Button variant={"outline"} className="size-fit text-black rounded-lg p-2">Add</Button>
    </div>
  )
}

export default RSVPpage
