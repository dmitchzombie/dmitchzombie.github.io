let currentStep = 1;

function showStep(step) {
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";

    document.getElementById("step" + step).style.display = "block";

    currentStep = step;
}

function nextStep() {
    if (currentStep < 3) {
        showStep(currentStep + 1);
    }
}

function prevStep() {
    if (currentStep > 1) {
        showStep(currentStep - 1);
    }
}