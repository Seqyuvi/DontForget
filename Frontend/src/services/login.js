import axios from "axios";
console.log("asdasd")
const form = document.getElementById("loginForm");
const errorDiv = document.getElementById("error-message");
// ... ваш код ...
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await axios.post("/api/auth/login", {
      username,
      password,
    });
    localStorage.setItem("token", response.data.token);
    window.location.href = "/"; // Перенаправляем после входа
  } catch (error) {
    errorDiv.textContent =
      error.response?.data?.message || error.message || "Login failed";
  }
});
