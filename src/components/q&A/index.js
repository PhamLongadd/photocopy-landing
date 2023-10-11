import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

function QandA({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.qAndA}>
      <div className={styles.question} onClick={toggleAnswer}>
        <FontAwesomeIcon
          icon={isOpen ? faMinus : faPlus}
          className={styles.icon}
        />
        {question}
      </div>
      {isOpen && <div className={styles.answer}>{answer}</div>}
    </div>
  );
}

export default QandA;
