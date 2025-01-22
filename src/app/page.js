"use client";
import React from "react";
import "./globals.css";
import { useState } from "react";
import { StepOne } from "@/component/stepOne";
import { StepTwo } from "@/component/StepTwo";
export default function Home() {
  const [step, setStep] = useState(1)
  return (
    <>
      {step === 1 ? < StepOne setStep={setStep} />: < StepTwo setStep={setStep}/>}
    </>
  );
}
