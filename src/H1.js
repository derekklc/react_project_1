import PropTypes from "prop-types";
import BB from "./But";
import Form1 from "./Form1";

export default function HH({ Tasks, setTasks, label, tt }) {
  const handler1 = () => {
    console.log("Clicked");
  };
  const handler2 = () => {
    console.log("Clicked 2", Tasks);
    let tmp_id = document.getElementById("id_input");
    let tmp_task = document.getElementById("task_input");
    let tmp_rm = document.getElementById("rm_input");
    console.log("check fields: ", tmp_id.value, tmp_task.value, tmp_rm.checked);
    let new_obj = {
      id: tmp_id.value ? tmp_id.value : "task_1",
      label: tmp_task.value ? tmp_task.value : "doc Appointment",
      reminder: tmp_rm.checked ? tmp_rm.checked : true,
    };
    setTasks([new_obj, ...Tasks]);
  };
  const handler3 = () => {
    console.log("Clicked 3");
  };
  return (
    <>
      <div style={someStyle}>{label} H1 Welcomes you</div>
      <div onClick={handler3}>{tt}</div>
      <button onClick={handler2} className="btn1">
        Add
      </button>
      <BB onClick={handler1} color="green" label="BUTTON1 Label"></BB>
      <Form1></Form1>
    </>
  );
}

HH.defaultProps = {
  label: "label here",
};

HH.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const someStyle = {
  backgroundColor: "black",
  color: "white",
};
