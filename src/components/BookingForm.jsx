"use client";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {useEffect} from "react";
import FormItem from "./FormItem";
import DatePicker from "react-datepicker";
import {registerLocale} from "react-datepicker";
import da from "date-fns/locale/da";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("da", da);

export default function BookingForm({step, setStep}) {
  const [selectedDate, setSelectedDate] = useState(null);

  const [bookedTimes, setBookedTimes] = useState([]);

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

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
  const router = useRouter();

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
      setStep(5);
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
    5: "Tak for din booking",
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <h2 className="text-primary">{stepTexts[step]}</h2>
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
        <div className="flex flex-col gap-8">
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
          <p className="text-primary">
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
          </p>
          <div className="flex flex-wrap   gap-4">
            {timeOptions.map((time) => {
              const isBooked = bookedTimes.includes(time);

              return (
                <button
                  key={time}
                  onClick={() => {
                    if (!isBooked) {
                      setFormData({...formData, time});
                      if (errors.time) {
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          time: undefined,
                        }));
                      }
                    }
                  }}
                  disabled={isBooked}
                  className={`px-4 h-10 rounded border text-sm transition ${
                    isBooked
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : formData.time === time
                      ? "bg-tertiary text-secondary border-primary"
                      : "bg-secondary border-primary text-primary hover:bg-tertiary "
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
      <div className="flex flex-row justify-between items-center mt-4">
        {step > 1 && step < 5 && (
          <button
            onClick={handlePrev}
            className="px-5 py-2 rounded-xl border border-cta text-cta text-sm hover:bg-cta/10 transition-all"
          >
            Tilbage
          </button>
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
    </div>
  );
}
