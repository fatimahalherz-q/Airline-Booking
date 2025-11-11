document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop form from submitting automatically

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    
    // checking
    if (email === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    }
    /* Regular expression to validate email
     * 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address (example@gmail.com).");
      return;
    }
    */
    alert("Login successful! Redirecting...");
    window.location.href = "HomePage.html"; // Redirect to main page
  });
});
