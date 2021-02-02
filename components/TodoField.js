import React from "react";

const TodoField = (props) => {
  return (
    <div className=" ">
      <label className="flex justify-start items-center mb-4">
        <input className="transform scale-150" type="checkbox" />
        <span className="ml-2">{props.name}</span>
      </label>
    </div>
  );
};

export default TodoField;
