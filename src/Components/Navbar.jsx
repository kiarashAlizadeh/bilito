import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import {
  fullLogo,
  phone,
  person,
  personBlack,
  arrowDown,
  hamburgerMenu,
  close,
  home,
  bime,
  flight,
  contactUs,
  aboutUs,
} from "../assets"

function Navbar() {
  const [resNavbar, setResNavbar] = useState(false)

  const isLogin = false
  return (
    <>
      <nav>
        <div className=" hidden justify-between px-[108px] py-8 text-[#606060] lg:flex">
          <img src={fullLogo} draggable="false" alt="bilito" />
          <ul className="mx-4 flex justify-around gap-x-2 text-xl xl:gap-x-8">
            <li>
              <NavLink to="/"> صفحه اصلی </NavLink>
            </li>
            <li>
              <NavLink to="/a"> بیمه مسافرتی </NavLink>
            </li>
            <li>
              <NavLink to="/b"> سفرهای من </NavLink>
            </li>
            <li>
              <NavLink to="/c" className="flex items-center gap-x-2">
                سایر موارد
                <img draggable="false" src={arrowDown} alt="arrow" />
              </NavLink>
            </li>
          </ul>
          <div className="flex justify-between gap-x-6">
            <Link to="tel:0214045" className="flex items-center gap-x-2">
              021-4045 پشتیبانی
              <img draggable="false" src={phone} alt="phone" />
            </Link>
            <Link
              to=""
              className="flex w-fit items-center gap-x-2 rounded-lg bg-[#1D91CC] px-4 py-2 text-white hover:bg-opacity-75"
            >
              <img draggable="false" src={person} alt="person" />
              ورود/ ثبت نام
            </Link>
          </div>
        </div>
        {/* responsive for mobile */}
        <div className=" flex items-center justify-between px-5 py-4 lg:hidden">
          <img
            src={hamburgerMenu}
            alt="hamburgerMenu"
            onClick={() => setResNavbar((prev) => !prev)}
          />
          <img src={fullLogo} draggable="false" alt="bilito" />
          <img src={personBlack} alt="person" />
          {/* main responsive menu */}
          <div class={` ${resNavbar ? "flex" : "hidden"}  relative z-50`}>
            <div
              class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-40"
              onClick={() => setResNavbar((prev) => !prev)}
            ></div>
            <nav className="navbar-menu fixed bottom-0 right-0 top-0 flex w-full max-w-sm flex-col overflow-y-auto border-r bg-white px-6 py-6">
              <div className="mb-14 flex justify-between">
                <img
                  src={close}
                  alt="close"
                  onClick={() => setResNavbar((prev) => !prev)}
                />
                <img src={fullLogo} alt="bimito" className="mx-auto" />
              </div>
              <ul className="mb-12 flex flex-col gap-y-8 text-sm text-[#404040]">
                <li>
                  <NavLink to="/" className="flex items-center gap-x-2">
                    <img draggable="false" src={home} alt="arrow" />
                    صفحه اصلی
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/a" className="flex items-center gap-x-2">
                    <img draggable="false" src={bime} alt="arrow" />
                    بیمه مسافرتی
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/b" className="flex items-center gap-x-2">
                    <img draggable="false" src={flight} alt="arrow" />
                    سفرهای من
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/c" className="flex items-center gap-x-2">
                    <img draggable="false" src={contactUs} alt="arrow" />
                    تماس با ما
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/d" className="flex items-center gap-x-2">
                    <img draggable="false" src={aboutUs} alt="arrow" />
                    درباره ما
                  </NavLink>
                </li>
                {isLogin && (
                  <li>
                    <NavLink to="/e" className="flex items-center gap-x-2">
                      <img draggable="false" src={personBlack} alt="person" />
                      حساب کاربری
                    </NavLink>
                  </li>
                )}
                <li>
                  <Link to="tel:0214045" className="flex items-center gap-x-2">
                    <img draggable="false" src={phone} alt="phone" />
                    پشتیبانی 4045-021
                  </Link>
                </li>
              </ul>
              {!isLogin && (
                <Link
                  to=""
                  className="flex w-full items-center justify-center gap-x-2 rounded-lg bg-[#1D91CC] px-4 py-3 text-white hover:bg-opacity-75"
                >
                  <img draggable="false" src={person} alt="person" />
                  ورود/ ثبت نام
                </Link>
              )}
            </nav>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
