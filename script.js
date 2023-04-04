//your JS code here. If required.
function updateOutput() {
return new Promise((resolve, reject) => {
setTimeout(() => {
resolve("Hello, world!");
}, 1000);
});
}

const outputElement = document.getElementById("output");
updateOutput().then((message) => {
outputElement.innerText = message;
});