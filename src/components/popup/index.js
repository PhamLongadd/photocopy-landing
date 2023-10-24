import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import FormInput from "../formInput";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <FontAwesomeIcon
              icon={faClose}
              onClick={closePopup}
              className={styles.icon}
            />
            <h1>Nhận tư vấn ngay</h1>
            <span>Thuê máy Photocopy với giá tốt nhất</span>
            <FormInput />
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
