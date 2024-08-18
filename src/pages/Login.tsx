import React from "react";
import LoginForm from "../components/LoginForm";
import img1 from "/lendSQR.png";

const Login = () => {
  return (
    <>
      <section className="max-w-[1440px] mx-auto my-16 sm:my-8 sm:px-8">
        <img
          className="logo sm:block sm:mb-4 sm:mx-0 sm:w-full md:block lg:block lg:w-40"
          src={"/Group.svg"}
          alt="logo"
         
        />
        <div className="flex flex-row items-center gap-[4.3125rem] sm:block lg:flex md:block">
          <div className="hidden lg:block">
            <img
              src={"lendSQR.png"}
              alt="sign-in"
              width={600}
              height={337.57}
            />
          </div>
          <div className="w-full mx-24 sm:mx-auto sm:max-w-[27.9375rem]">
            <h1 className="mb-2.5 font-bold text-4xl text-[#213f7d]">
              Welcome!
            </h1>
            <p className="mb-[3.75rem] text-xl text-[#545f7d]">
              Enter details to login.
            </p>
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
