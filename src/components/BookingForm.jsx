// components/BookingForm.jsx
"use client";

import {useState} from "react";
import FormItem from "./FormItem";
import CtaBtn from "./CtaBtn";

import DatePicker from "react-datepicker";
import {registerLocale} from "react-datepicker";
import da from "date-fns/locale/da";
import "react-datepicker/dist/react-datepicker.css";
import {set} from "date-fns";

registerLocale("da", da);

export default function BookingForm({step, setStep}) {
  const [formData, setFormData] = useState({
    company_name: "",
    adress: "",
    zip_code: "",
    city: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    date: null,
    time: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const timeOptions = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00"];

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
    }));
  };

  const validateStepText = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.company_name)
        newErrors.company_name = "*Virksomhedsnavn er påkrævet.";
      if (!formData.adress) newErrors.adress = "*Adresse er påkrævet.";
      if (!formData.zip_code) newErrors.zip_code = "*Postnummer er påkrævet.";
      if (!formData.city) newErrors.city = "*By er påkrævet.";
      if (!formData.first_name) newErrors.first_name = "*Fornavn er påkrævet.";
      if (!formData.last_name) newErrors.last_name = "*Efternavn er påkrævet.";
      if (!formData.email) newErrors.email = "*Email er påkrævet.";
      if (!formData.phone) newErrors.phone = "*Udfyld telefonnummer";
    }

    if (step === 2) {
      if (!formData.date) newErrors.date = "*Dato er påkrævet.";
      if (!formData.time) newErrors.time = "*Tidspunkt er påkrævet.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStepText()) setStep(step + 1);
  };

  const handlePrev = () => {
    setErrors({});
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const allValid = validateStepText();
    if (!allValid) {
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Booking error:", errorText);
        setStatus("Der opstod en fejl under bookingen. Prøv igen senere.");
        return;
      }

      const data = await res.json();

      setStatus("Booking successful!");
      setFormData({
        company_name: "",
        adress: "",
        zip_code: "",
        city: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        date: null,
        time: "",
        message: "",
      });
      setSelectedDate(null);
      setStep(1);
    } catch (error) {
      console.error("Netværksfejl:", error);
      setStatus("Noget gik galt – prøv igen senere.");
    } finally {
      setLoading(false);
    }
  };

  const stepTexts = {
    1: "Indtast virksomhedens oplysninger og dine kontaktinformationer",
    2: "Vælg en dato og et tidspunkt for samtalen",
    3: "Har du spørgsmål, særlige behov eller kommentarer?",
    4: "Tjek dine oplysninger og bekræft bookingen",
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <h3 className="text-primary">{stepTexts[step]}</h3>

      {step === 1 && (
        <div className="flex flex-col gap-4">
          <div>
            <FormItem
              name="company_name"
              placeholder="Virksomhedsnavn"
              value={formData.company_name}
              onChange={handleChange}
            />
            {errors.company_name && (
              <p className="text-error text-sm">{errors.company_name}</p>
            )}
          </div>
          <div>
            <FormItem
              name="adress"
              placeholder="Adresse (virksomhedens)"
              value={formData.adress}
              onChange={handleChange}
            />
            {errors.adress && (
              <p className="text-error text-sm">{errors.adress}</p>
            )}
          </div>

          <div className="flex  flex-row  gap-4">
            <div className="flex-1">
              <FormItem
                name="zip_code"
                placeholder="Postnr"
                value={formData.zip_code}
                onChange={handleChange}
              />
              {errors.zip_code && (
                <p className="text-error text-sm">{errors.zip_code}</p>
              )}
            </div>
            <div className="flex-1">
              <FormItem
                name="city"
                placeholder="By"
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && (
                <p className="text-error text-sm">{errors.city}</p>
              )}
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex-1">
              <FormItem
                name="first_name"
                placeholder="Fornavn"
                value={formData.first_name}
                onChange={handleChange}
              />
              {errors.first_name && (
                <p className="text-error text-sm">{errors.first_name}</p>
              )}
            </div>
            <div className="flex-1">
              <FormItem
                name="last_name"
                placeholder="Efternavn"
                value={formData.last_name}
                onChange={handleChange}
              />
              {errors.last_name && (
                <p className="text-error text-sm">{errors.last_name}</p>
              )}
            </div>
          </div>
          <div>
            <FormItem
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-error text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <FormItem
              name="phone"
              placeholder="Telefonnummer"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-error text-sm">{errors.phone}</p>
            )}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-20">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              setFormData({
                ...formData,
                date: date ? date.toISOString().split("T")[0] : null,
              });

              if (errors.date) {
                setErrors((prevErrors) => ({...prevErrors, date: undefined}));
              }
            }}
            locale="da"
            inline
            className="rounded-lg border border-primary shadow"
          />
          {errors.date && (
            <p className="text-error text-sm mt-2">{errors.date}</p>
          )}
          <p>
            Tilgængelige tider for {""}
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
          </p>{" "}
          <div className="flex flex-wrap justify-between gap-2">
            {timeOptions.map((time) => (
              <button
                key={time}
                onClick={() => {
                  setFormData({...formData, time});
                  if (errors.time) {
                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      time: undefined,
                    }));
                  }
                }}
                className={`
                  px-4 h-10 rounded border text-sm transition
                  ${
                    formData.time === time
                      ? "bg-cta text-white border-cta"
                      : "bg-secondary border-primary text-primary hover:bg-tertiary hover:text-white"
                  }
                `}
              >
                {time}
              </button>
            ))}
          </div>
          {errors.time && (
            <p className="text-error text-sm mt-2">{errors.time}</p>
          )}
        </div>
      )}

      {step === 3 && (
        <div>
          <textarea
            name="message"
            rows={5}
            placeholder="Eventuelle spørgsmål eller kommentarer"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-tertiary rounded-lg focus:ring-primary focus:border-primary outline-none"
          ></textarea>
          {errors.message && (
            <p className="text-error text-sm">{errors.message}</p>
          )}
        </div>
      )}

      {step === 4 && (
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
                  </strong>
                  {value}
                </li>
              ) : null
            )}
          </ul>
        </div>
      )}

      <div className="flex flex-row justify-between items-center mt-4">
        {step > 1 && <CtaBtn text="Tilbage" onClick={handlePrev} />}
        {step < 4 && <CtaBtn text="Næste" onClick={handleNext} />}
        {step === 4 && <CtaBtn text="Book nu" onClick={handleSubmit} />}
      </div>
    </div>
  );
}
