const employees = [
    { id: 1, name: "Alice", dept: "HR", salary: 3500 },
    { id: 2, name: "Bob", dept: "Engineering", salary: 5000 },
    { id: 3, name: "Charlie", dept: "Finance", salary: 4200 },
    { id: 4, name: "David", dept: "Engineering", salary: 6000 },
    { id: 5, name: "Eva", dept: "HR", salary: 3000 },
    { id: 6, name: "Frank", dept: "Marketing", salary: 3800 },
    { id: 7, name: "Grace", dept: "Finance", salary: 4700 },
    { id: 8, name: "Hannah", dept: "Engineering", salary: 5300 },
    { id: 9, name: "Ian", dept: "HR", salary: 3100 },
    { id: 10, name: "Jane", dept: "Engineering", salary: 6200 }
  ];
  
  
      let currentEmployees = [...employees];
  
      function display(employeesList) {
        const list = document.getElementById("employeeList");
        list.innerHTML = "";
        employeesList.forEach(e => {
          const row = document.createElement("tr");
          row.innerHTML = `<td>${e.name}</td><td>${e.dept}</td><td>$${e.salary}</td>`;
          list.appendChild(row);
        });
        const total = employeesList.reduce((acc, e) => acc + e.salary, 0);
        document.getElementById("totalSalary").textContent = `$${total}`;
      }
  
      function displayAll() {
        currentEmployees = [...employees];
        display(currentEmployees);
      }
  
      function filterHighSalary() {
        const filtered = employees.filter(e => e.salary > 4000);
        currentEmployees = filtered;
        display(filtered);
      }
  
      function sortSalaryAsc() {
        const sorted = [...currentEmployees].sort((a, b) => a.salary - b.salary);
        display(sorted);
      }
  
      function sortSalaryDesc() {
        const sorted = [...currentEmployees].sort((a, b) => b.salary - a.salary);
        display(sorted);
      }
  
      function sortNameAsc() {
        const sorted = [...currentEmployees].sort((a, b) => a.name.localeCompare(b.name));
        display(sorted);
      }
  
      function sortNameDesc() {
        const sorted = [...currentEmployees].sort((a, b) => b.name.localeCompare(a.name));
        display(sorted);
      }
  
      // Initial display
      displayAll();