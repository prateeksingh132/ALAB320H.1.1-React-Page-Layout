import { useEmployeeContext } from "../context/AppContext.jsx";

export default function EmployeeListItem({ firstName, lastName, person }) {
  // Desctructuring of setCurrent from context
  const { setCurrent } = useEmployeeContext();

  return (
    <li
      onClick={() => {
        setCurrent(person);
      }}
    >
      {firstName} {lastName}
    </li>
  );
}