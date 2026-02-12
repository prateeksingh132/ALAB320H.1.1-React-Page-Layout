import EmployeeListItem from "./EmployeeListItems.jsx";

export default function EmployeeList({ empList }) {

  // empList is an array, for each individual array element (person), we pass that person to EmployeeListItem componenet (function) as prop, which it accepts it, destructure it into firstname and lastname and then displays (returns) it on DOM using <li>{firstName} {lastName}</li> 
  //let employeeList = empList.map( (person) => <EmployeeListItem emp={person}  /> );

  // filter return
  let filteredList = empList.filter((emp) => { return emp.jobTitle !== ''});

  // Returns value for everyvalue in array in new array
  let employeeList = filteredList.map((person, i ) => {
    return <EmployeeListItem {...person} />;
  });

  return <ul>{employeeList}</ul>;
}
