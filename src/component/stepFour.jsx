"use client";

export const StepFour = ({ setStep }) => {
  return (
    <div className="w-full h-full px-[480px] pt-[182px] pb-[187px] bg-[#f3f3f3] justify-center items-center inline-flex overflow-hidden">
      <div className="w-[480px] h-[193px] p-8 bg-white rounded-lg flex-col justify-start items-center gap-[54px] inline-flex">
        <div className="flex-col justify-start items-start gap-7 flex">
          <div className="h-[129px] flex-col justify-start items-start gap-2 flex">
            <img
              className="w-[60px] h-[60px]"
              src="./Main 1.png"
            />
            <div className="self-stretch text-[#202124] text-[26px] font-semibold font-['Inter']">
              You're All Set 🔥
            </div>
            <div className="self-stretch text-[#8d8d8d] text-lg font-normal font-['Inter']">
              We have received your submission. Thank you!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
