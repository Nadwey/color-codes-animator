/**
 * Returns array with specified element repeated `size` times.
 *
 * @param {number} size How many times repeat.
 * @param {any} element Element to repeat.
 * @returns {Array<any>}
 */
function repeatElement(size, element) {
    return Array.apply(null, Array(size)).map(function () {
        return element;
    });
}

function appendFixes(str) {
    const baseColor = document.getElementById("input-base").value;
    const prefix = document.getElementById("prefix-input").value;
    const suffix = document.getElementById("suffix-input").value;

    return prefix + baseColor + str + suffix;
}

function animateText() {
    const inputStr = document.getElementById("input-text").value;
    const inputAnimation = document.getElementById("input-animation").value;
    const baseColor = document.getElementById("input-base").value;

    let steps = [];

    // beginning 8 times of original text
    steps.push(...repeatElement(8, appendFixes(inputStr)));

    // insert animation at every position
    for (let i = 0; i < inputStr.length; i++) {
        steps.push(appendFixes(`${inputStr.slice(0, i)}${inputAnimation}${inputStr[i]}&r${baseColor}${inputStr.slice(i + 1)}`));
    }

    // end 8 times of original text
    steps.push(...repeatElement(8, appendFixes(inputStr)));

    document.getElementById("output-text").value = steps.join("\n");
}
