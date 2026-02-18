# useContext

- `createContext` - this allows us to create a context to share and provides the initial context value
- `<Context.Provider>{children}</Context.Provider>` - xml like tag that allows us to provide a value to children components.
  - Has to be used inside the `return` statment of a react component
  - Has to be a parent to the components it wants to share its values with.

# Using context for state MGMT and avoiding prop drilling

- Always start with normal state, as program grows then consider context

1.  create a contexts folder in your src
2.  create a file for that specific context
3.  Import `createContext` and create context to use
    - `const EmployeeContext = createContext()`
4.  created custom react component to provide context values.
    - inside that component create state/functions/values/reducers you want to provide
    - ` <EmployeeContext.Provider value={value}>
  {children}
</EmployeeContext.Provider>`
5.  Wrapped custom componet around `<App/>`, within the main.jsx
6.  In components that need context values import context and useContext hook