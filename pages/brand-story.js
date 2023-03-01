import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import brandLogo from "../public/images/brandstory/brand-logo.svg";
import logo from "../public/images/homepage/logo.svg";

export default function BrandStory() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mizan Money - Brand Story</title>
        <script src="/vendor/jquery.js" defer />
        <script src="/vendor/index.js" defer />
        <script src="/vendor/owl.carousel.min.js" defer />
      </Head>
      <main>
        <section className="header brand-header1" id="header">
          <div className="container_costome">
            <nav className="navbar navbar-expand-md">
              <div className="container-fluid">
                <Link className="navbar-brand m-0 brand-page-logo" href="/">
                  <Image src={brandLogo} alt="image" />
                </Link>
                <Link
                  className="navbar-brand m-0 home-page-logo"
                  href="/"
                >
                  <Image src={logo} alt="image" />
                </Link>
                <div className="mobile-view-header d-flex align-items-center gap-4">
                  <button
                    className="navbar-toggler order-2"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <img src="/images/homepage/toggle.svg" width="30px" />
                  </button>
                  <div className="navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          aria-current="page"
                          href="/"
                        >
                          Personal
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          href="/brand-story"
                          tabindex="-1"
                          aria-disabled="true"
                        >
                          Brand Story
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="country-select order-1 pointer">
                    <img
                      className="pointer"
                      src="/images/homepage/united-states.svg"
                    />
                    <select className="pointer">
                      <option>ENG</option>
                      <option>GUJ</option>
                    </select>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </section>

        <section className="brand-story-hero">
          <div className="row m-0 align-items-center w-100">
            <div className="col-lg-5 col-md-6 col-sm-12 ps-0">
              <div className="brand-logo">
                <img
                  src="/images/brandstory/brand-story.svg"
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
                  src="/images/brandstory/neobank1.svg"
                  alt=""
                  width="100%"
                  className="neobank1"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 order-md-2 order-1">
                <img
                  src="/images/brandstory/neobank2.svg"
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
                        src="/images/brandstory/right-mark.png"
                        width="58px"
                        height="58px"
                      />
                      First shariah compliant buy now pay <br /> later in
                      Africa.
                    </li>
                    <li>
                      <img
                        src="/images/brandstory/right-mark.png"
                        width="58px"
                        height="58px"
                      />
                      Globally recognized shariah
                      <br /> independent audit committee.
                    </li>
                    <li>
                      <img
                        src="/images/brandstory/right-mark.png"
                        width="58px"
                        height="58px"
                      />
                      Shariah compliant investment banking <br /> (coming soon).
                    </li>
                    <li>
                      <img
                        src="/images/brandstory/right-mark.png"
                        width="58px"
                        height="58px"
                      />
                      Sukuks, and Islamic fund structuring <br /> (coming soon).
                    </li>
                    <li>
                      <img
                        src="/images/brandstory/right-mark.png"
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
                  src="/images/brandstory/outside2.svg"
                  alt=""
                  width="100%"
                  className="outside1"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <img
                  src="/images/brandstory/outside1.svg"
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
                    src="/images/brandstory/central-img.svg"
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
                  src="/images/brandstory/pay2.svg"
                  alt=""
                  width="100%"
                  className="outside1"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <img
                  src="/images/brandstory/pay1.svg"
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

        <footer className="footer footer-home brand-footer">
          <div className="footer-working position-relative">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12 ">
                <div className="footer-box1">
                  <img src="/images/homepage/footer-logo.svg" />
                  <ul className="web-points">
                    <li>
                      <a href="">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="">Privacy Notice</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 mt-5 mt-md-0">
                <div className="footer-box2">
                  <h3>RESOURCES</h3>
                  <ul>
                    <li>
                      <a href="">Support</a>
                    </li>
                    <li>
                      <a href="">Mizan Donate</a>
                    </li>
                    <li>
                      <a href="">Mizan Pay</a>
                    </li>
                    <li>
                      <a href="">Mizan Invest</a>
                    </li>
                    <li>
                      <a href="">Mizan Save</a>
                    </li>
                    <li>
                      <a href="">Careers</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 mt-5 mt-md-0">
                <div className="footer-box2">
                  <h3>DOWNLOAD (BETA)</h3>
                  <div className="download-btns">
                    <button>
                      <img src="/images/homepage/apple.svg" width="100%" />
                    </button>
                    <button>
                      <img src="/images/homepage/play.svg" width="100%" />
                    </button>
                  </div>
                </div>
                <div className="footer-box2 tab-list-mobile mt-5 mt-md-3">
                  <h3>FOLLOW THE MONEY</h3>
                  <div className="on-social">
                    <a href="">
                      <img
                        src="/images/homepage/LinkedIN.svg"
                        width="34.97px"
                        height="35.25px"
                      />
                    </a>
                    <a href="">
                      <img
                        src="/images/homepage/youtube.svg"
                        width="34.91px"
                        height="27.44"
                      />
                    </a>
                    <a href="">
                      <img
                        src="/images/homepage/facebook.svg"
                        width="36.79"
                        height="36.49"
                      />
                    </a>
                    <a href="">
                      <img
                        src="/images/homepage/twitter.svg"
                        width="34.91px"
                        height="31.09"
                      />
                    </a>
                  </div>
                  <ul className="mobile-points mt-5 mt-md-0">
                    <li>
                      <a href="">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="">Privacy Notice</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 mt-5 mt-md-0">
                <div className="footer-box2 tab-list-web">
                  <h3>FOLLOW THE MONEY</h3>
                  <div className="on-social">
                    <a href="">
                      <img
                        src="/images/homepage/LinkedIN.svg"
                        width="34.97px"
                        height="35.25px"
                      />
                    </a>
                    <a href="">
                      <img
                        src="/images/homepage/youtube.svg"
                        width="34.91px"
                        height="27.44"
                      />
                    </a>
                    <a href="">
                      <img
                        src="/images/homepage/facebook.svg"
                        width="36.79"
                        height="36.49"
                      />
                    </a>
                    <a href="">
                      <img
                        src="/images/homepage/twitter.svg"
                        width="34.91px"
                        height="31.09"
                      />
                    </a>
                  </div>
                  <ul className="mobile-points mt-5 mt-md-0">
                    <li>
                      <a href="">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="">Privacy Notice</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row footer-last ">
              <div className="col-lg-3 col-md-3 order-3 order-md-1">
                <p>Mizan Financial Ltd.</p>
                <p className="mt-2 mt-sm-1">All rights reserved 2022</p>
              </div>
              <div className="col-lg-7 col-md-7 order-1 order-md-2">
                <span>
                  Mizan Financial Ltd is a company registered in the Democratic
                  Republic of Kenya (Certificate of Incorporation No. No.
                  PVT-DLULVPV7) with a registered address: Le’Mac Towers, 4th
                  floor, Rhapta road, Westlands, Nairobi, Kenya. Mizan Financial
                  Ltd is a subsidiary of Mizan Group Ltd., registered in the
                  Dubai International Financial Centre (License No. XXXX), with
                  the registered address at: Unit 208, Level One, Gate Avenue,
                  DIFC, Dubai, United Arab Emirates.
                </span>
              </div>
              <div className="col-lg-2 col-md-2 order-2 order-md-3 footer-logo-img">
                <img src="/images/homepage/dss.svg" />
              </div>
            </div>
          </div>
        </footer>
      </main>

      <div
        className="modal mobile-menu"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen-sm-down">
          <div className="modal-content">
            <button
              type="button"
              className="close-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <img src="/images/homepage/close.svg" width="20px" />
            </button>
            <div className="modal-body">
              <div className="logo">
                <img src="/images/homepage/mobile-logo.svg" />
              </div>
              <div className="mobile-menu-list mt-5">
                <ul>
                  <li>
                    <Link href="/">Personal</Link>
                  </li>
                  <li>
                    <Link className="active" href="/brand-story">
                      Brand Story
                    </Link>
                  </li>
                </ul>
              </div>
              <button className="join-btn my-2">JOIN WAITLIST</button>
              <div className="mobile-list mt-5">
                <ul>
                  <li>
                    <a href="#">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Privacy Notice</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
