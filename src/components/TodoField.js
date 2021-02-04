import React, { useState } from "react";

const TodoField = ({name}) => {
  const [checked, setChecked] = useState(false);

  return (
      <label className="flex justify-start items-center mb-4">
        <input className="transform scale-150" type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
        <span className="ml-2">{name}</span>
      </label>
  );
};

export default TodoField;
