import { useState } from "react";
import { Link } from "react-router-dom";
import MBTIselect from "./components/MBTIselect";
import repeatimg from "./images/repeat.svg";
import cancelimg from "./images/x.svg";
import generateColorCode from "./lib/generateColorCode";
import ColorInput from "./components/ColorInput";

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

  return (
    <div>
      <h1>새 컬러 등록하기</h1>
      <Link to="/">
        <img src={cancelimg} alt="취소" />
      </Link>
      <h2>MBTI</h2>
      <MBTIselect
        value={formValue.mbti}
        onChange={(newMbti) => handleChange("mbti", newMbti)}
      />
      <h2>컬러</h2>
      <img src={repeatimg} alt="랜덤" onClick={handleRandomClick} />
      <ColorInput
        value={formValue.colorCode}
        onChange={(newColorCode) => handleChange("colorCode", newColorCode)}
      />
      <button>컬러등록</button>
    </div>
  );
}

export default New;
