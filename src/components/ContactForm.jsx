"use client";
import { useState } from "react";
import CtaBtn from "./CtaBtn";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company_name: "",
    employees: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const newErrors = {};
    if (!formData.name) newErrors.name = "Udfyld venligst navn";
    if (!formData.email) newErrors.email = "Udfyld venligst email";
    if (!formData.phone) newErrors.phone = "Udfyld venligst telefonnummer";
    if (!formData.company_name)
      newErrors.company_name = "Udfyld venligst virksomhedsnavn";
    if (!formData.employees) newErrors.employees = "Vælg antal ansatte";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    setErrors({});

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      setStatus("Tak for din besked! Jeg vender tilbage hurtigst muligt.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company_name: "",
        employees: "",
        message: "",
      });
    } else {
      setStatus(data.error || "Noget gik galt. Prøv igen.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-4 bg-surface p-4 md:p-12 rounded-lg"
    >
      <div className="col-span-2 flex flex-col">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Navn"
          className={`border-b p-2 outline-none border-primary placeholder-primary placeholder-opacity-60${
            errors.name ? "border-error" : "border-primary"
          }`}
        />
        {errors.name && (
          <p className="text-sm text-error mt-1">*{errors.name}</p>
        )}
      </div>

      <div className="flex flex-col">
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className={`border-b p-2 outline-none border-primary placeholder-primary placeholder-opacity-60${
            errors.email ? "border-error" : "border-primary"
          }`}
        />
        {errors.email && (
          <p className="text-sm text-error mt-1">*{errors.email}</p>
        )}
      </div>

      <div className="flex flex-col">
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Telefonnummer"
          className={`border-b p-2 outline-none border-primary placeholder-primary placeholder-opacity-60${
            errors.phone ? "border-error" : "border-primary"
          }`}
        />
        {errors.phone && (
          <p className="text-sm text-error mt-1">*{errors.phone}</p>
        )}
      </div>

      <div className=" flex flex-col">
        <input
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
          placeholder="Virksomhedsnavn"
          className={`border-b p-2 outline-none border-primary placeholder-primary placeholder-opacity-60${
            errors.company_name ? "border-error" : "border-primary"
          }`}
        />
        {errors.company_name && (
          <p className="text-sm text-error mt-1">*{errors.company_name}</p>
        )}
      </div>

      <div className="flex flex-col">
        <select
          name="employees"
          value={formData.employees}
          onChange={handleChange}
          className={`border-b p-2 mt-1
             outline-none border-primary text-primary ${
               errors.employees ? "border-error" : "border-primary"
             }`}
        >
          <option value="">Antal ansatte</option>
          <option value="1-5">1-5</option>
          <option value="6-10">6-10</option>
          <option value="11-25">11-25</option>
          <option value="26-50">26-50</option>
          <option value="51-100">51-100</option>
          <option value="100+">100+</option>
        </select>
        {errors.employees && (
          <p className="text-sm text-error mt-1">*{errors.employees}</p>
        )}
      </div>

      <div className="col-span-2 flex flex-col">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Besked"
          rows="4"
          className="border-b p-2 outline-none border-primary bg-transparent placeholder-primary"
        />
      </div>
      <div className="col-2 flex justify-self-end mt-3">
        <CtaBtn type="submit" loading={loading} text="Send besked" />
      </div>
      {status && (
        <p className="col-span-2 text-center  text-primary mt-2">{status}</p>
      )}
    </form>
  );
}
