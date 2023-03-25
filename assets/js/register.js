function togglePassword() {
  document.querySelectorAll(".eye")
    .forEach(eye => eye.classList.toggle("hide"));
  
    const type = senha.getAttribute("type") == "password" ? "text" : "password";

    senha.setAttribute("type", type);
}

function togglePasswordConfirmed() {
  document.querySelectorAll(".eye")
    .forEach(eye => eye.classList.toggle("hide"));

    const type = senha_confirmed.getAttribute("type") == "password" ? "text" : "password";

    senha_confirmed.setAttribute("type", type);
}