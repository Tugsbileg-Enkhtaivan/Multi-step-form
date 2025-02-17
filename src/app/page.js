'use client'
import Image from "next/image";
import { StepOne } from "./components/StepOne";

const Components = () => [StepOne,StepTwo]


export default function Home() {
  return (
    <div className="bg-[#F4F4F4] flex justify-center items-center h-screen w-full">
      <StepOne />
    </div>
  );
}
