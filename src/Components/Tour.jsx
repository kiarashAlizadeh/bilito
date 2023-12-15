import { Link } from "react-router-dom"
import { star, info } from "../assets"
function Tour({ pic, hotelName, rate, city, region, price }) {
  return (
    <>
      <div className="max-w-[300px] items-center rounded-lg border-2 border-[#CBCBCB] p-2 sm:flex sm:w-[600px] sm:max-w-full sm:gap-x-5">
        <img
          draggable="false"
          src={pic}
          alt={pic}
          className="max-h-[275px] w-full max-w-[283px] rounded-t-lg sm:h-full sm:rounded-lg"
        />
        <div className="mt-2 flex flex-col gap-y-2 border-t-2 border-slate-300 py-2 sm:border-none">
          <h3 className="text-center text-xl font-bold">{hotelName}</h3>
          <span className="flex items-center gap-x-2">
            <img draggable="false" src={star} alt="star" />
            {rate}ستاره
          </span>
          <span className="">
            {city} <span className="dot"></span> {region}
          </span>
          <span className="text-[#959ea6]">
            <span className="font-bold text-[#349ff6]">{price}</span> ریال
          </span>
          <div className="flex items-center gap-x-2 text-[#1D91CC]">
            <Link className="rounded-md bg-[#d1ebf8] px-1 py-1 text-sm">
              امکانات
            </Link>
            <Link className="rounded-md bg-[#d1ebf8] px-1 py-1 text-sm">
              موقعیت مکانی
            </Link>
            <Link className="rounded-md bg-[#d1ebf8] px-1 py-1 text-sm">
              امتیاز و نظرات
            </Link>
          </div>
          <button className="mt-2 rounded-lg bg-[#1D91CC] py-2 text-white">
            انتخاب تور
          </button>
          <span className="mt-2 flex flex-row-reverse items-center justify-center gap-x-1 text-[10px] font-normal text-[#959ea6]">
            با احتساب حمل و نقل ، هتل و خدمات
            <img draggable="false" src={info} alt="info" className="w-5" />
          </span>
        </div>
      </div>
    </>
  )
}

export default Tour
