// constants 
const main = document.querySelector('main')
const forward = document.querySelector('#forward')
const backward = document.querySelector('#backward')
let imgs = ['url(./media/car1.jpeg)', 'url(./media/car2.jpeg)', 'url(./media/car3.jpeg)', 'url(./media/car4.jpeg)']

// Varriables
let xf = 0
// EventListeners
forward.addEventListener('click', () => {
    ++xf
    if (xf === imgs.length) {
        xf = 0
    }
    main.style.backgroundImage = imgs[xf]
    console.log(xf + ' ' + '+++')
})
backward.addEventListener('click', () => {
    --xf

    if (xf === -1) {
        xf = imgs.length - 1
    }
    main.style.backgroundImage = imgs[xf]
    console.log(xf + ' ' + '---')
})