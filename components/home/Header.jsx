
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "../header/HeaderNavContent";
import Image from "next/image";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    // <!-- Main Header-->
    <header
      className={`main-header header-style-one alternate  ${
        navbar ? "fixed-header animated slideInDown" : ""
      }`}
    >
      <div className="auto-container">
        {/* <!-- Main box --> */}
        <div className="main-box">
          {/* <!--Nav Outer --> */}
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <Image
                    width={154}
                    height={50}
                    src="/images/logo-full.png"
                    alt="brand"
                  />
                </Link>
              </div>
            </div>
            {/* End .logo-box */}

            <HeaderNavContent />
            {/* <!-- Main Menu End--> */}
          </div>
          {/* End .nav-outer */}

          <div className="outer-box">
            <div className="d-flex align-items-center btn-box2">
              <a
                href="#"
                className="theme-btn btn-style-one call-modal"
                data-bs-toggle="modal"
                data-bs-target="#loginPopupModal"
              >
                تسجيل/تسجيل الدخول
              </a>
              <Link
                href="/employers-dashboard/post-jobs"
                className="theme-btn btn-style-five"
              >
                نشر وظيفة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;