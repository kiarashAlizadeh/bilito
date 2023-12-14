import { homeHeader, search, flightBlue, flightGrey } from "../assets"
function Header() {
  return (
    <>
      <div className="relative mb-20">
        <div className="relative">
          <img
            src={homeHeader}
            alt="flight"
            draggable="false"
            className="h-[140px] w-full sm:h-full"
          />
          <span className="absolute right-[5%] top-[35%] w-32 font-bold text-white">
            راحتی و سرعت در رزرو بلیط هواپیما با بیلیتو
          </span>
        </div>
        <div className="left-0 right-0 mx-auto flex flex-col gap-y-6 rounded-lg px-5 py-6 shadow-xl lg:absolute lg:-bottom-[60px] lg:max-w-[1176px] lg:bg-white lg:p-6">
          <span className="mx-auto flex w-fit lg:mx-0">
            <span className="flex w-[130px] flex-row-reverse items-center justify-center gap-x-2 border-b-2 border-[#1D91CC] pb-2 text-center font-bold text-[#1D91CC] lg:w-[160px]">
              تورهای خارجی
              <img src={flightBlue} alt="" />
            </span>
            <span className="flex w-[130px] items-center justify-center gap-x-2 border-b-2 border-[#EDEDED] pb-2 text-center font-bold text-[#868686] lg:w-[160px]">
              <img src={flightGrey} alt="" />
              تورهای داخلی
            </span>
          </span>
          <div className="flex justify-center gap-x-1 lg:justify-start lg:gap-x-4">
            <span className="rounded-lg bg-[#1D91CC] px-4 py-2 text-center text-xs text-white">
              اقتصادی
            </span>
            <span className="rounded-lg border-2 border-[#1774A3] px-4 py-2 text-center text-xs text-[#0C3A52]">
              معمولی
            </span>
            <span className="rounded-lg border-2 border-[#1774A3] px-4 py-2 text-center text-xs text-[#0C3A52]">
              VIP
            </span>
          </div>
          <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-6">
            <select className="w-full rounded-lg border-2 border-[#DFDFDF] px-3 py-2 lg:h-12">
              <option value="" disabled selected>
                مبدا
              </option>
              <option value="تهران">تهران</option>
              <option value="شیراز">شیراز</option>
            </select>
            <select className="w-full rounded-lg border-2 border-[#DFDFDF] px-3 py-2 lg:h-12">
              <option value="" disabled selected>
                مقصد
              </option>
              <option value="کیش">کیش</option>
              <option value="ترکیه, استانبول">ترکیه, استانبول</option>
              <option value="امارات, دبی">امارات, دبی</option>
            </select>
            <span className="flex items-center justify-between gap-x-2 lg:flex-col">
              <label className="lg:hidden">تاریخ رفت</label>
              <input
                type="date"
                className="w-[70%] rounded-lg border-2 border-[#DFDFDF] px-3 py-2 lg:h-12 lg:w-full"
              />
            </span>

            <input
              type="number"
              className="w-full rounded-lg border-2 border-[#DFDFDF] px-3 py-2 lg:h-12"
              placeholder="تعداد روز"
            />
            <input
              type="number"
              className="w-full rounded-lg border-2 border-[#DFDFDF] px-3 py-2 lg:h-12"
              placeholder="تعداد مسافر"
            />
            <button className="flex w-full flex-row-reverse items-center justify-center gap-x-2 rounded-lg bg-[#1D91CC] py-2 font-bold text-white hover:bg-opacity-75 lg:h-12">
              جستجو
              <img src={search} alt="search" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
