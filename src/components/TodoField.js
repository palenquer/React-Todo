import React from "react";

const TodoField = (props) => {
  return (
      <label className="flex justify-start items-center mb-4">
        <input className="transform scale-150 checked:line-through" type="checkbox"/>
        <span className="ml-2">{props.name}</span>
      </label>
  );
};

export default TodoField;
