import { useNavigate } from "react-router-dom";

export const Page1DeB = () => {
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>Page1-B</h1>
      <button onClick={onClickBack}>back</button>
    </div>
  );
};
