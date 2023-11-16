"use client";

import React, { FC } from "react";

interface TextInputProps {
  title: string;
  inputID: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  description: string;
}

const TextInput: FC<TextInputProps> = ({
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
        type="text"
        name={inputID}
        id={inputID}
        className="w-4/5 rounded-lg border-2 border-[#B7B7B7] mt-4"
        placeholder={placeholder}
        onChange={onChange}
      />
      <i className="text-xs mt-2">{description}</i>
    </div>
  );
};

export default TextInput;
