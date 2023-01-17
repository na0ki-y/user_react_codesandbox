import "./styles.css";
import { Home } from "./components/Home";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Count } from "./components/Count";
import { Page1DeA } from "./components/Page1DeA";
import { Page1DeB } from "./components/Page1DeB";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//　/p1スラッシュいらない
//Note that in your path props we don't write /about and instead write about. The forward slash / in path names is implicit in React Router 6.
//https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd
export default function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Homeへ</Link>
        <br />
        <Link to="/p1">Page1へ</Link>
        <br />
        <Link to="/p2">Page2へ</Link>
        <br />
        <Link to="/count">Countへ</Link>
        <br />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="p1" element={<Page1 />}>
          <Route path="dda" element={<Page1DeA />} />
          <Route path="ddb" element={<Page1DeB />} />
        </Route>
        <Route path="p2" element={<Page2 />} />
        <Route path="p2/ddb" element={<Page1DeB />} />

        <Route path="count" element={<Count />} />
      </Routes>
    </Router>
  );
}
