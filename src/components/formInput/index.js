import React, { useState } from "react";
import styles from "./index.module.css";

const FormInput = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [service, setService] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = {
      name,
      email,
      phone,
      service,
      message,
    };

    await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "app;ication/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    // const content = await response.json();

    // alert(content);
    // console.log(content);

    setName("");
    setEmail("");
    setMessage("");
    setPhone("");
    setService("");
  };

  return (
    <>
      <form id="myForm" className={styles.wraperInput} onSubmit={handleSubmit}>
        <div className={styles.input}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="Name"
            placeholder="Họ và Tên"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            name="Phone"
            placeholder="Số điện thoại"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="Email"
            placeholder="Email"
          />
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            name="Service"
            id="service-select"
          >
            <option value="Chọn dịch vụ">Chọn dịch vụ</option>
            <option value="Cho thuê máy Photocopy">
              Cho thuê máy Photocopy
            </option>
            <option value="Cho thuê máy Photocopy">
              Mua bán máy Photocopy
            </option>
            <option value="Cho thuê máy Photocopy">Sửa chữa & Bảo trì</option>
          </select>
        </div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="Message"
          id="message-textarea"
          cols="30"
          rows="10"
          placeholder="Lời nhắn"
        ></textarea>
        <button className={styles.btn} type="submit">
          <span>Gửi yêu cầu tư vấn</span>
        </button>
      </form>
    </>
  );
};

export default FormInput;
