export const StepOne = () => {
  return (
    <div className="w-[500px] h-[700px] bg-white flex flex-col relative">
      {/* Header */}
      <div className="mt-[54px] mx-[54px]">
        <img src="Main 1.svg" alt="" height={60} width={80} />
        <h1 className="text-[#202124] text-[26px] font-semibold">
          Join Us! 😎
        </h1>
        <h1 className="text-[#8E8E8E] text-center text-[18px] font-normal">
          Please provide all current information accurately.
        </h1>
      </div>

      {/* FormContainer */}
      <div className="flex flex-col m-10 gap-3">
        <div className="flex gap-2 flex-col">
          <p className="text-[14px] font-semibold flex flex-row">
            First Name<p className="text-red-600">*</p>
          </p>
          <input
            placeholder="Your First Name"
            className="bg-black w-full self-center p-3 rounded-md text-white"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-[14px] font-semibold flex flex-row">
            Last Name<p className="text-red-600">*</p>
          </p>
          <input
            placeholder="Your Last Name"
            className="bg-black w-full  self-center p-3 rounded-md text-white"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-[14px] font-semibold flex flex-row">
            Username<p className="text-red-600">*</p>
          </p>
          <input
            placeholder="Your Username"
            className="bg-black w-full self-center p-3 rounded-md  text-white"
          />
        </div>
      </div>

      {/* Button */}
      <button className="bg-black p-3 text-white w-[84%] flex justify-center self-center rounded-md absolute bottom-5 hover:opacity-60">
        Continue 1/3{" "}
        <img alt="" src="chevron_right.svg" width={24} height={24} />
      </button>
    </div>
  );
};
