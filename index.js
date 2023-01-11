// MOUSEOVER:-
const btn = document.querySelector('.btn');
btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#form').style.background = "lightblue"
    document.querySelector('body').style.background = 'black'
    document.querySelector('header').style.background = 'lightgray'
    document.querySelector('header').style.color = 'black'
});

// MOUSEOUT:-
const btn2 = document.querySelector('.btn');
btn2.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#form').style.background = "lightgreen"
    document.querySelector('body').style.background = 'gray'
    document.querySelector('header').style.background = 'black'
    document.querySelector('header').style.color = 'white'
});


// console.log(document.getElementById('form').value)
const form = document.querySelector('#form');
const namee = document.querySelector('#name');
const email = document.querySelector('#mail');
const msg = document.querySelector('.msg');
const ul = document.querySelector('#users');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault()

    if (namee.value || email.value) {
        //Task-1
        // localStorage.setItem('Name:',namee.value)
        // localStorage.setItem('E-mail:',email.value)
        // console.log('Name:',localStorage.getItem('Name:'))
        // console.log('E-mail:',localStorage.getItem('E-mail:'))


        // Task-2
        let strobj=JSON.stringify(obj);
        localStorage.setItem('obj:',strobj)
        let obobj = JSON.parse(localStorage.getItem('obj'))
    }

    else if (namee.value === '' || email.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'please enter all fields'
        setTimeout(() => msg.remove(), 3000)
    }
}