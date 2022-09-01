import { useState } from "react";
import Star from "./cardMicros/star";

interface myRating {
  checkRate: any;
  checkNumber: any;
}

export default function Rate({checkRate, checkNumber}:myRating) {
  const [rate, setRating] = useState(0);

  const checkActive = (currentValue: any) => {
    setRating(currentValue);
  }

  return (
    <>
      <Star />
      <h1 className="text-white text-[28px] font-bold mt-[30px] leading-[35px]">
        How did we do?
      </h1>
      <p className="text-[#969FAD] text-[15px] leading-[24px] mt-[15px]">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex flex-row justify-between">
        <label
          htmlFor="rate1"
          className={
            (rate === 1
              ? "bg-[#FC7614] text-white "
              : "bg-[#262E38] text-[#7C8798] ") +
            "cursor-pointer h-[51px] w-[51px] rounded-full  flex justify-center items-center mt-[24px] hover:bg-[#7C8798] hover:text-white"
          }
        >
          <input
            className="hidden"
            type="radio"
            id="rate1"
            name="rating"
            value="1"
            checked={rate === 1}
            onChange={() => {
              checkActive(1);
            }}
          />
          <span className="text-[16px] font-bold mt-[3px]">1</span>
        </label>
        <label
          htmlFor="rate2"
          className={
            (rate === 2
              ? "bg-[#FC7614] text-white "
              : "bg-[#262E38] text-[#7C8798] ") +
            "cursor-pointer h-[51px] w-[51px] rounded-full  flex justify-center items-center mt-[24px] hover:bg-[#7C8798] hover:text-white"
          }
        >
          <input
            className="hidden"
            type="radio"
            id="rate2"
            name="rating"
            value="2"
            checked={rate === 2}
            onChange={() => {
              checkActive(2);
            }}
          />
          <span className="text-[16px] font-bold mt-[3px]">2</span>
        </label>
        <label
          htmlFor="rate3"
          className={
            (rate === 3
              ? "bg-[#FC7614] text-white "
              : "bg-[#262E38] text-[#7C8798] ") +
            "cursor-pointer h-[51px] w-[51px] rounded-full  flex justify-center items-center mt-[24px] hover:bg-[#7C8798] hover:text-white"
          }
        >
          <input
            className="hidden"
            type="radio"
            id="rate3"
            name="rating"
            value="3"
            checked={rate === 3}
            onChange={() => {
              checkActive(3);
            }}
          />
          <span className="text-[16px] font-bold mt-[3px]">3</span>
        </label>
        <label
          htmlFor="rate4"
          className={
            (rate === 4
              ? "bg-[#FC7614] text-white "
              : "bg-[#262E38] text-[#7C8798] ") +
            "cursor-pointer h-[51px] w-[51px] rounded-full  flex justify-center items-center mt-[24px] hover:bg-[#7C8798] hover:text-white"
          }
        >
          <input
            className="hidden"
            type="radio"
            id="rate4"
            name="rating"
            value="4"
            checked={rate === 4}
            onChange={() => {
              checkActive(4);
            }}
          />
          <span className="text-[16px] font-bold mt-[3px]">4</span>
        </label>
        <label
          htmlFor="rate5"
          className={
            (rate === 5
              ? "bg-[#FC7614] text-white "
              : "bg-[#262E38] text-[#7C8798] ") +
            "cursor-pointer h-[51px] w-[51px] rounded-full  flex justify-center items-center mt-[24px] hover:bg-[#7C8798] hover:text-white"
          }
        >
          <input
            className="hidden"
            type="radio"
            id="rate5"
            name="rating"
            value="5"
            checked={rate === 5}
            onChange={() => {
              checkActive(5);
            }}
          />
          <span className="text-[16px] font-bold mt-[3px]">5</span>
        </label>
      </div>
      {/* <h1 className="text-white">{rate}</h1> */}
      <button className="h-[45px] w-full text-white bg-[#FC7614] font-bold leading-[19px] text-[15px] tracking-[2px] rounded-full mt-[32px] hover:bg-white hover:text-[#FC7614] pt-[3px]" onClick={() =>{checkRate(rate); checkNumber(true);}}>
        <span className="mt-[3px]">SUBMIT</span>
      </button>
    </>
  );
}
