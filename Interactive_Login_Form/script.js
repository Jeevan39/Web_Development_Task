document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMessage = document.getElementById("errorMessage");

    if (username === "" || password === "") {
      errorMessage.textContent = "All fields are required!";
      return;
    }

    // Simulating authentication (replace this with actual backend authentication)
    if (username === "admin" && password === "admin123") {
      alert("Login successful!");
      window.location.href = "dashboard.html"; // Redirect after login
    } else {
      errorMessage.textContent = "Invalid username or password!";
    }
  });
