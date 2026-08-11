import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Login = ({ onClose, onLoginSuccess }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");
    setLoading(true);

    try {

      const response = await fetch(
        "https://dummyjson.com/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            username,
            password
          })
        }
      );


      const data = await response.json();


      if (!response.ok) {

        throw new Error(
          data.message || "Login failed"
        );

      }


      console.log(
        "Login successful:",
        data
      );


      // Temporary storage
      localStorage.setItem(
        "accessToken",
        data.accessToken
      );


      // Tell Navbar login succeeded
      onLoginSuccess();


      // Close popup
      onClose();


    } catch (error) {

      setError(error.message);

    } finally {

      setLoading(false);

    }

  };


  return (

    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >

      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >


        {/* Close Button */}

        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
        >

          <FaTimes />

        </button>


        {/* Header */}

        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-500">
            Login to your WorkCart account
          </p>

        </div>


        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >


          {/* Username */}

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Username
            </label>

            <input
              type="text"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              placeholder="Enter username"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              required
            />

          </div>


          {/* Password */}

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              required
            />

          </div>


          {/* Error */}

          {error && (

            <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {error}
            </p>

          )}


          {/* Login Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >

            {loading
              ? "Logging in..."
              : "Login"
            }

          </button>

        </form>

      </div>

    </div>

  );
};

export default Login;