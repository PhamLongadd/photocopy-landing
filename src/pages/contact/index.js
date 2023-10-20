import styles from "./index.module.css";
import FormInput from "../../components/formInput";

export default function Contact() {
  return (
    <div className={styles.warper}>
      <div className={styles.title}>
        <h1>Liên hệ</h1>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.cotactTitle}>
          <div className={styles.listTitle}>
            <h1>Tư Vấn Miễn Phí</h1>
            <span>Chúng tôi luôn vui lòng được hỗ trợ cho khách hàng!</span>
          </div>
          <div className={styles.listTitle}>
            <h1>Thông Tin Liên Hệ</h1>
            <span>Hotline: 0983-855-123</span>
            <span>Email: tunglongbn@gmail.com</span>
          </div>
          <div className={styles.listTitle}>
            <h1>Giờ Làm Việc</h1>
            <span>8:00AM - 5:00PM (Mon - Sun)</span>
          </div>
          <div className={styles.listTitle}>
            <h1>Địa Chỉ</h1>
            <span>
              Số 255 - đường Bình Than - Khu 3 - P. Đại Phúc - TP. Bắc Ninh
            </span>
          </div>
        </div>
        <div className={styles.inputContact}>
          <h3>Xin vui lòng để lại thông tin tư vấn</h3>
          <FormInput />
        </div>
      </div>
    </div>
  );
}
