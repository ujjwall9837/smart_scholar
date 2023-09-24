import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const RequirementField = ({
  name,
  label,
  register,
  errors,
  setValue,
  getValues,
}) => {
  const [requirement, setRequirement] = useState("");
  const [requirementsList, setRequirementsList] = useState([]);
  useEffect(() => {
    register(name, { required: true, validate: (value) => value.length > 0 });
  });
  useEffect(() => {
    setValue(name, requirementsList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requirementsList]);

  const handleAddRequirement = () => {
    if (requirement) {
      setRequirementsList([...requirementsList, requirement]);
      setRequirement("");
    }
  };

  const handleRemoveRequirement = (index) => {
    const updatedRequirementList = [...requirementsList];
    updatedRequirementList.splice(index, 1);
    setRequirementsList(updatedRequirementList);
  };

  return (
    <div className="text-yellow-25">
      <label htmlFor={name} className="text-white">
        {label}
        <sup>*</sup>
      </label>
      <div>
        <input
          type="text"
          id={name}
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          className="text-yellow-25 "
        />
        <button
          type="button"
          onClick={handleAddRequirement}
          className="font-semibold text-yellow-25"
        >
          Add
        </button>
      </div>
      {requirementsList.length > 0 && (
        <ul className="mt-2 list-inside list-disc">
          {requirementsList.map((requirement, index) => (
            <li key={index} className="flex items-center text-richblack-5">
              <span>{requirement}</span>
              <button
                type="button"
                className="ml-2 text-xs text-pure-greys-300 "
                onClick={() => handleRemoveRequirement(index)}
              >
                clear
              </button>
            </li>
          ))}
        </ul>
      )}
      {errors[name] && <span>{label} is required</span>}
    </div>
  );
};
export default RequirementField;
