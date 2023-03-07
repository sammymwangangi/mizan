import Link from "next/link";
import Image from "next/image";
import {Images} from "../components/images";
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [imageDimensions, setImageDimensions] = useState({
    width: 150,
    height: 76.36,
  });

  useEffect(() => {
    function handleScroll() {
      const header = document.getElementById('header');
      if (header.classList.contains('header-scroll')) {
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className="header" id="header">
      <div className="container_costome">
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <Link className="navbar-brand m-0 brand-page-logo" href="/">
              <Image src={Images.Logo} width={imageDimensions.width} height={imageDimensions.height} alt="image" />
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
