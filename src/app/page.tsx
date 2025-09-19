"use client";

import { useState } from "react";
import { StepCard } from "./components/stepper";
import { Stepper } from "./components/card";

export default function Home() {
  const [step, setStep] = useState<number>(1);
  const [value, setvalue] = useState<string>("")

  console.log

  const handleNextStep = () => {
    if (step === 3) return;
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step === 1) return;
    setStep(step - 1);
  };

  const onChange = (event)=>{
    setvalue(event.target.value)
  }

  return (
    <div className="mx-auto w-screen h-screen flex flex-col justify-center items-center gap-4">
      <div>
        <Stepper step={step} />
        <StepCard step={step} />
      </div>

      <input value={value} onChange={onChange}/>

      <div className="flex gap-2 mt-4">
        {step !== 1 && <button onClick={handlePrevStep}><div className="w-{20px}, h-{20px} border border-solid border-black">Prev</div></button>}
        {step !== 3 && <button onClick={handleNextStep}>Next</button>}
      </div>
    </div>
  );
}
