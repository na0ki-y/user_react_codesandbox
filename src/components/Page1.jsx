import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
//ここにOutletをいれてapp-p1-p1deaの橋渡し
//https://qiita.com/naoki-funawatari/items/db19c0d9e743e790e587
export const Page1 = () => {
  const arr1 = [...Array(100).keys()];
  const navigatee = useNavigate();
  const onClickSeni = () => {
    navigatee("/p1/ddb");
  };

  return (
    <div>
      <h1>Page1</h1>
      <Link to="/p1/dda" state={{ test: "aaa", arr: arr1 }}>
        Page1-Aへ
      </Link>
      <br />
      <Link to="/p1/ddb">Page1-Bへ</Link>
      <button onClick={onClickSeni}>遷移1-db</button>
      
      <Outlet />
      <br />
    </div>
  );
};
