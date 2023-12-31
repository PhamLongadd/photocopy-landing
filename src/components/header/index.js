import Link from "next/link";
import styles from "./index.module.css";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isNavBarSticky, setIsNavBarSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !isNavBarSticky) {
        setIsNavBarSticky(true);
      } else if (window.scrollY <= 100 && isNavBarSticky) {
        setIsNavBarSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavBarSticky]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`${isNavBarSticky ? styles.sticky : ""}`}>
      <div className={styles.navBarContainer}>
        <div className={styles.navBarContent}>
          <div className={styles.logo}>
            <Link href={"/"}>
              <img src="logopt.png" alt="icon" />
            </Link>
          </div>
          <div
            className={`${styles.menu} ${
              isMobileMenuOpen ? styles.mobileMenuOpen : ""
            }`}
          >
            <Link
              href={"/"}
              onClick={closeMobileMenu}
              className={styles.menuLink}
            >
              Trang chủ
            </Link>
            <Link
              href={"/introduce"}
              onClick={closeMobileMenu}
              className={styles.menuLink}
            >
              Giới Thiệu
            </Link>
            <Link
              href={"/price"}
              onClick={closeMobileMenu}
              className={styles.menuLink}
            >
              Bảng giá
            </Link>
            <Link
              href={"/contact"}
              onClick={closeMobileMenu}
              className={styles.menuLink}
            >
              Liên hệ
            </Link>
            <Link
              href={"/contact"}
              onClick={closeMobileMenu}
              className={styles.btnLink}
            >
              <div className={styles.btnLinkContainer}>
                <div>
                  <button className={styles.btn}>Nhận tư vấn ngay !</button>
                </div>
                <div>
                  <span>Hotline: 0983-855-123</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <button onClick={toggleMobileMenu} className={styles.btnMenu}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} />
        </button>
      </div>
    </div>
  );
}
