import React, { memo, useState } from "react";
import "./Input.css";

type InputProps = {
  title: string;
  value: string;
  onChange: (value: string) => void;
};

export const Input = memo(({ title, value, onChange }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClearClick = () => {
    onChange("");
  };

  return (
    <div className={`container-input ${isFocused ? "focused" : ""}`}>
      <label>{title}</label>
      <div className="input-wrapper">
        <input
          placeholder="username"
          type="text"
          value={value}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {value && (
          <button className="clear-button" onClick={handleClearClick}>
            x
          </button>
        )}
      </div>
    </div>
  );
});