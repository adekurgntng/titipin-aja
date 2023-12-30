document.addEventListener("DOMContentLoaded", function () {
  const hmenuButton = document.getElementById("hmenu");
  const navbarNav = document.querySelector(".navbar-nav");

  hmenuButton.addEventListener("click", function () {
    navbarNav.classList.toggle("active");
  });

  const openRegistrationPopupButton = document.getElementById(
    "openRegistrationPopup"
  );
  const registerButton = document.getElementById("registerButton");
  const verifyButton = document.getElementById("verifyButton");
  const openLoginPopupButton = document.getElementById("openLoginPopup");
  const registrationPopup = document.getElementById("registrationPopup");
  const loginPopup = document.getElementById("loginPopup");

  openRegistrationPopupButton.addEventListener("click", function (event) {
    event.preventDefault();
    registrationPopup.style.display = "block";
  });

  registerButton.addEventListener("click", function (event) {
    event.preventDefault();
    registrationPopup.style.display = "none";
    emailVerificationPopup.style.display = "block";
  });

  verifyButton.addEventListener("click", function () {
    const isVerificationSuccessful = true;

    if (isVerificationSuccessful) {
      emailVerificationPopup.style.display = "none";
      loginPopup.style.display = "block";
    } else {
      console.log("Verifikasi email gagal");
    }
  });

  openLoginPopupButton.addEventListener("click", function (event) {
    event.preventDefault();
    loginPopup.style.display = "block";
  });

  function closePopup() {
    registrationPopup.style.display = "none";
    loginPopup.style.display = "none";
  }

  window.addEventListener("click", function (event) {
    if (event.target === registrationPopup || event.target === loginPopup) {
      closePopup();
    }
  });

  const closeBtns = document.querySelectorAll(".close-btn");
  closeBtns.forEach(function (closeBtn) {
    closeBtn.addEventListener("click", closePopup);
  });

  const loginLink = document.getElementById("loginLink");
  const registerLink = document.getElementById("registerLink");

  loginLink.addEventListener("click", function (event) {
    event.preventDefault();
    closePopup();
    loginPopup.style.display = "block";
  });

  registerLink.addEventListener("click", function (event) {
    event.preventDefault();
    closePopup();
    registrationPopup.style.display = "block";
  });
});
