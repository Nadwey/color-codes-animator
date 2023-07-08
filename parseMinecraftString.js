const styles = {
    0: "color: #000000;",
    1: "color: #0000AA;",
    2: "color: #00AA00;",
    3: "color: #00AAAA;",
    4: "color: #AA0000;",
    5: "color: #AA00AA;",
    6: "color: #FFAA00;",
    7: "color: #AAAAAA;",
    8: "color: #555555;",
    9: "color: #5555FF;",
    a: "color: #55FF55;",
    b: "color: #55FFFF;",
    c: "color: #FF5555;",
    d: "color: #FF55FF;",
    e: "color: #FFFF55;",
    f: "color: #FFFFFF;",
    k: "animation: TODO;",
    l: "font-weight: bold;",
    m: "text-decoration: line-through;",
    n: "text-decoration: underline;",
    o: "font-style: italic;",
    r: null,
};

/**
 * Parses a minecraft color code string
 *
 * @param {string} str
 * @returns {string}
 */
function parseMinecraftString(str) {
    let currentStyle = [];
    let currentText = "";
    let output = [];

    function setStyle(style) {
        const type = style.split(":")[0];

        let newStyle = currentStyle.filter((e) => e.split(":")[0] !== type);
        newStyle.push(style);

        currentStyle = newStyle;
    }

    function applyStyle() {
        output.push(`<span style="${currentStyle.join(" ")}">${currentText}</span>`);
        currentText = "";
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "&") {
            i++;
            if (str[i] === "#") {
                applyStyle();
                i++;
                setStyle(`color: #${str.substring(i, i + 6)};`);
                i += 5;
            } else if (str[i] in styles) {
                applyStyle();
                if (styles[str[i]] === null) {
                    currentStyle = [];
                } else {
                    setStyle(styles[str[i]]);
                }
            }
            else {
                currentText += "&" + str[i];
                continue;
            }
        }
        else if (i === str.length - 1) {
            currentText += str[i];
            applyStyle();
        }
        else {
            currentText += str[i];
        }
    }

    return output.join("");
}
