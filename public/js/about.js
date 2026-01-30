const form = document.querySelector(".contact-form");
// const submitBtn = document.querySelector(".contact-form__btn");
const sentMessage = form.querySelector(".contact-form__sent-message");
const characterOutput = document.querySelector("#character-output");

const nameInput = form.name;
const emailInput = form.email;
const messageInput = form.message;
const reasonSelect = form.reason;

characterOutput.textContent = "0 / 500";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateForm()) {
    try {
      // POST to DB
      const response = await fetch("/contact")
      form.reset();
    } catch {
      // Error
    }
  }
})

messageInput.addEventListener("input", (e) => {
  const currentLength = messageInput.value.length;
  characterOutput.textContent = `${currentLength} / 500`;
})

function validateForm() {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;

  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    !regex.test(emailInput.value) ||
    messageInput.value === "" ||
    reasonSelect.value === ""
  ) {
    sentMessage.textContent = "Please fill out all required forms.";
    sentMessage.style.color = "firebrick";
    return false;
  } else {
    sentMessage.textContent = "Thank you for reaching out! We will get back with you shortly.";
    return true;
  }
}

// function clearForm() {
//   firstName.value = '';
//   lastName.value = '';
//   email.value = '';
//   commentBox.value = '';
//   errorBox.textContent = '';
// }

// function showError(msg) {
//   sentMessage.textContent = msg;
//   sentMessage.style.color = "firebrick";
// }