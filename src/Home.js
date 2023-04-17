import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>MBTI별 좋아하는 컬러</h1>
      <div>
        <Link to="/new">+ 새 컬러등록하기</Link>
      </div>
    </div>
  );
}

export default Home;
