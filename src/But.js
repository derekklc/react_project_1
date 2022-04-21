const BB = (p) => {
  return (
    <button onClick={p.onClick} className="btn1 red_button">
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
