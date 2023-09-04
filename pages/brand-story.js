import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import React, { Suspense, Fragment, useRef, useState, useEffect } from "react";
import { Images } from "../components/images";
import dynamic from "next/dynamic";
import Confetti from "../components/Confetti";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import styles from "../styles/Home.module.css";
import styles3 from "../styles/Brand.module.css"; 
import PhoneNumberInput from "../components/PhoneNumberInput";
import DynamicNav from "../components/nav";
import DynamicBrandFooter from "../components/brandFooter";
import DynamicNavModal from "../components/navModal";

const marks = [
  {
    tag: "mark1",
    title: "First shariah compliant buy now pay <br /> later in Africa.",
    imageUrl:
      "https://ik.imagekit.io/qqkp8wchu/right-mark.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677796303005",
  },
  {
    tag: "mark2",
    title: "Globally recognized shariah <br /> independent audit committee.",
    imageUrl:
      "https://ik.imagekit.io/qqkp8wchu/right-mark.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677796303005",
  },
  {
    tag: "mark3",
    title: "Shariah compliant investment banking <br /> (coming soon).",
    imageUrl:
      "https://ik.imagekit.io/qqkp8wchu/right-mark.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677796303005",
  },
  {
    tag: "mark4",
    title: "Sukuks, and Islamic fund structuring <br /> (coming soon).",
    imageUrl:
      "https://ik.imagekit.io/qqkp8wchu/right-mark.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677796303005",
  },
  {
    tag: "mark5",
    title: "Shariah merchant & corporate <br /> banking (coming soon).",
    imageUrl:
      "https://ik.imagekit.io/qqkp8wchu/right-mark.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677796303005",
  },
];

export default function BrandStory() {
  // form
  const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );
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
        .matches(phoneRegex, "Invalid phone")
        .required("Phone is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  // console.log(formik.values);
  // confetti
  const [isVisible, setIsVisible] = useState(false);

  const [pieces, setPieces] = useState(200);

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };

  useEffect(() => {
    stopConfetti();
  }, []);
  // Disable Submit Button
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const { name, email, phone } = formValues;
  const isFormEmpty = !name && !email && !phone;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal2 = () => {
    setIsModal2Open(true);
  };

  const closeModal2 = () => {
    setIsModal2Open(false);
    closeModal(); // Close the first modal as well
  };

  const [avatarIndex, setAvatarIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAvatarIndex((avatarIndex) => (avatarIndex + 1) % 2);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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

  const [googlesIndex, setGooglesIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setGooglesIndex((googlesIndex) => (googlesIndex + 1) % 2);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Mizan Money - Brand Story</title>
      </Head>

      <main>
        {/* Nav */}
        <DynamicNav />
        {/* End */}

        <section className="brand-story-hero">
          <div className="row m-0 align-items-center w-100">
            <div className="col-lg-5 col-md-6 col-sm-12 ps-0">
              <div className="brand-logo">
                <img
                  src="https://ik.imagekit.io/qqkp8wchu/brand-story.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677796255045"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12">
              <div className="brand-title">
                <h1>
                  Mizan Money <br />
                  Brand Story
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="what-is-mizan">
          <div className="mizan-working">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mizan-left-box mizan-def-padding">
                  <h2>What is Mizan?</h2>
                  <p>
                    <span>Mizan</span> is an Arabic term for ”balance”. Our aim
                    is to put a financial balance in our everyday lives. It’s a
                    “neo” way to: borrow better, spend better, save better &
                    invest better.
                  </p>

                  <p className="mt-5" style={{ marginTop: "40px !important" }}>
                    So, naturally, our first challenge will be focused on
                    spending. With “Mizan - Pay later” you can easily spread
                    your payments without worrying about interest.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mizan-right-box">
                <style jsx>{`
        p::first-letter {
          color: #8f00e0;
        }
      `}</style>
                
        <p>Micro-lending &</p>
        <p>Investment</p>
        <p>Zero-interest</p>
        <p>Application for</p>
        <p>Novice.</p>
      

      
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="finance">
          <div className="finance-header">
            <h2>Where faith meets finance</h2>
          </div>
          <div className="finance-img"></div>
        </section>

        <section className="Neobank">
          <div className="Neobank-working">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="Neobank-left">
                  <h2>
                    What is
                    <br /> a Neobank?
                  </h2>
                  <div className="def-main">
                    <p>
                      “Time” at it’s essence, is money. At Mizan, we set sail to
                      disrupt traditional banking ways which has costed us the
                      most important currency; TIME.
                    </p>
                    <p>
                      We are tired of those long queues, 9-4 customer service,
                      hidden-fees, tricks and cost of accessing halal credit. At
                      Mizan, we embarked on a journey to help people make more
                      out of their money without the need of physical human
                      interaction.
                    </p>
                    <p>
                      Different by traditional design, we are not building a
                      bank but more. A mobile first, customer-obssessed,
                      innovative financial technology company that is built on
                      100% islamic shariah legal framework. That’s neobanking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 order-md-1 order-2">
                <img
                  src="https://ik.imagekit.io/qqkp8wchu/New/8.svg?updatedAt=1680712198762"
                  alt=""
                  width="100%"
                  className="neobank1"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 order-md-2 order-1">
                <img
                  src="https://ik.imagekit.io/qqkp8wchu/New/9.svg?updatedAt=1680712205966"
                  alt=""
                  width="100%"
                  className="neobank2"
                />
              </div>
            </div>
          </div>

          <div className="certification">
            <div className="certification-working">
              <div className="certification-title">
                <h2>Halal Certification</h2>
              </div>
              
              <div className="row def-margin">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <p>
                    To find the best, we spoke to different experts around the
                    world and appointed Shariah Review Bureau (www.shariyah.net)
                    as an independent shariah board to oversee our shariah
                    compliance.
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mt-5 mt-md-0">
                  <ul>
                    {marks.map((mark) => (
                      <li key={mark.tag}>
                        <img src={mark.imageUrl} width="58px" height="58px" />
                        <div dangerouslySetInnerHTML={{ __html: mark.title }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="finance outside-main">
          <div className="finance-header">
            <h2 className="gray-text">Money outside the box</h2>
          </div>
          <div className="outside-img"></div>
        </section>

        <section className="Neobank outside-bg">
          <div className="outside-working">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="Neobank-left">
                  <h2>Our Ethos</h2>
                  <div className="ethos-def">
                    <p>
                      Mainstream? No, thanks. We are on mission to change your
                      relationship with the word «Bank». The B-word is outdated
                      and relatable to stress, and outdated financial products.
                    </p>
                    <p>
                      To remove the exisiting frictions and painpoints of the
                      traditional banking sytems, we asked over 1,000 millenials
                      what they would like from modern financial technology
                      company, and we listened.
                    </p>
                    <p>
                      We started off by committing to no hidden fees, tricks or
                      catches, just a simple way to navigae your money.Our
                      purpose is to help people make more out of their money,
                      and spend smarter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <img
                  src="https://ik.imagekit.io/qqkp8wchu/New/6.svg?updatedAt=1680712202701"
                  alt=""
                  width="100%"
                  className="outside1"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <img
                  src="https://ik.imagekit.io/qqkp8wchu/New/7.svg?updatedAt=1680712200444"
                  alt=""
                  width="100%"
                  className="outside2"
                />
              </div>
            </div>
          </div>

          <div className="certification">
            <div className="certification-working">
              <div className="certification-title">
                <h2>Mizan Knowledge Central</h2>
              </div>
              <div className="row mt-5">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="knowledge-def">
                    <p>
                      We understand your busy lifestyle, we understand that in
                      as much as Mizan will do the heavylifting on your
                      finances, you’d love to learn a thing or two about ,
                      “sukuks” or islamic bonds.
                    </p>
                    <p
                      className="mt-5"
                      style={{ marginTop: "45px !important" }}
                    >
                      We are busy curating a free learning experience to ensure
                      you are upto date with say “ESG,Stock investing,
                      blockchain and future of finance”, through <br />{" "}
                      MizanLearn, our exclusive in-app content platform.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mt-5 mt-md-0">
                  <img
                    src="https://ik.imagekit.io/qqkp8wchu/central-img.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677797005449"
                    alt=""
                    width="100%"
                    className="central-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="finance outside-main pt-0 pt-sm-5">
          <div className="finance-header">
            <h2>First Sharia compliant BNPL</h2>
          </div>
          <div className="team-img"></div>
        </section>

        <section className="Neobank team-bg">
          <div className="outside-working">
            <h2>
              What is Halal BNPL?
              <br />
              Buy now pay later?
            </h2>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="Neobank-left pay-def">
                  <p>
                    The client purchases only permitted goods/services from
                    mizan via the merchant with a cost plus financing structure
                    (Murabaha) or no cost plus financing structure (Tawliyah).
                  </p>
                  <p className="mt-5" style={{ marginTop: "40px !important" }}>
                    Our customer will then enter into a separate service
                    agreement (Ujrah) for mizan to manage the transaction on
                    behalf of the client in exchange of a fixed predetermined
                    service fee.The client purchases a Takaful (Islamic
                    indemnification policy) if required to cover for credit
                    default and warranties for goods/services.
                  </p>
                  <p className="mt-5">
                    The client signs two separate shariah-compliant and approved
                    agreements in order to conclude and execute an effective
                    Shariah compliant Murabaha transaction.
                  </p>
                  <p className="mt-5">
                    Mizan will have a separate shariah agreement to purchase the
                    goods/services from the merchant under a valid
                    shariah-compliant purchase/sale agreement (Musawamah) and
                    Wakalah (agency) mandate to manage the subsequent
                    sale/purchase to the end user client
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <img
                  src="https://ik.imagekit.io/qqkp8wchu/New/1.svg?updatedAt=1680712107454"
                  alt=""
                  width="100%"
                  className="outside1"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <img
                  src="https://ik.imagekit.io/qqkp8wchu/New/2.svg?updatedAt=1680712105347"
                  alt=""
                  width="100%"
                  className="outside2"
                />
              </div>
            </div>
          </div>

          <div className="certification pb-0">
            <div className="certification-working">
              <div className="certification-title">
                <h2 className="team">
                  Mizan Donate - <br />
                  First Islamic crowdfunding
                </h2>
              </div>
              <div className="row donate-margin">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <p className="def-padding">
                    Let’s be honest, cash is no longer king. With the rise of
                    digital payment options, more people are opting for
                    electronic transactions over cash.
                  </p>
                  <br />
                  <p className="def-padding">
                    Mizan Donate, aims to empower 500 million muslims in Africa
                    through a transparent, in app crowdfunding platform.
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mt-5 mt-md-0">
                  <p className="def-padding">
                    We are kicking off with powerful donation feature via
                    <Link href="/#rounds" className={styles3.rounds}>
                      {" "}
                      “Round-ups”
                    </Link>
                    ; a spare change account that round-ups your payment to the
                    nearest whole figure.
                  </p>
                  <br />
                  <p>
                    You can start throwing as little as $0.1 to your Jannah
                    account whenever you spend. Because its not about how much
                    really, it’s how often.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tw-mt-[160px]" id="howToDonate">
          <div className={styles3.finance}>
            <div className={styles3.works}>How it Works</div>
            <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-[30px] tw-items-center tw-justify-between">
              <div className="tw-flex tw-flex-col tw-items-center">
                <div className={styles3.works2}>CHOOSE A CAMPAIGN</div>
                <Image
                  src="https://ik.imagekit.io/qqkp8wchu/New/3.svg?updatedAt=1680712112070"
                  width={280}
                  height={567.4}
                  alt="iphone1"
                />
              </div>
              <div className={styles3.financeArrow}>
                <Image
                  src="https://ik.imagekit.io/qqkp8wchu/Union.png?updatedAt=1680613078943"
                  width={200}
                  height={103.57}
                  alt="iphone1"
                />
              </div>
              <div className="tw-flex tw-flex-col tw-items-center">
                <div className={styles3.works2}>DONATE EFFORTLESSY</div>
                <Image
                  src="https://ik.imagekit.io/qqkp8wchu/New/4.svg?updatedAt=1680712108717"
                  width={280}
                  height={567.4}
                  alt="iphone1"
                />
              </div>
              <div className="tw-flex tw-flex-col tw-items-center">
                <div className={styles3.works2}>GET INSPIRED & SHARE</div>
                <Image
                  src="https://ik.imagekit.io/qqkp8wchu/New/5.svg?updatedAt=1680712113230"
                  width={280}
                  height={567.4}
                  alt="iphone1"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="tw-flex tw-items-center tw-justify-center tw-mb-[100px]">
          <div>
            <button onClick={openModal} className={styles3.joinBtn3}>
              JOIN WAITLIST
            </button>
          </div>
          {/* Join Waitlist Modal */}
          {isModalOpen && (
            <Transition appear show={isModalOpen} as={Fragment}>
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
                            onClick={() => setIsModalOpen(false)}
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
                                Apply for zero interest, 100% Islamic neobank
                                coming to Kenya.
                              </h2>
                            </Dialog.Title>
                            {/* description */}
                            <div className="tw-mt-4 tw-w-[445px]">
                              <p className="tw-text-[15px] tw-leading-[22.5px] tw-font-medium tw-font-[Poppinsmedium] tw-text-[#6D6E8A]">
                                Join a movement, where people speak your
                                language,
                                <br /> understand your hopes and help you reach
                                your financial
                                <br /> goals. Help us to fix banking for G. (In
                                Shaa Allah).
                              </p>
                            </div>
                            {/* form */}
                            <form onSubmit={formik.handleSubmit}>
                              <div className="tw-mt-4">
                                <div className="tw-relative tw-mt-3 tw-rounded-full">
                                  <div className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-6">
                                    <Image
                                      src={Images.smileJoin}
                                      alt={"smile-join"}
                                    />
                                  </div>
                                  <div className="join-input">
                                    <input
                                      type="text"
                                      name="name"
                                      id="name"
                                      value={formik.values.name}
                                      onChange={formik.handleChange}
                                      className="tw-block tw-w-full tw-h-[62px] tw-bg-white tw-border-0 tw-rounded-full tw-py-1.5 tw-pl-16 tw-text-gray-900 placeholder:tw-text-[15px] placeholder:tw-text-[#6D6E8A] placeholder:tw-font-[Poppinsregular] focus:tw-ring-0 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                                      placeholder="What is your name?"
                                      onBlur={formik.handleBlur}
                                    />
                                  </div>
                                </div>
                                <div className="tw-text-red-700 tw-font-medium tw-text-xs">
                                  {formik.errors.name}
                                </div>
                              </div>
                              <div className="tw-mt-4">
                                <PhoneNumberInput
                                  onPhoneChange={(phone) =>
                                    formik.setFieldValue("phone", phone)
                                  }
                                />
                                <div className="tw-text-red-700 tw-font-medium tw-text-xs">
                                  {formik.errors.phone}
                                </div>
                              </div>
                              <div className="tw-mt-4">
                                <div className="tw-relative tw-mt-3 tw-rounded-full">
                                  <div className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-6">
                                    <Image
                                      src={Images.mailJoin}
                                      alt={"mail-join"}
                                    />
                                  </div>
                                  <div className="join-input">
                                    <input
                                      type="email"
                                      name="email"
                                      id="email"
                                      value={formik.values.email}
                                      onChange={formik.handleChange}
                                      className="tw-block tw-w-full tw-h-[62px] tw-bg-white tw-border-0 tw-rounded-full tw-py-1.5 tw-pl-16 tw-text-gray-900 placeholder:tw-text-[15px] placeholder:tw-text-[#6D6E8A] placeholder:tw-font-[Poppinsregular] focus:tw-ring-0 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                                      placeholder="or write to you?"
                                      onBlur={formik.handleBlur}
                                    />
                                  </div>
                                </div>
                                <div className="tw-text-red-700 tw-font-medium tw-text-xs">
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
                                  disabled={
                                    formik.isSubmitting || !formik.isValid
                                  }
                                  className={styles.joinBtn}
                                  style={{ opacity: formik.isValid ? 1 : 0.2 }}
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
          )}

          {isModal2Open && (
            <Transition appear show={isModal2Open} as={Fragment}>
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
                            onClick={() => setIsModal2Open(false)}
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
                          <Image
                            src={
                              thumbIndex === 0 ? Images.love : Images.avatar3
                            }
                            className="avtar3 tw-rotate-[-10.28deg]"
                            alt=""
                          />
                        </div>
                        <div className="tw-absolute tw-bottom-40 tw-right-0 tw-pb-4 tw-pr-[74px]">
                          <Image
                            src={
                              loveIndex === 0 ? Images.avatar2 : Images.thumbsup
                            }
                            className="avtar2"
                            alt=""
                          />
                        </div>
                        <div className="tw-absolute tw-bottom-[110px] tw-right-20 tw-pb-4 tw-pr-[80px]">
                          <Image
                            src={
                              thumbIndex === 0 ? Images.avatar3 : Images.love
                            }
                            className="avtar3"
                            alt=""
                          />
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
                              <p className="tw-text-[15px] tw-leading-[22.5px] tw-font-medium tw-font-[PoppinsMedium] tw-text-[#6D6E8A]">
                                Now sit back and relax, we’ll take it up from
                                here. We’ll be in your inbox soon :-). It pays
                                to be smart about your money, why not share with
                                your smart friends?
                              </p>
                            </div>
                            {/* social buttons */}
                            <div className="tw-flex tw-gap-4 tw-mt-10 tw-items-center">
                              <div>
                                <Image
                                  src={Images.linkedin2}
                                  alt={"linkedin"}
                                />
                              </div>
                              <div>
                                <Image src={Images.youtube2} alt={"youtube"} />
                              </div>
                              <div>
                                <Image
                                  src={Images.facebook2}
                                  alt={"facebook"}
                                />
                              </div>
                              <div>
                                <Image src={Images.twitter2} alt={"twitter"} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <Confetti
                                    recycle={false}
                                    numberOfPieces={800}
                                    gravity={0.05}
                                  /> */}
                        {isVisible && <Confetti />}
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          )}
        </section>

        {/* Footer */}

        <DynamicBrandFooter />
        {/* End */}
      </main>

      {/* models */}
      <DynamicNavModal />
    </>
  );
}
