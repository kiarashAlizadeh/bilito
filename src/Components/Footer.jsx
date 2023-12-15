import { Link } from "react-router-dom"
import {
  fullLogo,
  playStore,
  appleStore,
  aira,
  cao,
  eNamad,
  iranAir,
  passengerRight,
  facebook,
  instagram,
  telegram,
  twitter,
  topBTN,
} from "../assets"

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <>
      <footer className="flex select-none flex-col gap-y-8 px-5 pb-9 pt-4 text-[#606060]">
        <div className="justify-between sm:flex">
          <div className="mb-8 sm:flex sm:flex-col sm:justify-around">
            <div className="mb-8 hidden sm:flex sm:flex-col">
              <span className="text-lg font-bold text-black">
                اپلیکیشن بیلیتو
              </span>
              <span>
                با نصب اپلیکیشن بیلیتو راحتی و سرعت در رزرو بلیط هواپیما را
                داشته باشید.
              </span>
            </div>

            {/* Address */}
            <div className="flex items-center justify-between gap-5 sm:flex-col-reverse sm:items-start">
              <div className="sm:flex sm:flex-col-reverse sm:gap-y-6">
                <div className="mb-3 max-w-[300px] text-xs sm:max-w-full">
                  آدرس دفتر مرکزی: {"\u00A0"} تهران، میدان آزادی، خیابان آزادی،
                  خیابان جیحون، طوس غربی.
                </div>
                <Link to="tel:02132547698" className="text-xs ">
                  تلفن پشتیبانی: {"\u00A0"} 02132547698
                </Link>
              </div>
              <img draggable="false" src={fullLogo} alt="Bimito" />
            </div>
          </div>

          {/* links */}
          <div className="flex items-center justify-between sm:flex-col-reverse sm:items-start sm:gap-y-8">
            <span>
              <div className="mb-4 border-b-2 border-[#dcdcdc] pb-2 font-semibold">
                لینک‌های مفید
              </div>
              <ul className="flex flex-col gap-y-3 text-xs">
                <li>
                  <Link to=""> درباره ما</Link>
                </li>
                <li>
                  <Link to=""> تماس با ما</Link>
                </li>
                <li>
                  <Link to=""> استرداد بلیط</Link>
                </li>
                <li>
                  <Link to=""> راهنمای خرید بلیط</Link>
                </li>
                <li>
                  <Link to=""> قوانین و مقررات</Link>
                </li>
              </ul>
            </span>
            <span className="sm:flex sm:gap-x-6">
              <Link to="">
                <img
                  draggable="false"
                  src={playStore}
                  alt="playStore"
                  className="mb-3"
                />
              </Link>
              <Link to="">
                <img draggable="false" src={appleStore} alt="appleStore" />
              </Link>
            </span>
          </div>
        </div>

        <div className="sm:flex sm:flex-row-reverse sm:justify-around">
          {/* brands */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-5">
            <img draggable="false" src={aira} alt="" />
            <img draggable="false" src={cao} alt="" />
            <img draggable="false" src={iranAir} alt="" />
            <img draggable="false" src={eNamad} alt="" />
            <img draggable="false" src={passengerRight} alt="" />
          </div>

          <div className="flex flex-col gap-y-2 sm:flex-col sm:items-center">
            {/* social media */}
            <div className="mx-auto flex w-full max-w-[300px] items-center justify-around gap-x-6">
              <Link to="">
                <img draggable="false" src={facebook} alt="" />
              </Link>
              <Link to="">
                <img draggable="false" src={instagram} alt="" />
              </Link>
              <Link to="">
                <img draggable="false" src={telegram} alt="" />
              </Link>
              <Link to="">
                <img draggable="false" src={twitter} alt="" />
              </Link>
            </div>
            <Link
              to="mailto:info@bilito.com"
              className="text-center text-lg font-bold text-[#0077DB]"
            >
              info@bilito.com
            </Link>
          </div>
        </div>
        <button className="mx-auto w-fit" onClick={scrollToTop}>
          <img
            draggable="false"
            src={topBTN}
            alt="topBTN"
            className="mx-auto w-10 "
          />
          <span className="hidden font-semibold text-[#404040] sm:inline">
            بازگشت به بالا
          </span>
        </button>
      </footer>
    </>
  )
}

export default Footer
