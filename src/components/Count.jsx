import "../styles.css";
import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";

export function Count() {
  const [num, setNum] = useState(0);
  const [intext, setText] = useState("");
  const [flagOpen, setflagOpen] = useState(false);

  const onChangeText = (event) => {
    setText(event.target.input);
  };
  const onClickOpen = (event) => {
    setflagOpen(!flagOpen);
  };
  const onClickClose = useCallback((event) => {
    setflagOpen(false);
  }, []);
  const tmp = useMemo(() => 1 + 2, []); //一回だけ計算
  console.log(tmp);
  //再生成しないのでから
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        CountUp
      </button>
      <p>{num}</p>
      <br />
      <br />
      <input value={intext} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea flagOpen={flagOpen} onClickClose={onClickClose} />
    </div>
  );
}
