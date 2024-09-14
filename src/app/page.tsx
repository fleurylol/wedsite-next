"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import NavBar from "./NavBar";

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
    <main className="flex items-center flex-col p-2">
      <p>{daysLeft} days left to the wedding!</p>
      <NavBar />
      <Image
        src="https://photos.smugmug.com/Fleury-Engagement-/i-ZFP6rzZ/0/MwpS9Vnjk9TxcKTzMfJSXqwBX6xHB8TWMVBCMB7rz/X4/093A7771-X4.jpg"
        alt="Wedding photo"
        width={500}
        height={500}
      />
    </main>
  );
}
