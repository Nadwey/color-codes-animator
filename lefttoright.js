function leftToRight(inputStr, arguments) {
    const baseColor = arguments.basestyle;
    const inputAnimation = arguments.animationstyle;
    const animationPadding = arguments.animationPadding;

    let steps = [];

    // add animation padding to the end
    steps.push(...repeatElement(animationPadding, appendFixes(baseColor + inputStr)));

    // insert animation at every position
    for (let i = 0; i < inputStr.length; i++) {
        steps.push(appendFixes(`${baseColor}${inputStr.slice(0, i)}${inputAnimation}${inputStr[i]}&r${baseColor}${inputStr.slice(i + 1)}`));
    }

    // add animation padding to the end
    steps.push(...repeatElement(animationPadding, appendFixes(baseColor + inputStr)));

    return steps.join("\n");
}
