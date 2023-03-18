import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Images } from "../components/images";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import React, { Suspense, Fragment, useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { createClient } from "contentful";

const DynamicNavbar = dynamic(() => import("../components/navbar"), {});

const DynamicFooter = dynamic(() => import("../components/footer"), {});

const DynamicNavModal = dynamic(() => import("../components/navModal"), {});

const imageKitLoader = ({ src, width, quality }) => {
  if (src[0] === "/") src = src.slice(1);
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  const paramsString = params.join(",");
  var urlEndpoint = "https://ik.imagekit.io/qqkp8wchu";
  if (urlEndpoint[urlEndpoint.length - 1] === "/")
    urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  return `${urlEndpoint}/${src}?tr=${paramsString}`;
};

const testimonials = [
  {
    id: "1",
    name: "Aldo P.",
    label: "Verified Testimonial",
    imageUrl: Images.user,
    ratingImageUrl: Images.rating,
    description:
      "Just wow, i used revolut in the UK, when i came to Africa, i came across Mizan App, it took minutes to setup. I’d say its like the Islamic “Revolt App” version.",
  },
  {
    id: "2",
    name: "Aldo P.",
    label: "Verified Testimonial",
    imageUrl: Images.user,
    ratingImageUrl: Images.rating,
    description:
      "Convenience comes from not having to worry about having too much (or too little) cash on hand, Mizan comes in handy especially with the Mizan app that works seemlessy with the card.",
  },
  {
    id: "3",
    name: "Aldo P.",
    label: "Verified Testimonial",
    imageUrl: Images.user,
    ratingImageUrl: Images.rating,
    description:
      "When i joined beta program, i got to experience first hand how my financial future will be revolutionized. Ditching my bank for G.",
  },
  {
    id: "4",
    name: "Aldo P.",
    label: "Verified Testimonial",
    imageUrl: Images.user,
    ratingImageUrl: Images.rating,
    description:
      "Just wow, i used revolut in the UK, when i came to Africa, i came across Mizan App, it took minutes to setup. I’d say its like the Islamic “Revolt App” version.",
  },
  {
    id: "5",
    name: "Aldo P.",
    label: "Verified Testimonial",
    imageUrl: Images.user,
    ratingImageUrl: Images.rating,
    description:
      "Convenience comes from not having to worry about having too much (or too little) cash on hand, Mizan comes in handy especially with the Mizan app that works seemlessy with the card.",
  },
  {
    id: "6",
    name: "Aldo P.",
    label: "Verified Testimonial",
    imageUrl: Images.user,
    ratingImageUrl: Images.rating,
    description:
      "When i joined beta program, i got to experience first hand how my financial future will be revolutionized. Ditching my bank for G.",
  },
];

export default function Home({ features }) {
  // console.log(features);
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

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Mizan money</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
        />
      </Head>

      <main className="landing-bg position-relative">
        <Image src={Images.cardsBG} className="card-bg" alt="image" />
        <Image src={Images.cardsBGTab} className="card-bg-tab" alt="image" />
        <Image src={Images.lastPageBg} className="last-page-bg" alt="image" />

        {/* Navbar */}

        <DynamicNavbar />
        {/* End */}

        <section className="hero">
          <div className="container_costome">
            <div className="row m-0">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="hero-left-text">
                  <h1>Salaam,</h1>
                  <p>
                    We are Mizan, <br />
                    Africa’s first Islamic neobank.
                  </p>
                  <img
                    src="https://res.cloudinary.com/dyto3sfmh/image/upload/v1677517396/phonenew_kudnab.png"
                    className="hero-img-mobile"
                    width="100%"
                    fetchpriority="high"
                    alt=""
                  />
                </div>
                <span className="def">
                  We are excited to have crafted a piece of tech that <br /> is
                  seamless, without walls, borders or physical limits, <br />{" "}
                  built on an ethical islamic framework.
                </span>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="position-relative hero-img-view">
                  <img
                    src="https://res.cloudinary.com/dyto3sfmh/image/upload/v1677517396/phonenew_kudnab.png"
                    className="hero-img"
                    width="100%"
                    fetchpriority="high"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12">
                <div className="join-our-team">
                  <label>Join our waiting list.</label>
                  <div className="join-btn-group d-flex align-items-center">
                    <button onClick={openModal} className="join">
                      JOIN WAITLIST
                    </button>
                    <Transition appear show={isOpen} as={Fragment}>
                      <Dialog
                        as="div"
                        className="tw-relative tw-z-10"
                        onClose={closeModal}
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
                              <Dialog.Panel className="tw-w-[1148px] tw-px-[338px] tw-transform tw-overflow-hidden tw-rounded-2xl tw-bg-white tw-p-6 tw-align-middle tw-shadow-xl tw-transition-all">
                                <div className="tw-absolute tw-top-0 tw-right-0 tw-hidden tw-pt-4 tw-pr-4 sm:tw-block">
                                  <button
                                    type="button"
                                    className="tw-border-0 tw-bg-white tw-text-[#6D6E8A] focus:tw-outline-none"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <span className="tw-sr-only">Close</span>
                                    <XMarkIcon
                                      className="tw-h-6 tw-w-6"
                                      aria-hidden="true"
                                    />
                                  </button>
                                </div>
                                <Dialog.Title
                                  as="h2"
                                  className="tw-text-lg tw-text-center tw-font-medium tw-leading-6 tw-text-gray-900"
                                >
                                  <h2 className={styles.myModal}>
                                    Join our waiting list
                                  </h2>
                                </Dialog.Title>
                                <div className="tw-mt-5 tw-text-center">
                                  <p className="tw-text-xl tw-leading-9 tw-text-[#1B1C39]">
                                    Get closer to us and keep up-to-date with
                                    all the latest news about our products
                                  </p>
                                </div>

                                <div className="tw-mt-12">
                                  <label
                                    htmlFor="name"
                                    className="tw-block tw-text-base tw-font-medium tw-leading-6 tw-text-[#6D6E8A]"
                                  >
                                    What's your name?
                                  </label>
                                  <div className="tw-relative tw-mt-3 tw-rounded-full">
                                    <div className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-6">
                                      <svg
                                        className="tw-h-6 tw-w-6 tw-text-gray-400"
                                        aria-hidden="true"
                                        width="23"
                                        height="24"
                                        viewBox="0 0 23 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clip-path="url(#clip0_6860_16691)">
                                          <path
                                            d="M20.0117 14.8051V18.4273H6.51172L1.01172 22.4766V3.47656H4.53966"
                                            stroke="#A276FF"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <circle
                                            cx="14.5227"
                                            cy="8.75019"
                                            r="7.04804"
                                            stroke="#A276FF"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M16.502 9.58204C15.4087 10.6753 13.6362 10.6753 12.543 9.58204"
                                            stroke="#A276FF"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <circle
                                            cx="11.3973"
                                            cy="6.87826"
                                            r="1.1141"
                                            fill="#A276FF"
                                          />
                                          <circle
                                            cx="17.6473"
                                            cy="6.87826"
                                            r="1.1141"
                                            fill="#A276FF"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_6860_16691">
                                            <rect
                                              width="23"
                                              height="24"
                                              fill="white"
                                            />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </div>
                                    <input
                                      type="text"
                                      name="name"
                                      id="name"
                                      className="tw-block tw-w-full tw-bg-[#F3F1F9] tw-h-[62px] tw-rounded-full tw-border-0 tw-py-1.5 tw-pl-16 tw-text-gray-900 placeholder:tw-text-[15px] placeholder:tw-text-[#6D6E8A] focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                                      placeholder="Name"
                                    />
                                  </div>
                                </div>
                                <div className="tw-mt-4">
                                  <label
                                    htmlFor="phone"
                                    className="tw-block tw-text-base tw-font-medium tw-leading-6 tw-text-[#6D6E8A]"
                                  >
                                    Could you leave us your phone number?
                                  </label>
                                  <div className="tw-relative tw-mt-3 tw-rounded-full">
                                    <div className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-6">
                                      <svg
                                        className="tw-h-6 tw-w-6 tw-text-gray-400"
                                        aria-hidden="true"
                                        width="23"
                                        height="24"
                                        viewBox="0 0 23 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clip-path="url(#clip0_6860_16691)">
                                          <path
                                            d="M20.0117 14.8051V18.4273H6.51172L1.01172 22.4766V3.47656H4.53966"
                                            stroke="#A276FF"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <circle
                                            cx="14.5227"
                                            cy="8.75019"
                                            r="7.04804"
                                            stroke="#A276FF"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M16.502 9.58204C15.4087 10.6753 13.6362 10.6753 12.543 9.58204"
                                            stroke="#A276FF"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <circle
                                            cx="11.3973"
                                            cy="6.87826"
                                            r="1.1141"
                                            fill="#A276FF"
                                          />
                                          <circle
                                            cx="17.6473"
                                            cy="6.87826"
                                            r="1.1141"
                                            fill="#A276FF"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_6860_16691">
                                            <rect
                                              width="23"
                                              height="24"
                                              fill="white"
                                            />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </div>
                                    <input
                                      type="text"
                                      name="phone"
                                      id="phone"
                                      className="tw-block tw-w-full tw-bg-[#F3F1F9] tw-h-[62px] tw-rounded-full tw-border-0 tw-py-1.5 tw-pl-16 tw-text-gray-900 placeholder:tw-text-[15px] placeholder:tw-text-[#6D6E8A] focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                                      placeholder="Phone number"
                                    />
                                  </div>
                                </div>
                                <div className="tw-mt-4">
                                  <label
                                    htmlFor="email"
                                    className="tw-block tw-text-base tw-font-medium tw-leading-6 tw-text-[#6D6E8A]"
                                  >
                                    Could you share your Email?
                                  </label>
                                  <div className="tw-relative tw-mt-3 tw-rounded-full">
                                    <div className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-6">
                                      <svg
                                        className="tw-h-6 tw-w-6 tw-text-gray-400"
                                        aria-hidden="true"
                                        width="23"
                                        height="24"
                                        viewBox="0 0 23 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clip-path="url(#clip0_6860_16691)">
                                          <path
                                            d="M20.0117 14.8051V18.4273H6.51172L1.01172 22.4766V3.47656H4.53966"
                                            stroke="#A276FF"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <circle
                                            cx="14.5227"
                                            cy="8.75019"
                                            r="7.04804"
                                            stroke="#A276FF"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M16.502 9.58204C15.4087 10.6753 13.6362 10.6753 12.543 9.58204"
                                            stroke="#A276FF"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <circle
                                            cx="11.3973"
                                            cy="6.87826"
                                            r="1.1141"
                                            fill="#A276FF"
                                          />
                                          <circle
                                            cx="17.6473"
                                            cy="6.87826"
                                            r="1.1141"
                                            fill="#A276FF"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_6860_16691">
                                            <rect
                                              width="23"
                                              height="24"
                                              fill="white"
                                            />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </div>
                                    <input
                                      type="email"
                                      name="email"
                                      id="email"
                                      className="tw-block tw-w-full tw-bg-[#F3F1F9] tw-h-[62px] tw-rounded-full tw-border-0 tw-py-1.5 tw-pl-16 tw-text-gray-900 placeholder:tw-text-[15px] placeholder:tw-text-[#6D6E8A] focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                                      placeholder="Email"
                                    />
                                  </div>
                                </div>
                                <div className="tw-relative tw-flex tw-items-center tw-mt-[44px]">
                                  <div className="tw-flex tw-h-6 tw-items-center">
                                    <input
                                      id="comments"
                                      aria-describedby="comments-description"
                                      name="comments"
                                      type="checkbox"
                                      className="tw-h-4 tw-w-4 tw-rounded tw-border tw-border-gray-900 tw-text-indigo-600 focus:tw-ring-indigo-600"
                                    />
                                  </div>
                                  <div className="tw-ml-3 tw-text-[10px] tw-leading-[16.5px]">
                                    <span
                                      id="comments-description"
                                      className="tw-text-black"
                                    >
                                      I agree that Mizan may contact me to keep
                                      me up-to-date about their news. I can
                                      unsubscribe at any time using the
                                      unsubscribe link.
                                    </span>
                                  </div>
                                </div>
                              </Dialog.Panel>
                            </Transition.Child>
                          </div>
                        </div>
                      </Dialog>
                    </Transition>
                    <div className="border-gradient">
                      <button className="see-now">
                        SEE HOW
                        <Image src={Images.showMoreBtn} width="15px" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="logos">
          <div className="logos-div d-flex align-items-center justify-content-center">
            <div className="logos-img d-flex align-items-center justify-content-center">
              <Image
                src={Images.firstCo}
                className="img1"
                width="190.05px"
                alt=""
              />
              <Image
                src={Images.secondCo}
                className="img2"
                width="160.46px"
                alt=""
              />
            </div>
            <div className="logos-img d-flex align-items-center justify-content-center">
              <Image
                src={Images.thirdCo}
                className="img3 order-2 order-md-1"
                width="118.79px"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="banking">
          <div className="container_costome">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                <div className="position-relative">
                  <Image
                    src={Images.mobileBanking}
                    width="100%"
                    className="banking-web-img"
                    alt=""
                  />
                  <Image
                    loader={imageKitLoader}
                    src="banking-mobile-img.svg"
                    width={569}
                    height={615}
                    className="banking-mobile-img"
                    alt=""
                  />
                  <Image
                    src={Images.miniMobileBanking}
                    width="100%"
                    className="banking-mobile-img-mini"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                <div className="banking-right-box">
                  <h1>Islamic Banking Reimagined</h1>
                  <ul>
                    <li>Halal ready without compromise.</li>
                    <li>Open your account in minutes (Goodbye paper work).</li>
                    <li>Get upto 3 days early salary.</li>
                    <li>Track every buck. Know your spend.</li>
                    <li>Buy now pay later,(interest free, forever).</li>
                  </ul>
                  <p>
                    We didn’t just want to throw solutions around, in the hope
                    they find a problem to solve. Thats why we’ve chosen to run
                    a beta phase.
                  </p>
                  <button className="apply-beta">
                    Apply for the Beta Progam
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cards position-relative">
          <div className="cards-box">
            <h1>
              Turn heads with our <br /> <span>purple</span>
              cards made from steel.
            </h1>
            <p>Pay or get paid, wherever, whenever.</p>
          </div>
          <img
            src="https://res.cloudinary.com/dyto3sfmh/image/upload/v1677853930/card-main_fka8u6.svg"
            width="100%"
            className="card-web"
            alt="car-main"
            fetchpriority="high"
          />
          <img
            src="https://res.cloudinary.com/dyto3sfmh/image/upload/v1677853890/card-main-tablet_ncybbe.svg"
            width="100%"
            className="card-mobile"
            fetchpriority="high"
            alt="ard-main-tablet"
          />
        </section>

        <section className="feature">
          <div className="feature-header">
            <h1>Features</h1>
          </div>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="swiper featureSwiper"
          >
            {features.map((feature) => (
              <SwiperSlide key={feature.sys.id} className="swiper-slide">
                <div className="light-border">
                  <div className="feature-card">
                    <div className="feature-card-img">
                      <Image
                        src={feature.fields.image.fields.file.url}
                        alt={feature.fields.image.fields.title}
                        loading="lazy"
                        width={
                          feature.fields.image.fields.file.details.image.width
                        }
                        height={
                          feature.fields.image.fields.file.details.image.height
                        }
                      />
                    </div>
                    <div className="feature-card-def">
                      <h3>{feature.fields.title}</h3>
                      <p>{feature.fields.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="ups-work ">
          <div className="ups-box position-relative">
            <img
              src="/images/homepage/pattern.svg"
              className="ups-bg"
              alt="pattern"
            />
            <div className="row ">
              <div className="col-xl-5 col-lg-5 col-md-12">
                <div className="ups-left-box">
                  <h2>How Round-Ups work</h2>
                  <span>Invest and save when you spend</span>
                  <p>
                    Imagine you had collected all of your loose change over the
                    years from all your daily purchases—all of the sodas,
                    coffees, meals out—you name it. You’d likely have a good
                    amount of money saved up. Well, that’s the idea behind
                    Round-Ups.
                  </p>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-12">
                <div className="ups-right-box">
                  <img src="/images/homepage/ups.png" width="100%" alt="ups" />
                </div>
              </div>
            </div>
          </div>
          <div className="mizan-round">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-12">
                <div className="mizan-round-left">
                  <h2>Mizan Round-Ups</h2>
                  <p>
                    When you make a purchase with your Mizan debit card or
                    another linked card, Mizan rounds up your transaction to the
                    nearest dollar and invests the spare change into your Invest
                    account portfolio or a charity of your choice.
                  </p>
                  <button className="join-witlinst">JOIN WAITLIST</button>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-12">
                <div className="mizan-round-right p-4">
                  <div className="chart-box position-relative">
                    <Image src={Images.graph} className="chart-img" alt="" />
                    <div className="weekly-depo-border set-position">
                      <button className="weekly-depo chart-depo">$500</button>
                    </div>
                    <div className="deposit-box d-flex align-items-center gap-3">
                      <label>Enter a recurring monthly/weekly deposit</label>
                      <div className="weekly-depo-border">
                        <button className="weekly-depo">$ 10.00</button>
                      </div>
                    </div>
                  </div>
                  <div className="text-start last-def mt-4">
                    <p>
                      Use this tool to see how round-ups and depositing money
                      each month can impact the <br /> long term value of your
                      account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing">
          <div className="pricing-gradiant">
            <div className="pricing-header">
              <h1>
                Simple Pricing. <br /> No Complex Contracts
              </h1>
            </div>
            <div className="pricing-box mt-5">
              <div className="pricing-top-btn">
                <div className="pricing-btn d-flex align-items-center gap-4 justify-content-center mb-5">
                  <button className="purple-btn" id="purple">
                    Purple
                  </button>
                  <button className="premium-btn active" id="premium">
                    <span>Premium</span>
                  </button>
                  <button className="metal-btn" id="metal">
                    Metal
                  </button>
                </div>
              </div>
              <div className="row align-items-end justify-content-center">
                <div className="col-lg-4 col-md-8 purple-card" id="purple-show">
                  <div className="pricing-border">
                    <div className="pricing-card">
                      <div className="pricing-title d-flex align-items-center justify-content-between">
                        <h3>Purple</h3>
                        <div className="d-flex align-items-center">
                          <span>$1.00</span>
                          <span className="time">/per month</span>
                        </div>
                      </div>
                      <ul className="purple-box">
                        <li>Bank Better</li>
                        <li>Pay Later</li>
                        <li>Customizable Virtual Cards</li>
                      </ul>
                      <Image
                        src={Images.purple}
                        width="100%"
                        style={{
                          filter:
                            "drop-shadow(-9px -10px 123px rgba(180, 118, 255, 0.3))",
                        }}
                        alt=""
                      />
                    </div>
                  </div>
                  <button className="purple-subscribe">
                    Subscribe (Trial)
                  </button>
                </div>
                <div className="col-lg-4 col-md-8" id="premium-show">
                  <div className="premium-border">
                    <div className="pricing-card premium">
                      <span className="recommended">Recommended</span>
                      <div className="pricing-title d-flex align-items-center justify-content-between">
                        <h3>Premium</h3>
                        <div>
                          <div className="d-flex align-items-center">
                            <span>$3.00</span>
                            <span className="time">/m</span>
                          </div>
                          <p className="as-per-month">(per user per month)</p>
                        </div>
                      </div>
                      <div className="premium-list premium-box">
                        <label>Everything in Purple plus:</label>
                        <ul className="m-0">
                          <li>Bank Better +</li>
                          <li>Pay Later +</li>
                          <li>Spend Better +</li>
                          <li>Physical Card</li>
                          <li>Save Better +</li>
                        </ul>
                      </div>
                      <Image src={Images.premium} width="100%" alt="" />
                    </div>
                  </div>
                  <button className="purple-subscribe premium-bg">
                    Subscribe (Trial)
                  </button>
                </div>
                <div className="col-lg-4 col-md-8 metal-card" id="metal-show">
                  <div className="metal-border">
                    <div className="pricing-card metal">
                      <div className="pricing-title pt-2 d-flex align-items-start justify-content-between">
                        <h3>Metal</h3>
                        <div>
                          <div className="d-flex align-items-center">
                            <span>$5.00</span>
                            <span className="time">/m</span>
                          </div>
                          <p className="as-per-month">(per user per month)</p>
                        </div>
                      </div>
                      <div className="premium-list metal-box">
                        <label>Everything in Premium plus:</label>
                        <ul className="m-0">
                          <li>Bank Better Pro</li>
                          <li>Pay Later Pro</li>
                          <li>Spend Better Pro</li>
                          <li>Signature Metal card</li>
                          <li>Invest better Pro</li>
                        </ul>
                      </div>
                      <Image
                        src={Images.metal}
                        style={{ width: "auto", height: "auto" }}
                        alt=""
                      />
                    </div>
                  </div>
                  <button className="purple-subscribe metal-bg">
                    Subscribe (Trial)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="early-user">
          <div className="early-user-working">
            <div className="early-user-header d-flex justify-content-center">
              <div className="header-img">
                <Image
                  src={avatarIndex === 0 ? Images.avatar1 : Images.hijab2}
                  className="avtar1"
                  alt=""
                />
                <Image
                  src={loveIndex === 0 ? Images.avatar2 : Images.thumbsup}
                  className="avtar2"
                  alt=""
                />
                <Image
                  src={thumbIndex === 0 ? Images.avatar3 : Images.love}
                  className="avtar3"
                  alt=""
                />
                <h1>What our “Early Users” say</h1>
                <p>(Don’t just take our word for it).</p>
              </div>
            </div>
          </div>
          <div className="early-user-slider slider-working">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper mt-5 tw-w-full"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide>
                  <div className="early-user-border">
                    <div className="early-user-box p-4">
                      <div className="user-info d-flex align-items-center gap-3">
                        <Image src={testimonial.imageUrl} alt="" />
                        <div className="user-name">
                          <span>Aldo P.</span>
                          <Image src={testimonial.ratingImageUrl} alt="" />
                        </div>
                      </div>
                      <div className="verified d-flex align-items-center gap-2 mt-3">
                        <Image src={Images.verified} alt="" />
                        <label>{testimonial.label}</label>
                      </div>
                      <p>{testimonial.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="peace-of-mind">
          <Image
            src={googlesIndex === 0 ? Images.avatar4 : Images.googles}
            className="avatar4"
            alt=""
          />
          <div className="container_costome">
            <div className="row position-relative">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="peace-left-box">
                  <h1>And finally peace of mind</h1>
                  <img
                    src="https://res.cloudinary.com/dyto3sfmh/image/upload/v1677707197/Black_hand_Mockuuups_Studio_qcll2d.svg"
                    width="100%"
                    className="peace-img-mobile"
                    alt=""
                  />
                  <div className="mind-mobile-view">
                    <div className="peace-box d-flex align-items-center gap-3 p-4 mt-5">
                      <Image src={Images.frame1} width="58px" alt="" />
                      <label>
                        Swiss level bank security with PCI /DSS certified.
                      </label>
                    </div>
                    <div className="peace-box d-flex align-items-center gap-3 p-4">
                      <Image src={Images.frame2} width="58px" alt="" />
                      <label>
                        Instantly freeze your lost card, wherever, whenever.
                      </label>
                    </div>
                    <div className="peace-box d-flex align-items-center gap-3 p-4">
                      <Image src={Images.frame3} width="58px" alt="" />
                      <label>
                        Biometrics login, with enhanced 2FA.
                        <br /> No more (xh!#12@?3) passwords.
                      </label>
                    </div>
                    <div className="peace-box d-flex align-items-center gap-3 p-4">
                      <Image src={Images.frame4} width="58px" alt="" />
                      <label>
                        Built on blockchain technology (will take <br />{" "}
                        approximately 1,000,000,000,000 years to crack).
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src={Images.phoneMind}
                className="peace-img"
                width="50%"
                alt=""
              />
            </div>
          </div>
          <section className="provider">
            <div className="provider-main-box">
              <h1>We work with top providers</h1>
              <div className="row mt-0 mt-md-5">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="row">
                    <div className="col col-xs-6">
                      <div className="provider-border">
                        <div className="provider-box d-flex align-items-center justify-content-center">
                          <Image
                            src={Images.aws}
                            className="provider1"
                            width={123}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col col-xs-6">
                      <div className="provider-border">
                        <div className="provider-box d-flex align-items-center justify-content-center">
                          <Image
                            src={Images.provider2}
                            className="provider2"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="row">
                    <div className="col mt-3 mt-lg-0">
                      <div className="provider-border">
                        <div className="provider-box d-flex align-items-center justify-content-center">
                          <Image
                            src={Images.provider3}
                            className="provider3"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col mt-3 mt-lg-0">
                      <div className="provider-border">
                        <div className="provider-box d-flex align-items-center justify-content-center">
                          <Image
                            src={Images.google}
                            className="provider4"
                            alt=""
                            width={202.86}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <img
            src="/images/homepage/yallahbig.svg"
            className="yallah-big"
            alt="pattern"
          />
          <section className="yallah">
            <div className="yallah-main-box tw-relative tw-overflow-hidden">
              <img
                src="/images/homepage/yallahbg.svg"
                className="yallah-bg"
                alt="pattern"
              />
              <img
                src="/images/homepage/yallah1.svg"
                className="yallah-bg2"
                alt="pattern"
              />
              <div className="text-center">
                <h1>
                  Yallah, let’s
                  <br /> get started
                </h1>
                <p>
                  Open an account in minutes - no queues,
                  <br /> no credit check and no minimum deposit.
                </p>
                <button onClick={openModal} className="yallah-waitlist">
                  JOIN WAITLIST
                </button>
              </div>
            </div>
          </section>
        </section>

        <section className="questions">
          <div className="questions-working">
            <div className="questions-header">
              <h1>Any questions?</h1>
              <p className="mt-3">Chat with our Award Winning Robo Advisor</p>
            </div>
            <div className="row align-items-center mt-5">
              <div className="col-lg-6 col-md-6 col-sm-12 text-start">
                <div className="left-voice-img voice-img">
                  <Image src={Images.voice} className="voice" alt="" />
                  {/* <Image src={Images.zendesk} alt="" /> */}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 text-start">
                <div className="left-voice-img">
                  <div className="chat-box-border">
                    <div className="chatbox-main">
                      <ul>
                        <li>
                          <div
                            className="d-flex align-items-end"
                            style={{ columnGap: "1.5rem" }}
                          >
                            <Image
                              loader={imageKitLoader}
                              src="chat-user.svg"
                              width={64}
                              height={64}
                              style={{ position: "relative", zIndex: "99" }}
                              alt="user"
                            />
                            <span>
                              Hi! My name’s Sofie, how can we help you?
                            </span>
                          </div>
                        </li>
                      </ul>
                      <div className="typing-box d-flex align-items-center gap-3">
                        <Image src={Images.typeIcon} alt="" />
                        <input type="text" placeholder="Start typing.." />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <DynamicFooter />
        {/* End */}
      </main>

      {/* models */}

      <DynamicNavModal />
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "feature" });

  return {
    props: {
      features: res.items,
    }, // will be passed to the page component as props
  };
}
