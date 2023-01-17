import { Link, Outlet } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h1>NotFound 404</h1>
      <Link to="/">Homeへ</Link>
    </div>
  );
};
