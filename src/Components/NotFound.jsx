import { Link } from "react-router-dom"
import { notFound, arrowRightBlue } from "../assets"

function NotFound() {
  return (
    <>
      <section className="flex flex-col items-center">
        <img src={notFound} alt="notFound" className="mb-[100px]" />
        <div className="mx-6 mb-14 flex flex-col gap-y-6 text-center">
          <span className="text-lg font-bold text-[#606060] lg:text-5xl">
            صفحه‌ای که میخواستی اینجا نیست!
          </span>
          <span className="text-sm text-[#868686] lg:text-xl">
            برای پیدا کردن مسیر درست میتونی سری به صفحه اول بزنی.
          </span>
        </div>

        <div className="mb-[60px] text-center ">
          <Link
            to="/"
            className="flex flex-row-reverse items-center gap-x-2 font-semibold text-[#1D91CC]"
          >
            <img src={arrowRightBlue} alt="arrowRightBlue" /> برگشت به صفحه اصلی
          </Link>
        </div>
      </section>
    </>
  )
}

export default NotFound
