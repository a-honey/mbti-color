import { BrowserRouter, Route, Routes } from "react-router-dom";
import New from "./New";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
