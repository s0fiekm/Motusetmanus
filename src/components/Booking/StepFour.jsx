import React from "react";

export default function StepFour({formData}) {
  return (
    <div className="text-primary">
      <p className="mb-4 text-lg font-semibold">
        Tjek dine oplysninger og bekræft bookingen
      </p>
      <ul className="list-disc pl-5">
        {Object.entries(formData).map(([key, value]) =>
          value ? (
            <li key={key} className="mb-1">
              <strong>
                {key
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
                :
              </strong>{" "}
              {value}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}
