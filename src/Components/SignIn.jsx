import { useState, useRef, useContext } from "react"
import { UserContext } from "../App"
import { Link } from "react-router-dom"
import { fullLogo, arrowRightBig, clock } from "../assets"

function SignIn() {
  const [reqLogin, setReqLogin] = useContext(UserContext)
  const [isPhoneNumberFull, setIsPhoneNumberFull] = useState(false)
  const [isRuleChecked, setIsRuleChecked] = useState(false)
  const [isOtpFull, setIsOtpFull] = useState(false)
  const [isOtp, setIsOtp] = useState(false)

  const [phoneNumber, phoneNumberVal] = useState("")

  const [otpValues, setOtpValues] = useState(["", "", "", ""])
  const [otpComplete, setOtpComplete] = useState("")
  const otpFieldsRef = useRef([])
  const handleInput = (index, value) => {
    if (value.length > 1) {
      return
    }
    const newOtpValues = [...otpValues]
    newOtpValues[index] = value
    setOtpValues(newOtpValues)
    updateOtpComplete(newOtpValues)
    if (value.length === 1 && index < otpValues.length - 1) {
      setTimeout(() => {
        otpFieldsRef.current[index + 1].focus()
      }, 10)
    }
  }

  const handleBackspace = (index) => {
    if (otpValues[index] !== "") {
      const newOtpValues = [...otpValues]
      newOtpValues[index] = ""
      setOtpValues(newOtpValues)
      updateOtpComplete(newOtpValues)
    } else if (index > 0) {
      otpFieldsRef.current[index - 1].focus()
    }
  }

  const updateOtpComplete = (newOtpValues) => {
    const newOtpComplete = newOtpValues.join("")
    setOtpComplete(newOtpComplete)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && otpComplete.length === 4) {
      e.preventDefault()
    }
  }

  const phoneNumberHandler = (e) => {
    phoneNumberVal(e.target.value)
    setIsPhoneNumberFull(true)
  }

  const signInHandler = () => {
    setIsOtp(true)
  }

  return (
    <>
      <div
        onClick={(e) => setReqLogin(false)}
        class=" fixed inset-0 z-40 bg-gray-800 opacity-40"
      ></div>
      <div className="fixed left-0 right-0 top-0 z-50 flex h-full flex-col items-center bg-white px-5 py-4 md:top-1/4 md:mx-auto md:my-auto md:h-[422px] md:w-[600px] md:rounded-lg">
        <img src={fullLogo} alt="bilito" className="mb-9" />

        {!isOtp ? (
          <>
            <button
              onClick={(e) => setReqLogin(false)}
              className="ml-auto md:hidden"
            >
              <img src={arrowRightBig} alt="arrowRightBig" />
            </button>
            <span className="mb-[50px] text-xl font-semibold text-[#404040]">
              ورود یا ثبت‌نام
            </span>
            <div className="mb-16 flex flex-col">
              <span className="mb-4 text-xs text-[#606060]">
                کد تایید به شماره موبایلی که وارد می‌کنید، ارسال خواهد شد.
              </span>
              <input
                type="tel"
                placeholder="شماره موبایل"
                onChange={phoneNumberHandler}
                className="mb-8 rounded-lg border-2 border-[#1D91CC] px-2 py-1 text-right text-[#1D91CC]"
              />
              <span className="flex items-center gap-x-3">
                <input
                  type="checkbox"
                  onChange={(e) => setIsRuleChecked(e.target.checked)}
                />
                <span className="text-xs text-[#606060]">
                  با ورود و ثبت‌نام در سایت، با
                  <Link to="" className="text-[#1D91CC]">
                    {"\u00A0"} قوانین بیلیتو {"\u00A0"}
                  </Link>
                  موافقت می‌کنم.
                </span>
              </span>
            </div>
            <button
              onClick={signInHandler}
              className={`w-full rounded-lg px-4 py-2 md:w-48 ${
                isPhoneNumberFull && isRuleChecked
                  ? "bg-[#1D91CC] text-white hover:bg-opacity-75"
                  : "bg-[#d9d7d7] text-[#ADADAD]"
              } `}
              disabled={!isPhoneNumberFull || !isRuleChecked}
            >
              تایید و ادامه
            </button>
          </>
        ) : (
          <>
            <button
              className="ml-auto md:hidden"
              onClick={(e) => setIsOtp(false)}
            >
              <img src={arrowRightBig} alt="arrowRightBig" />
            </button>
            <span className="mb-[50px] text-xl font-semibold text-[#404040]">
              صحت سنجی
            </span>
            <div className="mb-10">
              <div className="mb-4 text-xs text-[#606060]">
                کد چهار رقمی ارسال شده به شماره 3034 592 0918 را وارد کنید.
              </div>
              <div dir="ltr" className="flex flex-row justify-center gap-x-4">
                {otpValues.map((value, index) => (
                  <input
                    name="otp1"
                    type="tel"
                    autoComplete="off"
                    className="h-12 w-10 rounded-xl border-2  border-[#CBCBCB] px-2 py-1 text-center text-xl font-semibold focus:bg-white sm:h-16 sm:w-16"
                    value={value}
                    onChange={(e) => {
                      handleInput(index, e.target.value)
                    }}
                    onKeyDown={(e) => {
                      handleKeyPress(e)
                      if (e.key === "Backspace") {
                        handleBackspace(index)
                      }
                    }}
                    ref={(ref) => {
                      otpFieldsRef.current[index] = ref
                    }}
                    tabIndex="1"
                    maxLength="1"
                    key={index}
                    disabled={
                      index !== 0 &&
                      otpValues[index - 1] === "" &&
                      otpValues[index] === ""
                    }
                    autoFocus={index === 0}
                  />
                ))}
              </div>
              <div className="mt-9 flex justify-between md:gap-x-7">
                <span className="flex gap-x-2">
                  <img src={clock} alt="clock" />
                  <span className="text-xs text-[#868686] md:text-base">
                    <span className="text-[#1D91CC]">1:59</span>
                    {"\u00A0"}
                    تا دریافت مجدد کد
                  </span>
                </span>
                <button
                  onClick={(e) => setIsOtp(false)}
                  className="text-xs text-[#1D91CC] md:text-base"
                >
                  ویرایش شماره موبایل
                </button>
              </div>
            </div>
            <button
              onClick={(e) => setReqLogin(false)}
              className={`w-full rounded-lg px-4 py-2 md:w-48 ${
                otpComplete.length === 4
                  ? "bg-[#1D91CC] text-white md:hover:bg-opacity-75"
                  : "bg-[#d9d7d7] text-[#ADADAD]"
              } 
              `}
              disabled={otpComplete.length !== 4}
            >
              ورود
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default SignIn
