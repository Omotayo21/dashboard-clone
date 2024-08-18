import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const validateForm = (): boolean => {
    if (!email.endsWith("@gmail.com")) {
      setError("Email must be a @gmail.com address");
      return false;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }
    setError("");
    return true;
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/users"); // Redirect to another page
      }, 2000);
    }
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <div className="flex flex-col gap-6 mb-7">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className=" border-2 outline-none py-[1.09rem] pl-4 rounded-md"
        />
        <span className="relative w-full">
          <input
            className=" border-2 outline-none py-[1.09rem] pl-4 relative w-full rounded-md"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inline top-5 right-5 border-none bg-[#fff] "
          >
            <p className="font-semibold text-[#39cdcc] cursor-pointer">
            {showPassword ? "Hide" : "Show"} </p>
          </button>
        </span>
        <p className="font-semibold text-[#39cdcc] cursor-pointer">
          FORGOT PASSWORD?
        </p>
      </div>
      {error && (
        <p className="mb-3 text-red-700 ">
          *Wrong login credentials! please try again with a password of at least
          8 characters
        </p>
      )}
      <button
        type="submit"
        className="w-full bg-[#39cdcc] border-none cursor-pointer text-sm text-white py-[1.2rem] rounded-lg "
      >
        {!loading ? "LOG IN" : "LOGGING IN..."}
      </button>
    </form>
  );
};
export default LoginForm;
