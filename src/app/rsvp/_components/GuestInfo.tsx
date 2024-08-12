import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"


const GuestInfo = () => {
  return (
    <div className='flex flex-col gap-3 border-2 p-8 border-black rounded-2xl'>
    <Label htmlFor='name' >Name</Label>
    <Input placeholder='First & Last Name' id="name" />
    <Label htmlFor='song'>Song Request</Label>
    <Input placeholder='Enter a song to be considered for the playlist' id="song" />
    <Button variant={"outline"} className="size-fit rounded-lg">Add</Button>
    </div>
  )
}

export default GuestInfo
