import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import styles from "./index.module.css";
import DefaultLayout from "../../components/layouts/defaultLayout";

export default function Introduce() {
  return (
    <div className={styles.wraper}>
      <div className={styles.title}>
        <h1>Giới Thiệu</h1>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.wraperContent}>
          <div className={styles.content}>
            <div className={styles.img}>
              <img src="./img2.jpg" alt="" />
            </div>
            <div className={styles.type}>
              <h1>MÁY VĂN PHÒNG TÙNG LONG</h1>
              <p>
                Máy văn phòng Tùng Long được thành lập vào năm 2001 – Nhà cung
                cấp máy photocopy, máy in, máy scan, máy chiếu, máy fax chất
                lượng cao, và các dịch vụ sửa chữa máy photocopy, dịch vụ sửa
                chữa máy in, đổ mực và thay thế linh kiện máy văn phòng, dịch vụ
                cho thuê máy photocopy, cho thuê máy in chuyên nghiệp tại Bắc
                Ninh và các tỉnh phía Bắc.
              </p>
              <div className={styles.wraperIcon}>
                <span>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className={styles.icon}
                  />
                  Cho thuê máy photocopy
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className={styles.icon}
                  />
                  Bán máy photocopy
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className={styles.icon}
                  />
                  Dịch vụ bảo trì & Sửa chữa
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wraperContentBgr}>
          <div className={styles.contentBgr}>
            <div className={styles.type}>
              <h1>QUY MÔ HOẠT ĐỘNG</h1>
              <p>
                Với đội ngũ kỹ thuật viên chuyên môn cao và dày dạn kinh nghiệm,
                Máy văn phòng Tùng Long tự hào là đơn vị cho thuê máy photocopy
                và sửa chữa máy photocopy hàng đầu tại Bắc Ninh và một số tỉnh
                thành phía Bắc.
              </p>
              <p>
                Với phương châm chất lượng, hiệu quả công việc, tối ưu hóa chi
                phí cho khách hàng, Máy văn phòng Tùng Long là địa chỉ tin cậy
                cho các dịch vụ kinh doanh máy photocopy, máy in màu, máy
                fax,…Ngoài ra Máy văn phòng Tùng Long còn cung cấp các dịch vụ
                sau bán hàng như: dịch vụ lắp đặt, bảo hành, bảo hành, bảo trì,
                dịch vụ sửa chữa, thay thế các linh kiện thiết bị cho máy văn
                phòng.
              </p>
            </div>
            <div className={styles.img}>
              <img src="./img3.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.wraperContent}>
          <div className={styles.content}>
            <div className={styles.img}>
              <img src="./img4.jpg" alt="" />
            </div>
            <div className={styles.type}>
              <h1>CHIẾN LƯỢC KINH DOANH</h1>
              <p>
                Máy văn phòng Tùng Long kinh doanh với chiến lược xây dựng quan
                hệ bình đẳng với bạn hàng và bảo vệ quyền lợi của người tiêu
                dùng.
              </p>
              <p>
                Ngoài ra chúng tôi còn thực hiện chiến lược lâu dài với việc
                tăng cường mở rộng hệ thống đại lý, chi nhánh trên khu vực Bắc
                Ninh cũng như một số tỉnh Miền Bắc. Chúng tôi cũng liên tục tiến
                hành các hoạt động hỗ trợ về chiến lược kinh doanh, kiến thức kỹ
                thuật, công nghệ mới cho đội ngũ các kỹ thuật viên tại các chi
                nhánh, đại lý mở rộng.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.wraperContentBgr}>
          <div className={styles.contentBgr}>
            <div className={styles.type}>
              <h1>SẢN PHẨM DỊCH VỤ</h1>
              <p>
                Sản phẩm kinh doanh của chúng tôi thuộc các hãng: Xerox, Ricoh,
                Canon, Toshiba… Đây đều là những sản phẩm có chất lượng hàng đầu
                thế giới và nhận được sự tin dùng của hầu hết khách hàng.
              </p>
              <p>
                Với đội ngũ cán bộ chủ chốt trong công ty được đào tạo chính quy
                dài hạn tại Nhật Bản, Singapo, Máy văn phòng Tùng Long luôn nhận
                được lòng tin từ phía khách hàng với việc đặt chữ tín lên hàng
                đầu. Hàng năm công ty cũng thường xuyên mở các khóa đào tạo với
                đội ngũ chuyên gia từ các hãng sản phẩm sang giảng dạy về kỹ
                thuật, chuyển giao công nghệ cho đội ngũ nhân viên của công ty.
              </p>
            </div>
            <div className={styles.img}>
              <img src="./img5.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Introduce.Layout = DefaultLayout;
