import staricon from '../../../assets/star-icon.svg';

export default function Star() {
  return (
    <div className="rounded-full h-[48px] w-[48px] bg-[#262E38] flex content-center justify-center">
        <img src={staricon} alt="star-icon" className="w-[16.75px]"/>
    </div>
  )
}