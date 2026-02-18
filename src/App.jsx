import "./App.css";
import HomePage from "./components/HomePage.jsx";
import EmployeePage from "./components/EmployeePage.jsx";
import employeeList from "./utlities/empData.js";


function App() {
  return (
    <>
      <HomePage empList={employeeList} />
      <EmployeePage />
    </>
  );
}

export default App;