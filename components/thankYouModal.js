import React, { Suspense, Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Confetti from "../components/Confetti";
import styles from "../styles/Home.module.css";

export default function ThankYouModal() {
    // confetti
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Transition appear show={isDone} as={Fragment}>
      <Dialog
        as="div"
        className="tw-relative"
        onClose={closeModal2}
        style={{ zIndex: "1000" }}
      >
        <Transition.Child
          as={Fragment}
          enter="tw-ease-out tw-duration-300"
          enterFrom="tw-opacity-0"
          enterTo="tw-opacity-100"
          leave="tw-ease-in tw-duration-200"
          leaveFrom="tw-opacity-100"
          leaveTo="tw-opacity-0"
        >
          <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-25" />
        </Transition.Child>

        <div className="tw-fixed tw-inset-0 tw-overflow-y-auto">
          <div className="tw-flex tw-min-h-full tw-items-center tw-justify-center tw-p-4">
            <Transition.Child
              as={Fragment}
              enter="tw-ease-out tw-duration-300"
              enterFrom="tw-opacity-0 tw-scale-95"
              enterTo="tw-opacity-100 tw-scale-100"
              leave="tw-ease-in tw-duration-200"
              leaveFrom="tw-opacity-100 tw-scale-100"
              leaveTo="tw-opacity-0 tw-scale-95"
            >
              <Dialog.Panel className="tw-w-[1148px] tw-h-[645px] tw-max-h-full tw-z-10 tw-transform tw-overflow-hidden tw-rounded-2xl tw-bg-white tw-p-6 tw-align-middle tw-shadow-xl tw-transition-all">
                {/* close */}
                <div className="tw-absolute tw-top-0 tw-right-0 tw-hidden tw-pt-4 tw-pr-4 sm:tw-block">
                  <button
                    type="button"
                    className="tw-border-0 tw-bg-white tw-text-[#6D6E8A] focus:tw-outline-none"
                    onClick={() => setIsDone(false)}
                  >
                    <span className="tw-sr-only">Close</span>
                    <span
                      className="tw-text-[#6D6E8A] tw-underline"
                      aria-hidden="true"
                    >
                      exit beta
                    </span>{" "}
                    {">"}
                  </button>
                </div>
                <div className="tw-absolute tw-bottom-0 tw-left-0 tw-pb-4 tw-pl-[74px]">
                  <Image src={Images.joinLogo} alt={"join-logo"} />
                </div>
                <div className="tw-absolute tw-top-60 tw-left-0 tw-pt-4 tw-pl-[74px]">
                  <Image src={Images.kiss} alt={"kiss"} />
                </div>
                <div className="tw-absolute tw-bottom-40 tw-right-0 tw-pb-4 tw-pr-[74px]">
                  <Image src={Images.smile} alt={"smile"} />
                </div>
                <div className="tw-absolute tw-bottom-[110px] tw-right-20 tw-pb-4 tw-pr-[80px]">
                  <Image src={Images.wink2} alt={"wink"} />
                </div>
                {/* main */}
                <div className="tw-py-4 tw-pl-[54px] tw-pr-[76px]">
                  <div className="tw-mx-auto tw-flex tw-flex-col tw-text-center tw-items-center tw-justify-center tw-w-[600px] tw-pt-[70px]">
                    <Image src={Images.love2} alt={"love"} />
                    <Dialog.Title
                      as="h2"
                      className="tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900 tw-pt-4"
                    >
                      <h2 className={styles.myModal}>
                        A great big thank you Habibi!
                      </h2>
                    </Dialog.Title>
                    {/* description */}
                    <div className="tw-mt-4 tw-w-[445px]">
                      <p className="tw-text-[15px] tw-leading-[22.5px] tw-font-medium tw-text-[#6D6E8A]">
                        Now sit back and relax, we’ll take it up from here.
                        We’ll be in your inbox soon :-). It pays to be smart
                        about your money, why not share with your smart friends?
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}


