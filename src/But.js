const BB = (p) => {
  return (
    <button
      onClick={p.onClick}
      style={{ color: p.color, fontSize: "20px" }}
      className="btn1"
    >
      {p.label}
    </button>
  );
};

BB.defaultProps = {
  color: "skyblue",
};

// export default function BB() {
//   return <button className="btn1">abcde</button>;
// }

export default BB;
