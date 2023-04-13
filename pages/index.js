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
import "swiper/css/free-mode";
import { FreeMode, Autoplay, Pagination, Navigation } from "swiper";
import { createClient } from "contentful";
import openai from "../openai";
import axios from "axios";
import Confetti from "../components/Confetti";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import TypingAnimation from "../components/TypingAnimation";
// import Confetti from "react-confetti";
import ImageAnimation from '../components/ImageAnimation';

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
const features = [
  {
    tag: "feature1",
    title: "Mizan Pay - Shop now pay at your own pace",
    description:
      "With our aethetically appealing mizan metal card, you can easily spread your payments upto 12 months. No late payment fees, no penalties. What you borrow is what you will pay. Let’s just keep it at that.",
    imageUrl:
      "https://ik.imagekit.io/qqkp8wchu/feature1.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677761579572",
  },
  {
    tag: "feature2",
    title: "Track Ur buck. “The Ostrich-effect”",
    description:
      "Here’s the thing,none of us like bad news, so we tend to bury our heads in the sand and pretend we did not just purchase that overpriced bag.",
    imageUrl:
      "https://ik.imagekit.io/qqkp8wchu/Features/feature2.svg?updatedAt=1680786519397",
  },
  {
    tag: "feature3",
    title: "Donate to a cause you care. (Effortlessly)",
    description:
      "Do you want to build your own palace made of golden bricks and silver in Paradise? Or just want to hang out with the prophet muhammad (P.BU.H)? Well, no one lives forever, so start prepping for tomorrow.",
    imageUrl:
      "https://ik.imagekit.io/qqkp8wchu/feature3.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677761792322",
  },
  {
    tag: "feature4",
    title: "Better Credit Score. Better future",
    description:
      "It takes years to build reputation and seconds to destory it. Sometimes we really dont know whether we are building a better credit score or destroying it.",
    imageUrl:
      "https://ik.imagekit.io/qqkp8wchu/feature4.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677761790412",
  },
  {
    tag: "featur5",
    title: "Mizan Round-Ups",
    description:
      "Whether that’s a new phone, a pair of sneakers or a ticket to Space - we can help you form the right saving habits to achive your goal.",
    imageUrl:
      "https://ik.imagekit.io/qqkp8wchu/feature5.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677757744980",
  },
  {
    tag: "feature6",
    title: "Meet Robin-Habibi, Your BFF (Best Financial Friend)",
    description:
      "Automate the big picture,with award winning, robo-advisor we nicknamed “Robin-Habibi” .",
    imageUrl:
      "https://ik.imagekit.io/qqkp8wchu/feature6.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677761733541",
  },
  {
    tag: "feature7",
    title: "Mizan Early Salary via Direct Deposits",
    description:
      "Don’t wait until payday to have a play day. Why wait anyway? You’ve worked hard for your moolah.",
    imageUrl:
      "https://ik.imagekit.io/qqkp8wchu/feature7.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677798389210",
  },
];
const images = [
  "/images/homepage/chat/voice1.svg",
  "/images/homepage/chat/voice2.svg",
  "/images/homepage/chat/voice3.svg",
  "/images/homepage/chat/voice4.svg",
  "/images/homepage/chat/voice5.svg",
];
const delays = [100, 600, 600, 600, 600];

export default function Home() {
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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  

  useEffect(() => {
    let timer = setTimeout(() => {
      const nextImageIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextImageIndex);
    }, delays[currentImageIndex]);

    return () => clearTimeout(timer);
  }, [currentImageIndex, images, delays]);

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
  // chatGPT integration
  const chatContainerRef = useRef(null); // create a reference to the chat container
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  function handleSubmit(event) {
    event.preventDefault();

    setChatLog([...chatLog, { type: "user", message: inputValue }]);

    sendMessage(inputValue);

    setInputValue("");
  }
  useEffect(() => {
    if (chatContainerRef.current) {
      // if the chat container reference exists
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight; // scroll to the bottom of the chat container
    }
  }, [chatLog]); // re-run this effect whenever the chat log updates

  const sendMessage = (message) => {
    const url = "/api/chat";

    const data = {
      model: "gpt-3.5-turbo-0301",
      messages: [{ role: "user", content: message }],
    };

    setIsLoading(true);

    axios
      .post(url, data)
      .then((response) => {
        console.log(response);
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { type: "bot", message: response.data.choices[0].message.content },
        ]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

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

  useEffect(() => {
    function handleButtonClick(event) {
      const target = event.target;
      const buttons = document.querySelectorAll(
        ".pricing .pricing-top-btn button"
      );
      buttons.forEach((button) => {
        button.classList.remove("active");
      });
      target.classList.add("active");
    }

    function handlePurpleClick() {
      document.getElementById("purple-show").style.display = "block";
      document.getElementById("metal-show").style.display = "none";
      document.getElementById("premium-show").style.display = "none";
    }

    function handlePremiumClick() {
      document.getElementById("purple-show").style.display = "none";
      document.getElementById("metal-show").style.display = "none";
      document.getElementById("premium-show").style.display = "block";
    }

    function handleMetalClick() {
      document.getElementById("purple-show").style.display = "none";
      document.getElementById("metal-show").style.display = "block";
      document.getElementById("premium-show").style.display = "none";
    }

    const buttons = document.querySelectorAll(
      ".pricing .pricing-top-btn button"
    );
    buttons.forEach((button) => {
      button.addEventListener("click", handleButtonClick);
    });

    document
      .getElementById("purple")
      .addEventListener("click", handlePurpleClick);
    document
      .getElementById("premium")
      .addEventListener("click", handlePremiumClick);
    document
      .getElementById("metal")
      .addEventListener("click", handleMetalClick);

    // Cleanup function to remove the event listeners when the component unmounts
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", handleButtonClick);
      });
      document
        .getElementById("purple")
        ?.removeEventListener("click", handlePurpleClick);
      document
        .getElementById("premium")
        ?.removeEventListener("click", handlePremiumClick);
      document
        .getElementById("metal")
        ?.removeEventListener("click", handleMetalClick);
    };
  }, []);

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

  const swiperRefLocal = useRef();

  const handleMouseEnter = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.start();
  };

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
                                    <Image
                                      src={Images.joinLogo}
                                      alt={"join-logo"}
                                    />
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
                                          Apply for zero interest, 100% Islamic
                                          neobank coming to Kenya.
                                        </h2>
                                      </Dialog.Title>
                                      {/* description */}
                                      <div className="tw-mt-4 tw-w-[445px]">
                                        <p className="tw-text-[15px] tw-leading-[22.5px] tw-font-medium tw-font-[Poppinsmedium] tw-text-[#6D6E8A]">
                                          Join a movement, where people speak
                                          your language,
                                          <br /> understand your hopes and help
                                          you reach your financial
                                          <br /> goals. Help us to fix banking
                                          for G. (In Shaa Allah).
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
                                          <div className="tw-relative tw-mt-3 tw-rounded-full">
                                            <div className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-6">
                                              <Image
                                                src={Images.phoneJoin}
                                                alt={"phone-join"}
                                              />
                                            </div>
                                            <div className="join-input">
                                              <input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                value={formik.values.phone}
                                                onChange={formik.handleChange}
                                                className="tw-block tw-w-full tw-h-[62px] tw-bg-white tw-border-0 tw-rounded-full tw-py-1.5 tw-pl-16 tw-text-gray-900 placeholder:tw-text-[15px] placeholder:tw-text-[#6D6E8A] placeholder:tw-font-[Poppinsregular] focus:tw-ring-0 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                                                placeholder="How can we reach out to you?"
                                                onBlur={formik.handleBlur}
                                              />
                                            </div>
                                          </div>
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
                                              formik.isSubmitting ||
                                              !formik.isValid
                                            }
                                            className={styles.joinBtn}
                                            style={{
                                              opacity: formik.isValid ? 1 : 0.2,
                                            }}
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
                                    <Image
                                      src={Images.joinLogo}
                                      alt={"join-logo"}
                                    />
                                  </div>
                                  <div className="tw-absolute tw-top-60 tw-left-0 tw-pt-4 tw-pl-[74px]">
                                    <Image
                                      src={
                                        thumbIndex === 0
                                          ? Images.love
                                          : Images.avatar3
                                      }
                                      className="avtar3 tw-rotate-[-10.28deg]"
                                      alt=""
                                    />
                                  </div>
                                  <div className="tw-absolute tw-bottom-40 tw-right-0 tw-pb-4 tw-pr-[74px]">
                                    <Image
                                      src={
                                        loveIndex === 0
                                          ? Images.avatar2
                                          : Images.thumbsup
                                      }
                                      className="avtar2"
                                      alt=""
                                    />
                                  </div>
                                  <div className="tw-absolute tw-bottom-[110px] tw-right-20 tw-pb-4 tw-pr-[80px]">
                                    <Image
                                      src={
                                        thumbIndex === 0
                                          ? Images.avatar3
                                          : Images.love
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
                                          Now sit back and relax, we’ll take it
                                          up from here. We’ll be in your inbox
                                          soon :-). It pays to be smart about
                                          your money, why not share with your
                                          smart friends?
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
                                          <Image
                                            src={Images.youtube2}
                                            alt={"youtube"}
                                          />
                                        </div>
                                        <div>
                                          <Image
                                            src={Images.facebook2}
                                            alt={"facebook"}
                                          />
                                        </div>
                                        <div>
                                          <Image
                                            src={Images.twitter2}
                                            alt={"twitter"}
                                          />
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
                  <button onClick={openModal} className="apply-beta">
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
          <div>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              loop={true}
              grabCursor={true}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              breakpoints={{
                769: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              speed={3000}
              modules={[Pagination, Navigation]}
              className="swiper featureSwiper"
            >
              {features.map((feature) => (
                <SwiperSlide key={feature.tag} className="swiper-slide">
                  <div className="light-border">
                    <div className="feature-card">
                      <div className="feature-card-img">
                        <Image
                          src={feature.imageUrl}
                          alt={feature.tag}
                          width={440}
                          height={374}
                        />
                      </div>
                      <div className="feature-card-def">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        {/* <Link href="/brand-story/#howToDonate" className={styles.donate}>
                    Donate
                  </Link> */}
        <section className="ups-work ">
          <div className="ups-box position-relative" id="rounds">
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
                {/* <div className="ups-right-box">
                  <img src="/images/homepage/ups.png" width="100%" alt="ups" />
                </div> */}
                <div className={styles.ups2}>
                  <div className={styles.upsCup}>
                    <Image src={Images.cup} alt="cup" />
                  </div>
                  <div className={styles.upsText}>Buy</div>
                  <div className={styles.upsText2}>Coffee</div>
                  <div className={styles.upsPriceBadge}>
                    <span className={styles.upsPrice}>$1.8</span>
                  </div>
                </div>
                <div className={styles.ups1}>
                  <div className={styles.upsPhone}>
                    <Image src={Images.phoneUps} alt="phone" />
                  </div>
                  <div className={styles.upsText3}>Save</div>
                  <div className={styles.upsText4}>Invest</div>
                  <div className={styles.or}>or</div>
                  <Link
                    href="/brand-story/#howToDonate"
                    className={styles.donate2}
                  >
                    Donate
                  </Link>
                  <div className={styles.upsPriceBadge2}>
                    <span className={styles.upsPrice2}>$0.2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mizan-round ">
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
                  <button onClick={openModal} className="join-witlinst">
                    JOIN WAITLIST
                  </button>
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
                  <button onClick={openModal} className="purple-subscribe">
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
                  <button
                    onClick={openModal}
                    className="purple-subscribe premium-bg"
                  >
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
                        width="100%"
                        alt=""
                      />
                    </div>
                  </div>
                  <button
                    onClick={openModal}
                    className="purple-subscribe metal-bg"
                  >
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
          <div
            className="early-user-slider slider-working"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Swiper
              slidesPerView={3}
              ref={swiperRefLocal}
              spaceBetween={20}
              loop={true}
              freeMode={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: true,
              }}
              speed={3000}
              breakpoints={{
                769: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1025: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1441: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              modules={[FreeMode, Autoplay]}
              className="swiper mySwiper mt-5"
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
        </section>
        <section className="yallah">
          <img
            src="/images/homepage/yallahbig.svg"
            className="yallah-big"
            alt="pattern"
          />
          <div className="yallah-main-box tw-overflow-hidden">
            <div className="tw-relative">
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
            </div>
            <div className="text-center tw-z-10 tw-mt-[135px]">
              <h1>
                Yallah, let’s
                <br /> get started
              </h1>
              <p>
                Habibi, its time to level up your money <br />
                game, be part of the first 1,000 subscribers.
              </p>
              <button onClick={openModal} className={styles.yallahWaitlist}>
                JOIN WAITLIST
              </button>
            </div>
          </div>
        </section>

        <section className="questions">
          <div className="questions-working">
            <div className="questions-header">
              <h1>Mizan Knowlege Central</h1>
              <p className="mt-3">
                Meet Sofie ,the most powerful natural language A.I. to help you
                <br />
                learn about anything say (Sukuks, blockchain, Islamic finance
                etc).
                <br /> <br />
                Give it a try,{" "}
                <span className="tw-font-bold">type in any language?</span> (Its
                free).
              </p>
            </div>
            <div className="row align-items-center -tw-mt-8">
              <div className="col-lg-6 col-md-6 col-sm-12 text-start">
                <div className="left-voice-img voice-img">
                  <Image src={Images.voice} className="voice" alt="" />
                  {/* <ImageAnimation images={images} /> */}
                  {/* <ImageAnimation currentImageIndex={currentImageIndex} /> */}

                  {/* <Image src={Images.zendesk} alt="" /> */}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 text-start">
                <div className="left-voice-img">
                  <div className="chat-box-border">
                    <form onSubmit={handleSubmit}>
                      <div className="chatbox-main">
                        <ul
                          ref={chatContainerRef}
                          className="tw-scrollbar-thin"
                        >
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
                                Salaam, what would you like to learn today?
                              </span>
                            </div>
                          </li>
                          {chatLog.map((message, index) => (
                            <li key={index}>
                              <div
                                className={`d-flex align-items-end ${
                                  message.type === "user"
                                    ? "tw-justify-end"
                                    : "tw-justify-start"
                                }`}
                                style={{ columnGap: "1.5rem" }}
                              >
                                {message.type != "user" && (
                                  <Image
                                    src={Images.chatUser}
                                    alt={"user"}
                                    width={64}
                                    height={64}
                                    style={{
                                      position: "relative",
                                      zIndex: "99",
                                    }}
                                  />
                                )}
                                <div
                                  key={index}
                                  className={`tw-flex ${
                                    message.type === "user"
                                      ? "tw-justify-end"
                                      : "tw-justify-start"
                                  }`}
                                >
                                  <div className="tw-rounded-lg tw-text-white tw-max-w-sm">
                                    <span
                                      className={`${
                                        message.type === "user"
                                          ? "tw-bg-[#A276FF] after:tw-bg-[#A276FF] tw-text-white"
                                          : "tw-bg-[#f0ecf7]"
                                      }`}
                                    >
                                      {message.message}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                          {isLoading && (
                            <div
                              key={chatLog.length}
                              className="tw-flex tw-justify-start tw-mb-3"
                            >
                              <div className="tw-bg-[#f0ecf7] tw-rounded-full tw-p-4 tw-text-[#6d6e8a] tw-max-w-sm">
                                <TypingAnimation />
                              </div>
                            </div>
                          )}
                        </ul>
                        <div className="typing-box d-flex align-items-center gap-3">
                          <Image src={Images.typeIcon} alt="" />
                          <input
                            type="text"
                            placeholder="Start typing.."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="focus:tw-ring-0"
                          />
                        </div>
                      </div>
                    </form>
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

// export async function getStaticProps() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
//   });

//   const res = await client.getEntries({ content_type: "feature" });

//   return {
//     props: {
//       features: res.items,
//     }, // will be passed to the page component as props
//   };
// }
