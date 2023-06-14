# const olElement = document.querySelector('ol');
# const lastChild = olElement.lastElementChild;
# olElement.prepend(lastChild);

* const olElement = document.querySelector('ol');

This line selects the first <ol> element in the document using the querySelector() method and assigns it to the olElement variable. Adjust the selector 'ol' if you have a specific ID or class for your ordered list.

* const lastChild = olElement.lastElementChild;

The lastElementChild property retrieves the last child element of the <ol> element and assigns it to the lastChild variable.

* olElement.prepend(lastChild);

The prepend() method is called on the <ol> element, and the lastChild element is passed as the argument. This moves the last child element to the beginning of the list, as it becomes the new first child.

By executing this code, the last child element of the <ol> tag will be selected and moved to the beginning of the list.

# const section2 = document.querySelector('main > section:nth-child(2)');
# const section3 = document.querySelector('main > section:nth-child(3)');
# const h2Section2 = section2.querySelector('h2');
# const h2Section3 = section3.querySelector('h2');

# section2.insertBefore(h2Section3, section2.firstChild);
# section3.insertBefore(h2Section2, section3.firstChild);

* const section2 = document.querySelector('main > section:nth-child(2)');

This line selects the second <section> element inside the <main> element using the querySelector() method with the CSS selector 'main > section:nth-child(2)'. It assigns the selected element to the variable section2.

* const section3 = document.querySelector('main > section:nth-child(3)');

Similarly, this line selects the third <section> element inside the <main> element using the querySelector() method with the CSS selector 'main > section:nth-child(3)'. It assigns the selected element to the variable section3.

* const h2Section2 = section2.querySelector('h2');

This line selects the <h2> element within section2 by calling the querySelector() method on section2 and passing the selector 'h2'. It assigns the selected <h2> element to the variable h2Section2.

* const h2Section3 = section3.querySelector('h2');

Similarly, this line selects the <h2> element within section3 and assigns it to the variable h2Section3.

* section2.insertBefore(h2Section3, section2.firstChild);

The insertBefore() method is called on section2 to insert h2Section3 (the <h2> element from section3) before the first child of section2. This effectively moves the <h2> element from section3 to become the first child of section2.

* section3.insertBefore(h2Section2, section3.firstChild);

Similarly, the insertBefore() method is called on section3 to insert h2Section2 (the <h2> element from section2) before the first child of section3. This swaps the positions of the <h2> elements between section2 and section3.

By executing this code, the <h2> element in the second section will be moved to the third section, and the <h2> element in the third section will be moved to the second section, effectively swapping their positions within the DOM structure.


# const lastSection = document.querySelector('main > section:last-child');
# lastSection.remove();

* This code selects the last section element inside the <main> element using the :last-child pseudo-class and the remove() method is called on the selected element to remove it from the DOM.