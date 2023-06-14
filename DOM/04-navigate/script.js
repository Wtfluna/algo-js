const olElement = document.querySelector('ol');
const lastChild = olElement.lastElementChild;
olElement.prepend(lastChild);

const section2 = document.querySelector('main > section:nth-child(2)');
const section3 = document.querySelector('main > section:nth-child(3)');
const h2Section2 = section2.querySelector('h2');
const h2Section3 = section3.querySelector('h2');

section2.insertBefore(h2Section3, section2.firstChild);
section3.insertBefore(h2Section2, section3.firstChild);

const lastSection = document.querySelector('main > section:last-child');
lastSection.remove();