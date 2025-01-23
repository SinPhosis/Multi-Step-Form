"use client";
import React from "react";
import "./globals.css";
import { useState } from "react";
import { StepOne } from "@/component/stepOne";
import { StepTwo } from "@/component/StepTwo";
import { StepThree } from "@/component/StepThree";
export default function Home() {
  const [step, setStep] = useState(1)
  return (
    <>
    {step === 1 && < StepTwo setStep={setStep} />}
    {step === 2 && < StepTwo setStep={setStep} />}
    {step === 3 && < StepThree setStep={setStep} />}
    </>
  );
}
