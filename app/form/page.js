"use client";
import Navbar from "@/components/Navbar";
import { useState, useRef } from "react";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

export default function HelpRequestForm() {
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const formRef = useRef(null);

  const nextStep = () => {
    const steps = document.querySelectorAll(".step");
    const currentStepElement = steps[step - 1];
    const inputs = currentStepElement.querySelectorAll(
      "input, select, textarea"
    );
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        isValid = false;
      }
    });

    if (isValid) {
      setError("");
      setStep((prevStep) => prevStep + 1);
    } else {
      setError("All required fields must be filled before continuing.");
    }
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="bg-primary px-10 h-[100vh]">
      <div className="container mx-auto px-10 pt-20 flex items-center justify-between">
        <div className="text-2xl text-black flex gap-1 font-bold items-center">
          <Link href="/">
            <BiArrowBack />
          </Link>
          <Link href="/">
            {" "}
            <h2 className="md:text-2xl text-sm">Go back</h2>
          </Link>
        </div>
        <div>
          <h1>Help Request</h1>
        </div>
      </div>
      <div className="pt-32 flex items-center justify-center ">
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-md shadow-lg text-primary">
          <form
            ref={formRef}
            action="https://getform.io/f/66b5c88f-515f-4c23-940e-ed4448d6a52f"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="step" hidden={step !== 1}>
              <label className="block mb-4 text-primary">
                What is your name?
                <input
                  required
                  type="text"
                  name="name"
                  className="block w-full mt-2 p-2 rounded-md border border-gold bg-white text-black"
                />
              </label>
              <label className="block mb-4 text-primary">
                How can we help you today?
                <textarea
                  required
                  name="help"
                  className="block w-full mt-2 p-2 rounded-md h-[200px] border border-gold bg-white text-black"
                ></textarea>
              </label>
            </div>

            <div className="step" hidden={step !== 2}>
              <label className="block mb-4 text-primary">
                What is your preferred method of contact?
                <select
                  name="contact"
                  required
                  className="block w-full mt-2 p-2 rounded-md border border-gold bg-white text-black"
                >
                  <option>Email</option>
                  <option>Phone</option>
                  <option>Text Message</option>
                </select>
              </label>
              <label className="block mb-4 text-primary">
                Please share your contact details
                <input
                  type="text"
                  required
                  name="contactInfo"
                  className="block w-full mt-2 p-2 rounded-md border border-gold bg-white text-black"
                />
              </label>
            </div>

            <div className="step" hidden={step !== 3}>
              <label className="block mb-4 text-primary">
                Upload any supporting images (optional)
                <input
                  type="file"
                  name="images"
                  multiple
                  className="block w-full mt-2 p-2 rounded-md border border-gold bg-white text-black"
                />
              </label>
            </div>

            <div className="step" hidden={step !== 4}>
              <label className="block mb-4 text-primary">
                Any additional comments? (Optional)
                <textarea
                  name="additonalinfo"
                  className="block w-full mt-2 p-2 rounded-md border border-gold bg-white text-black"
                ></textarea>
              </label>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-gold rounded-md bg-gold text-primary transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                Submit
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
            <div className="flex justify-between mt-8">
              <button
                type="button" // Set the type to "button" to prevent form submission
                onClick={prevStep}
                className="py-2 px-4 border border-gold rounded-md bg-gray-800 text-primary transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                disabled={step === 1}
              >
                Previous
              </button>
              <button
                type="button" // Set the type to "button" to prevent form submission
                onClick={nextStep}
                className="py-2 px-4 border border-gold rounded-md bg-gray-800 text-primary transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                disabled={step === 4}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
