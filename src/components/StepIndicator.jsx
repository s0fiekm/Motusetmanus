import React from "react";
import {FaCircleDot, FaCircle} from "react-icons/fa6";

export default function StepIndicator({currentStep}) {
  const steps = ["Kontakt", "Tidspunkt", "Besked", "Tjek"];
  return (
    <div className="flex w-full items-center justify-between flex-row">
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
                  ? "text-primary font-semibold"
                  : isCompleted
                  ? "text-primary"
                  : "text-primary opacity-70"
              }`}
            >
              {label}
            </span>
            <div className="z-10 ">
              {isCompleted ? (
                <FaCircle className="text-primary text-small" />
              ) : isActive ? (
                <FaCircleDot className="text-primary text-small " />
              ) : (
                <FaCircle className="text-tertiary text-small" />
              )}
            </div>
            {index < steps.length - 1 && (
              <div className="absolute left-1/2 top-[38px] transform -translate-x-0 w-full h-0.5">
                <div
                  className={`h-full ${
                    currentStep > stepNumber
                      ? "bg-primary"
                      : currentStep === stepNumber
                      ? "bg-primary opacity-50 "
                      : "bg-primary opacity-10"
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
