# let section = document.createElement('section');
# section.id = 'content';
# section.innerHTML = '<p>Adeline, Clara, Lucie, Sarah, Manon, Marius, Pietro, Cédric, Corentin</p>';
# document.querySelector('article').appendChild(section);

* let section = document.createElement('section');

This line creates a new <section> element using the createElement() method of the document object. The created section element is assigned to the section variable.

* section.id = 'content';

The id property of the section element is set to 'content', giving it the ID attribute of "content".

* section.innerHTML = '<p>Adeline, Clara, Lucie, Sarah, Manon, Marius, Pietro, Cédric, Corentin</p>';

The innerHTML property of the section element is used to set its HTML content. In this case, it is set to a <p> element with the names "Adeline, Clara, Lucie, Sarah, Manon, Marius, Pietro, Cédric, Corentin".

* document.querySelector('article')

The querySelector() method is used to select the first <article> element found in the document. It returns the selected element.

* .appendChild(section);

The appendChild() method is called on the selected <article> element to append the section element as its child. This adds the newly created section element to the article element in the document.

By executing this code, a new section element with the ID of "content" is created. It contains a paragraph element with the given names. The section element is then appended as a child to the <article> element in the document structure.

