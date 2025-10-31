"use client";
import Image from "next/image";
import { GrLinkPrevious } from "react-icons/gr";
import kayaking from "../assets/kayaking.jpg";
import { useEffect, useState } from "react";

function Details({ id }: any) {
  const [data, setData] = useState<Record<string, string>>({});
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [qty, setQty] = useState(1);
  const [subTotal, setSubTotal] = useState(999);
  const [tax, setTax] = useState(59);
  console.log("kjbc ", date);

  useEffect(() => {
    fetch(`https://bookit-jyiw.onrender.com/api/experiences/${id}`)
      .then((items) => items.json())
      .then((result) => setData(result));
  }, [id]);

  const handleConfirm = () => {
    fetch("https://bookit-jyiw.onrender.com/api/bookings", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        id,
        experience: data.text,
        date,
        time,
        qty,
        subtotal: subTotal,
        taxes: tax,
        total: subTotal + tax,
      }),
    })
      .then((data) => data.json())
      .then((res) => console.log("debhjcn", res));
  };

  return (
    <div className="w-full py-4 px-4 sm:px-8 lg:px-[124px]">
      <div className="flex gap-1.5 items-center">
        <GrLinkPrevious className="w-[12.99px] h-[12.65px]" />
        <p className="font-medium text-[14px]/[18px]">Details</p>
      </div>

      <div className="mt-5 flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-[765px] flex flex-col gap-5">
          <Image
            src={data.img}
            alt="Kayaking"
            className="w-full h-[250px] sm:h-80 lg:h-[381px] rounded-xl object-cover"
            width={0}
            unoptimized
            height={0}
          />

          <div>
            <h1 className="font-medium text-[22px] sm:text-[24px] text-[#161616]">
              {data.text}
            </h1>
            <p className="font-normal text-[14px] sm:text-[16px] text-[#6C6C6C] mt-3">
              Curated small-group experience. Certified guide. Safety first with
              gear included. Helmet and Life jackets along with an expert will
              accompany in kayaking.
            </p>

            <div className="mt-5">
              <p className="font-medium text-[16px] sm:text-[18px] text-[#161616]">
                Choose date
              </p>
              <div className="flex flex-wrap gap-3.5 mt-3">
                {["Oct 22", "Oct 23", "Oct 24", "Oct 25", "Oct 26"].map(
                  (ele, i) => (
                    <div
                      key={i}
                      onClick={() => setDate(ele)}
                      className={`w-[69px] h-[34px] text-center cursor-pointer py-2 px-3 rounded-sm font-normal text-[14px] ${
                        ele === date
                          ? "bg-[#FFD643] text-[#161616]"
                          : "border border-[#BDBDBD] text-[#838383]"
                      }`}
                    >
                      {ele}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="mt-5">
              <p className="font-medium text-[16px] sm:text-[18px] text-[#161616]">
                Choose time
              </p>
              <div className="flex flex-wrap gap-3.5 mt-3">
                <div
                  onClick={() => setTime("07:00")}
                  className={`border border-[#BDBDBD] text-[#838383] py-2 px-3 rounded-sm text-[14px] ${
                    time === "07:00" ? "bg-[#FFD643] border-none" : ""
                  }`}
                >
                  07:00 am{" "}
                  <span className="text-[#FF4C0A] font-medium text-[10px]">
                    4 left
                  </span>
                </div>
                <div
                  onClick={() => setTime("9:00")}
                  className={`border border-[#BDBDBD] text-[#838383] py-2 px-3 rounded-sm text-[14px] ${
                    time === "9:00" ? "bg-[#FFD643] border-none" : ""
                  }`}
                >
                  9:00 am{" "}
                  <span className="text-[#FF4C0A] font-medium text-[10px]">
                    2 left
                  </span>
                </div>
                <div
                  onClick={() => setTime("11:00")}
                  className={`border border-[#BDBDBD] text-[#838383] py-2 px-3 rounded-sm text-[14px] ${
                    time === "11:00" ? "bg-[#FFD643] border-none" : ""
                  }`}
                >
                  11:00 am{" "}
                  <span className="text-[#FF4C0A] font-medium text-[10px]">
                    5 left
                  </span>
                </div>
                <div className="border border-[#BDBDBD] bg-[#CCCCCC] text-[#838383] py-2 px-3 rounded-sm text-[14px]">
                  1:00 pm{" "}
                  <span className="text-[#6A6A6A] font-medium text-[10px]">
                    Sold out
                  </span>
                </div>
              </div>
              <p className="font-normal text-[12px] text-[#838383] mt-2">
                All times are in IST (GMT +5:30)
              </p>
            </div>

            <div className="my-5">
              <h1 className="font-medium text-[18px] text-[#161616]">About</h1>
              <p className="font-normal text-[12px] sm:text-[14px] text-[#838383] bg-[#EEEEEE] rounded-sm py-2 px-3 mt-2">
                Scenic routes, trained guides, and safety briefing. Minimum age
                10.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[387px] h-fit rounded-xl p-6 bg-[#EFEFEF]">
          <div className="flex justify-between">
            <p className="text-[#656565] text-[16px]">Starts at</p>
            <p className="text-[#161616] text-[18px]">₹999</p>
          </div>

          <div className="flex justify-between items-center mt-5">
            <p className="text-[#656565] text-[16px]">Quantity</p>
            <div className="flex gap-2 items-center">
              <button
                onClick={() => {
                  setQty((prev) => {
                    const newQty = prev === 1 ? 1 : prev - 1;
                    setSubTotal(999 * newQty);
                    setTax(59 * newQty);
                    return newQty;
                  });
                }}
                className="border border-[#C9C9C9] w-5 h-5 flex justify-center items-center"
              >
                -
              </button>
              <p className="text-[12px]">{qty}</p>
              <button
                onClick={() => {
                  setQty((prev) => {
                    const newQty = prev + 1;
                    setSubTotal(999 * newQty);
                    setTax(59 * newQty);
                    return newQty;
                  });
                }}
                className="border border-[#C9C9C9] w-5 h-5 flex justify-center items-center"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between mt-5">
            <p className="text-[#656565] text-[16px]">Subtotal</p>
            <p className="text-[#161616] text-[14px]">₹{subTotal}</p>
          </div>
          <div className="flex justify-between mt-5">
            <p className="text-[#656565] text-[16px]">Taxes</p>
            <p className="text-[#161616] text-[14px]">₹{tax}</p>
          </div>

          <div className="bg-[#D9D9D9] h-px mt-3"></div>
          <div className="flex justify-between mt-4">
            <p className="text-[#161616] text-[20px] font-medium">Total</p>
            <p className="text-[#161616] text-[20px]">₹{subTotal + tax}</p>
          </div>

          <button
            className={`bg-[#D7D7D7] mt-4 w-full h-11 rounded-lg py-3 font-medium text-[16px] ${
              time && date ? "bg-[#FFD643] border-none text-[#161616]" : ""
            } text-[#7F7F7F]`}
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
