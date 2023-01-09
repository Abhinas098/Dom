// Examine the  Document object.

// console.dir(document);
// console.log(document.domain)
// console.log(document.URL);
// console.log(document.title);
// document.title = 123 //tochange the title
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[9]);
// // document.all[10].textContent = 'hello'; //change title because it in index 10
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


// // GETELEMENTBYID//
// var headTitle = document.getElementById('header-title');
// // console.log(headTitle);
// // headTitle.textContent = "hello"
// // headTitle.innerText = "godd byy"
// // headTitle.innerHTML ="<h1>Hello</H2>"
var head = document.getElementById('main-header');
head.style.borderBottom = 'solid 2px black'
var title = document.getElementById('h2');
title.style.color ="green"
title.style.fontWeight="bold"


//GETELEMENTBYCLASSNAME//
// var items = document.getElementsByClassName("list-group-item");
// // console.log(items)
// // console.log(items[2])
// // items[1].textContent = "Hello"
// // items.style.backgroundColor = '#f4f4f4'//it gives error- have to spcify index or iterate throgh loop.
// // for(let i =0; i<items.length;i++){
// //     items[i].style.backgroundColor="lightblue"
// // }
// // task-2
// items[2].style.backgroundColor='green'
// for(let i=0; i<items.length; i++){
//     items[i].style.fontWeight="bold"
// }


// GETELEMENTBYTAGNAME//
// task-3
// var li = document.getElementsByTagName("li");
// for(let i =0; i<li.length;i++){
//         li[i].style.backgroundColor="lightblue"
//     }


// querySelector//
// let header = document.querySelector('#main-header')
// header.style.borderBottom="solid 4px #ccc"
// var submit = document.querySelector('input[type="submit"]');
// submit.value = "Add"
// let item = document.querySelector('.list-group-item');
// item.style.color="yellow"
// let last = document.querySelector('.list-group-item:last-child');
// last.style.color="red"
// let Second = document.querySelector('.list-group-item:nth-child(2)');
// Second.style.color="Blue"
var input= document.querySelector('input')
input.placeholder="Enter a item"


// querySelectorAll//
// Querselector returns a single element whereas querySelectorAll returns array of elements
// var titles = document.querySelectorAll('.title')
// console.log(titles[0].textContent='Hello')

// Task-3
// var odd=document.querySelectorAll('li:nth-child(odd)');

// for (var i =0; i<odd.length; i++){
//     odd[i].style.backgroundColor="Green"
// }
// let Second = document.querySelector('.list-group-item:nth-child(2)');
// Second.style.backgroundColor="Green"
// // var even = document.querySelectorAll('li:nth-child(even)');
// // for (let i = 0; i<even.length; i++){
// //     even[i].style.backgroundColor="lightGreen"
// // }



// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
// Parentnode//
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor="black"
// console.log(itemList.parentNode.parentNode.parentNode);
// Parentelement//
// Both parent element and nod are same.
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor="black"
// console.log(itemList.parentElement.parentElement.parentElement);

// ChildNodes //
// console.log(itemList.childNodes); // it shows with linebreak index.
// Children//
// console.log(itemList.children); //it gives only eleents with their index.(mainly used this)
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "lightblue"

// First-Child//
// console.log(itemList.firstChild)//it also gives index of all space child like Childnode.
// First-Element-Cild//
// console.log(itemList.firstElementChild)//it oly sows the elements with index
// itemList.firstElementChild.textContent="Hello"

// Last-Child//
// console.log(itemList.lastChild)//it also gives index of all space like firstchild.
// // Last-Element-Cild//
// console.log(itemList.lastElementChild)//it oly sows the elements with index
// itemList.lastElementChild.textContent="Hello"

var item = document.querySelector('.list-group-item');
// nextSibling//
// console.log(item.nextSibling)//same as above therfore use elementsibling
//nextElementSibling//
// console.log(item.nextElementSibling)

// previousSibling//
// console.log(itemList.previousSibling)
// previousElementSibling//
// console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.color="green"

// CREATEELEMENT//
// create div//
var newDiv = document.createElement('div');
var newDiv2 = document.createElement('div');

// Add id//
newDiv.id = 'hii'
// Add class
newDiv.className ='hello'
// Add Attribute
newDiv.setAttribute('title', 'Hello')

// Create TEXTNODE//
var newDivText = document.createTextNode('Hello World')
var newDiv2Text = document.createTextNode('hello world')

// Append-CHILD
newDiv.appendChild(newDivText)
newDiv2.appendChild(newDiv2Text)

// INSERT-Before
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1)

var main = document.querySelector('div #main');
var ul = document.querySelector('div ul');
main.insertBefore(newDiv2, ul)




