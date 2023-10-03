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

  return (
    <div className={`${isNavBarSticky ? styles.sticky : ""}`}>
      <div className={styles.navBarContainer}>
        <div className={styles.navBarContent}>
          <div className={styles.logo}>
            <img src="logo.jpg" alt="icon" />
          </div>
          <div
            className={`${styles.menu} ${
              isMobileMenuOpen ? styles.mobileMenuOpen : ""
            }`}
          >
            <Link href={"/"} className={styles.menuLink}>
              Trang chủ
            </Link>
            <Link href={"/introduce"} className={styles.menuLink}>
              Giới Thiệu
            </Link>
            <Link href={"/"} className={styles.menuLink}>
              Dịch vụ
            </Link>
            <Link href={"/contact"} className={styles.menuLink}>
              Liên hệ
            </Link>
            <Link href={"/"}>
              <button className={styles.btn}>Nhận tư vấn ngay !</button>
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
