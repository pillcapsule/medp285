document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("aside button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const message = document.createElement("p");
      message.textContent = "Thanks for your response.";
      message.classList.add("feedback-message");

    
      const existing = button.parentElement.querySelector(".feedback-message");
      if (!existing) {
        button.parentElement.appendChild(message);
      }
    });
  });
});
