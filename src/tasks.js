import { FaTimes } from "react-icons/fa";

export default function ({ tasks, handler4 }) {
  function C1(e) {
    console.log("Check item: ", e.target);
    //   let tmp = tasks.filter(r => r.id != )
  }

  //   console.log("FONTS: ", AA);

  return (
    <>
      <div>TASKS</div>
      {tasks &&
        tasks.map((r) => (
          <div className="task_row" onClick={handler4} id={r.id} key={r.id}>
            <FaTimes></FaTimes>
            {r.label}
          </div>
        ))}
      {/* {lib.map((r) => (
        <div onClick={C1} style={{ cursor: "pointer" }} key={r.id}>
          <div>{r.label}</div>
          <div>{r.reminder}</div>
        </div>
      ))} */}
    </>
  );
}
