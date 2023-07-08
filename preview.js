let interval = null;
let currentStep = 0;

function preview() {
    const animation = document.getElementById("output-text").value;
    const steps = animation.split("\n");
    currentStep = 0;

    clearInterval(interval);
    interval = setInterval(() => {
        document.getElementById("preview").innerHTML = parseMinecraftString(steps[currentStep]);
        currentStep++;

        if (currentStep >= steps.length) {
            currentStep = 0;
        }
    }, document.getElementById("animation-delay").value);
}
