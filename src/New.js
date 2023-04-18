import { Link } from "react-router-dom";
import repeatimg from "./images/repeat.svg";
import cancelimg from "./images/x.svg";

function New() {
  return (
    <div>
      <h1>새 컬러 등록하기</h1>
      <Link to="/">
        <img src={cancelimg} alt="취소" />
      </Link>
      <h2>MBTI</h2>
      <h2>컬러</h2>
      <img src={repeatimg} alt="랜덤" />
      <input name="colorCode" />
      <button>컬러등록</button>
    </div>
  );
}

export default New;
