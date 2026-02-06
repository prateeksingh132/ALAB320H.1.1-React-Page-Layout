import EmployeeListItem from "./EmployeeListItems.jsx";
import employeeList from "../utlities/empData.js";

export default function EmployeeList() {

  let empList = employeeList.map((person) => <EmployeeListItem />)

  return (
    <ul>
      {empList}
    </ul>
  );
}