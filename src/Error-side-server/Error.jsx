import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="main-s min-h-screen w-full bg-black flex flex-col items-center justify-center gap-6">
      <img
        src="https://img.freepik.com/free-vector/glitch-web-background_23-2148096890.jpg?semt=ais_hybrid&w=740&q=80"
        alt="Error"
        className="w-full max-w-md object-cover rounded-lg shadow-lg"
      />
      <h1 className="text-white text-4xl font-bold">Oops! Page not found.</h1>
      <p className="text-gray-300">The page you are looking for does not exist.</p>

      <div className="flex gap-4 mt-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};
