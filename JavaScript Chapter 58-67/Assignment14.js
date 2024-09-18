// Question # 1:
// i. Get elementof id "main-content" and assign them in a veriable.
var mainContent = document.getElementById('main-content');

// ii. Display all child elements of “main-content” element.
var children = mainContent.children;
console.log('Child elements of #main-content:');
for (let i = 0; i < children.length; i++) {
console.log(children[i]);
}   

// iii. Get all elements of class “render” and show their innerHTML in browser.
var renderElements = document.getElementsByClassName('render');
console.log('InnerHTML of elements with class "render":');
for (let i = 0; i < renderElements.length; i++) {
	console.log(renderElements[i].innerHTML);
}

// iv. Fill input value whose element id first-name using javascript.
document.getElementById('first-name').value = 'Faryal';

// v. Repeat part iv for id “last-name” and “email”.
document.getElementById('last-name').value = 'Abbasi';
document.getElementById('email').value = 'faryalabbasi8@gmail.com';




// Question # 2:
var formContentNode = document.getElementById("form-content");
console.log("Node type of 'form-content':", formContentNode.nodeType);

// ii. Node type of element having id "lastName" and its child node
var lastNameNode = document.getElementById("lastName");
console.log("Node type of 'lastName':", lastNameNode.nodeType);
console.log("Child node of 'lastName':", lastNameNode.childNodes);

// iii. Update child node of element having id "lastName"
lastNameNode.value = "Updated Last Name";

// iv. Get first and last child of id "main-content"
var mainContents = document.getElementById("main-content");
console.log("First child of 'main-content':", mainContents.firstChild);
console.log("Last child of 'main-content':", mainContents.lastChild);

// v. Get next and previous siblings of id "lastName"
console.log("Next sibling of 'lastName':", lastNameNode.nextSibling);
console.log("Previous sibling of 'lastName':", lastNameNode.previousSibling);

// vi. Get parent node and node type of element having id "email"
var emailNode = document.getElementById("email");
console.log("Parent node of 'email':", emailNode.parentNode);
console.log("Node type of 'email':", emailNode.nodeType);