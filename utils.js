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
    const prefix = document.getElementById("prefix-input").value;
    const suffix = document.getElementById("suffix-input").value;

    return prefix + str + suffix;
}

/**
 * 
 * @param {string} label 
 * @param {HTMLElement} element 
 */
function divWithLabelAndElement(label, element) {
    let div = document.createElement("div");

    let span = document.createElement("span");
    span.innerText = label + " ";

    div.appendChild(span);
    div.appendChild(element);

    return div;
}