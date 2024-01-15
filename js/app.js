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
    document.getElementById("invitation-container-3").classList.add("hidden");
    document.getElementById("response").classList.remove("hidden");
    document.getElementById("messResp").innerHTML =
      "Yey! <br />See you on Feb. 14.";
  } else if (response === "no") {
    document.getElementById("invitation-container-3").classList.add("hidden");
    document.getElementById("response").classList.remove("hidden");
    document.getElementById("messResp").innerHTML =
      "Bawal mag 'no' <br />See you on Feb. 14!";
  }
}
