import React from "react";
import Image from "next/image";
import { Images } from "../components/images";

export default function Hover1() {
  return (
    <div className="relative tw-flex tw-flex-col tw-w-[274px] tw-h-[350px] tw-bg-white tw-rounded-t-[15px] tw-rounded-bl-[15px] tw-shadow-lg">
      <div className="tw-h-[210px]">
        <Image
          src="/images/homepage/hover/1.svg"
          width={274}
          height={210}
          alt="Shoes"
          className="tw-rounded-t-[15px] tw-object-cover"
        />
      </div>
      <div className="tw-absolute tw-top-[180px] tw-w-[274px] tw-h-[20px] tw-bg-white tw-rounded-t-[15px]"></div>
      <div className="tw-h-[120px] tw-space-y-[10px] tw-px-2">
        <div className="tw-flex tw-items-center tw-space-x-[8px]">
          <Image
            src={Images.bankCheck}
            width={15}
            height={15}
            alt="check-mark"
          />
          <div className="myFont tw-text-[14px] tw-text-black tw-text-left">
            Surgical grade stainless steel card
          </div>
        </div>
        <div className="tw-flex tw-space-x-[8px]">
          <Image
            src={Images.bankCheck}
            width={15}
            height={15}
            alt="check-mark"
          />
          <div className="myFont tw-text-[14px] tw-text-black tw-font-poppins tw-text-left">
            Stunningly beautiful design
          </div>
        </div>
        <div className="tw-flex tw-space-x-[8px]">
          <Image
            src={Images.bankCheck}
            width={15}
            height={15}
            alt="check-mark"
          />
          <div className="myFont tw-text-[14px] tw-text-black tw-text-left">
            100% shariah compliant
          </div>
        </div>
      </div>
    </div>
  );
}
