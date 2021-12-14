// Use any only as a last resort
function showMessage(msg: any) {
    return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage("sup"));
console.log(showMessage(true));
