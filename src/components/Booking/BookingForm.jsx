"use client";
import {useRouter} from "next/navigation";
import {useState, useEffect} from "react";
import DatePicker from "react-datepicker";
import {registerLocale} from "react-datepicker";
import da from "date-fns/locale/da";
import "react-datepicker/dist/react-datepicker.css";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

registerLocale("da", da);

export default function BookingForm({step, setStep}) {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookedTimes, setBookedTimes] = useState([]);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

  const timeOptions = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00"];

  useEffect(() => {
    const fetchBookedTimes = async () => {
      if (!selectedDate) return;
      const formattedDate = selectedDate.toISOString().split("T")[0];
      const res = await fetch(`/api/booking/slots?date=${formattedDate}`);
      const result = await res.json();
      setBookedTimes(result.bookedTimes || []);
    };
    fetchBookedTimes();
  }, [selectedDate]);

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
      if (!formData.phone) newErrors.phone = "*Telefonnummer er påkrævet.";
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

    if (!validateStepText()) {
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
        setStatus("Der opstod en fejl under bookingen.");
        return;
      }

      await res.json();
      setStatus("Booking successful!");
      setStep(5); // Gå til bekræftelse
    } catch (error) {
      console.error("Netværksfejl:", error);
      setStatus("Noget gik galt – prøv igen.");
    } finally {
      setLoading(false);
    }
  };

  const stepTexts = {
    1: "Indtast virksomhedens oplysninger og dine kontaktinformationer",
    2: "Vælg en dato og et tidspunkt for samtalen",
    3: "Har du spørgsmål, særlige behov eller kommentarer?",
    4: "Tjek dine oplysninger og bekræft bookingen",
    5: "Tak for din booking",
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <h2 className="text-primary">{stepTexts[step]}</h2>

      {step === 1 && (
        <StepOne
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
          handleChange={handleChange}
        />
      )}

      {step === 2 && (
        <StepTwo
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          bookedTimes={bookedTimes}
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
          timeOptions={timeOptions}
        />
      )}

      {step === 3 && (
        <StepThree
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      )}

      {step === 4 && <StepFour formData={formData} />}

      {step === 5 && (
        <div className="text-primary text-center flex flex-col items-center gap-4">
          <p>
            Vi har modtaget din forespørgsel og kontakter dig snarest muligt.
          </p>
          <div className="bg-secondary p-4 rounded-xl text-left w-full max-w-md">
            <p>
              <strong>Navn:</strong> {formData.first_name} {formData.last_name}
            </p>
            <p>
              <strong>Virksomhed:</strong> {formData.company_name}
            </p>
            <p>
              <strong>Dato:</strong> {formData.date}
            </p>
            <p>
              <strong>Tid:</strong> {formData.time}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
          </div>
          <button
            className="px-5 py-2 rounded-xl bg-cta text-secondary text-sm hover:bg-ctaDark transition-all mt-4"
            onClick={() => router.push("/")}
          >
            Til forsiden
          </button>
        </div>
      )}

      {step < 5 && (
        <div className="flex flex-row justify-between items-center mt-4">
          {step > 1 ? (
            <button
              onClick={handlePrev}
              className="px-5 py-2 rounded-xl border border-cta text-cta text-sm hover:bg-cta/10 transition-all"
            >
              Tilbage
            </button>
          ) : (
            <div></div>
          )}
          {step < 4 && (
            <button
              onClick={handleNext}
              className="px-5 py-2 rounded-xl bg-cta text-secondary text-sm hover:bg-ctaDark transition-all"
            >
              Næste
            </button>
          )}
          {step === 4 && (
            <button
              onClick={handleSubmit}
              className="px-5 py-2 rounded-xl bg-cta text-secondary text-sm hover:bg-ctaDark transition-all"
            >
              Book nu
            </button>
          )}
        </div>
      )}
    </div>
  );
}
