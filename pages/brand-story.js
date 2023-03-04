import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import {Images} from "../components/images";

import dynamic from "next/dynamic";
import React, { Suspense } from "react";


const DynamicNav = dynamic(() => import("../components/nav"), {
  suspense: true,
});

const DynamicFooter = dynamic(() => import("../components/footer"), {
  suspense: true,
});

const DynamicNavModal = dynamic(() => import("../components/navModal"), {
  suspense: true,
});

export default function BrandStory() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mizan Money - Brand Story</title>
        
      </Head>
      
      <main>
        {/* Nav */}
        <Suspense fallback={`Loading...`}>
          <DynamicNav />
        </Suspense>
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
                  <p>
                    <span>M</span>icro-lending & <br />
                    <span>I</span>nvestment <br />
                    <span>Z</span>ero-interest <br />
                    <span>A</span>pplication for <br />
                    <span>N</span>ovice.
                  </p>
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
                  src="https://ik.imagekit.io/qqkp8wchu/neobank1.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677796279480"
                  alt=""
                  width="100%"
                  className="neobank1"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 order-md-2 order-1">
                <img
                  src="https://ik.imagekit.io/qqkp8wchu/neobank2.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677796264438"
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
                    <li>
                      <img
                        src="https://ik.imagekit.io/qqkp8wchu/right-mark.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677796303005"
                        width="58px"
                        height="58px"
                      />
                      First shariah compliant buy now pay <br /> later in
                      Africa.
                    </li>
                    <li>
                      <img
                        src="https://ik.imagekit.io/qqkp8wchu/right-mark.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677796303005"
                        width="58px"
                        height="58px"
                      />
                      Globally recognized shariah
                      <br /> independent audit committee.
                    </li>
                    <li>
                      <img
                        src="https://ik.imagekit.io/qqkp8wchu/right-mark.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677796303005"
                        width="58px"
                        height="58px"
                      />
                      Shariah compliant investment banking <br /> (coming soon).
                    </li>
                    <li>
                      <img
                        src="https://ik.imagekit.io/qqkp8wchu/right-mark.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677796303005"
                        width="58px"
                        height="58px"
                      />
                      Sukuks, and Islamic fund structuring <br /> (coming soon).
                    </li>
                    <li>
                      <img
                        src="https://ik.imagekit.io/qqkp8wchu/right-mark.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677796303005"
                        width="58px"
                        height="58px"
                      />
                      Shariah merchant & corporate <br /> banking (coming soon).
                    </li>
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
                  src="https://ik.imagekit.io/qqkp8wchu/outside2.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677796939572"
                  alt=""
                  width="100%"
                  className="outside1"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <img
                  src="https://ik.imagekit.io/qqkp8wchu/central-img.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677797005449"
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
            <h2>Meet the team</h2>
          </div>
          <div className="team-img"></div>
        </section>

        <section className="Neobank team-bg">
          <div className="outside-working">
            <h2>
              What is a Halal <br />
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
                  src="https://ik.imagekit.io/qqkp8wchu/pay2.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677796318651"
                  alt=""
                  width="100%"
                  className="outside1"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <img
                  src="https://ik.imagekit.io/qqkp8wchu/pay1.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677796885101"
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis.
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mt-5 mt-md-0">
                  <p className="def-padding">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="finance p-0 mizan-donate">
          <div className="last-img"></div>
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

    </>
  );
}
