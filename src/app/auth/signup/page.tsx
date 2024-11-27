"use client";

import AuthForm from "@/src/app/auth/_components/auth-form";
import { CustomFormField } from "@/src/types/form.types";
import { FormEvent } from "react";

const SignUpPage = () => {
  const formFields: CustomFormField[] = [
    { name: "name", placeholder: "| name", type: "text" },
    {
      name: "password",
      placeholder: "| password",
      type: "password",
      showForgot: true,
    },
  ];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit signup");
  };

  return (
    <AuthForm
      formFields={formFields}
      contentText={{
        title: "welcome to your",
        splitTextFirst: "inner",
        splitTextSecond: "Garden",
      }}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignUpPage;
