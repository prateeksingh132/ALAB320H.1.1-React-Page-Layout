import { createContext, useState, useContext } from "react";

// Creates the context you will later give value too
// make sure you export
export const EmployeeContext = createContext(null);

// Created special REACT component to provide context
export default function EmployeeProvider({ children }) {
    // created to use
    const [current, setCurrent] = useState(null);

    // created a value object to collect/passdown to context
    let value = {
        current,
        setCurrent,
    };

    // Create context provider and passed above value
    return (
        <EmployeeContext.Provider value={value}>
            {children}
        </EmployeeContext.Provider>
    );
}


// Cheeky Function, lets your avoid multiple imports when using your context (optional)
export function useEmployeeContext() {
    return useContext(EmployeeContext);
}