const employees = [];

const form = document.getElementById('employeeForm');
const nameInput = document.getElementById('empName');
const ageInput = document.getElementById('empAge');
const deptInput = document.getElementById('empDept');
const salaryInput = document.getElementById('empSalary');
const tableBody = document.querySelector('#employeeTable tbody');


function displayEmployees() {
   
    tableBody.innerHTML = "";

    
    employees.forEach(emp => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${emp.name}</td>
            <td>${emp.age}</td>
            <td>${emp.department}</td>
            <td>${emp.salary}</td>
        `;
        tableBody.appendChild(row);
    });
}

form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    const name = nameInput.value.trim();
    const ageStr = ageInput.value.trim();
    const department = deptInput.value.trim();
    const salaryStr = salaryInput.value.trim();

    
    if (name === "" || ageStr === "" || department === "" || salaryStr === "") {
        alert("Please fill in all fields.");
        return;
    }

    const age = Number(ageStr);
    const salary = Number(salaryStr);

    if (isNaN(age) || age <= 0) {
        alert("Please enter a valid positive number for age.");
        return;
    }

    if (isNaN(salary) || salary <= 0) {
        alert("Please enter a valid positive number for salary.");
        return;
    }

    const employeeObj = {
        name: name,
        age: age,
        department: department,
        salary: salary
    };

    employees.push(employeeObj);

    
    displayEmployees();

    
    form.reset();
});