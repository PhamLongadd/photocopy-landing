import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

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
            <form className={styles.wraperInput}>
              <div className={styles.input}>
                <input type="text" placeholder="Họ và Tên" />
                <input type="text" placeholder="Số điện thoại" />
                <input type="text" placeholder="Email" />
                <select name="type" id="1">
                  <option value="Chọn dịch vụ">Chọn dịch vụ</option>
                  <option value="Cho thuê máy Photocopy">
                    Cho thuê máy Photocopy
                  </option>
                  <option value="Cho thuê máy Photocopy">
                    Mua bán máy Photocopy
                  </option>
                  <option value="Cho thuê máy Photocopy">
                    Sửa chữa & Bảo trì
                  </option>
                </select>
              </div>
              <textarea
                name="type"
                id="2"
                cols="30"
                rows="10"
                placeholder="Lời nhắn"
              ></textarea>
            </form>
            <button className={styles.btn}>
              <span>Gửi yêu cầu tư vấn</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
