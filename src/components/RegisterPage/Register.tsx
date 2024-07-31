"use client";

const LoginPage = () => {
  return (
    <div className="flex gap-1 justify-center items-center pt-28 h-screen bg-green-600">
      <div className="flex justify-center">
        <img
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1721103873~exp=1721107473~hmac=60fc637d34ea02bb6430031c4438d8525abd928356f958998a55bc43ed4b698a&w=740"
          alt="login"
          className="rounded-md h-auto w-1/2"
        />
      </div>
      <div className="max-w-md p-6 mr-48 bg-primary border border-gray-300 rounded-md shadow-md">
        <h2 className="text-3xl text-center text-white font-bold mb-6">
          Welcome!
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm text-white font-medium"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="mt-1 bg-white text-black block w-full p-2 border rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm text-white font-medium"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-1 bg-white text-black block w-full p-2 border rounded-md shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-secondary hover:bg-[#95c0aa] text-white rounded-md"
          >
            Login
          </button>
          <div className="flex flex-col mt-4">
            <p className="text-white py-2">
              Already have an account?{" "}
              <a href="/login" className="text-secondary">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
