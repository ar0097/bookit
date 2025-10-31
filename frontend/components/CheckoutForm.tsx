import React from "react";
import { GrLinkPrevious } from "react-icons/gr";

function CheckoutForm() {
  return (
    <div className="w-full py-4 px-4 sm:px-8 lg:px-[124px]">
      <div className="flex gap-1.5 items-center">
        <GrLinkPrevious className="w-[12.99px] h-[12.65px]" />
        <p className="font-medium text-[14px]/[18px]">Checkout</p>
      </div>

      <div className="mt-5 flex flex-col lg:flex-row justify-between gap-6">
        <div className="w-full lg:w-[739px] h-fit bg-[#EFEFEF] rounded-xl p-6">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label className="font-normal text-[14px]/[18px] text-[#5B5B5B]">
                Full name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full h-[42px] rounded-md py-3 px-4 bg-[#DDDDDD] outline-none placeholder:text-[#727272] placeholder:text-[14px]/[18px]"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="font-normal text-[14px]/[18px] text-[#5B5B5B]">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="w-full h-[42px] rounded-md py-3 px-4 bg-[#DDDDDD] outline-none placeholder:text-[#727272] placeholder:text-[14px]/[18px]"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <input
              type="text"
              placeholder="Promo Code"
              className="flex-1 h-[42px] rounded-md py-3 px-4 bg-[#DDDDDD] outline-none placeholder:text-[#727272] placeholder:text-[14px]/[18px]"
            />
            <button className="bg-[#161616] rounded-lg h-[42px] px-6 font-medium text-[14px]/[18px] text-[#F9F9F9]">
              Apply
            </button>
          </div>

          <div className="flex gap-2 items-center mt-3">
            <input type="checkbox" className="w-3 h-3 accent-[#161616]" />
            <label className="font-normal text-[12px]/[16px] text-[#5B5B5B]">
              I agree to the terms and safety policy
            </label>
          </div>
        </div>

        <div className="w-full lg:w-[387px] rounded-xl p-6 bg-[#EFEFEF]">
          <div className="flex justify-between">
            <p className="text-[#656565] text-[16px]/[20px]">Experience</p>
            <p className="text-[#161616] text-[16px]/[20px]">Kayaking</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-[#656565] text-[16px]/[20px]">Date</p>
            <p className="text-[#161616] text-[16px]/[20px]">2025-10-22</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-[#656565] text-[16px]/[20px]">Time</p>
            <p className="text-[#161616] text-[16px]/[20px]">09:00 am</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-[#656565] text-[16px]/[20px]">Qty</p>
            <p className="text-[#161616] text-[16px]/[20px]">1</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-[#656565] text-[16px]/[20px]">Subtotal</p>
            <p className="text-[#161616] text-[16px]/[20px]">₹999</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-[#656565] text-[16px]/[20px]">Taxes</p>
            <p className="text-[#161616] text-[16px]/[20px]">₹59</p>
          </div>
          <div className="bg-[#D9D9D9] w-full h-px mt-3"></div>
          <div className="flex justify-between mt-4">
            <p className="font-medium text-[#161616] text-[20px]/[24px]">
              Total
            </p>
            <p className="font-medium text-[#161616] text-[20px]/[24px]">
              ₹958
            </p>
          </div>
          <button className="bg-[#FFD643] mt-4 w-full h-11 rounded-lg py-3 px-5 font-medium text-[16px]/[20px] text-[#161616]">
            Pay and Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
