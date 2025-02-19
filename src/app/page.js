"use client";
import { useState } from "react";
import UserInfoStep  from "./components/UserInfoStep";
import ContactInfoStep  from "./components/ContactInfoStep";
import { useEffect } from "react";
import { FormHeader } from "./components/FormHeader";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const steps = [UserInfoStep, ContactInfoStep];
  const Component = steps[currentStep];

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
    window.localStorage.setItem(
      "multi-step-form",
      JSON.stringify({ formValues, currentStep: currentStep + 1 })
    );
  };

  useEffect(() => {
    const localStorage = JSON.parse(
      window.localStorage.getItem("multi-step-form")
    );

    if (!localStorage) return;

    setFormValues(localStorage.formValues);
    setCurrentStep(localStorage.currentStep);
  }, []);

  return (
    <div className="w-[500px] h-[700px] bg-white flex flex-col relative p-8">
      <FormHeader />
      <Component
        formValues={formValues}
        setFormValues={setFormValues}
        formErrors={formErrors}
        setFormErrors={setFormErrors}
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    </div>
  );
}
