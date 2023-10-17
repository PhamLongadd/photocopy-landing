import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faHandshake,
  faHardDrive,
  faUsers,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import styles from "./index.module.css";

import QandA from "@/components/q&A";
import {
  qaData,
  priceListData,
  services,
  questionList,
} from "@/components/data/index.js";

export default function Home() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);

  const changeService = () => {
    setSelectedServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  useEffect(() => {
    const intervalId = setInterval(changeService, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.wraper}>
      <div className={styles.banner}>
        <img src="./banner.jpg" alt="" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1>Chào mừng đến với Máy văn phòng Tùng Long</h1>
        <p>
          Là nhà cung cấp giải pháp công nghệ cho không gian làm việc hàng đầu
          thế giới, Ricoh cải tiến cuộc sống công sở bằng cách tạo nên trải
          nghiệm tốt hơn, tối ưu hoá quy trình làm việc, cộng tác ở bất cứ nơi
          đâu, bất cứ lúc nào và giải pháp cơ sở hạ tầng kỹ thuật số.
        </p>
      </div>
      <div className={styles.wraperBoxIntroduce}>
        <div className={styles.boxIntroduce}>
          <FontAwesomeIcon icon={faUsers} className={styles.icon} />
          <h1>300+</h1>
          <span>Khách hàng</span>
        </div>
        <div className={styles.boxIntroduce}>
          <FontAwesomeIcon icon={faHandshake} className={styles.icon} />
          <h1>100+</h1>
          <span>Đối tác</span>
        </div>
        <div className={styles.boxIntroduce}>
          <FontAwesomeIcon icon={faHardDrive} className={styles.icon} />
          <h1>99+</h1>
          <span>Sản phẩm</span>
        </div>
        <div className={styles.boxIntroduce}>
          <FontAwesomeIcon icon={faCalendarCheck} className={styles.icon} />
          <h1>10 Năm+</h1>
          <span>Kinh nghiệm</span>
        </div>
      </div>
      <div className={styles.servive}>
        <div className={styles.serviveTitle}>
          <h1>LĨNH VỰC CHUYÊN MÔN</h1>
        </div>
        <div className={styles.serviveNavBar}>
          {services.map((service, index) => (
            <span
              key={index}
              onClick={() => setSelectedServiceIndex(index)}
              className={
                selectedServiceIndex === index
                  ? styles.selectedService
                  : styles.service
              }
            >
              {service.title}
            </span>
          ))}
        </div>
        <div className={styles.wraperServiveBox}>
          <div className={styles.serviveBox}>
            <div className={styles.serviveBoxTitle}>
              <h1>{services[selectedServiceIndex].title}</h1>
              <p>{services[selectedServiceIndex].content}</p>
              <div className={styles.serviveUtilities}>
                {services[selectedServiceIndex].utilities.map((utility, i) => (
                  <span key={i}>{utility}</span>
                ))}
              </div>
              <div className={styles.serviveBtn}>
                <button>
                  <span>Nhận tư vẫn ngay</span>
                </button>
              </div>
            </div>
            <div className={styles.serviveBoxImg}>
              <img src={services[selectedServiceIndex].imgUrl} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wraperBenefit}>
        <div className={styles.benefit}>
          <div className={styles.benefitImg}>
            <img src="./img6.jpg" alt="" />
          </div>
          <div className={styles.benefitTitle}>
            <h1>
              Tại sao bạn nên chọn <br /> Máy văn phòng Tùng Long?
            </h1>
            <div className={styles.listBenefit}>
              <div className={styles.list}>
                <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
                <span>Không cần đặt cọc, không ràng buộc</span>
              </div>
              <div className={styles.list}>
                <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
                <span>Có thể thanh lý bất cứ lúc nào</span>
              </div>
              <div className={styles.list}>
                <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
                <span>
                  Dòng máy đa năng đời mới nhất: Photo, scan, fax, in ấn
                </span>
              </div>
              <div className={styles.list}>
                <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
                <span>Hỗ trợ nhanh trong vòng 1 tiếng</span>
              </div>
              <div className={styles.list}>
                <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
                <span>Dùng thử 02 tuần trước khi ký hợp đồng</span>
              </div>
              <div className={styles.list}>
                <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
                <span>
                  Được tặng ngay 01 tháng thuê tiền mặt sau khi ký hợp đồng và
                  nhiều phần quà hấp dẫn
                </span>
              </div>
              <div className={styles.list}>
                <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
                <span>
                  Chỉ cần 30 phút sau cuộc gọi, văn phòng quý khách sẽ có ngay 1
                  máy photocopy hiện đại nhất phục vụ công việc
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wraperQuestion}>
        <div className={styles.questionTitle}>
          <div className={styles.questionType}>
            <h1>Tại sao nên Thuê máy photocopy thay vì mua mới ?</h1>
            <span>
              Cho thuê máy photocopy giá rẻ, không cọc, miễn phí mực in
            </span>
          </div>
          <div className={styles.questionList}>
            {questionList.map((question, index) => (
              <div className={styles.questionContent} key={index}>
                {question.icon}
                <h3>{question.title}</h3>
                <p>{question.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
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
                <Link href={"/contact"} className={styles.menuLink}>
                  <button>
                    <span>Liên hệ ngay</span>
                  </button>
                </Link>
                <span className={styles.text}>Tư vấn miễn phí</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.wraperProcedure}>
        <div className={styles.procedureContainer}>
          <h1>QUY TRÌNH CHO THUÊ MÁY PHOTOCOPY</h1>
          <div className={styles.procedureContent}>
            <div className={styles.procedure}>
              <div className={styles.procedureText}>
                <span>1</span>
                <h3>LIÊN HỆ</h3>
                <p>
                  Tiếp nhận nhu cầu khách hàng thông qua hotline, form, tin nhắn
                  từ các kênh facebook, tiktok, youtube...
                </p>
              </div>
            </div>
            <div className={styles.procedure}>
              <div className={styles.procedureText}>
                <span>2</span>
                <h3>TƯ VẤN & BÁO GIÁ</h3>
                <p>
                  Nhân viên kinh doanh sẽ tư vấn cho bạn gói thuê phụ hợp với
                  nhu cầu sử dụng thực tế.
                </p>
              </div>
            </div>
            <div className={styles.procedure}>
              <div className={styles.procedureText}>
                <span>3</span>
                <h3>HỢP ĐỒNG</h3>
                <p>
                  Ký hợp đồng. Bạn cần cung cấp thông tin công ty, mã số thuế,
                  địa chỉ giao máy để nhân viên kinh doanh hoàn thành.
                </p>
              </div>
            </div>
            <div className={styles.procedure}>
              <div className={styles.procedureText}>
                <span>4</span>
                <h3>BÀN GIAO</h3>
                <p>
                  Bạn chọn ngày giao máy, chúng tôi sẽ sắp xếp kỹ thuật vận
                  chuyển, cài đặt và hướng dẫn sử dụng
                </p>
              </div>
            </div>
            <div className={styles.procedure}>
              <div className={styles.procedureText}>
                <span>5</span>
                <h3>THANH TOÁN</h3>
                <p>
                  Tiền thuê sẽ được thanh toán vào cuối tháng thuê sau khi thuê
                  đủ 1 tháng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wraperProduct}>
        <h1>Sản phẩm nổi bật</h1>
        <div className={styles.productList}>
          <div className={styles.product}>
            <img src="./ricoh7502.jpg" alt="" className={styles.img} />
            <h3 className={styles.name}>Máy Photocopy Ricoh Aficio MP 3054</h3>
            <span className={styles.price}>1.800.000 - 3.000.000/ tháng</span>
          </div>
          <div className={styles.product}>
            <img src="./ricoh7502.jpg" alt="" className={styles.img} />
            <h3 className={styles.name}>Máy Photocopy Ricoh Aficio MP 4054</h3>
            <span className={styles.price}>1.800.000 - 3.000.000/ tháng</span>
          </div>
          <div className={styles.product}>
            <img src="./ricoh7502.jpg" alt="" className={styles.img} />
            <h3 className={styles.name}>Máy Photocopy Ricoh Aficio MP 5054</h3>
            <span className={styles.price}>1.800.000 - 3.000.000/ tháng</span>
          </div>
          <div className={styles.product}>
            <img src="./ricoh7502.jpg" alt="" className={styles.img} />
            <h3 className={styles.name}>Máy Photocopy Ricoh Aficio MP 6054</h3>
            <span className={styles.price}>1.800.000 - 3.000.000/ tháng</span>
          </div>
          <div className={styles.product}>
            <img src="./ricoh7502.jpg" alt="" className={styles.img} />
            <h3 className={styles.name}>Máy Photocopy Ricoh Aficio MP 4055</h3>
            <span className={styles.price}>1.800.000 - 3.000.000/ tháng</span>
          </div>
          <div className={styles.product}>
            <img src="./ricoh7502.jpg" alt="" className={styles.img} />
            <h3 className={styles.name}>Máy Photocopy Ricoh Aficio MP 5055</h3>
            <span className={styles.price}>1.800.000 - 3.000.000/ tháng</span>
          </div>
          <div className={styles.product}>
            <img src="./ricoh7502.jpg" alt="" className={styles.img} />
            <h3 className={styles.name}>Máy Photocopy Ricoh Aficio MP 6055</h3>
            <span className={styles.price}>1.800.000 - 3.000.000/ tháng</span>
          </div>
          <div className={styles.product}>
            <img src="./ricoh7502.jpg" alt="" className={styles.img} />
            <h3 className={styles.name}>Máy Photocopy Ricoh Aficio MP 7001</h3>
            <span className={styles.price}>1.800.000 - 3.000.000/ tháng</span>
          </div>
          <div className={styles.product}>
            <img src="./ricoh7502.jpg" alt="" className={styles.img} />
            <h3 className={styles.name}>Máy Photocopy Ricoh Aficio MP 7502</h3>
            <span className={styles.price}>1.800.000 - 3.000.000/ tháng</span>
          </div>
        </div>
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
  );
}
