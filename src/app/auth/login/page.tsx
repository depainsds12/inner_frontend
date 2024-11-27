"use client";

import AuthForm from "@/src/app/auth/_components/auth-form";
import { CustomFormField } from "@/src/types/form.types";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const formFields: CustomFormField[] = [
    { name: "email", placeholder: "| email", type: "email" },
    {
      name: "password",
      placeholder: "| password",
      type: "password",
      showForgot: true,
    },
  ];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPressed(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response?.error) {
        return setError("Invalid email or password");
      }

      router.push("/profile/onboarding");
      router.refresh();
    } catch (error) {
      setError(`An error occurred while logging in: ${error}`);
    } finally {
      setIsPressed(false);
    }
  };

  return (
    <AuthForm
      formFields={formFields}
      contentText={{
        title: "welcome back",
        splitTextFirst: "log",
        splitTextSecond: "in",
      }}
      handleSubmit={handleSubmit}
      isPressed={isPressed}
      error={error}
    />
  );
};

export default LoginPage;
