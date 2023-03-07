import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import cardsBG from "../public/images/homepage/cards-bg.svg";
import cardsBGTab from "../public/images/homepage/cards-bg-tab.svg";
import lastPageBg from "../public/images/homepage/last-page.svg";
// import HomePageNew from "../public/images/homepage/phonenew.png";
import showMoreBtn from "../public/images/homepage/show-more-btn.svg";
import firstCo from "../public/images/homepage/company1.svg";
import secondCo from "../public/images/homepage/company2.svg";
import thirdCo from "../public/images/homepage/company3.svg";
import mobileBanking from "../public/images/homepage/banking-mobile-img.svg";
import tabletMobile from "../public/images/homepage/tablate-mobile.svg";
import miniMobileBanking from "../public/images/homepage/banking-mobile.svg";
import cardMain from "../public/images/homepage/card-main.svg";
import cardMainTablet from "../public/images/homepage/card-main-tablet.svg";
import feature7 from "../public/images/homepage/feature7.svg";
// import pattern from "../public/images/homepage/pattern.svg";
import ups from "../public/images/homepage/ups.png";
import graph from "../public/images/homepage/graph.svg";
import purple from "../public/images/homepage/purpul.svg";
import premium from "../public/images/homepage/premium.svg";
import metal from "../public/images/homepage/matel.svg";
import user from "../public/images/homepage/user.svg";
import rating from "../public/images/homepage/rating.png";
import verified from "../public/images/homepage/verified.svg";
import mobileViewMint from "../public/images/homepage/mobile-view-mint.png";
import frame1 from "../public/images/homepage/frame1.svg";
import frame2 from "../public/images/homepage/frame2.svg";
import frame3 from "../public/images/homepage/frame3.svg";
import frame4 from "../public/images/homepage/frame4.svg";
import phoneMind from "../public/images/homepage/phone-mind.svg";
import provider1 from "../public/images/homepage/provider1.svg";
import provider2 from "../public/images/homepage/provider2.svg";
import provider3 from "../public/images/homepage/provider3.svg";
import provider4 from "../public/images/homepage/provider4.svg";
import voice from "../public/images/homepage/voice.svg";
import zendesk from "../public/images/homepage/Zendesk.svg";
// import chatUser from "../public/images/homepage/chat-user.svg";
import typeIcon from "../public/images/homepage/type-icone.svg";
import closeBtn from "../public/images/homepage/close.svg";
import mobileLogo from "../public/images/homepage/mobile-logo.svg";

import { Images } from "../components/images";

import dynamic from "next/dynamic";
import React, { Suspense, useState, useEffect } from "react";

const DynamicNavbar = dynamic(() => import("../components/navbar"), {
  suspense: true,
});

const DynamicFooter = dynamic(() => import("../components/footer"), {
  suspense: true,
});

const DynamicNavModal = dynamic(() => import("../components/navModal"), {
  suspense: true,
});

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
    title: "Track Ur buck. 'The Ostrich-effect'",
    description:
      "Here’s the thing,none of us like bad news, so we tend to bury our heads in the sand and pretend we did not just purchase that overpriced bag.",
    imageUrl:
      "https://ik.imagekit.io/qqkp8wchu/feature2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677798372941",
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
    tag: "feature5",
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

export default function Home() {
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <Suspense fallback={`Loading...`}>
          <DynamicNavbar />
        </Suspense>
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
                    <button className="join">JOIN WAITLIST</button>
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
          <div className="swiper featureSwiper">
            <div className="swiper-wrapper">
              {features.map((feature) => (
                <div key={feature.tag} className="swiper-slide">
                  <div className="light-border">
                    <div className="feature-card">
                      <div className="feature-card-img">
                        <img
                          src={feature.imageUrl}
                          alt={feature.tag}
                          loading="lazy"
                        />
                      </div>
                      <div className="feature-card-def">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
          </div>
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
            <div className="swiper mySwiper mt-5">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="early-user-border">
                    <div className="early-user-box p-4">
                      <div className="user-info d-flex align-items-center gap-3">
                        <Image src={Images.user} alt="" />
                        <div className="user-name">
                          <span>Aldo P.</span>
                          <Image src={Images.rating} alt="" />
                        </div>
                      </div>
                      <div className="verified d-flex align-items-center gap-2 mt-3">
                        <Image src={Images.verified} alt="" />
                        <label>Verified Testimonial</label>
                      </div>
                      <p>
                        Just wow, i used revolut in the UK, when i came to
                        Africa, i came across Mizan App, it took minutes to
                        setup. I’d say its like the Islamic “Revolt App”
                        version.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="early-user-border">
                    <div className="early-user-box p-4">
                      <div className="user-info d-flex align-items-center gap-3">
                        <Image src={Images.user} alt="" />
                        <div className="user-name">
                          <span>Aldo P.</span>
                          <Image src={Images.rating} alt="" />
                        </div>
                      </div>
                      <div className="verified d-flex align-items-center gap-2 mt-3">
                        <Image src={Images.verified} alt="" />
                        <label>Verified Testimonial</label>
                      </div>
                      <p>
                        Convenience comes from not having to worry about having
                        too much (or too little) cash on hand, Mizan comes in
                        handy especially with the Mizan app that works seemlessy
                        with the card.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="early-user-border">
                    <div className="early-user-box p-4">
                      <div className="user-info d-flex align-items-center gap-3">
                        <Image src={Images.user} alt="" />
                        <div className="user-name">
                          <span>Aldo P.</span>
                          <Image src={Images.rating} alt="" />
                        </div>
                      </div>
                      <div className="verified d-flex align-items-center gap-2 mt-3">
                        <Image src={Images.verified} alt="" />
                        <label>Verified Testimonial</label>
                      </div>
                      <p>
                        Convenience comes from not having to worry about having
                        too much (or too little) cash on hand, Mizan comes in
                        handy especially with the Mizan app that works seemlessy
                        with the card.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
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
                            src={Images.provider1}
                            className="provider1"
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
                            src={Images.provider4}
                            className="provider4"
                            alt=""
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

        <section className="questions">
          <div className="questions-working">
            <div className="questions-header">
              <h1>Any questions?</h1>
              <p className="mt-3">
                Did not understand some products? Need any further explantion?
                or have a suggestion? <br /> Do let us know, we dont like
                leaving anything to chance
              </p>
            </div>
            <div className="row align-items-center mt-5">
              <div className="col-lg-6 col-md-6 col-sm-12 text-start">
                <div className="left-voice-img voice-img">
                  <Image src={Images.voice} className="voice" alt="" />
                  <Image src={Images.zendesk} alt="" />
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
        <Suspense fallback={`Loading...`}>
          <DynamicFooter />
        </Suspense>
        {/* End */}
      </main>

      {/* models */}

      <Suspense fallback={`Loading...`}>
        <DynamicNavModal />
      </Suspense>

      <Script src="/vendor/mySwiper.js" />
      <Script src="/vendor/featureSwiper.js" />
    </>
  );
}
