export const StepOne = () => {
  return (
    <div className="w-[500px] h-[700px] bg-white flex flex-col relative">
      {/* Header */}
      

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
