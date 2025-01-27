"use client";

import { useState, useEffect } from "react";

export const StepThree = ({ setStep }) => {
  const [formValue, setFormValue] = useState({ profilePicture: null, date: "" });
  const [errors, setError] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined")
      return Number(localStorage.getItem('step') || 1)
    const savedData = localStorage.getItem("StepThree");
    if (savedData) {
      const parsedData = JSON.parse(savedData);


      if (parsedData.profilePicture) {
        parsedData.profilePicture = null; 
      }

      setFormValue(parsedData);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined")
      return Number(localStorage.getItem('step') || 1)
    localStorage.setItem("StepThree", JSON.stringify(formValue));
  }, [formValue]);

  const back = () => {
    setStep(2);
  };

  const ImageOnChange = (e) => {
    const file = e.target.files[0];

    if (!file.type.match("image/(jpeg|png|jpg)")) {
      setError((prev) => ({
        ...prev,
        profilePicture: "Only .jpg or .png files are allowed.",
      }));
      return;
    }
    if (file.size > 5000000) {
      setError((prev) => ({
        ...prev,
        profilePicture: "File size should be less than 5MB.",
      }));
      return;
    }

    setFormValue({ ...formValue, profilePicture: file });
    setError((prev) => ({ ...prev, profilePicture: "" }));
  };

  const close = () => {
    setFormValue({ ...formValue, profilePicture: null });
  };

  const validateForm = () => {
    const newErrors = {};
    const date = new Date(formValue.date);
    const today = new Date();
    const minDate = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    );

    if (!formValue.date) {
      newErrors.date = "Please enter your birthday.";
    } else if (date > minDate) {
      newErrors.date = "You have to be 18 or older.";
    }

    if (!formValue.profilePicture) {
      newErrors.profilePicture = "Please upload your profile picture.";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = () => {
    if (validateForm()) {
      setStep(4);
    }
  };

  return (
    <div className="w-full h-full px-[480px] pt-[182px] pb-[187px] bg-[#f3f3f3] justify-center items-center inline-flex overflow-hidden">
      <div className="w-[480px] h-[655px] p-8 bg-white rounded-lg flex-col justify-between items-start inline-flex">
        <div className="flex-col justify-start items-start gap-7 flex">
          <div className="h-[129px] flex-col justify-start items-start gap-2 flex">
            <img className="w-[60px] h-[60px]" src="./Main 1.png" alt="Logo" />
            <div className="self-stretch text-[#202124] text-[26px] font-semibold font-['Inter']">
              Join Us! 😎
            </div>
            <div className="self-stretch text-center text-[#8d8d8d] whitespace-nowrap text-lg font-normal font-['Inter']">
              Please provide all current information accurately.
            </div>
          </div>
          <div className="w-[416px] h-72 flex-col justify-start items-start gap-3 inline-flex">
            <div className="self-stretch h-[68px] flex-col justify-start items-start gap-2 flex">
              <label htmlFor="date" className="self-stretch">
                <span className="text-slate-700 text-sm font-semibold font-['Inter'] leading-none">
                  Date of birth
                </span>
                <span className="text-[#e14942] text-sm font-semibold font-['Inter'] leading-none"> *</span>
              </label>
              <div>
                <input
                  id="date"
                  className="self-stretch p-3 rounded-lg border border-slate-300 justify-between items-center inline-flex w-[416px]"
                  type="date"
                  value={formValue.date}
                  onChange={(e) =>
                    setFormValue((prev) => ({ ...prev, date: e.target.value }))
                  }
                />
                {errors.date && <p className="text-red-500">{errors.date}</p>}
              </div>
            </div>
            <div className="self-stretch h-52 flex-col justify-start items-start gap-3 flex">
              <label htmlFor="files" className="self-stretch">
                <span className="text-slate-700 text-sm font-semibold font-['Inter'] leading-none">
                  Profile image
                </span>
                <span className="text-[#e14942] text-sm font-semibold font-['Inter'] leading-none"> *</span>
              </label>
              {formValue.profilePicture ? (
                <div className="relative w-full h-[220px] flex-col justify-center items-center inline-flex h-[180px] w-[416px] bg-[#7e7e7f]/5 rounded-lg overflow-hidden">
                  <img
                    className="w-full h-full"
                    src={URL.createObjectURL(formValue.profilePicture)}
                    alt="Profile Preview"
                  />
                  <button
                    onClick={close}
                    className="absolute top-2 right-2 h-6 w-6 p-1.5 bg-[#202124] rounded-full flex justify-center items-center z-10"
                  >
                    <img
                      src="close.png"
                      className="h-full w-full object-contain"
                      alt="Close"
                    />
                  </button>
                </div>
              ) : (
                <label
                  htmlFor="files"
                  className="relative w-full h-[200px] w-[416px] bg-[#7e7e7f]/5 rounded-lg flex flex-col justify-center items-center gap-2 overflow-hidden cursor-pointer"
                >
                  <input
                    id="files"
                    type="file"
                    className="invisible"
                    onChange={ImageOnChange}
                  />
                  <img
                    className=" w-[32px] p-2 bg-white rounded-full"
                    src="./image.png"
                    alt="Add Image Icon"
                  />
                  <p>Add image</p>
                </label>
              )}
              {errors.profilePicture && (
                <p className="text-red-500">{errors.profilePicture}</p>
              )}
            </div>
          </div>
        </div>
        <div className="w-[416px] h-11 justify-start items-start gap-2 inline-flex">
          <button
            onClick={back}
            className="h-11 px-3 py-2.5 bg-white rounded-md border border-slate-300 flex justify-center items-center gap-1"
          >
            <div className="w-6 h-6 relative overflow-hidden">
              <img src="./Left.png" alt="Back" />
            </div>
            <div className="text-[#202124] text-base font-medium font-['Inter'] leading-normal">
              Back
            </div>
          </button>
          <button
            onClick={onSubmit}
            className="grow shrink basis-0 h-11 px-3 py-2.5 bg-[#121316] rounded-md flex justify-center items-center gap-1"
          >
            <div className="text-white text-base font-medium font-['Inter'] leading-normal">
              Continue
            </div>
            <div className="flex items-center">
              <div className="text-white text-base font-normal font-['Inter'] leading-normal">
                3
              </div>
              <div className="text-white text-base font-normal font-['Inter'] leading-normal">
                /3
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
