console.log(document.title);

document.title = "Modifying the DOM";

const bodyChildren = document.body.children[1].children;
for (const child of bodyChildren) {
    console.log(child);
}

const randomColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
document.body.style.backgroundColor = randomColor;

function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}