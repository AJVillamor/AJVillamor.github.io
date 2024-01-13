let currentStep = 1;

function showNextMessage(nextContainerId) {
  const currentContainer = document.getElementById(
    `invitation-container-${currentStep}`
  );
  currentContainer.classList.add("hidden");

  if (currentStep < 3) {
    currentStep++;
    const nextContainer = document.getElementById(nextContainerId);
    nextContainer.classList.remove("hidden");
  }
}

function showPreviousMessage(previousContainerId) {
  if (currentStep > 1) {
    const currentContainer = document.getElementById(
      `invitation-container-${currentStep}`
    );
    currentContainer.classList.add("hidden");

    currentStep--;
    const previousContainer = document.getElementById(previousContainerId);
    previousContainer.classList.remove("hidden");
  }
}

function confirmAttendance(response) {
  if (response === "yes") {
    alert(
      "Thank you for accepting the invitation! Looking forward to our special day together."
    );
  } else if (response === "no") {
    alert(
      "I understand. If you change your mind, feel free to reach out. Happy Valentine's Day!"
    );
  }
}
