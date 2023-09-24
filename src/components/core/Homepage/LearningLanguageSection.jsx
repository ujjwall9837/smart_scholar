import React from "react";
import HighLightText from "./HighLightText";
import know_your_progress from "../../../assets/Images/Know_your_progress.png";
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "./Button";
export const LearningLanguageSection = () => {
  return (
    <div className="mt-[130px] w-11/12 mb-32">
      <div className="flex flex-col gap-5 items-center">
        <div className="text-4xl font-semibold text-center">
          Your Swiss knife for <HighLightText text={"learning any language"} />
        </div>
        <div className="text-center text-richblack-600 lg:w-[75%] mx-auto text-base font-medium leading-6 mt-3">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0">
          <img
            src={know_your_progress}
            alt="KnowYourProgressImage"
            className="object-contain  lg:-mr-32 "
          />
          <img
            src={compare_with_others}
            alt="Comparewoithothersimage"
            className="object-contain lg:-mb-10 lg:-mt-0 -mt-12"
          />
          <img
            src={plan_your_lessons}
            alt="planyourlessonImage"
            className="object-contain lg:-ml-36 lg:-mt-5 -mt-16-ml-36"
          />
        </div>
        <div className="w-fit mx-auto lg:mb-20 mb-8 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            <div>Learn More</div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};
export default LearningLanguageSection;
