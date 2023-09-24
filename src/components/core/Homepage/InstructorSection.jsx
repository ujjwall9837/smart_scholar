import React from "react";
import Instructor from "../../../assets/Images/Instructor.png";
import HighLightText from "./HighLightText";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa";

export const InstructorSection = () => {
  return (
    <div className="mt-16">
      <div className="flex lg:flex-row flex-col gap-20 items-center">
        <div className="lg:w-[50%]">
          <img
            src={Instructor}
            alt="Instructor"
            className="shadow-[-20px_-20px_0px_0px]"
          />
        </div>
        <div className="lg:w-[50%] flex flex-col gap-10 items-start">
          <div className="text-4xl font-semibold lg:w-[50%]">
            Become an <HighLightText text={"Instructor"} />
          </div>
          <p className="text-[16px] font-medium w-[80%] text-richblack-300">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>
          <CTAButton active={true} linkto={"/signup"}>
            <div className="flex flex-row gap-2 items-center">
              Start Learning Today <FaArrowRight />
            </div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};
export default InstructorSection;
