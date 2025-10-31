import Image from "next/image";
import { GrLinkPrevious } from "react-icons/gr";
import kayaking from "../assets/kayaking.jpg";

function Details() {
  return (
    <div className="w-full py-4 px-4 sm:px-8 lg:px-[124px]">
      <div className="flex gap-1.5 items-center">
        <GrLinkPrevious className="w-[12.99px] h-[12.65px]" />
        <p className="font-medium text-[14px]/[18px]">Details</p>
      </div>

      <div className="mt-5 flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-[765px] flex flex-col gap-5">
          <Image
            src={kayaking}
            alt="Kayaking"
            className="w-full h-[250px] sm:h-80 lg:h-[381px] rounded-xl object-cover"
          />

          <div>
            <h1 className="font-medium text-[22px] sm:text-[24px] text-[#161616]">
              Kayaking
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
                  (date, i) => (
                    <div
                      key={i}
                      className={`w-[69px] h-[34px] text-center py-2 px-3 rounded-sm font-normal text-[14px] ${
                        i === 0
                          ? "bg-[#FFD643] text-[#161616]"
                          : "border border-[#BDBDBD] text-[#838383]"
                      }`}
                    >
                      {date}
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
                <div className="border border-[#BDBDBD] text-[#838383] py-2 px-3 rounded-sm text-[14px]">
                  07:00 am{" "}
                  <span className="text-[#FF4C0A] font-medium text-[10px]">
                    4 left
                  </span>
                </div>
                <div className="border border-[#BDBDBD] text-[#838383] py-2 px-3 rounded-sm text-[14px]">
                  9:00 am{" "}
                  <span className="text-[#FF4C0A] font-medium text-[10px]">
                    2 left
                  </span>
                </div>
                <div className="border border-[#BDBDBD] text-[#838383] py-2 px-3 rounded-sm text-[14px]">
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
              <button className="border border-[#C9C9C9] w-5 h-5 flex justify-center items-center">
                -
              </button>
              <p className="text-[12px]">1</p>
              <button className="border border-[#C9C9C9] w-5 h-5 flex justify-center items-center">
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between mt-5">
            <p className="text-[#656565] text-[16px]">Subtotal</p>
            <p className="text-[#161616] text-[14px]">₹999</p>
          </div>
          <div className="flex justify-between mt-5">
            <p className="text-[#656565] text-[16px]">Taxes</p>
            <p className="text-[#161616] text-[14px]">₹59</p>
          </div>

          <div className="bg-[#D9D9D9] h-px mt-3"></div>
          <div className="flex justify-between mt-4">
            <p className="text-[#161616] text-[20px] font-medium">Total</p>
            <p className="text-[#161616] text-[20px]">₹958</p>
          </div>

          <button className="bg-[#D7D7D7] mt-4 w-full h-11 rounded-lg py-3 font-medium text-[16px] text-[#7F7F7F]">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
