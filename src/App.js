import React, { useState, useEffect } from "react";
import "./App.css";
import HH from "./H1";
import TT from "./tasks";

const lib = [
  {
    id: "task_1",
    label: "doc Appointment",
    reminder: true,
  },
  {
    id: "task_2",
    label: "Football",
    reminder: false,
  },
  {
    id: "task_3",
    label: "Dinner",
    reminder: true,
  },
];

const LS_1 = "storage.abcde";

function App() {
  let [tasks, setTasks] = useState(lib);
  // useEffect(() => {
  //   console.log(localStorage.getItem(LS_1));
  // });
  function handler4(e) {
    // console.log(e.target);
    setTasks(tasks.filter((r) => r.id !== e.target.id));
  }
  return (
    <div className="app_main">
      <div className="app_main_inner">
        <HH Tasks={tasks} setTasks={setTasks}></HH>
        <TT handler4={handler4} tasks={tasks}></TT>
      </div>
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <HH></HH>;
//   }
// }

export default App;
