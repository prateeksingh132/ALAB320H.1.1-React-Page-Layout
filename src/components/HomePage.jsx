import Header from "./Header.jsx";
import SearchBar from "./SearchBar.jsx";
import EmployeeList from "./EmployeeList.jsx";

export default function HomePage({ empList }) {
  return (
    <section>
      <Header>Employee Directory</Header>
      <SearchBar />
      <EmployeeList empList={empList} />
    </section>
  );
}