import { Link } from "react-router-dom";

function MainHome() {
  return (
    <div className="p-8 md:w-2/3 mx-auto mt-32">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        We build wonderful projects with OpenAI.
      </h1>

      <p className="text-xl">
        Our projects will be fun with the integration of OpenAI.
      </p>
      <div className="mt-5">
        <Link
          to={"/tronLabs/signup"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
        >
          Sign Up
        </Link>

        <Link
          to={"/tronLabs/login"}
          className="bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-4 mt-4 mx-6 rounded"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default MainHome;
