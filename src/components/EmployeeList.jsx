import EmployeeListItem from "./EmployeeListItems.jsx";

export default function EmployeeList({ empList }) {

  // filter return
  let filteredList = empList.filter((emp) => { return emp.jobTitle !== ''});

  // Returns value for everyvalue in array in new array
  let employeeList = filteredList.map((person, i ) => {
    return <EmployeeListItem {...person} />;
  });

  return <ul>{employeeList}</ul>;
}
