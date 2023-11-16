import React, { FC } from "react";

interface DropdownProps {
  title: string;
  inputID: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | undefined;
  data: string[];
}

const Dropdown: FC<DropdownProps> = ({
  title,
  inputID,
  placeholder,
  onChange,
  value,
  data,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={inputID} className="font-bold text-xl">
        {title}
      </label>
      <select
        name={inputID}
        id={inputID}
        className="w-4/5 rounded-lg border-2 border-[#B7B7B7] mt-4"
        placeholder={placeholder}
        onChange={onChange}
      >
        <option
          disabled
          selected={value == undefined}
          className="text-[#B7B7B7]"
        >
          {placeholder}
        </option>
        {data.map((item, index) => (
          <option key={index} value={item} selected={value == item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
