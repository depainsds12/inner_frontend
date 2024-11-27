"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ClockLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Screen = () => {
  const token = useSearchParams().get("token");
  const [verificationMessage, setVerificationMessage] = useState();
  const [userData, setUserData] = useState();
  const [verifyButton, setVerifyButton] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const verifyUser = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BASEURL}/user/verify/${token}`,
      );
      const verificationMessage = await res.json();

      if (verificationMessage.success) {
        setVerificationMessage(verificationMessage?.success);
        setUserData(verificationMessage.user);
        setTimeout(() => {
          setLoading(false);
        }, 4000);
        toast.success(verificationMessage?.success);
        setVerifyButton(false);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setVerificationMessage(verificationMessage?.error);
        setTimeout(() => {
          setLoading(false);
        }, 4000);
        setVerifyButton(false);
      }
    } catch (error) {
      console.log(error);
      setVerificationMessage(error);
      setTimeout(() => {
        setLoading(false);
      }, 4000);
      setVerifyButton(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <p className="mt-28 w-fit border-2 border-black p-5 text-center text-4xl font-bold text-black transition-all ease-in-out">
        {verificationMessage
          ? verificationMessage
          : "Waiting to be verified..."}
      </p>

      {verifyButton && (
        <button
          onClick={verifyUser}
          className={`border-2 border-black bg-transparent p-3 text-white ${loading ? "hover:bg-transparent" : "hover:bg-black"} rounded-xl transition-all ease-in-out hover:scale-105 hover:shadow-md hover:shadow-black`}
        >
          {loading ? <ClockLoader /> : "Verify email."}
        </button>
      )}

      {!verifyButton && (
        <Link
          href="/public"
          className={`} rounded-xl border-2 border-black bg-transparent p-3 text-white transition-all ease-in-out hover:scale-105 hover:bg-black hover:shadow-md hover:shadow-black`}
        >
          Return to home
        </Link>
      )}
    </div>
  );
};

export default Screen;
