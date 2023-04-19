import { useState } from "react";
import { Link } from "react-router-dom";
import MBTIselect from "./components/MBTIselect";
import repeatimg from "./images/repeat.svg";
import cancelimg from "./images/x.svg";
import generateColorCode from "./lib/generateColorCode";
import ColorInput from "./components/ColorInput";
import styles from "./New.module.css";

function New() {
  const [formValue, setFormValue] = useState({
    mbti: "INFP",
    colorCode: "#000000",
  });

  function handleChange(name, value) {
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  }

  function handleRandomClick() {
    const nextColorCode = generateColorCode();
    handleChange("colorCode", nextColorCode);
  }

  function handleSubmit() {
    console.log("submit!");
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.headerHeading}>새 컬러 등록하기</h1>
        <Link className={styles.cancel} to="/">
          <img className={styles.cancelIcon} src={cancelimg} alt="취소" />
        </Link>
      </header>
      <section className={styles.section}>
        <h2>MBTI</h2>
        <MBTIselect
          value={formValue.mbti}
          onChange={(newMbti) => handleChange("mbti", newMbti)}
        />
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>
          컬러
          <button className={styles.random} onClick={handleRandomClick}>
            <img src={repeatimg} alt="랜덤" onClick={handleRandomClick} />
          </button>
        </h2>
        <ColorInput
          value={formValue.colorCode}
          onChange={(newColorCode) => handleChange("colorCode", newColorCode)}
        />
      </section>
      <button className={styles.submit} onClick={handleSubmit}>
        컬러등록
      </button>
    </div>
  );
}

export default New;
