import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="logofavico.png" sizes="any" />
        <title>Tùng Long Photocopy</title>
        <meta property="og:title" content="Tùng Long Photocopy" />
        <meta property="og:site_name" content="Tùng Long Photocopy" />
        <meta
          property="og:description"
          content="Máy văn phòng Tùng Long cung cấp dịch vụ cho thuê máy photocopy uy tín. Cam kết máy photo mới 98%, đầy đủ tính năng, bão dưỡng định kỳ, sữa chữa miễn ..."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
