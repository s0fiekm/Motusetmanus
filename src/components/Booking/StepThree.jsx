import React from "react";

export default function StepThree_Message({
  formData,
  setFormData,
  errors,
  setErrors,
}) {
  return (
    <div>
      <textarea
        name="message"
        rows={5}
        placeholder="Eventuelle spørgsmål eller kommentarer"
        value={formData.message}
        onChange={(e) => {
          setFormData({...formData, message: e.target.value});
          if (errors.message) {
            setErrors((prev) => ({...prev, message: undefined}));
          }
        }}
        className="w-full p-2 border border-tertiary rounded-lg focus:ring-primary focus:border-primary outline-none"
      ></textarea>
      {errors.message && <p className="text-error text-sm">{errors.message}</p>}
    </div>
  );
}
