"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2026-01-30"); // Set your target date here
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    setDaysLeft(daysDifference);
  }, []);

  return (
    <main>
      <p>{daysLeft} days left to the wedding!</p>
    </main>
  );
}
