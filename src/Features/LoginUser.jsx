import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import LoginIcon from "../assets/LoginIcon.png";
function LoginUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="flex  items-center justify-center h-screen mx-10 w-full lg: gap-7">
      <div className="hidden lg:block">
        <img src={LoginIcon} alt="" />
      </div>
      <form
        onSubmit={handleSubmit}
        className=" p-8 rounded shadow-md w-2/3 lg:w-1/3"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-input mt-1 block w-full rounded-md border-b-2 border-white bg-transparent"
            onChange={handleUsernameChange}
            value={username}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block  font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-input mt-1 block w-full rounded-md border-b-2 border-white bg-transparent"
            onChange={handlePasswordChange}
            value={password}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-800"
        >
          Log In
        </button>
        <div className="flex gap-4 mt-3">
          <p> or log in with </p>
          <div className="flex gap-2">
            <span>
              <FaFacebookF className="text-xl text-center mt-1" />
            </span>
            <span>
              <FaGoogle className="text-xl text-center mt-1" />
            </span>
          </div>
        </div>
        <p className="text-white text-center mt-3 text-lg border-b border-white">
          create account
        </p>
      </form>
    </div>
  );
}

export default LoginUser;
