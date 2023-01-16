import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1</h1>
      <Link to="/p1/dda">Page1-Aへ</Link>
      <br />
      <Link to="/p1/ddb">Page1-Bへ</Link>
    </div>
  );
};
