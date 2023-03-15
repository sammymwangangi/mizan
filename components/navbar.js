import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment, useEffect, useRef, useState } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Images } from "../components/images";

const flags = [
  {
    name: "ENG",
    href: "/en",
    icon: IconOne,
  },
  {
    name: "AR",
    href: "/ar",
    icon: IconTwo,
  },
];

export default function Navbar() {
  const [imageDimensions, setImageDimensions] = useState({
    width: 150,
    height: 76.36,
  });

  useEffect(() => {
    function handleScroll() {
      const header = document.getElementById("header");
      if (header.classList.contains("header-scroll")) {
        setImageDimensions({
          width: 175,
          height: 41,
        });
      } else {
        setImageDimensions({
          width: 150,
          height: 76.36,
        });
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [selected, setSelected] = useState(flags[0]);
  const router = useRouter();

  return (
    <section className="header" id="header">
      <div className="container_costome">
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <Link className="navbar-brand -tw-ml-2.5 brand-page-logo" href="/">
              <Image
                src={Images.Logo}
                width={imageDimensions.width}
                height={imageDimensions.height}
                alt="image"
              />
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
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                    >
                      Personal
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      href="/brand-story"
                      tabIndex="-1"
                      aria-disabled="true"
                    >
                      Brand Story
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Flags */}
              <div className="country-select order-1 pointer">
                <Popover
                  className="tw-relative tw-items-center"
                  value={selected}
                  onChange={setSelected}
                >
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={`
                ${open ? "" : "tw-text-opacity-90"}
                tw-group tw-inline-flex tw-gap-[10px] tw-items-center tw-border-0 tw-bg-[#FFFFFF42] tw-rounded-md tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-[#6D6E8A] hover:tw-text-opacity-100 focus:tw-outline-none`}
                      >
                        <IconOne />
                        <span>{selected.name}</span>
                        <ChevronDownIcon
                          className={`${open ? "" : "tw-text-opacity-70"}
                  tw-h-5 tw-w-5 tw-text-[#6D6E8A] tw-transition tw-duration-150 tw-ease-in-out group-hover:tw-text-opacity-80`}
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="tw-transition tw-ease-out tw-duration-200"
                        enterFrom="tw-opacity-0 tw-translate-y-1"
                        enterTo="tw-opacity-100 tw-translate-y-0"
                        leave="tw-transition tw-ease-in tw-duration-150"
                        leaveFrom="tw-opacity-100 tw-translate-y-0"
                        leaveTo="tw-opacity-0 tw-translate-y-1"
                      >
                        <Popover.Panel className="tw-absolute tw-left-1/2 tw-z-10 tw-mt-3 tw-w-40 tw-max-w-sm -tw-translate-x-1/2 tw-transform tw-px-4 sm:tw-px-0 lg:tw-max-w-3xl">
                          <div className="tw-overflow-hidden tw-rounded-lg tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5">
                            <div className="tw-relative tw-grid tw-gap-2 tw-bg-white tw-p-7 lg:tw-grid-cols-1">
                              {flags.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-tw-m-3 tw-flex tw-items-center tw-rounded-lg tw-p-2 tw-transition tw-duration-150 tw-ease-in-out hover:tw-bg-gray-50 focus:tw-outline-none focus-visible:tw-ring focus-visible:ring-orange-500 focus-visible:tw-ring-opacity-50 tw-no-underline"
                                >
                                  <div className="tw-flex tw-h-10 tw-w-10 shrink-0 tw-items-center tw-justify-center tw-text-white sm:tw-h-12 sm:tw-w-12">
                                    <item.icon aria-hidden="true" />
                                  </div>
                                  <div className="tw-ml-4">
                                    <p className="tw-text-sm tw-font-medium tw-text-gray-900">
                                      {item.name}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </div>
              {/* End Flags */}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

function IconOne() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_7_234)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#F0F0F0"
        />
        <path
          d="M11.4775 12.0001H23.9993C23.9993 10.917 23.8549 9.86774 23.5859 8.86963H11.4775V12.0001Z"
          fill="#D80027"
        />
        <path
          d="M11.4775 5.73934H22.238C21.5034 4.54065 20.5642 3.48114 19.4691 2.60889H11.4775V5.73934Z"
          fill="#D80027"
        />
        <path
          d="M12.0001 24.0003C14.8243 24.0003 17.4201 23.0242 19.4699 21.3916H4.53027C6.58012 23.0242 9.17592 24.0003 12.0001 24.0003Z"
          fill="#D80027"
        />
        <path
          d="M1.76098 18.2608H22.2384C22.8281 17.2985 23.2855 16.2467 23.5863 15.1304H0.413086C0.713883 16.2467 1.17124 17.2985 1.76098 18.2608Z"
          fill="#D80027"
        />
        <path
          d="M5.55863 1.87397H6.65217L5.63498 2.61295L6.02353 3.80869L5.00639 3.0697L3.98925 3.80869L4.32487 2.7757C3.42928 3.52172 2.64431 4.39575 1.99744 5.36963H2.34783L1.70034 5.84002C1.59947 6.0083 1.50272 6.17925 1.41 6.35273L1.71919 7.30434L1.14234 6.88523C0.998953 7.18903 0.867797 7.49967 0.749906 7.81678L1.09055 8.86528H2.34783L1.33064 9.60427L1.71919 10.8L0.702047 10.061L0.0927656 10.5037C0.0317812 10.9939 0 11.4932 0 12H12C12 5.37262 12 4.59131 12 0C9.62944 0 7.41961 0.687656 5.55863 1.87397ZM6.02353 10.8L5.00639 10.061L3.98925 10.8L4.3778 9.60427L3.36061 8.86528H4.61789L5.00639 7.66955L5.39489 8.86528H6.65217L5.63498 9.60427L6.02353 10.8ZM5.63498 6.10861L6.02353 7.30434L5.00639 6.56536L3.98925 7.30434L4.3778 6.10861L3.36061 5.36963H4.61789L5.00639 4.17389L5.39489 5.36963H6.65217L5.63498 6.10861ZM10.3279 10.8L9.31073 10.061L8.29359 10.8L8.68214 9.60427L7.66495 8.86528H8.92223L9.31073 7.66955L9.69923 8.86528H10.9565L9.93933 9.60427L10.3279 10.8ZM9.93933 6.10861L10.3279 7.30434L9.31073 6.56536L8.29359 7.30434L8.68214 6.10861L7.66495 5.36963H8.92223L9.31073 4.17389L9.69923 5.36963H10.9565L9.93933 6.10861ZM9.93933 2.61295L10.3279 3.80869L9.31073 3.0697L8.29359 3.80869L8.68214 2.61295L7.66495 1.87397H8.92223L9.31073 0.678234L9.69923 1.87397H10.9565L9.93933 2.61295Z"
          fill="#0052B4"
        />
      </g>
      <defs>
        <clipPath id="clip0_7_234">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.989 12.0238L23.8795 13.6518C23.3605 16.9317 21.842 19.5549 19.3239 21.5214C16.7885 23.4863 13.8028 24.2831 10.3669 23.9117C7.08778 23.3926 4.46521 21.8737 2.4992 19.3551C1.86927 18.5409 1.3504 17.6538 0.942585 16.6938L0.428455 15.2132C0.145994 14.1944 0.00317529 13.1313 0 12.0238C0.0857465 8.62503 1.25678 5.79721 3.5131 3.54033C5.76942 1.28346 8.59655 0.112133 11.9945 0.0263672C15.3924 0.112135 18.2195 1.28346 20.4759 3.54034C22.7322 5.79721 23.9032 8.62503 23.989 12.0238Z"
        fill="#D72612"
      />
      <path
        d="M11.9849 0V4.73003e-05C9.45899 0.0637541 7.24851 0.727381 5.35345 1.99087C5.35361 3.91945 5.41943 5.97071 5.41936 7.89929C11.3721 7.89923 17.259 7.7765 23.2115 7.77644C22.6277 6.18142 21.7126 4.76059 20.4663 3.51397C18.21 1.25709 15.3828 0.0857664 11.9849 0V4.73003e-05V0Z"
        fill="#00822F"
      />
      <path
        d="M5.41129 7.646L5.41128 7.79678L5.41098 16.5466L23.1062 16.5461C23.4662 15.6461 23.7276 14.6814 23.8905 13.652L24 12.0241C23.9601 10.4409 23.6847 8.98164 23.1738 7.64625L5.41129 7.646Z"
        fill="#F0F0F0"
      />
      <path
        d="M23.1293 16.5355V16.5356V16.5356L5.42127 16.4824C5.39755 20.1906 5.39945 22.0086 5.39945 22.0086C6.85063 22.9678 8.51553 23.6173 10.4037 23.8949C10.9472 23.9748 11.4846 23.9835 12.0081 23.9835C14.7774 23.9835 17.2311 23.1608 19.3607 21.5047C21.0894 20.1603 22.3429 18.5004 23.1297 16.5355L23.1293 16.5356V16.5355Z"
        fill="black"
      />
    </svg>
  );
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}
