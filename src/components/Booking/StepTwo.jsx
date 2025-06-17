"use client";
import React from "react";
import DatePicker from "react-datepicker";
import {registerLocale} from "react-datepicker";
import da from "date-fns/locale/da";

registerLocale("da", da);

export default function StepTwo_DateTime({
  selectedDate,
  setSelectedDate,
  bookedTimes,
  formData,
  setFormData,
  errors,
  setErrors,
  timeOptions,
}) {
  return (
    <div className=" lg:flex lg:flex-col xl:flex xl:flex-row xl:justify-between xl:gap-12 ">
      <div className="bg-secondary lg:max-w-80 p p-4">
        <div className="">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              setFormData({
                ...formData,
                date: date ? date.toISOString().split("T")[0] : null,
              });
              if (errors.date) {
                setErrors((prev) => ({...prev, date: undefined}));
              }
            }}
            locale="da"
            inline
          />
          {errors.date && (
            <p className="text-error text-sm mt-2">{errors.date}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-primary">
          Ledige tider for{" "}
          <span>
            {selectedDate
              ? new Date(selectedDate).toLocaleDateString("da-DK", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "vælg en dato"}
          </span>
        </p>

        <div className="lg:flex lg:flex-wrap xl:flex xl:flex-col gap-4 xl:max-w-2xl">
          {timeOptions.map((time) => {
            const isBooked = bookedTimes.includes(time);

            return (
              <button
                key={time}
                onClick={() => {
                  if (!isBooked) {
                    setFormData({...formData, time});
                    if (errors.time) {
                      setErrors((prev) => ({...prev, time: undefined}));
                    }
                  }
                }}
                disabled={isBooked}
                className={`px-4 h-10 rounded border text-sm transition ${
                  isBooked
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : formData.time === time
                    ? "bg-tertiary text-secondary border-primary"
                    : "bg-secondary border-primary text-primary hover:bg-tertiary"
                }`}
              >
                {time}
              </button>
            );
          })}
        </div>

        {errors.time && (
          <p className="text-error text-sm mt-2">{errors.time}</p>
        )}
      </div>
    </div>
  );
}
