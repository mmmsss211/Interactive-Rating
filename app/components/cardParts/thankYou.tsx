import phoneImage from '../../assets/Online-payment_Two-Color.svg'

export default function ThankYou( {myRate}:any ) {
  return (
    <div className="flex items-center flex-col">
      <img className="w-[162px] h-[108px] mt-[13px]" src={phoneImage} alt="Phone image" />
      <div className="bg-[#262E38] h-[32px] rounded-full w-[193px] flex justify-center items-center text-[15px] mt-[32px]">
        <span className="text-[#FC7614] mt-[4px]">You selected {myRate} out of 5</span>
      </div>
      <div className="font-bold text-[28px] text-white mt-[32px]">Thank you!</div>
      <div className="font-normal text-[15px] text-[#969FAD] leading-[24px] text-center w-[340px] mt-[15px]">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</div>
    </div>
  )
}