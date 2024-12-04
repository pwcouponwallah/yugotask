const backendURL = "https://yugotask-backend.onrender.com";

document.getElementById("task-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("task-name").value;
    const deadline = document.getElementById("task-deadline").value;

    const response = await fetch(`${backendURL}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, deadline }),
    });

    if (response.ok) {
        alert("Task added!");
        document.getElementById("task-form").reset();
    } else {
        alert("Error adding task.");
    }
});
