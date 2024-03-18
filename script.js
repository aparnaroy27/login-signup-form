document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (data.token) {
            localStorage.setItem("token", data.token);
            alert("Login successful!");
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error("Error:", error);
    }
});

document.getElementById("signupForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    try {
        const response = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });
        const data = await response.json();
        if (data.token) {
            localStorage.setItem("token", data.token);
            alert("Signup successful!");
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error("Error:", error);
    }
});
