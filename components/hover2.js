import React from 'react'
import Image from "next/image";
import { Images } from "../components/images";

export default function Hover2() {
  return (
    <div className="relative tw-flex tw-flex-col tw-w-[220px] tw-h-[254px] tw-bg-white tw-rounded-t-[15px] tw-rounded-bl-[15px] tw-shadow-lg">
      <div className='tw-h-[171px]'>
        <Image
          src="/images/homepage/hover/2.svg"
          width={274}
          height={171}
          alt="Shoes"
          className='tw-rounded-t-[15px]'
        />
      </div>
      <div className='tw-absolute tw-top-[153px] tw-w-[220px] tw-h-[18px] tw-bg-white tw-rounded-t-[15px]'></div>
      <div className='tw-h-[101px] tw-space-y-[10px] tw-px-2'>
            <div className='tw-flex tw-items-center tw-space-x-[8px]'>
                <Image
                src={Images.bankCheck}
                width={15}
                height={15}
                alt="check-mark"
                />
                <div className='tw-text-[10px] tw-text-black tw-font-medium tw-text-left'>No wallet? No problem.</div>
            </div>
            <div className='tw-flex tw-space-x-[8px]'>
                <Image
                src={Images.bankCheck}
                width={15}
                height={15}
                alt="check-mark"
                />
                <div className='tw-text-[10px] tw-text-black tw-font-medium tw-font-poppins tw-text-left'>Buy now, pay at your own pace</div>
            </div>
            <div className='tw-flex tw-space-x-[8px]'>
                <Image
                src={Images.bankCheck}
                width={15}
                height={15}
                alt="check-mark"
                />
                <div className='tw-text-[10px] tw-text-black tw-font-medium tw-text-left'>Access to 2000 ATMs nation wide</div>
            </div>
      </div>
    </div>
  )
}
