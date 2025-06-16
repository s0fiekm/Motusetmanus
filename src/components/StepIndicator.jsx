import React from "react";
import {FaCircleDot, FaCircle} from "react-icons/fa6";

export default function StepIndicator({currentStep}) {
  const steps = ["Kontakt", "Tidspunkt", "Besked", "Tjek"];
  return (
    <div className="flex w-full items-start justify-between flex-row">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isCompleted = currentStep > stepNumber;
        const isActive = currentStep === stepNumber;

        return (
          <div
            key={label}
            className="flex-1 relative flex flex-col items-center gap-2 "
          >
            {" "}
            <span
              className={`mt-2 text-tiny ${
                isActive
                  ? "text-cta font-medium"
                  : isCompleted
                  ? "text-cta"
                  : "text-gray-50"
              }`}
            >
              {label}
            </span>
            <div className="z-10">
              {isCompleted ? (
                <FaCircle className="text-ctaDark text-small" />
              ) : isActive ? (
                <FaCircleDot className="text-cta text-small " />
              ) : (
                <FaCircle className="text-ctaLight text-small" />
              )}
            </div>
            {index < steps.length - 1 && (
              <div className="absolute left-1/2 top-[38px] transform -translate-x-0 w-full h-0.5">
                <div
                  className={`h-full ${
                    currentStep > stepNumber
                      ? "bg-cta"
                      : currentStep === stepNumber
                      ? "bg-ctaLight "
                      : "bg-gray-50"
                  }`}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
