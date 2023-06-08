import Link from "next/link";
import Image from "next/image";
import { Images } from "../components/images";
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);
  return (
    <footer className="footer footer-home">
      <div className="footer-working position-relative">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12 ">
            <div className="footer-box1">
              <Image src={Images.footerLogo} alt="" />
              <ul className="web-points ml-0">
                <li>
                  <Link href="/">Terms and Conditions</Link>
                </li>
                <li>
                  <Link href="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/">Privacy Notice</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 mt-5 mt-md-0">
            <div className="footer-box2">
              <h3>RESOURCES</h3>
              <ul>
                <li>
                  <Link href="/">Support</Link>
                </li>
                <li>
                  <Link href="/">Mizan Donate</Link>
                </li>
                <li>
                  <Link href="/">Mizan Pay</Link>
                </li>
                <li>
                  <Link href="/">Mizan Invest</Link>
                </li>
                <li>
                  <Link href="/">Mizan Save</Link>
                </li>
                <li>
                  <Link href="/">Careers</Link>
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
                <Link href="https://www.linkedin.com/">
                  <Image
                    src={Images.linkedin}
                    width="34.97px"
                    height="35.25px"
                    alt=""
                  />
                </Link>
                <Link href="https://youtube.com">
                  <Image src={Images.youtube} width="34.91px" height="27.44" alt="" />
                </Link>
                <Link href="https://www.facebook.com/">
                  <Image src={Images.facebook} width="36.79" height="36.49" alt="" />
                </Link>
                <Link href="https://twitter.com/">
                  <Image src={Images.twitter} width="34.91px" height="31.09" alt="" />
                </Link>
              </div>
              <ul className="mobile-points mt-5 mt-md-0">
                <li>
                  <Link href="/">Terms and Conditions</Link>
                </li>
                <li>
                  <Link href="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/">Privacy Notice</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 mt-5 mt-md-0">
            <div className="footer-box2 tab-list-web">
              <h3>FOLLOW THE MONEY</h3>
              <div className="on-social">
                <Link href="https://www.linkedin.com/">
                  <Image
                    src={Images.linkedin}
                    width="34.97px"
                    height="35.25px"
                    alt=""
                  />
                </Link>
                <Link href="https://youtube.com">
                  <Image src={Images.youtube} width="34.91px" height="27.44" alt="" />
                </Link>
                <Link href="https://www.facebook.com/">
                  <Image src={Images.facebook} width="36.79" height="36.49" alt="" />
                </Link>
                <Link href="https://twitter.com/">
                  <Image src={Images.twitter} width="34.91px" height="31.09" alt="" />
                </Link>
              </div>
              <ul className="mobile-points mt-5 mt-md-0">
                <li>
                  <Link href="/">Terms and Conditions</Link>
                </li>
                <li>
                  <Link href="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/">Privacy Notice</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row footer-last ">
          <div className="col-lg-3 col-md-3 order-3 order-md-1">
            <p cla>About Mizan Money</p>
            <p className="mt-2 mt-sm-1">All rights reserved {currentYear}</p>
          </div>
          <div className="col-lg-7 col-md-7 order-1 order-md-2">
            <span>
            Mizan Financial Ltd (operating with a brand name “Mizan Money) is an islamic financial technology company not currently a bank. Mizan Financial Ltd is registered in the Democratic Republic of Kenya (Certificate of Incorporation No. PVT-DLUXXX) with a registered address: The Address Complex, 7th floor, Muthungari drive, Westlands, Nairobi, Kenya. Mizan Financial Ltd has a management office in Madrid, Spain and engineering division in Lisbon, Portugal.
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
