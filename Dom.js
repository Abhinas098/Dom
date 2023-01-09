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
var items = document.getElementsByClassName("list-group-item");
// console.log(items)
// console.log(items[2])
// items[1].textContent = "Hello"
// items.style.backgroundColor = '#f4f4f4'//it gives error- have to spcify index or iterate throgh loop.
// for(let i =0; i<items.length;i++){
//     items[i].style.backgroundColor="lightblue"
// }
// task-2
items[2].style.backgroundColor='green'
for(let i=0; i<items.length; i++){
    items[i].style.fontWeight="bold"
}


