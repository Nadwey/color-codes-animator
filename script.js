const animations = [
    {
        name: "Left to right",
        id: "lefttoright",
        arguments: [
            {
                name: "Base style",
                type: "string",
                id: "basestyle",
                default: "&6"
            },
            {
                name: "Animation style",
                type: "string",
                id: "animationstyle",
                default: "&e"
            },
            {
                name: "Animation padding (frames without animation)",
                type: "number",
                id: "animationPadding",
                default: 8,
            },
        ],
        func: leftToRight,
    },
    {
        name: "RainbowHue",
        id: "rainbowhue",
        arguments: [
            {
                name: "Rainbow steps",
                type: "number",
                id: "rainbowSteps",
                default: "50"
            },
            {
                name: "Hue change",
                type: "number",
                id: "hueChange",
                default: "5"
            },
            {
                name: "Additional styles",
                type: "string",
                id: "additionalStyles"
            }
        ],
        func: rainbowHue,
    },
];

function displayAnimations() {
    const selectElement = document.getElementById("animation-type");

    for (const animation of animations) {
        let option = document.createElement("option");
        option.value = animation.id;
        option.innerText = animation.name;

        selectElement.appendChild(option);
    }
}

function updateAnimationPanel() {
    const selectedAnimationType = document.getElementById("animation-type").value;
    const animationPanel = document.getElementById("animation-panel");
    const animation = animations.find(e => e.id === selectedAnimationType);


    animationPanel.innerHTML = "";

    for (const argument of animation.arguments) {
        switch (argument.type) {
            case "string": {
                let input = document.createElement("input");
                input.type = "text";
                input.id = argument.id;
                if (typeof argument.default !== "undefined") input.value = argument.default;

                animationPanel.appendChild(divWithLabelAndElement(argument.name, input));
                break;
            }
            case "number": {
                let input = document.createElement("input");
                input.type = "number";
                input.id = argument.id;
                if (typeof argument.default !== "undefined") input.value = argument.default;

                animationPanel.appendChild(divWithLabelAndElement(argument.name, input));
                break;
            }
        }
    }

    animateText();
    preview();
}

function animateText() {
    const animationType = document.getElementById("animation-type").value;
    const animation = animations.find(e => e.id === animationType);

    let parsedArguments = {};

    for (const argument of animation.arguments) {
        switch (argument.type) {
            case "string": {
                parsedArguments[argument.id] = document.getElementById(argument.id).value;
                break;
            }
            case "number": {
                parsedArguments[argument.id] = parseFloat(document.getElementById(argument.id).value);
                break;
            }
        }
    }

    const inputStr = document.getElementById("input-text").value || "Text to animate";

    console.log(parsedArguments);

    document.getElementById("output-text").value = animation.func(inputStr, parsedArguments);
    preview();
}

window.onload = displayAnimations();
document.getElementById("animation-type").onchange = updateAnimationPanel;
updateAnimationPanel();

document.getElementById("animation-delay").oninput = () => {
    const delay = document.getElementById("animation-delay").value;
    document.getElementById("animation-delay-value").innerText = delay;

}
