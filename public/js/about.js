document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
    const nameInput = form.name.value.trim();
    const emailInput = form.email.value.trim();
    const messageInput = form.message.value.trim();
    const reason = form.reason.value.trim();

  const submitMessage = document.querySelector(".contact-form__sent-message");

  /* LIVE VALIDATION */
  nameInput.addEventListener("input", () => {
    validateText(nameInput);
  });
  messageInput.addEventListener("input", () => {
    validateText(messageInput);
  });
  emailInput.addEventListener("input", () => {
    validateEmailInput(emailInput);
  });

  /* VALIDATES INPUTS WHEN THEY LOSE FOCUS */
  [nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener("blur", () => {
      if (input.value.trim()) {
        input.classList.add("success");
        input.classList.remove("error");
      }
    });
  });

  /* SUBMIT VALIDATION */
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const isNameValid = validateText(nameInput);
    const isEmailValid = validateEmailInput(emailInput);
    const isMessageValid = validateText(messageInput);

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      alert("Please fix the highlighted fields.");
      return;
    }
    // MAKE MODEL
    // alert("Thank you! Your message has been submitted.");
    // submitMessage.classList.remove('hidden');
    form.reset();
    clearStyles();
  });
});

/* HELPER METHODS */
function validateForm() {
  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    messageInput.value === "" ||
    commentBox.value === "" ||
    reason.value === ""
  ) {
    errorBox.textContent = 'Please fill out all required forms.';
    errorBox.style.color = 'firebrick';
  } else {
    alert('Thank you for reaching out to Bagel Bites! We will get back to you shortly.');
    clearForm();
  }
}

// function validateText(input) {
//   if (!input.value.trim()) {
//     input.classList.add("error");
//     input.classList.remove("success");
//     return false;
//   }

//   input.classList.remove("error");
//   input.classList.add("success");
//   return true;
// }

// function validateEmailInput(input) {
//   if (!validateEmail(input.value.trim())) {
//     input.classList.add("error");
//     input.classList.remove("success");
//     return false;
//   }

//   input.classList.remove("error");
//   input.classList.add("success");
//   return true;
// }


// function validateText(input) {
//   if (!input.value.trim()) {
//     input.classList.add("error");
//     input.classList.remove("success");
//     return false;
//   }
//   return true;
// }

// function validateEmailInput(input) {
//   if (!validateEmail(input.value.trim())) {
//     input.classList.add("error");
//     input.classList.remove("success");
//     return false;
//   }
//   return true;
// }

// function validateEmail(email) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// function clearStyles() {
//   document
//     .querySelectorAll(".error, .success")
//     .forEach(el => el.classList.remove("error", "success"));
// }
