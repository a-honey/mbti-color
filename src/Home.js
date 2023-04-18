import { Link } from "react-router-dom";
import mock from "./mock.json";
import { useState } from "react";
import filterdeleteimg from "./images/x.svg";

function Home() {
  const [filter, setFilter] = useState();

  return (
    <div className="home">
      <h1>MBTI별 좋아하는 컬러</h1>
      {filter && (
        <div onClick={() => setFilter(null)}>
          {filter}
          <img src={filterdeleteimg} alt="필터 삭제" />
        </div>
      )}
      <div>
        <Link to="/new">+ 새 컬러등록하기</Link>
      </div>
      <ul>
        {mock.map((item) => (
          <li key={item.id} onClick={() => setFilter(item.mbti)}>
            {item.id} {item.mbti} --- {item.colorCode}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
