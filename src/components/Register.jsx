const Register = () => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center">
      {/* Main Container */}
      <div className="relative bg-white w-[1728px] h-[1140px] overflow-hidden border border-blue-500">

        {/* Left Semi Circle */}
        <div className="absolute left-[-400px] top-0 w-[900px] h-[1140px] bg-[#5a0000] rounded-full"></div>

        {/* Home Text */}
        <div className="absolute top-6 left-6 text-blue-400 text-sm">
          home
        </div>

        {/* Right Form Section */}
        <div className="absolute right-0 top-0 h-full w-[55%] flex flex-col justify-center px-20">

          <h1 className="text-4xl font-bold text-red-700 mb-2">
            Welcome
          </h1>
          <p className="text-gray-500 mb-8">
            Sign in to continue your progress
          </p>

          {/* Input Fields */}
          {[
            { label: "Name", placeholder: "Enter Your Name" },
            { label: "Phone Number", placeholder: "Enter Your Number" },
            { label: "Aadhaar Card", placeholder: "Enter Your Aadhaar Number" },
            { label: "Pan Card", placeholder: "Enter Your Pan Number" },
            { label: "Email I'd", placeholder: "Enter Your Email I'd" },
          ].map((field, index) => (
            <div key={index} className="mb-5">
              <label className="block text-sm font-medium mb-1">
                {field.label}
              </label>
              <input
                type="text"
                placeholder={field.placeholder}
                className="w-full bg-gray-100 rounded-lg px-4 py-3 outline-none"
              />
            </div>
          ))}

          {/* Register Button */}
          <button className="mt-6 bg-red-700 text-white py-4 rounded-xl text-lg font-semibold hover:bg-red-800 transition">
            Register now
          </button>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white font-bold">
              I
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              f
            </div>
            <div className="w-12 h-12 rounded-full bg-sky-400 flex items-center justify-center text-white font-bold">
              t
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
