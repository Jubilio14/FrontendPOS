import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("role", "admin");
      navigate("/");
    } else if (username === "kasir" && password === "kasir") {
      localStorage.setItem("role", "cashier");
      navigate("/cashier");
    } else {
      setError("Username atau password salah");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#EAEAEA]">

      <div className="bg-[#F5F5F5] w-[609px] h-[432px] p-[30px] rounded-2xl shadow-md">

        {/* TITLE */}
        <h1 className="text-[44px] leading-[66px] font-semibold text-[#702BF0] text-center mb-2">
          Login
        </h1>

        <p className="text-center text-[14px] leading-[21px] text-[#1D1D1D] mb-6">
          Sign in to manage your inventory, track orders, and monitor stock in one place.
        </p>

        {/* INPUT EMAIL */}
        <div className="relative mb-4">

          {/* ICON */}
          <img
            src="/icons/Email.png"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] "
          />

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-[549px] h-[50px] gap-[10px] px-[20px] py-[18px] bg-[#EAEAEA] rounded-full pl-12 pr-4 outline-none"
          />
        </div>

        {/* INPUT PASSWORD */}
        <div className="relative mb-4">

            {/* ICON */}
          <img
            src="/icons/Password.png"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] "
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleLogin();
            }}
            className="w-[549px] h-[50px] gap-[10px] px-[20px] py-[18px] bg-[#EAEAEA] pl-12 pr-4 rounded-full outline-none"
          />

          {/* ICON RIGHT (TOGGLE) */}
          <img
            src={showPassword ? "/icons/Eye.png" : "/icons/Eye.png"}
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-[18px] cursor-pointer"
          />
        </div>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        {/* BUTTON */}
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-[#702BF0] text-white rounded-full hover:opacity-80 transition cursor-pointer hover:scale-102 transition"
        >
          Login
        </button>

      </div>
    </div>
  );
}