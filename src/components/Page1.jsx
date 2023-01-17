import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
//ここにOutletをいれてapp-p1-p1deaの橋渡し
//https://qiita.com/naoki-funawatari/items/db19c0d9e743e790e587
export const Page1 = () => {
  return (
    <div>
      <h1>Page1</h1>
      <Link to="/p1/dda">Page1-Aへ</Link>
      <br />
      <Link to="/p1/ddb">Page1-Bへ</Link>
      <Outlet />
    </div>
  );
};
