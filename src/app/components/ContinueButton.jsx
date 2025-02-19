export const ContinueButton = ({ nextStep, prevStep, currentStep }) => {
    return (
        <div className="">
            {
                currentStep == 0 && <button type="button" onClick={prevStep}>
                    Back
                </button>
            }
            <button type="submit" className="bg-black p-3 text-white w-[84%] flex justify-center self-center rounded-md absolute bottom-5 hover:opacity-60">
                Continue <span>{currentStep}/3</span>
                <img alt="" src="chevron_right.svg" width={24} height={24} />
            </button>
        </div>
    )
}