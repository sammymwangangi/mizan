import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment, useEffect, useRef, useState } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Images } from "../components/images";

export default function Nav() {
  return (
    <section className="header brand-header1" id="header">
          <div className="container_costome">
            <nav className="navbar navbar-expand-md">
              <div className="container-fluid">
                <Link className="navbar-brand m-0 brand-page-logo" href="/">
                  <Image src={Images.brandLogo} alt="image" />
                </Link>
                
                <Link
                  className="navbar-brand m-0 home-page-logo"
                  href="/"
                >
                  <Image src={Images.Logo} alt="image" />
                </Link>
                <div className="mobile-view-header d-flex align-items-center gap-4">
                  <button
                    className="navbar-toggler order-2"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <Image src={Images.Toggle} width="30px" alt="toggle" />
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
                  <Image className="pointer" src={Images.US} alt="us" />
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
  );
}
