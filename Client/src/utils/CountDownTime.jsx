"use client";
import React from "react";
import Countdown from "react-countdown";

export const CountDownTime = () => {
  return (
    <Countdown
      date={Date.now() + 5000000000}
      renderer={({ days, hours, minutes, seconds }) => (
        <div className="mt-8 flex gap-6 text-secondary font-jost text-3xl">
          <div>
            <h2 className="text-primary font-medium">{days}</h2>
            <p className="text-xs font-bold">DAYS</p>
          </div>
            <span className="mx-1 text-primary">:</span>
          <div>
            <h2 className="text-primary font-medium">{hours}</h2>
            <p className="text-xs font-bold">HOURS</p>
          </div>
          <span className="mx-1 text-primary">:</span>
          <div>
            <h2 className="text-primary font-medium">{minutes}</h2>
            <p className="text-xs font-bold">MINS</p>
          </div>
          <span className=" text-primary">:</span>
          <div>
            <h2 className="text-primary font-medium">{seconds}</h2>
            <p className="text-xs font-bold">SEC</p>
          </div>
        </div>
      )}
    />
  );
};