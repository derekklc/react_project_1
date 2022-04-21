export default function Form1({ children }) {
  return (
    <div className="div1">
      <span className="div1_span">Add New Tasks</span>
      <table>
        {/* <thead>
          <tr>
            <th>abcde</th>
            <th>12345</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <td>ID:</td>
            <td>
              <input id="id_input" type="text"></input>
            </td>
          </tr>
          <tr>
            <td>Task:</td>
            <td>
              <input id="task_input" type="text"></input>
            </td>
          </tr>
          <tr>
            <td>Status:</td>
            <td>
              <div className="table_cell_div_1">
                <input id="rm_input" type="checkbox"></input>
                <inline>Complete</inline>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {children}
    </div>
  );
}
