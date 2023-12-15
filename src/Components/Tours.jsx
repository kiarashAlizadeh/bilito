import Tour from "./Tour"

import { tangoHotel } from "../assets"

function Tours() {
  const tourData = [
    {
      pic: tangoHotel,
      hotelName: "The TANGO Hotel Sisli",
      rate: 4,
      city: "استانبول",
      region: "شیشلی",
      price: "139,854,000",
    },
    {
      pic: "https://cdn.alibaba.ir/ostorage/hotel-giata-images/434048/a66c619efd876bdc7a95d24447057a13.jpg?w=300",
      hotelName: "DoubleTree by Hilton Istanbul",
      rate: 5,
      city: "استانبول",
      region: "پیالپاشا، بی اوغلو",
      price: "149,207,000",
    },
    {
      pic: "https://cdn.alibaba.ir/ostorage/hotel/images/84E99E04/988EF35169B007DF83E2DB812058375F.jpg?w=300",
      hotelName: "The Public Hotel",
      rate: 4,
      city: "استانبول",
      region: "تکسیم",
      price: "145,198,000",
    },
    {
      pic: "https://cdn.alibaba.ir/ostorage/hotel/images/7C676B9B/031BE0BB264C174FD4C0FDA974C36327.jpg",
      hotelName: "Istanbul Dora Hotel",
      rate: 4,
      city: "استانبول",
      region: "شیشلی",
      price: "138,518,000",
    },
    {
      pic: "https://cdn.alibaba.ir/ostorage/hotel/images/9719A7AD/615874931C027ED0579EE0C123B04249.jpg?w=300",
      hotelName: "White Monarch Hotel",
      rate: 4,
      city: "استانبول",
      region: "شیشلی",
      price: "136,380,000",
    },
    {
      pic: "https://cdn.alibaba.ir/ostorage/hotel/images/AD9ABCE2/C2704C7D778B3C5423192F09EC05A40E.jpg?w=300",
      hotelName: "Grand Cevahir Hotel",
      rate: 5,
      city: "استانبول",
      region: "شیشلی",
      price: "152,146,000",
    },
    {
      pic: "https://cdn.alibaba.ir/ostorage/tour-statics/302438509-231bad48cf7449d9ab16d570e1be09cb-.jpg",
      hotelName: "Biancho Hotel Pera",
      rate: 4,
      city: "استانبول",
      region: "بی اوغلو",
      price: "139,854,000",
    },
    {
      pic: "https://cdn.alibaba.ir/ostorage/hotel/images/EBD6D81D/0CBED0ECF5D3F2BDDF65522CA85947C9.jpg?w=300",
      hotelName: "Taksim Square Hotel",
      rate: 4,
      city: "استانبول",
      region: "بی اوغلو",
      price: "148,672,000",
    },
    {
      pic: "https://cdn.alibaba.ir/ostorage/tour-statics/483737377-b6e782a1a5b844fba4768b4036f035d8-.jpg",
      hotelName: "Euro Plaza Hotel",
      rate: 4,
      city: "استانبول",
      region: "رفیق سیدام، بی اوغلو",
      price: "139,160,000",
    },
  ]
  return (
    <>
      <div className="mb-10 flex select-none flex-col items-center justify-center gap-y-7">
        <div className="flex flex-wrap justify-center gap-4 px-5">
          {tourData.map((tour, index) => {
            return <Tour key={index} {...tour} />
          })}
        </div>
        <button className="w-full max-w-[200px] rounded-lg bg-[#1D91CC] px-4 py-2 text-xl font-semibold text-white lg:max-w-[350px]">
          بیشتر
        </button>
      </div>
    </>
  )
}

export default Tours
