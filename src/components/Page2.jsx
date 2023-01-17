import { Link, Outlet, useLocation } from "react-router-dom";

export const Page2 = () => {
  const { search } = useLocation();
  const quary = new URLSearchParams(search);
  console.log(quary);
  return (
    <div>
      <h1>Page2</h1>
      <p>クエリParam(?name=)は{quary.get("name")} だ</p>
      <Outlet />
    </div>
  );
};
