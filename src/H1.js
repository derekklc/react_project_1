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
  return (
    <>
      <div className="tasks_row_container" id="tasks_row_1_container">
        <div className="tasks_title">Task Tracker</div>
      </div>
      <Form1
        children={
          <button onClick={handler2} className="btn1 green_button">
            Add
          </button>
        }
      ></Form1>
      <BB onClick={handler1} label="Remove Completed"></BB>
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
