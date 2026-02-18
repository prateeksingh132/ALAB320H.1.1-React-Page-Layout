import Header from "./Header";
import { useEmployeeContext } from "../context/AppContext";

export default function EmployeePage() {
    const { current } = useEmployeeContext();

    let style = { display: "flex", flexDirection: "column", textAlign: "center" };

    return (
        <div style={style}>
            <Header>Employee</Header>
            {current ? (
                <>
                    <h1>
                        {current.firstName} {current.lastName}
                    </h1>
                    <h3>{current.jobTitle}</h3>
                    <p>{current.mobileNum}</p>
                </>
            ) : (
                <h2>No Employee Selected</h2>
            )}
        </div>
    );
}