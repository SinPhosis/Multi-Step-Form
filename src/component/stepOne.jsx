"use client";
import { useEffect, useState } from "react";

export const StepOne = ({ setStep }) => {
  const [formValue, setFormValue] = useState(() => {
    if (typeof window !== "undefined")
      return Number(localStorage.getItem('step') || 1)
    const preValue = JSON.parse(localStorage.getItem("StepOne")) || {};
    return preValue;
  });
  const [errors, setError] = useState({});


  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typeof window !== "undefined")
        return Number(localStorage.getItem('step') || 1)
      localStorage.setItem("StepOne", JSON.stringify(formValue));
    }, 500);
    return () => clearTimeout(timeout); 
  }, [formValue]);

  const onSubmit = () => {
    let nextStep = true;

    ["firstName", "lastName", "userName"].forEach((field) => {
      if (!formValue[field] || formValue[field].trim().length === 0) {
        setError((prev) => ({
          ...prev,
          [field]: `Please enter your ${field.replace("Name", " name")}.`,
        }));
        nextStep = false;
      } else {
        setError((prev) => ({ ...prev, [field]: "" }));
      }
    });

    if (nextStep) {
      setStep(2);
    } else {
 
      const firstErrorKey = Object.keys(errors).find((key) => errors[key]);
      if (firstErrorKey) {
        document.getElementById(firstErrorKey)?.focus();
      }
    }
  };

  const handleInputChange = (field) => (e) => {
    setError((prevErrors) => ({ ...prevErrors, [field]: null })); 
    setFormValue({ ...formValue, [field]: e.target.value });
  };

  return (
    <div className="w-full h-full px-[480px] pt-[182px] pb-[187px] bg-[#f3f3f3] justify-center items-center inline-flex overflow-hidden">
      <div className="w-[480px] h-[655px] p-8 bg-white rounded-lg flex-col justify-between items-start inline-flex">
        <div className="flex-col justify-start items-start gap-7 flex">
          <div className="h-[385px] flex-col justify-start items-start gap-7 inline-flex">
            <div className="w-[416px] h-[142px] flex-col justify-start items-start gap-2 inline-flex">
              <img className="w-[60px] h[60px]" src="./Main 1.png" alt="Logo" />
              <div className="self-stretch text-[#202124] text-[26px] font-semibold font-['Inter']">
                Join Us! 😎
              </div>
              <div className="self-stretch text-center text-[#8d8d8d] whitespace-nowrap text-lg self-start font-normal font-['Inter']">
                Please provide all current information accurately.
              </div>
            </div>
            {["firstName", "lastName", "userName"].map((field, idx) => (
              <div
                key={idx}
                className="h-[68px] flex-col justify-start items-start gap-2 inline-flex mb-[20px]"
              >
                <div className="self-stretch">
                  <label
                    htmlFor={field}
                    className="text-slate-700 text-sm font-semibold font-['Inter'] leading-none"
                  >
                    {field.replace("Name", " Name")}
                  </label>
                  <span className="text-[#e14942] text-sm font-semibold font-['Inter'] leading-none">
                    *
                  </span>
                </div>
                <div>
                  <input
                    placeholder={`Your ${field.replace("Name", " name")}`}
                    id={field}
                    value={formValue[field] || ""}
                    onChange={handleInputChange(field)}
                    aria-invalid={errors[field] ? "true" : "false"}
                    aria-describedby={`${field}-error`}
                    className="h-11 w-[416px] p-3 rounded-lg border border-[#0ca5e9] justify-start text-base font-normal font-['Inter'] leading-tight items-center inline-flex"
                  />
                  {errors[field] ? (
                    <p
                      id={`${field}-error`}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors[field]}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
          <div className="w-[416px] h-11 justify-start items-start gap-2 inline-flex mt-[130px]">
            <button
              onClick={onSubmit}
              className="grow shrink basis-0 h-11 px-3 py-2.5 bg-[#121316] rounded-lg justify-center items-center gap-1 flex"
            >
              <div className="text-white text-base font-medium font-['Inter'] leading-normal">
                Continue
              </div>
              <div className="justify-start items-center flex">
                <div className="text-white text-base font-normal font-['Inter'] leading-normal">
                  1
                </div>
                <div className="text-white text-base font-normal font-['Inter'] leading-normal">
                  /3
                </div>
              </div>
              <div className="w-6 h-6 relative overflow-hidden" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
