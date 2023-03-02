import Link from "next/link";
import Image from "next/image";
import { Images } from "../components/images";

export default function Footer() {
  return (
    <footer className="footer footer-home">
      <div className="footer-working position-relative">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12 ">
            <div className="footer-box1">
              <Image src={Images.footerLogo} alt="" />
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
                  <Image src={Images.apple} width="100%" alt="" />
                </button>
                <button>
                  <Image src={Images.play} width="100%" alt="" />
                </button>
              </div>
            </div>
            <div className="footer-box2 tab-list-mobile mt-5 mt-md-3">
              <h3>FOLLOW THE MONEY</h3>
              <div className="on-social">
                <a href="">
                  <Image
                    src={Images.linkedin}
                    width="34.97px"
                    height="35.25px"
                    alt=""
                  />
                </a>
                <a href="">
                  <Image src={Images.youtube} width="34.91px" height="27.44" alt="" />
                </a>
                <a href="">
                  <Image src={Images.facebook} width="36.79" height="36.49" alt="" />
                </a>
                <a href="">
                  <Image src={Images.twitter} width="34.91px" height="31.09" alt="" />
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
                  <Image
                    src={Images.linkedin}
                    width="34.97px"
                    height="35.25px"
                    alt=""
                  />
                </a>
                <a href="">
                  <Image src={Images.youtube} width="34.91px" height="27.44" alt="" />
                </a>
                <a href="">
                  <Image src={Images.facebook} width="36.79" height="36.49" alt="" />
                </a>
                <a href="">
                  <Image src={Images.twitter} width="34.91px" height="31.09" alt="" />
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
              PVT-DLULVPV7) with a registered address: Le’Mac Towers, 4th floor,
              Rhapta road, Westlands, Nairobi, Kenya. Mizan Financial Ltd is a
              subsidiary of Mizan Group Ltd., registered in the Dubai
              International Financial Centre (License No. XXXX), with the
              registered address at: Unit 208, Level One, Gate Avenue, DIFC,
              Dubai, United Arab Emirates.
            </span>
          </div>
          <div className="col-lg-2 col-md-2 text-center order-2 order-md-3 footer-logo-img">
            <Image src={Images.dss} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
