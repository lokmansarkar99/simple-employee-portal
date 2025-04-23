const employees = [
    { id: 1, name: "Alice", dept: "HR", salary: 3500 },
    { id: 2, name: "Bob", dept: "Engineering", salary: 5000 },
    { id: 3, name: "Charlie", dept: "Finance", salary: 4200 },
    { id: 4, name: "David", dept: "Engineering", salary: 6000 },
    { id: 5, name: "Eva", dept: "HR", salary: 3000 }
  ];

  //fomat and display all employees
  const formattedEmloyees = employees.map((employee) => {
    return ` Name: ${employee.name} - Dept: ${employee.dept} - Salary: ${employee.salary} `
  })
    console.log("Formatted Employees: ", formattedEmloyees); // [ ' Name: Alice - Dept: HR - Salary: 3500 ', ... ]

    //filter employees with salary > 4000
    const highsalaryEmployees = employees.filter((employee) => {
        return employee.salary > 4000;
    } )
    console.log("High Salary Employees: ", highsalaryEmployees); // [ { id: 2, name: 'Bob', dept: 'Engineering', salary: 5000 }, ... ]
    // fomat and display high salary employees
    const formattedHighSalaryEmployees = highsalaryEmployees.map((employee) => {
        return ` Name: ${employee.name} - Dept: ${employee.dept} - Salary: ${employee.salary} `
      })
        console.log("Formatted High Salary Employees: ", formattedHighSalaryEmployees); // [ ' Name: Bob - Dept: Engineering - Salary: 5000 ', ... ]
    //reduce employees salary
    const totalSalary = employees.reduce((acc, employee) => {
        return acc + employee.salary;
    }, 0)
    console.log("Total Salary: ", totalSalary); // 27000


    //sort employees by salary in ascending order
    const sortedEmployees = employees.sort((a, b) => a.salary - b.salary);
    console.log("Sorted Employees: ", sortedEmployees); // [ { id: 5, name: 'Eva', dept: 'HR', salary: 3000 }, ... ]
    //sort employees by salary in descending order
    const sortedEmployeesDesc = employees.sort((a, b) => b.salary - a.salary);
    console.log("Sorted Employees Desc: ", sortedEmployeesDesc); // [ { id: 4, name: 'David', dept: 'Engineering', salary: 6000 }, ... ]
    //sort employees by name in ascending order
    const sortedEmployeesByName = employees.sort((a, b) => a.name.localeCompare(b.name));
    console.log("Sorted Employees By Name: ", sortedEmployeesByName); // [ { id: 1, name: 'Alice', dept: 'HR', salary: 3500 }, ... ]
    //sort employees by name in descending order
    const sortedEmployeesByNameDesc = employees.sort((a, b) => b.name.localeCompare(a.name));
    console.log("Sorted Employees By Name Desc: ", sortedEmployeesByNameDesc); // [ { id: 5, name: 'Eva', dept: 'HR', salary: 3000 }, ... ]