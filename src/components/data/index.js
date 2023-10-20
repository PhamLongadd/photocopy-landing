import {
  WalletIcon,
  ChipIcon,
  SecurityIcon,
  SpeedIcon,
} from "../icons/index.js";

export const qaData = [
  {
    question: "Thủ tục thuê máy Photocopy như thế nào ?",
    answer:
      "Máy văn phòng Tùng Long luôn cố gắng rút gọn quy trình thuê máy photocopy nhất có thể. Vì thế quý khách chỉ cần gọi điện đến hotline của chúng tôi. Nhân viên cskh sẽ tư vấn loại máy, gói cước thuê phù hợp với nhu cầu sử dụng của quý khách. Sau khi đã chốt được gói cước thuê thì hai bên sẽ tiến hành ký kết hợp đồng và bàn giao thiết bị.",
  },
  {
    question: "Nếu Máy Photocopy gặp sự cố thì xử lý ra sao ?",
    answer:
      "Chúng tôi có đội ngũ kỹ thuật viên sẵn sàng hỗ trợ quý khách hàng sửa chữa, bảo dưỡng, thay thế... 24/7 hoàn toàn miễn phí. Nếu máy không thể sửa, hoặc sửa mất thời gian lâu chúng tôi sẽ thay máy mới ngay lập tức cho quý khách để đảm bảo công việc được trôi chảy.",
  },
  {
    question: "Thời gian khắc phục sự cố về máy photocopy là bao lâu ?",
    answer:
      "Trong vòng 02h kể từ khi nhận được cuộc gọi của Quý khách trong giờ hành chính.",
  },
  {
    question:
      "Có thể đổi máy khác không nếu máy đang thuê bị lỗi hoặc không phù hợp với nhu cầu sử dụng ?",
    answer:
      "Quý khách được đổi ngay máy khác nếu chất lượng của máy photocopy thường xuyên gặp sự cố và không đáp ứng được nhu cầu. Ngoài ra Quý khách có thể thay đổi định mức 01 lần cho một chu kỳ hợp đồng.",
  },
  {
    question: "Thủ tục thanh toán như thế nào ?",
    answer:
      "Hàng tháng Kỹ thuật viên sẽ chốt số counter và tính toán số bản chụp đã dùng trong tháng, tính tiền và xuất hóa đơn. Quý khách vui lòng thanh toán tiền mặt hoặc chuyển khoản. ",
  },
];

export const priceListData = [
  {
    title: "GÓI TIẾT KIỆM",
    price: "800.000",
    features: [
      "Định mức 1.000 trang in đen trắng",
      "Phụ trội 130 đồng/ trang",
      "Máy mới 95 - 99%",
      "Khổ giấy A5 - A3",
      "Tốc độ 30 trang/ phút",
      "In từ Laptop, PC, Điện thoại",
      "Scan màu",
      "Miễn phí lắp đặt, vật chuyển",
      "Hỗ trợ 24/7",
    ],
  },
  {
    title: "GÓI TIN DÙNG",
    price: "1.190.000",
    features: [
      "Định mức 4500 trang in đen trắng",
      "Phụ trội 100 đồng/ trang",
      "Máy mới 95 - 99%",
      "Khổ giấy A5 - A3",
      "Tốc độ 40 - 50 trang/ phút",
      "In từ Laptop, PC, Điện thoại",
      "Scan màu",
      "Miễn phí lắp đặt, vật chuyển",
      "Hỗ trợ 24/7",
    ],
  },
  {
    title: "GÓI NÂNG CAO",
    price: "1.990.000",
    features: [
      "Định mức 1000 trang in đen trắng",
      "Phụ trội 100 đồng/ trang",
      "Máy mới 95 - 99%",
      "Khổ giấy A5 - A3",
      "Tốc độ 60 trang/ phút",
      "In từ Laptop, PC, Điện thoại",
      "Scan màu",
      "Miễn phí lắp đặt, vật chuyển",
      "Hỗ trợ 24/7",
    ],
  },
];

export const services = [
  {
    title: "Cho thuê máy Photocopy",
    content:
      "Dịch vụ cho thuê máy photocopy chuyên nghiệp tốt nhất, giá rẻ nhất thị trường. Hỗ trợ thủ tục nhanh chóng, nâng cấp đời máy liên tục.",
    utilities: [
      "Siêu tiết kiệm chi phí",
      "Siêu tiện lợi, đa chức năng",
      "Kiểm soát chi phí chặt chẽ",
      "Nâng cấp đời máy liên tục",
    ],
    imgUrl: "./img2.jpg",
  },
  {
    title: "Mua bán máy Photocopy",
    content:
      "Dịch vụ mua bán máy photocopy chất lượng với sự lựa chọn đa dạng. Đảm bảo máy photocopy hoạt động tốt.",
    utilities: [
      "Sự lựa chọn đa dạng",
      "Đảm bảo máy hoạt động tốt",
      "Hỗ trợ tư vấn chọn lựa",
    ],
    imgUrl: "./img5.jpg",
  },
  {
    title: "Bảo trì & Sửa chữa",
    content:
      "Dịch vụ bảo trì và sửa chữa máy photocopy chuyên nghiệp, đảm bảo máy luôn hoạt động ổn định.",
    utilities: ["Bảo trì định kỳ", "Sửa chữa máy photocopy"],
    imgUrl: "./img3.jpg",
  },
];

export const questionList = [
  {
    icon: <WalletIcon />,
    title: "Tiết kiệm chi phí đầu tư",
    content:
      "Không cần bỏ ra quá nhiều chi phí cho việc đầu tư mua máy mà vẫn được sử dụng máy photo với chất lượng tốt nhất.",
  },
  {
    icon: <ChipIcon />,
    title: "Máy móc hiện đại, đầy đủ chức năng",
    content:
      "Máy photocopy đa dạng về chủng loại, kích cỡ cũng như công suất làm việc. Chất lượng máy cho thuê đạt 90 – 95% so với máy mới.",
  },
  {
    icon: <SpeedIcon />,
    title: "Tư vấn, lắp đắt & vận hành miễn phí",
    content:
      "Không mất chi phí cho việc lắp đặt, bảo trì, bảo dưỡng hay sửa chữa máy photocopy. Hỗ trợ kiểm tra, vệ sinh, bảo trì, bảo dưỡng đều đặt hàng tháng.",
  },
  {
    icon: <SecurityIcon />,
    title: "Đảm bảo quyền lợi cho doanh nghiệp",
    content:
      "Dùng thử máy một tháng trước khi ký kết hợp đồng. Có quyền yêu cầu đổi máy khi máy không đáp ứng được yêu cầu. hoàn trả đầy đủ số tiền mà bạn đặt cọc khi sử dụng dịch vụ khi hết hạn hợp đồng.",
  },
];
