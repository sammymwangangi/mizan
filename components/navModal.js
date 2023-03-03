import Link from "next/link";
import Image from "next/image";
import { Images } from "../components/images";

export default function navModal() {
  return (
    <div
      className="modal mobile-menu"
      id="exampleModal"
      tabIndex="-1"
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
            <Image src={Images.closeBtn} width="20px" alt="" />
          </button>
          <div className="modal-body">
            <div className="logo">
              <Image src={Images.mobileLogo} alt="" />
            </div>
            <div className="mobile-menu-list mt-5">
              <ul>
                <li>
                  <Link className="active" href="/">
                    Personal
                  </Link>
                </li>
                <li>
                  <Link href="/brand-story">Brand Story</Link>
                </li>
              </ul>
            </div>
            <button className="join-btn my-2">JOIN WAITLIST</button>
            <div className="mobile-list mt-5">
              <ul>
                <li>
                  <a className="active" href="#">
                    Terms and Conditions
                  </a>
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
  );
}
