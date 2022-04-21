export default function Form1() {
  return (
    <div className="div1">
      <div className="div2">
        <div>ID:</div>
        <input id="id_input" type="text"></input>
      </div>
      <div className="div2">
        <div>Task:</div>
        <input id="task_input" type="text"></input>
      </div>
      <div className="div2">
        <div>Reminder:</div>
        <input id="rm_input" type="checkbox"></input>
      </div>
    </div>
  );
}
