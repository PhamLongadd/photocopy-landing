import styles from "./index.module.css";
import QandA from "@/components/q&A";
import { qaData, priceListData } from "@/components/data/index.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Price() {
  return (
    <div className={styles.warper}>
      <div className={styles.title}>
        <h1>Bảng báo giá cho thuê máy photocopy mới nhất 2023</h1>
      </div>
      <div className={styles.priceContainer}>
        <div className={styles.wraperPriceList}>
          <div className={styles.priceListTitle}>
            <h1>Bảng giá thuê máy Photocopy Đen Trắng</h1>
            <p>
              Các gói sản phẩm của Máy văn phòng Tùng Long đáp ứng hoàn hảo từng
              mức độ nhu cầu của người dùng
            </p>
          </div>
          <div className={styles.priceList}>
            {priceListData.map((item, index) => (
              <div key={index} className={styles.wraperPriceListContent}>
                <h1>{item.title}</h1>
                <div className={styles.priceListContent}>
                  <div className={styles.priceListContentTitle}>
                    <h2>{item.price}</h2>
                    <span>vnd/ tháng</span>
                  </div>
                  <div className={styles.wraperFeature}>
                    {item.features.map((feature, i) => (
                      <div key={i} className={styles.feature}>
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className={styles.icon}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button>
                    <span>Liên hệ ngay</span>
                  </button>
                  <span className={styles.text}>Tư vấn miễn phí</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.wraperProduct}>
          <div className={styles.productContainer}>
            <h1>Sản phẩm nổi bật</h1>
            <div className={styles.productList}>
              <div className={styles.product}>
                <img src="./ricoh7502.jpg" alt="" className={styles.img} />
                <h3 className={styles.name}>
                  Máy Photocopy Ricoh Aficio MP 3054
                </h3>
                <span className={styles.price}>
                  1.800.000 - 3.000.000/ tháng
                </span>
              </div>
              <div className={styles.product}>
                <img src="./ricoh7502.jpg" alt="" className={styles.img} />
                <h3 className={styles.name}>
                  Máy Photocopy Ricoh Aficio MP 4054
                </h3>
                <span className={styles.price}>
                  1.800.000 - 3.000.000/ tháng
                </span>
              </div>
              <div className={styles.product}>
                <img src="./ricoh7502.jpg" alt="" className={styles.img} />
                <h3 className={styles.name}>
                  Máy Photocopy Ricoh Aficio MP 5054
                </h3>
                <span className={styles.price}>
                  1.800.000 - 3.000.000/ tháng
                </span>
              </div>
              <div className={styles.product}>
                <img src="./ricoh7502.jpg" alt="" className={styles.img} />
                <h3 className={styles.name}>
                  Máy Photocopy Ricoh Aficio MP 6054
                </h3>
                <span className={styles.price}>
                  1.800.000 - 3.000.000/ tháng
                </span>
              </div>
              <div className={styles.product}>
                <img src="./ricoh7502.jpg" alt="" className={styles.img} />
                <h3 className={styles.name}>
                  Máy Photocopy Ricoh Aficio MP 4055
                </h3>
                <span className={styles.price}>
                  1.800.000 - 3.000.000/ tháng
                </span>
              </div>
              <div className={styles.product}>
                <img src="./ricoh7502.jpg" alt="" className={styles.img} />
                <h3 className={styles.name}>
                  Máy Photocopy Ricoh Aficio MP 5055
                </h3>
                <span className={styles.price}>
                  1.800.000 - 3.000.000/ tháng
                </span>
              </div>
              <div className={styles.product}>
                <img src="./ricoh7502.jpg" alt="" className={styles.img} />
                <h3 className={styles.name}>
                  Máy Photocopy Ricoh Aficio MP 6055
                </h3>
                <span className={styles.price}>
                  1.800.000 - 3.000.000/ tháng
                </span>
              </div>
              <div className={styles.product}>
                <img src="./ricoh7502.jpg" alt="" className={styles.img} />
                <h3 className={styles.name}>
                  Máy Photocopy Ricoh Aficio MP 7001
                </h3>
                <span className={styles.price}>
                  1.800.000 - 3.000.000/ tháng
                </span>
              </div>
              <div className={styles.product}>
                <img src="./ricoh7502.jpg" alt="" className={styles.img} />
                <h3 className={styles.name}>
                  Máy Photocopy Ricoh Aficio MP 7502
                </h3>
                <span className={styles.price}>
                  1.800.000 - 3.000.000/ tháng
                </span>
              </div>
            </div>
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
          <button>
            <span>Gửi yêu cầu tư vấn</span>
          </button>
        </div>
        <div className={styles.wrapperQaSection}>
          <div className={styles.qaSectionContainer}>
            <h1>Q&A CÂU HỎI THƯỜNG GẶP</h1>
            <div className={styles.qaSection}>
              {qaData.map((qa, index) => (
                <QandA key={index} question={qa.question} answer={qa.answer} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}