let employees = JSON.parse(localStorage.getItem('employees')) || [];

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
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.age}</td>
            <td>${emp.department}</td>
            <td>${emp.salary}</td>
            <td><button onclick="deleteEmployee(${emp.id})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

displayEmployees();

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
        alert("Age must be a valid positive number.");
        return;
    }

    if (isNaN(salary) || salary <= 0) {
        alert("Salary must be a valid positive number.");
        return;
    }

    const employeeObj = {
        id: Date.now(),
        name: name,
        age: age,
        department: department,
        salary: salary
    };

    employees.push(employeeObj);

    localStorage.setItem('employees', JSON.stringify(employees));
    displayEmployees();

    form.reset();
});

function deleteEmployee(id) {
    employees = employees.filter(emp => emp.id !== id);
    localStorage.setItem('employees', JSON.stringify(employees));
    displayEmployees();
}