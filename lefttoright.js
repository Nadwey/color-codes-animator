function leftToRight(inputStr, arguments) {
    const baseColor = arguments.basestyle;
    const inputAnimation = arguments.animationstyle;

    let steps = [];

    // beginning 8 times of original text
    steps.push(...repeatElement(8, appendFixes(baseColor + inputStr)));

    // insert animation at every position
    for (let i = 0; i < inputStr.length; i++) {
        steps.push(appendFixes(`${baseColor}${inputStr.slice(0, i)}${inputAnimation}${inputStr[i]}&r${baseColor}${inputStr.slice(i + 1)}`));
    }

    // end 8 times of original text
    steps.push(...repeatElement(8, appendFixes(baseColor + inputStr)));

    return steps.join("\n");
}
