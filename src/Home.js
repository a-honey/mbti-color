import { Link } from "react-router-dom";
import mock from "./mock.json";
import { useState } from "react";
import filterdeleteimg from "./images/x.svg";
import ColorSurvey from "./components/ColorSurvey";
import styles from "./Home.module.css";

function Home() {
  const [filter, setFilter] = useState();

  return (
    <div className={styles.contaner}>
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <h1 className={styles.heading}>
            MBTI별
            <br />
            <span className={styles.account}>좋아하는 컬러</span>
          </h1>
          <div>
            {filter && (
              <div onClick={() => setFilter(null)}>
                {filter}
                <img src={filterdeleteimg} alt="필터 삭제" />
              </div>
            )}
          </div>
        </header>
      </div>
      <main className={styles.content}>
        <Link className={styles.addItem} to="/new">
          + 새 컬러등록하기
        </Link>
        <ul className={styles.items}>
          {mock.map((item) => (
            <li key={item.id} onClick={() => setFilter(item.mbti)}>
              <ColorSurvey value={item} onClick={() => setFilter(item.mbti)} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Home;
