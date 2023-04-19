import { useState } from "react";
import { Link } from "react-router-dom";
import MBTIselect from "./components/MBTIselect";
import repeatimg from "./images/repeat.svg";
import cancelimg from "./images/x.svg";
import generateColorCode from "./lib/generateColorCode";

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

  function handleColorCodeBlur() {
    const isValidColorCode = /^#[a-f0-9]{6}$/i.test(formValue.colorCode); //true
    if (!isValidColorCode) {
      handleChange("colorCode", "#000000");
    }
  }

  function handleSubmit() {
    /** @FIXME */
    console.log(formValue);
  }

  return (
    <div>
      <h1>새 컬러 등록하기</h1>
      <Link to="/">
        <img src={cancelimg} alt="취소" />
      </Link>
      <h2>MBTI</h2>
      <MBTIselect
        value={formValue.Mbti}
        onChange={(newMbti) => handleChange("mbti", newMbti)}
      />
      <h2>컬러</h2>
      <img src={repeatimg} alt="랜덤" onClick={handleRandomClick} />
      <input
        name="colorCode"
        value={formValue.colorCode}
        onBlur={handleColorCodeBlur}
        onChange={(e) => handleChange("colorCode", e.target.value)}
      />
      <button>컬러등록</button>
    </div>
  );
}

export default New;
