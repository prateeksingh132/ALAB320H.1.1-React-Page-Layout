import Header from "./Header.jsx";
import SearchBar from "./SearchBar.jsx";
import EmployeeList from "./EmployeeList.jsx";

export default function HomePage() {
  return (
    <section>
      <Header />
      <SearchBar />
      <EmployeeList />
    </section>
  );
}
