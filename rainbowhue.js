function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        (s = h.s), (v = h.v), (h = h.h);
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
            (r = v), (g = t), (b = p);
            break;
        case 1:
            (r = q), (g = v), (b = p);
            break;
        case 2:
            (r = p), (g = v), (b = t);
            break;
        case 3:
            (r = p), (g = q), (b = v);
            break;
        case 4:
            (r = t), (g = p), (b = v);
            break;
        case 5:
            (r = v), (g = p), (b = q);
            break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255),
    };
}

function rainbow(p) {
    var rgb = HSVtoRGB((p / 100.0), 1.0, 1.0);
    return "#" + rgb.r.toString(16).padStart(2, 0) + rgb.g.toString(16).padStart(2, 0) + rgb.b.toString(16).padStart(2, 0);
}

function rainbowHue(inputStr, arguments) {
    const rainbowSteps = arguments.rainbowSteps;
    const hueChange = arguments.hueChange;
    const additionalStyles = arguments.additionalStyles;

    const times = rainbowSteps;

    let steps = [];

    // insert animation at every position
    for (let i = 0; i < times; i++) {
        let step = "";
        for (let j = 0; j < inputStr.length; j++) {
            step += `&${rainbow(i * (100 / rainbowSteps) + j * hueChange)}${additionalStyles}${inputStr[j]}`;
        }
        steps.push(appendFixes(step));
    }

    return steps.join("\n");
}
