import { Link } from "react-router-dom"
import { star, starNot, info } from "../assets"
function Tour({ pic, hotelName, rate, city, region, price }) {
  // تعداد ستاره‌ها
  const starCount = Math.min(5, Math.max(0, rate))
  // تعداد تصاویر starNot
  const starNotCount = 5 - starCount
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
            <span className="flex gap-x-1">
              {/* نمایش تصاویر ستاره */}
              {Array.from({ length: starCount }, function (_, index) {
                return (
                  <img
                    key={index}
                    src={star}
                    alt="star"
                    draggable="false"
                    class="h-[27px] w-[20px]"
                  />
                )
              })}

              {/* نمایش تصاویر starNot */}
              {Array.from({ length: starNotCount }, function (_, index) {
                return (
                  <img
                    key={index}
                    src={starNot}
                    alt="StarNot"
                    draggable="false"
                    class="h-[27px] w-[20px]"
                  />
                )
              })}
            </span>
          </span>
          <span>
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
