import React, { Suspense, Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from "yup";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Images } from "../components/images";
import styles from "../styles/Home.module.css";

export default function JoinModal() {
    // form
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
      .max(20, "Name must be 20 characters or less")
      .required("Name is required"),
      phone: Yup.string()
      .required("Phone is required"),
      email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  let [isDone, setIsDone] = useState(false);

  function closeModal2() {
    setIsDone(false);
  }

  function openModal2() {
    setIsDone(true);
  }

  return (
    <>
    <button onClick={openModal} className="join">
                      JOIN WAITLIST
                    </button>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="tw-relative"
        onClose={closeModal}
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
                    onClick={() => setIsOpen(false)}
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
                {/* main */}
                <div className="tw-flex tw-py-4 tw-pl-[54px] tw-pr-[76px]">
                  <div className="-tw-z-1 tw-w-1/2 tw-mx-auto">
                    <Image
                      src={Images.join2}
                      width={500}
                      className="tw-absolute tw-bottom-0"
                      alt={"join"}
                    />
                  </div>
                  <div className="tw-w-1/2 tw-mx-auto">
                    <Dialog.Title
                      as="h2"
                      className="tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900"
                    >
                      <h2 className={styles.myModal}>
                        Apply for zero interest, 100% Islamic neobank coming to
                        Kenya.
                      </h2>
                    </Dialog.Title>
                    {/* description */}
                    <div className="tw-mt-4 tw-w-[445px]">
                      <p className="tw-text-[15px] tw-leading-[22.5px] tw-font-semibold tw-text-[#6D6E8A]">
                        Join a movement, where people speak your language,
                        <br /> understand your hopes and help you reach your
                        financial
                        <br /> goals. Help us to fix banking for G. (In Shaa
                        Allah).
                      </p>
                    </div>
                    {/* form */}
                    <form onSubmit={formik.handleSubmit}>
                      <div className="tw-mt-4">
                        <div className="tw-relative tw-mt-3 tw-rounded-full">
                          <div className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-6">
                            <Image src={Images.smileJoin} alt={"smile-join"} />
                          </div>
                          <div className="join-input">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              value={formik.values.name}
                              onChange={formik.handleChange}
                              className="tw-block tw-w-full tw-h-[62px] tw-bg-white tw-border-0 tw-rounded-full tw-py-1.5 tw-pl-16 tw-text-gray-900 placeholder:tw-text-[15px] placeholder:tw-text-[#6D6E8A] focus:tw-ring-0 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                              placeholder="What is your name?"
                            />
                          </div>
                        </div>
                        <div className="tw-text-red-700 tw-font-medium tw-p-1 tw-text-xs">
                          {formik.errors.name}
                        </div>
                      </div>
                      <div className="tw-mt-4">
                        <div className="tw-relative tw-mt-3 tw-rounded-full">
                          <div className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-6">
                            <Image src={Images.phoneJoin} alt={"phone-join"} />
                          </div>
                          <div className="join-input">
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              value={formik.values.phone}
                              onChange={formik.handleChange}
                              className="tw-block tw-w-full tw-h-[62px] tw-bg-white tw-border-0 tw-rounded-full tw-py-1.5 tw-pl-16 tw-text-gray-900 placeholder:tw-text-[15px] placeholder:tw-text-[#6D6E8A] focus:tw-ring-0 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                              placeholder="How can we reach out to you?"
                              required
                            />
                          </div>
                        </div>
                        <div className="tw-text-red-700 tw-font-medium tw-p-1 tw-text-xs">
                          {formik.errors.phone}
                        </div>
                      </div>
                      <div className="tw-mt-4">
                        <div className="tw-relative tw-mt-3 tw-rounded-full">
                          <div className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-6">
                            <Image src={Images.mailJoin} alt={"mail-join"} />
                          </div>
                          <div className="join-input">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              className="tw-block tw-w-full tw-h-[62px] tw-bg-white tw-border-0 tw-rounded-full tw-py-1.5 tw-pl-16 tw-text-gray-900 placeholder:tw-text-[15px] placeholder:tw-text-[#6D6E8A] focus:tw-ring-0 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                              placeholder="or write to you?"
                              required
                            />
                          </div>
                        </div>
                        <div className="tw-text-red-700 tw-font-medium tw-p-1 tw-text-xs">
                          {formik.errors.email}
                        </div>
                      </div>
                      <div className="tw-mt-4">
                        <button
                          type="submit"
                          onClick={() => {
                            openModal2();
                            setIsVisible(true);
                          }}
                          className={styles.joinBtn}
                        >
                          APPLY FOR TRIAL
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
    </>
  );
}

