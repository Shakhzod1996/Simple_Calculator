let displayEl = document.querySelector('.display')
let btns = document.querySelectorAll('.btn')
let equal = document.querySelector('.equal')
let ac = document.querySelector('.ac')
let back = document.querySelector('.clear')


btns.forEach(btn => {
    let numbers =btn.getAttribute('number')

    btn.addEventListener('click', ()=> {
    displayEl.innerHTML +=numbers

    })
})


// Equality
equal.addEventListener('click', ()=> {
    if (displayEl.innerHTML === '') {
        alert('Empty')
    } else {
        displayEl.innerHTML = eval(displayEl.innerHTML)
    }
})

// Ac
ac.addEventListener('click', ()=> {
    displayEl.innerHTML = ''
})

// To back 

back.addEventListener('click', ()=> {
    displayEl.innerHTML = displayEl.innerHTML.substring(0, displayEl.innerHTML.length-1)
})