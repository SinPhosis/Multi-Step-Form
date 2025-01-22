"use client";
import { useState } from "react";

export const StepOne = ({setStep}) => {
  const [formValue, setFormValue] = useState({});
  const [errors, setError] = useState({});
 
  const onSubmit = () => {
    let nextStep = false;
 
    console.log(formValue);
 
    if (!formValue.firstName || formValue.firstName.length === 0) {
      setError((prev) => ({
        ...prev,
        firstName: "First name cannot contain special characters or numbers.",
      }));
      nextStep = false;
    } else {
      setError((prev) => ({ ...prev, firstName: "" }));
      nextStep = true;
    }
    if (!formValue.lastName || formValue.lastName.length === 0) {
      setError((prev) => ({
        ...prev,
        lastName: "Last name cannot contain special characters or numbers.",
      }));
      nextStep = false;
    } else {
      setError((prev) => ({ ...prev, lastName: "" }));
      nextStep = true;
    }
    if (!formValue.userName || formValue.userName.length === 0) {
      setError((prev) => ({
        ...prev,
        userName: "Username cannot contain special characters or numbers.",
      }));
      nextStep = false;
    } else {
      setError((prev) => ({ ...prev, userName: "" }));
      nextStep = true;
    }
    if(nextStep){
      setStep(2)
    }
  };
 
  console.log(errors);
  const onFirstNameChange = (e) =>
    setFormValue({ ...formValue, firstName: e.target.value });
  const onLastNameChange = (e) =>
    setFormValue({ ...formValue, lastName: e.target.value });
  const onUserNameChange = (e) =>
    setFormValue({ ...formValue, userName: e.target.value });
 
  return (
    <div className="w-full h-full px-[480px] pt-[182px] pb-[187px] bg-[#f3f3f3] justify-center items-center inline-flex overflow-hidden">
      <div className="w-[480px] h-[655px] p-8 bg-white rounded-lg flex-col justify-between items-start inline-flex">
        <div className="flex-col justify-start items-start gap-7 flex">
          <div className="h-[385px] flex-col justify-start items-start gap-7 inline-flex">
            <div className="w-[416px] h-[142px] flex-col justify-start items-start gap-2 inline-flex">
              <img className="w-[60px] h[60px]" src="./Main 1.png" />
              <div className="self-stretch text-[#202124] text-[26px] font-semibold font-['Inter']">
                Join Us! 😎
              </div>
              <div className="self-stretch text-center text-[#8d8d8d] whitespace-nowrap text-lg self-start font-normal font-['Inter']">
                Please provide all current information accurately.
              </div>
            </div>
            <div className="w-[416px] h-[228px] flex-col justify-start items-start gap-3 inline-flex">
              <div className="self-stretch h-[68px] flex-col justify-start items-start gap-2 flex mb-[20px]">
                <div className="self-stretch">
                  <span className="text-slate-700 text-sm font-semibold font-['Inter'] leading-zone">
                    First Name
                  </span>
                  <span className="text-[#e14942] text-sm font-semibold font-['Inter'] leading-none">
                    {" "}
                    *
                  </span>
                </div>
                <div>
                  <input
                    placeholder="Your first name"
                    id="firstName"
                    onChange={onFirstNameChange}
                    className="h-11 w-[416px] p-3 rounded-lg border border-[#0ca5e9] justify-start text-base font-normal font-['Inter'] leading-tight items-center inline-flex"
                  />
                  {errors.firstName ? (
                    <p className="text-red-500">{errors.firstName}</p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="h-[68px] flex-col justify-start items-start gap-2 inline-flex mb-[20px]">
                <div className="self-stretch">
                  <span class="text-slate-700 text-sm font-semibold font-['Inter'] leading-none">
                    Last name{" "}
                  </span>
                  <span className="text-[#e14942] text-sm font-semibold font-['Inter'] leading-none">
                    *
                  </span>
                </div>
                <div>
                  <input
                    placeholder="Your last name"
                    id="lastName"
                    onChange={onLastNameChange}
                    className="h-11 w-[416px] p-3 rounded-lg border border-[#0ca5e9] justify-start text-base font-normal font-['Inter'] leading-tight items-center inline-flex"
                  />
                  {errors.lastName ? (
                    <p className="text-red-500">{errors.lastName}</p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="h-[68px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch">
                  <span className="text-slate-700 text-sm font-semibold font-['Inter'] leading-none">
                    Username{" "}
                  </span>
                  <span className="text-[#e14942] text-sm font-semibold font-['Inter'] leading-none">
                    *
                  </span>
                </div>
                <div>
                  <input
                    placeholder="Your username"
                    id="userName"
                    onChange={onUserNameChange}
                    className="h-11 w-[416px] p-3 rounded-lg border border-[#0ca5e9] justify-start text-base font-normal font-['Inter'] leading-tight items-center inline-flex"
                  />
                  {errors.userName ? (
                    <p className="text-red-500">{errors.userName}</p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[416px] h-11 justify-start items-start gap-2 inline-flex mt-[130px]">
            <button 
            onClick={onSubmit}
            className="grow shrink basis-0 h-11 px-3 py-2.5 bg-[#121316] rounded-lg justify-center items-center gap-1 flex">
                <div className="text-white text-base font-medium font-['Inter'] leading-normal">Continue</div>
                <div className="justify-start items-center flex">
                    <div className="text-white text-base font-normal font-['Inter'] leading-normal">1</div>
                    <div className="text-white text-base font-normal font-['Inter'] leading-normal">/3</div> 
                </div>
                <div className="w-6 h-6 relative overflow-hidden" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
