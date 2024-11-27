"use client";

import AuthForm from "@/src/app/auth/_components/auth-form";
import { CustomFormField } from "@/src/types/form.types";
import { FormEvent } from "react";

const ResetPasswordPage = () => {
  const formFields: CustomFormField[] = [
    { name: "password", placeholder: "| password", type: "password" },
    {
      name: "confirmPassword",
      placeholder: "| confirm password",
      type: "password",
    },
  ];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit reset password");
  };

  return (
    <AuthForm
      formFields={formFields}
      contentText={{
        title: "reset your",
        splitTextFirst: "pass",
        splitTextSecond: "Word",
      }}
      handleSubmit={handleSubmit}
    />
  );
};

export default ResetPasswordPage;
