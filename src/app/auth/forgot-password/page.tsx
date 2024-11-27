"use client";

import AuthForm from "@/src/app/auth/_components/auth-form";
import { CustomFormField } from "@/src/types/form.types";
import { FormEvent } from "react";

const ForgotPasswordPage = () => {
  const formFields: CustomFormField[] = [
    { name: "email", placeholder: "| email", type: "email" },
  ];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <AuthForm
      showAction={false}
      formFields={formFields}
      contentText={{
        title: "forgot my",
        splitTextFirst: "pass",
        splitTextSecond: "Word",
      }}
      handleSubmit={handleSubmit}
    />
  );
};

export default ForgotPasswordPage;
