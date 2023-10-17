import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";
import {
  faEnvelope,
  faMapLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentContainer}>
        <div className={styles.logo}>
          <img src="logo.jpg" alt="icon" />
          <h2>Máy Văn Phòng Tùng Long</h2>
          <p>
            Hơn mười năm kinh nghiệm trong lĩnh vực kinh doanh - cho thuê - sửa
            chữa máy văn phòng.
          </p>
        </div>
        <div className={styles.contactInfor}>
          <h3>Thông tin liên hệ</h3>
          <span className={styles.infor}>
            <FontAwesomeIcon icon={faMapLocationDot} className={styles.icon} />
            <p>Số 255 - Đường Bình Than - Khu 3 - P. Đại Phúc - TP. Bắc Ninh</p>
          </span>
          <span className={styles.infor}>
            <FontAwesomeIcon icon={faPhoneVolume} className={styles.icon} />
            <p>0983855123</p>
          </span>
          <span className={styles.infor}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <p>tunglongbn@gmail.com</p>
          </span>
        </div>
        <div className={styles.wraperCategory}>
          <h3>Danh Mục</h3>
          <div className={styles.category}>
            <Link href={"/"} className={styles.categoryLink}>
              Trang chủ
            </Link>
            <Link href={"/introduce"} className={styles.categoryLink}>
              Giới thiệu
            </Link>
            <Link href={"/price"} className={styles.categoryLink}>
              Bảng giá
            </Link>
            <Link href={"/contact"} className={styles.categoryLink}>
              Liên hệ
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.cpRight}>
        <span>© All Rights Reserved.</span>
      </div>
    </div>
  );
}
