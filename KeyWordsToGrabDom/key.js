// parentNode use to grab a parent of element
let itemList = document.querySelector('#items');
itemList.parentNode.style.backgroundColor ='#f4f4f4';

// parentElement is same as parentNode
itemList.parentElement.style.backgroundColor ='#f4f4f4';

// childNodes gives a node List of a child and also give us void space. 
itemList.childNodes

// children gives html collection without void space or we can say that text node

// itemList.children
itemList.children[1].style.backgroundColor='yellow';

// FirstChild has void space 
// console.log(itemList.firstChild);

// firstElementChild avoid void space
itemList.firstElementChild.textContent='i am learnig dom manipulation';

// lastElementChild
itemList.lastElementChild.textContent='hello 4';

// nextSibling gives text node
// itemList.nextSibling

// nextElementSibling
itemList.nextElementSibling.style.color='red';

// previousSibling
// itemList.previousSibling

// previousElementSiblin
itemList.previousElementSibling.style.color='red';

// Create Element

// create a div
let newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';

// Add id 
newDiv.id='hello1';

// Add attribute
newDiv.setAttribute('title', 'Hello div');

// Create a text node
let newDivText = document.createTextNode('Hello world');

// Add text to div
newDiv.appendChild(newDivText);

let container =document.querySelector('header .container');
let h1 = document.querySelector('header h1');

newDiv.style.fontSize ='25px';

container.insertBefore(newDiv,h1);

let newLi = document.createElement('li');
newLi.className = 'list-group-item';

let newLiText = document.createTextNode('List item');
newLi.appendChild(newLiText);

let ul = document.querySelector('ul');
let li =document.querySelector('ul li');

ul.insertBefore(newLi,li);




