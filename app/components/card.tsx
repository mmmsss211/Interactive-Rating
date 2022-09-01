import React, { useState } from "react";
import Rate from "./cardParts/rate";
import ThankYou from "./cardParts/thankYou";
import Lottie from "lottie-react";
import confetti from "../assets/62717-confetti.json";

const Card = () => {
  const [finalRate, setFinalRate] = useState(0);

  const checkRate = (childValue: any) => {
    setFinalRate(childValue);
  }

  const [active, setNumber] = useState(false);

  const checkNumber = (activevalue: any) => {
    setNumber(activevalue);
  }

  return (
    <div className="rounded-[30px] w-[412px] h-[416px] bg-gradient-radial from-[#232A34] to-[#181E27] p-[32px]">
      {active === false && <Rate checkRate={checkRate} checkNumber={checkNumber}/>}
      {active === true && <ThankYou myRate={finalRate}/>}
      {active === true && 
        <div className="absolute bottom-0 left-0 right-0 w-[600px] mx-auto">
          <Lottie animationData={confetti}/>
        </div>
      }
    </div>
  )
}

export default Card