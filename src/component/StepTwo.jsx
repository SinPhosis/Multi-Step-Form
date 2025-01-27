"use client";

import { useState, useEffect } from "react";

export const StepTwo = ({ setStep }) => {
  const [formValue, setFormValue] = useState(() => {
    if (typeof window !== "undefined")
      return Number(localStorage.getItem('step') || 1)
    const preValue = JSON.parse(localStorage.getItem("StepTwo")) || {};
    return preValue;
  });
  const [errors, setError] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined")
      return Number(localStorage.getItem('step') || 1)
    localStorage.setItem("StepTwo", JSON.stringify(formValue));
  }, [formValue]);

  const back = () => {
    setStep(1);
  };

  const onSubmit = () => {
    let nextStep = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{8}$/;

    if (!formValue.email || formValue.email.trim().length === 0) {
      setError((prev) => ({
        ...prev,
        email: "Please enter your email.",
      }));
      nextStep = false;
    } else if (!emailRegex.test(formValue.email.trim())) {
      setError((prev) => ({
        ...prev,
        email: "Please enter a valid email address.",
      }));
      nextStep = false;
    } else {
      setError((prev) => ({ ...prev, email: "" }));
    }

    if (!formValue.password || formValue.password.trim().length === 0) {
      setError((prev) => ({
        ...prev,
        password: "Please enter your password.",
      }));
      nextStep = false;
    } else {
      setError((prev) => ({ ...prev, password: "" }));
    }

    if (!formValue.confirmPassword || formValue.confirmPassword.trim().length === 0) {
      setError((prev) => ({
        ...prev,
        confirmPassword: "Please confirm your password.",
      }));
      nextStep = false;
    } else if (formValue.confirmPassword !== formValue.password) {
      setError((prev) => ({
        ...prev,
        confirmPassword: "Your passwords don't match.",
      }));
      nextStep = false;
    } else {
      setError((prev) => ({ ...prev, confirmPassword: "" }));
    }

    if (!formValue.phoneNumber || formValue.phoneNumber.trim().length === 0) {
      setError((prev) => ({
        ...prev,
        phoneNumber: "Please enter your phone number.",
      }));
      nextStep = false;
    } else if (!phoneRegex.test(formValue.phoneNumber)) {
      setError((prev) => ({
        ...prev,
        phoneNumber: "Please enter a valid phone number (8 digits).",
      }));
      nextStep = false;
    } else {
      setError((prev) => ({ ...prev, phoneNumber: "" }));
    }

    if (nextStep) {
      setStep(3);
    }
  };

  const handleChange = (field) => (e) => {
    setError((prevErrors) => ({ ...prevErrors, [field]: null }));
    setFormValue((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="w-full h-full px-[480px] pt-[182px] pb-[187px] bg-[#f3f3f3] justify-center items-center inline-flex overflow-hidden">
      <div className="w-[480px] h-[655px] p-8 bg-white rounded-lg flex-col justify-between items-center inline-flex">
        <div className="flex-col justify-start items-start gap-7 flex">
          <div className="h-[129px] flex-col justify-start items-start gap-7 flex">
            <div className="w-[416px] h-[129px] flex-col justify-start items-start gap-2 inline-flex">
              <img className="w-[60px] h-[60px]" src="./Main 1.png" alt="Main logo" />
              <div className="self-stretch text-[#202124] text-[26px] font-semibold font-['Inter']">
                Join Us! 😎
              </div>
              <div className="self-stretch text-center text-[#8d8d8d] whitespace-nowrap text-lg font-normal font-['Inter']">
                Please provide all current information accurately.
              </div>
            </div>
            <div className="h-[416px] h-[308px] flex-col justify-start items-start gap-3 inline-flex">
              {[
                { label: "Email", field: "email", type: "text", placeholder: "Your email" },
                { label: "Phone Number", field: "phoneNumber", type: "number", placeholder: "Your phone number" },
                { label: "Password", field: "password", type: "password", placeholder: "Password" },
                { label: "Confirm Password", field: "confirmPassword", type: "password", placeholder: "Confirm password" },
              ].map(({ label, field, type, placeholder }) => (
                <div key={field} className="h-[68px] flex-col justify-start items-start gap-2 mb-[20px]">
                  <div className="self-stretch">
                    <span className="text-slate-700 text-sm font-semibold font-['Inter'] leading-none">
                      {label}
                    </span>
                    <span className="text-[#e14942] text-sm font-semibold font-['Inter'] leading-none"> *</span>
                  </div>
                  <div>
                    <input
                      type={type}
                      placeholder={placeholder}
                      id={field}
                      value={formValue[field] || ""}
                      onChange={handleChange(field)}
                      className="h-11 w-[416px] p-3 rounded-lg border border-[#0ca5e9] justify-start text-base font-normal font-['Inter'] leading-tight items-center inline-flex"
                    />
                    {errors[field] && <p className="text-red-500">{errors[field]}</p>}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[416px] h-11 justify-start items-start gap-2 inline-flex">
              <button
                onClick={back}
                className="h-11 px-3 py-2.5 bg-white rounded-md border border-slate-300 justify-center items-center gap-1 flex"
              >
                <img className="w-6 h-6 relative overflow-hidden" src="./Left.png" alt="Back" />
                <div className="text-[#202124] text-base font-medium font-['Inter'] leading-normal">
                  Back
                </div>
              </button>
              <button
                onClick={onSubmit}
                className="grow shrink basis-0 h-11 px-3 py-2.5 bg-[#121316] rounded-lg justify-center items-center gap-1 flex"
              >
                <div className="text-white text-base font-medium font-['Inter'] leading-normal">
                  Continue
                </div>
                <div className="justify-start items-center flex">
                  <div className="text-white text-base font-normal font-['Inter'] leading-normal">2</div>
                  <div className="text-white text-base font-normal font-['Inter'] leading-normal">/3</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
