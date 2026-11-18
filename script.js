
let budget = 10000;

let expenses = [];

const form = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");

function updateDashboard() {
    let total = 0;

    // Loop through all expense records
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    let remaining = budget - total;

    document.getElementById("total").textContent = total;
    document.getElementById("remaining").textContent = remaining;

    // Conditional statements
    if (total > budget) {
        document.getElementById("message").textContent =
            "Warning! You have exceeded your budget.";
    } else if (total === budget) {
        document.getElementById("message").textContent =
            "You have used your entire budget.";
    } else {
        document.getElementById("message").textContent =
            "Good job! You are within your budget.";
    }

    // Update expense records on the webpage
    expenseList.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {
        let item = document.createElement("li");

        item.textContent =
            expenses[i].name + " - KES " + expenses[i].amount;

        expenseList.appendChild(item);
    }
}

// Handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("expenseName").value;
    let amount = Number(document.getElementById("expenseAmount").value);

    if (name.trim() === "" || amount <= 0 || !Number.isFinite(amount)) {
        alert("Please enter a valid expense.");
        return;
    }

    // Store expense in array
    expenses.push({
        name: name,
        amount: amount
    });

    form.reset();

    updateDashboard();
});

// Display initial dashboard
updateDashboard();
