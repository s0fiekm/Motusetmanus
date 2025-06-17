"use client";

import React from "react";

export default function FormItem({
  name,
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      className="w-full border p-2 rounded outline-none   border-primary placeholder-primary"
    />
  );
}
