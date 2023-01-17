import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const CssPrac = () => {
  return (
    <div>
      <h1>CSSPrac</h1>
      <Link to="/css/inline">inline</Link>
      <br />
      <Link to="/css/cssModlue">cssModlue</Link>

      <br />
      <Outlet />
      <br />
    </div>
  );
};
