import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import Upload from "../Upload";
import { COURSE_STATUS } from "../../../../../utils/constants";
import ChipInput from "./ChipInput";
import {
  addCourseDetails,
  editCourseDetails,
  fetchCourseCategories,
} from "../../../../../services/operations/courseDetailsAPI";
import RequirementField from "./RequirementField";
import IconBtn from "../../../../common/IconBtn";
import { toast } from "react-hot-toast";
import { setCourse, setStep } from "../../../../../slices/courseSlice";
export const CourseInformationForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { course, editCourse } = useSelector((state) => state.course);
  const [loading, setLoading] = useState(false);
  const [courseCategories, setCourseCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      const categories = await fetchCourseCategories();
      console.log(categories);
      if (categories?.length > 0) {
        setCourseCategories(categories);
      }
      setLoading(false);
    };

    if (editCourse) {
      setValue("courseTitle", course.courseName);
      setValue("courseShortDesc", course.courseDescription);
      setValue("coursePrice", course.price);
      setValue("courseTags", course.tag);
      setValue("courseBenefits", course.whatYouWillLearn);
      setValue("courseCategory", course.Category._id);
      setValue("courseRequirements", course.instructions);
      setValue("courseImage", course.thumbnail);
    }
    getCategories();
  }, []);
  const isFormUpdated = () => {
    const currentValue = getValues();
    if (
      currentValue.courseTitle !== course.courseName ||
      currentValue.courseShortDesc !== course.courseDescription ||
      currentValue.coursePrice !== course.price ||
      currentValue.courseTags.toString() !== course.tag.toString() ||
      currentValue.courseBenefits !== course.whatYouWillLearn ||
      currentValue.courseCategory !== course.category._id ||
      currentValue.courseRequirements.toString() !==
        course.instructions.toString() ||
      currentValue.courseImage !== course.thumbnail
    )
      return true;
    else return false;
  };

  // handles next button click
  const onSubmit = async (data) => {
    if (editCourse) {
      // console.log(isFormUpdated() , );
      if (isFormUpdated()) {
        const currentValues = getValues();
        const formData = new FormData();
        formData.append("courseId", course._id);
        if (currentValues.courseTitle !== course.courseName) {
          formData.append("courseName", data.courseTitle);
        }
        if (currentValues.courseShortDesc !== course.courseDescription) {
          formData.append("courseDescription", data.courseShortDesc);
        }
        if (currentValues.coursePrice !== course.price) {
          formData.append("price", data.coursePrice);
        }
        if (currentValues.courseTags.toString() !== course.tag.toString()) {
          formData.append("tag", JSON.stringify(data.courseTags));
        }
        if (currentValues.courseBenefits !== course.whatYouWillLearn) {
          formData.append("whatYouWillLearn", data.courseBenefits);
        }
        if (currentValues.courseCategory._id !== course.category._id) {
          console.log("ad", data.courseCategory._id);
          formData.append("category", data.courseCategory._id);
        }
        if (
          currentValues.courseRequirements.toString() !==
          data.instructions.toString()
        ) {
          formData.append(
            "instruction",
            JSON.stringify(data.courseRequirements)
          );
        }
        if (currentValues.courseImage !== course.thumbnail) {
          formData.append("thumbnailImage", data.courseImage);
        }
        setLoading(true);
        const result = await editCourseDetails(formData, token);
        setLoading(false);
        if (result) {
          dispatch(setStep(2));
          dispatch(setCourse(result));
        }
        console.log("Printing formdata", formData);
        console.log("Printing result", result);
      } else {
        toast.error("No changes made to the form");
      }

      return;
    } else {
      // if come to create a new course
      const formData = new FormData();
      formData.append("courseName", data.courseTitle);
      formData.append("courseDescription", data.courseShortDesc);
      formData.append("price", data.coursePrice);
      formData.append("tag", JSON.stringify(data.courseTags));
      formData.append("whatYouWillLearn", data.courseBenefits);
      console.log("id", data.courseCategory);

      // console.log("courseid", data.courseCategory);
      formData.append("category", data.courseCategory);
      formData.append("instructions", JSON.stringify(data.courseRequirements));
      formData.append("status", COURSE_STATUS.DRAFT);
      formData.append("thumbnailImage", data.courseImage);
      setLoading(true);
      const result = await addCourseDetails(formData, token);
      if (result) {
        dispatch(setStep(2));
        dispatch(setCourse(result));
      }
      setLoading(false);
      console.log("Printing formdata", formData);
      console.log("Printing result", result);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-md border-richblack-700 bg-richblack-800 p-6 space-y-8"
    >
      <div>
        <label htmlFor="courseTitle">
          Course Title <sup>*</sup>
        </label>
        <input
          id="courseTitle"
          placeholder="Enter Course Title"
          {...register("courseTitle", { required: true })}
          className="w-full"
        />
        {errors.courseTitle && <span>Course Title is required</span>}
      </div>
      <div>
        <label htmlFor="courseShortDesc">
          Course Short Description <sup>*</sup>
        </label>
        <textarea
          id="courseShortDesc"
          placeholder="Enter Course Description"
          {...register("courseShortDesc", { required: true })}
          className="min-h-[140px] w-full text-black"
        />
        {errors.courseShortDesc && <span>Description is required</span>}
      </div>
      <div className="relative">
        <label htmlFor="coursePrice">
          Course Price <sup>*</sup>
        </label>
        <input
          id="coursePrice"
          placeholder="Enter Course Price"
          {...register("coursePrice", { required: true, valueAsNumber: true })}
          className="w-full text-black"
        />
        <HiOutlineCurrencyRupee className="absolute top-1/2 text-richblack-400" />
        {errors.coursePrice && <span>Price is in numberr</span>}
      </div>
      <div>
        <label htmlFor="courseCategory">
          Course Category <sup>* </sup>
        </label>
        <select
          id="courseCategory"
          defaultValue=""
          {...register("courseCategory", { required: true })}
        >
          <option value="" className="bg-richblack-400">
            {" "}
            Choose a category
          </option>
          {!loading &&
            courseCategories.map((category, index) => (
              <option key={index} value={category?._id} className="text-black">
                {category?.name}
              </option>
            ))}
        </select>
        {errors.courseCategory && <span>Course category is required</span>}
      </div>
      {/* custom tag for tags validitiy */}
      <ChipInput
        label="Tags"
        name="courseTags"
        placeholder="Enter Tags and press Enter"
        register={register}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      />
      {/* thumbnail create componenet for showing image */}
      {/* <Upload /> */}
      <Upload
        name="courseImage"
        label="Course Thumbnail"
        register={register}
        setValue={setValue}
        errors={errors}
        editData={editCourse ? course?.thumbnail : null}
      />
      <div>
        <label>
          Benefits of the course <sup>*</sup>
        </label>
        <textarea
          id="courseBenefits"
          placeholder="Enter benefits of the course"
          {...register("courseBenefits", { required: true })}
          className="min-h-[130px] w-full"
        />
        {errors.courseBenefits && (
          <span>Benefits of the Course are required</span>
        )}
      </div>
      <RequirementField
        name="courseRequirements"
        label="Requirements/Instructions"
        register={register}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      />
      <div>
        {editCourse && (
          <button
            onClick={() => dispatch(setStep(2))}
            className="flex items-center gap-x-2 bg-richblack-300"
          >
            Continue Without Save
          </button>
        )}
        <IconBtn text={!editCourse ? "Next" : "Save Changes"} />
      </div>
    </form>
  );
};
export default CourseInformationForm;
