"use client";
import React from "react";
import FormItem from "@/components/Booking/FormItem";

export default function StepOne({formData, handleChange, errors}) {
  return (
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
        {errors.adress && <p className="text-error text-sm">{errors.adress}</p>}
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
          {errors.city && <p className="text-error text-sm">{errors.city}</p>}
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
        {errors.email && <p className="text-error text-sm">{errors.email}</p>}
      </div>
      <div>
        <FormItem
          name="phone"
          placeholder="Telefonnummer"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="text-error text-sm">{errors.phone}</p>}
      </div>
    </div>
  );
}
