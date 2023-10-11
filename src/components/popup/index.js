import { useState, useEffect } from "react";
import styles from "./index.module.css";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShowPopup(true);
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* {showPopup && ( */}
      <div className={styles.overlay}>
        <div className={styles.popup}>
          <h2>Nhập thông tin của bạn</h2>
          <form>
            <input type="text" placeholder="Tên" />
            <input type="email" placeholder="Email" />
            <button type="submit">Gửi</button>
          </form>
          <button className={styles.closeBtn} onClick={closePopup}>
            Đóng
          </button>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Popup;
