import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighLightText from "../components/core/Homepage/HighLightText";
import CTAButton from "../components/core/Homepage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/Homepage/CodeBlocks";
import TimelineSection from "../components/core/Homepage/TimelineSection";
import LearningLanguageSection from "../components/core/Homepage/LearningLanguageSection";
import InstructorSection from "../components/core/Homepage/InstructorSection";
import Footer from "../components/common/Footer";
import ExploreMore from "../components/core/Homepage/ExploreMore";
// import "./home.css";
const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex flex-col w-11/12 items-center max-w-maxContent text-white justify-between ">
        <Link to={"/signup"}>
          <div className="group mt-16 p-1 mx-auto rounded-full drop-shadow-[0_1.5px_rgba(255 ,  255 ,  255 , 0.25)] bg-richblack-700 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
            <div className="flex flex-row items-center gap-2 rounded-full py-[5px] px-10 group-hover:bg-richblack-900 transition-all duration-200">
              <p>Become an instructor</p>
              <FaArrowRight></FaArrowRight>
            </div>
          </div>
        </Link>
        <div className="text-center text-4xl font-semibold mt-6">
          Empower your Future with <HighLightText text={"Coding Skills"} />
        </div>
        <div className="mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
        <div className="flex flex-row gap-7 mt-8">
          <CTAButton linkto={"/signup"} active={true}>
            Learn More
          </CTAButton>
          <CTAButton linkto={"/"} active={false}>
            Book a Demo
          </CTAButton>
        </div>
        <div className="mx-3 my-12 shadow-blue-200 shadow-[10px_-5px_50px_-5px]">
          <video
            muted
            loop
            autoPlay
            className="shadow-[20px_20px_rgba(255,255,255)]"
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>
        {/* code section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your <HighLightText text={"coding potential"} /> with our
                online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          ></CodeBlocks>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Start <HighLightText text={`coding in\n seconds`} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson ",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          ></CodeBlocks>
        </div>

        <ExploreMore />
      </div>
      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[333px]">
          <div className="w-11/12 max-W-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
            <div className="h-[150px]"></div>
            <div className=" flex flex-row gap-7 text-white ">
              <CTAButton active={true} linkto={"/signup"}>
                {" "}
                <div className="flex gap-2 items-center">
                  Explore Full Catalogue <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                {" "}
                <div className="flex gap-2 items-center">Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7  ">
          <div className="flex flex-row gap-5 mb-10 mt-[100px] ">
            <div className="text-4xl font-semibold w-[45%] mx-auto">
              Get the skills you need for a{" "}
              <HighLightText text={"Job that is in demand"} />
            </div>
            <div className="flex flex-col gap-10 w-[40%] items-start">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                {" "}
                <div>Learn More</div>{" "}
              </CTAButton>
            </div>
          </div>
          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>
      {/* SEction3  */}
      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <InstructorSection />
        <h2 className="text-center text-4xl font-semibold mt-10">
          {" "}
          Review from others
        </h2>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
