import { memo } from "react";
const style_child = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki",
};
export const ChildArea = memo((props) => {
  console.log("ChildAreaのレンダリング開始");
  const data = [...Array(200).keys()];
  data.forEach((d) => console.log(".."));
  return (
    <>
      {props.flagOpen ? (
        <div style={style_child}>
          <p>ChildArea!</p>
          <button onClick={props.onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
