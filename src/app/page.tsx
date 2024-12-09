"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import NavBar from "./NavBar";
import Registry from "@/components/main/Registry";
import FAQ from "@/components/main/FAQ";

export default function Home() {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2025-04-18"); // Set your target date here
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    setDaysLeft(daysDifference);
  }, []);

  return (
    <main className="flex items-center flex-col">
      <NavBar />
      <p>{daysLeft} days left to the wedding!</p>
      <Image
        src="https://photos.smugmug.com/Fleury-Engagement-/i-ZFP6rzZ/0/MwpS9Vnjk9TxcKTzMfJSXqwBX6xHB8TWMVBCMB7rz/X4/093A7771-X4.jpg"
        alt="Wedding photo"
        width={500}
        height={500}
      />
      <WhereWhen />
      <FAQ />
    </main>
  );
}

const WhereWhen = () => {
  return (
    <div className="w-full flex flex-col items-center p-2 bg-blue-200 m-4">
      <h1 className="text-center">Where & When</h1>
      <p>April 18, 2025</p>
      <p>5:00 PM</p>
      <p>The Wagner House</p>
      <p>1 E Spring St Ste 4338 Freeport, IL 61032 US</p>
      <p className="text-blue-600">Get Directions</p>
    </div>
  );
};
