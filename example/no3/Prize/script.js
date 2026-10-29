fetch("C")


.then(res => res.json())

.then(data => {let table = document.getElementById("data");

    data.forEach(item => {
        table.innerHTML += `
        <tr>
            <td>${item.title}</td>
            <td>${item.price}</td>
        </tr>`;
    });
});