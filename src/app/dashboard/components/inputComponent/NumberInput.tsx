"use client";

import React, { FC } from "react";

interface NumberInputProps {
  title: string;
  inputID: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number | undefined;
  description: string;
}

const NumberInput: FC<NumberInputProps> = ({
  title,
  inputID,
  placeholder,
  onChange,
  value,
  description,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={inputID} className="font-bold text-xl">
        {title}
      </label>
      <input
        type="number"
        name={inputID}
        id={inputID}
        className="w-4/5 rounded-lg border-2 border-[#B7B7B7] mt-4"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        min={0}
      />
      <i className="text-xs mt-2">{description}</i>
    </div>
  );
};

export default NumberInput;
