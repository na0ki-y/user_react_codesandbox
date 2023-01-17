import { Outlet, useLocation } from "react-router-dom";

export const Page1DeA = () => {
  const location = useLocation();
  const { test, arr, a } = location.state;
  return (
    <div>
      <h1>Page1-A</h1>
      <p>
        以下はstateで受け取ったもの licationの中に入る
        locationはクエリパラメータも含む
      </p>
      <p>{test}</p>
      <p>{arr}</p>
      <p>{a}</p>
      以上
      <Outlet />
    </div>
  );
};
