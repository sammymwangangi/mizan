import { Images } from "../components/images";
import styles from "../styles/Home.module.css";
import Confetti from "../components/Confetti";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ThankYou() {

  const [loveIndex, setLoveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setLoveIndex((loveIndex) => (loveIndex + 1) % 2);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const [thumbIndex, setThumbIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setThumbIndex((thumbIndex) => (thumbIndex + 1) % 2);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="tw-hidden lg:tw-block tw-w-[1148px] tw-h-[645px] tw-max-h-full tw-transform tw-overflow-hidden tw-rounded-2xl tw-bg-white tw-p-6 tw-align-middle tw-shadow-xl tw-transition-all tw-mx-auto tw-my-auto">
        {/* close */}
        <div className="tw-absolute tw-top-0 tw-right-0 tw-hidden tw-pt-4 tw-pr-4 sm:tw-block">
          <Link
            href="/"
            className="tw-border-0 tw-bg-white tw-text-[#6D6E8A] focus:tw-outline-none"
          >
            <span className="tw-text-[#6D6E8A] tw-underline" aria-hidden="true">
              exit beta
            </span>{" "}
            {">"}
          </Link>
        </div>
        <div className="tw-absolute tw-bottom-0 tw-left-0 tw-pb-4 tw-pl-[74px]">
          <Image src={Images.joinLogo} alt={"join-logo"} />
        </div>
        <div className="tw-absolute tw-top-60 tw-left-0 tw-pt-4 tw-pl-[74px]">
          <Image
            src={thumbIndex === 0 ? Images.love : Images.avatar3}
            className="avtar3 tw-rotate-[-10.28deg]"
            alt=""
          />
        </div>
        <div className="tw-absolute tw-bottom-40 tw-right-0 tw-pb-4 tw-pr-[74px]">
          <Image
            src={loveIndex === 0 ? Images.avatar2 : Images.thumbsup}
            className="avtar2"
            alt=""
          />
        </div>
        <div className="tw-absolute tw-bottom-[110px] tw-right-20 tw-pb-4 tw-pr-[80px]">
          <Image
            src={thumbIndex === 0 ? Images.avatar3 : Images.love}
            className="avtar3"
            alt=""
          />
        </div>
        {/* main */}
        <div className="tw-py-4 tw-pl-[54px] tw-pr-[76px]">
          <div className="tw-mx-auto tw-flex tw-flex-col tw-text-center tw-items-center tw-justify-center tw-w-[600px] tw-pt-[70px]">
            <Image src={Images.love2} alt={"love"} />
            <div
              as="h2"
              className="tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900 tw-pt-4"
            >
              <h2 className={styles.myModal}>A great big thank you Habibi!</h2>
            </div>
            {/* description */}
            <div className="tw-mt-4 tw-w-[445px]">
              <p className="tw-text-[15px] tw-leading-[22.5px] tw-font-medium tw-font-[PoppinsMedium] tw-text-[#6D6E8A]">
                Now sit back and relax, we’ll take it up from here. We’ll be in
                your inbox soon :-). It pays to be smart about your money, why
                not share with your smart friends?
              </p>
            </div>
            {/* social buttons */}
            <div className="tw-flex tw-gap-4 tw-mt-10 tw-items-center">
              <div>
                <Image src={Images.linkedin2} alt={"linkedin"} />
              </div>
              <div>
                <Image src={Images.youtube2} alt={"youtube"} />
              </div>
              <div>
                <Image src={Images.facebook2} alt={"facebook"} />
              </div>
              <div>
                <Image src={Images.twitter2} alt={"twitter"} />
              </div>
            </div>
          </div>
        </div>
        <Confetti />
      </div>

      {/* Mobile Devices */}

      <div className="tw-block lg:tw-hidden tw-w-[574px] tw-h-[575px] tw-max-h-full tw-transform tw-overflow-hidden tw-rounded-2xl tw-bg-white tw-p-6 tw-align-middle tw-shadow-xl tw-transition-all tw-mx-auto tw-my-auto">
        {/* close */}
        <div className="tw-absolute tw-top-0 tw-right-0 tw-pt-2 tw-pr-4">
          <Link
            href="/"
            className="tw-border-0 tw-bg-white tw-text-[#6D6E8A] focus:tw-outline-none"
          >
            <span className="tw-text-[#6D6E8A] tw-underline" aria-hidden="true">
              exit beta
            </span>{" "}
            {">"}
          </Link>
        </div>
        <div className="tw-absolute tw-bottom-0 tw-left-0 tw-pb-2 tw-pl-[37px]">
          <Image src={Images.joinLogo} alt={"join-logo"} />
        </div>
        <div className="tw-absolute tw-top-44 tw-left-0 tw-pt-2 tw-pl-[37px]">
          <Image
            src={thumbIndex === 0 ? Images.love : Images.avatar3}
            className="avtar3 tw-rotate-[-10.28deg]"
            alt=""
          />
        </div>
        <div className="tw-absolute tw-bottom-[80px] tw-right-0 tw-pb-2 tw-pr-[30px]">
          <Image
            src={loveIndex === 0 ? Images.avatar2 : Images.thumbsup}
            className="avtar2"
            alt=""
          />
        </div>
        <div className="tw-absolute tw-bottom-[10px] tw-right-10 tw-pb-2 tw-pr-[50px]">
          <Image
            src={thumbIndex === 0 ? Images.avatar3 : Images.love}
            className="avtar3"
            alt=""
          />
        </div>
        {/* main */}
        <div className="tw-py-2 tw-pl-[54px] tw-pr-[38px]">
          <div className="tw-mx-auto tw-flex tw-flex-col tw-text-center tw-items-center tw-justify-center tw-w-[300px] tw-pt-[35px]">
            <Image src={Images.love2} alt={"love"} />
            <div
              as="h2"
              className="tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900 tw-pt-2"
            >
              <h2 className={styles.myModal}>A great big thank you Habibi!</h2>
            </div>
            {/* description */}
            <div className="tw-mt-4 tw-w-[223px]">
              <p className="tw-text-[12px] tw-leading-[14px] tw-font-medium tw-font-[PoppinsMedium] tw-text-[#6D6E8A]">
                Now sit back and relax, we’ll take it up from here. We’ll be in
                your inbox soon :-). It pays to be smart about your money, why
                not share with your smart friends?
              </p>
            </div>
            {/* social buttons */}
            <div className="tw-flex tw-gap-4 tw-mt-10 tw-items-center">
              <div>
                <Image src={Images.linkedin2} alt={"linkedin"} />
              </div>
              <div>
                <Image src={Images.youtube2} alt={"youtube"} />
              </div>
              <div>
                <Image src={Images.facebook2} alt={"facebook"} />
              </div>
              <div>
                <Image src={Images.twitter2} alt={"twitter"} />
              </div>
            </div>
          </div>
        </div>
        <Confetti />
      </div>
    </>
  );
}
