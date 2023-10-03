import styles from "./index.module.css";

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
          <div className={styles.wraperInput}>
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
          </div>
          <button>Gửi yêu cầu tư vấn</button>
        </div>
      </div>
    </div>
  );
}
