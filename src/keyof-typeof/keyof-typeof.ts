type ColorsObj = typeof colorsObj;
type ColorsKeys = keyof ColorsObj;

const colorsObj = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
    purple: "#5500FF",
};

function translateColor(color: ColorsKeys, colors: ColorsObj): string {
    return colors[color];
}

console.log(translateColor("red", colorsObj));
console.log(translateColor("green", colorsObj));
console.log(translateColor("purple", colorsObj));
