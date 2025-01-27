"use client";
import React, { useState, useEffect } from "react"; 
import "./globals.css";
import { StepOne } from "@/component/stepOne";
import { StepTwo } from "@/component/StepTwo";
import { StepThree } from "@/component/StepThree";
import { StepFour } from "@/component/stepFour";

export default function Home() {
  const [step, setStep] = useState(1);
  if (typeof Window !== 'undefined')
    return Number(localStorage.getItem('step') || 1)
  
  const [localStorage, setLocalStorageData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const data = window.localStorage.getItem("myData");
      setLocalStorageData(data);
    }
  }, []);

  return (
    <>
      {step === 1 && <StepOne setStep={setStep} />}
      {step === 2 && <StepTwo setStep={setStep} />}
      {step === 3 && <StepThree setStep={setStep} />}
      {step === 4 && <StepFour setStep={setStep} />}
    </>
  );
}
