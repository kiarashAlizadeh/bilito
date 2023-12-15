import {
  tourHeader,
  flightBlue,
  calendar,
  edit,
  flightLeft,
  passenger,
} from "../assets"
function TourHeader() {
  return (
    <>
      <div className="relative mb-10 select-none lg:mb-20 xl:mb-28">
        <img
          draggable="false"
          src={tourHeader}
          alt="flight"
          className="h-[140px] w-full sm:h-full"
        />
        <div className="left-0 right-0 mx-auto flex flex-col flex-wrap items-center gap-6 rounded-lg px-5 pb-4 pt-3 shadow-xl sm:flex-row lg:absolute lg:-bottom-[45px] lg:max-w-[950px] lg:bg-white lg:p-6 xl:max-w-[1200px] ">
          <span className="text-center text-xl font-bold">
            نتایج جستجو برای:
          </span>
          <div className="flex justify-center gap-x-5">
            <span className="flex w-[130px] flex-row-reverse items-center justify-center gap-x-2 border-b-2 border-[#1D91CC] pb-2 text-center font-bold text-[#1D91CC] lg:w-[160px]">
              تورهای خارجی
              <img draggable="false" src={flightBlue} alt="" />
            </span>
            <span className="w-fit rounded-lg bg-[#1d92cca3] px-4 py-2 text-center text-xs text-white">
              اقتصادی
            </span>
          </div>
          <div className="flex flex-col gap-3 lg:flex-row">
            <span className="flex gap-x-1">
              <img draggable="false" src={flightLeft} alt="flightLeft" />
              تورهای تهران به استانبول
            </span>
            <span className="flex gap-x-1">
              <img draggable="false" src={calendar} alt="calendar" />
              25 آذر تا 31 آذر
            </span>
            <span className="flex gap-x-1">
              <img draggable="false" src={calendar} alt="calendar" />6 شب و 7
              روز
            </span>
            <span className="flex gap-x-1 items-center">
              <img draggable="false" src={passenger} alt="passenger" />2 مسافر{" "}
              <span className="dot"></span>1 اتاق
            </span>
          </div>
          <button className=" mx-auto flex w-full max-w-[200px] items-center justify-center gap-x-2 rounded-lg bg-[#1d92cc] px-4 py-2 text-white">
            <img draggable="false" src={edit} alt="edit" />
            ویرایش
          </button>
        </div>
      </div>
    </>
  )
}

export default TourHeader
