export const Inline = () => {
  const contstyle = { border: "solid", padding: "8px", display: "flex" };
  const titlestyle = { color: "pink" };
  const buttonstyle = { border: "none", padding: "8px" };

  return (
    <div style={contstyle}>
      <h1>Inline</h1>
      <p style={titlestyle}>FIGHT</p>
      <button style={buttonstyle}>おす</button>
    </div>
  );
};
