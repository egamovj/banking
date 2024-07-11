"use client";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full">
      {mounted ? (
        <CountUp decimals={2} decimal="," prefix="$" end={amount} />
      ) : (
        `$${amount.toFixed(2)}`
      )}
    </div>
  );
};

export default AnimatedCounter;
