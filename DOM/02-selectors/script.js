const elements = document.querySelectorAll('.important');
elements.forEach(element => {
    element.setAttribute('title', 'This is an important item');
});

const images = document.querySelectorAll('img');
images.forEach(image => {
    if (!image.classList.contains('important')) {
        image.style.display = 'none';
    }
});

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
    if (paragraph.classList.lenght > 0) {
        console.log(paragraph.classList);
    }
})

const para = document.querySelectorAll('p');
para.forEach(paragraph => {
    if (!paragraph.classList.lenght) {
        const randomColor = getRandomColor();
        paragraph.style.color = randomColor;
    }
});
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}