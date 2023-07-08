  let passwordInput = document.getElementById('password');
  let confirmPasswordInput = document.getElementById('Cpassword');
  let passwordError = document.getElementById('passwordError');

  function validatePassword() {
    if (passwordInput.value !== confirmPasswordInput.value) {
      passwordError.textContent = "Passwords do not match.";
    } else {
      passwordError.textContent = "";
    }
  }

  confirmPasswordInput.addEventListener('input', validatePassword);
