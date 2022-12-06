let main = document.querySelector('main')
let body = document.querySelector('body')


let forward = document.querySelector('#forward')
let backward = document.querySelector('#backward')

let imgs = ['url(./media/car1.jpeg)', 'url(./media/car2.jpeg)', 'url(./media/car3.jpeg)', 'url(./media/car4.jpeg)']
// body.style.backgroundImage = imgs[0]
let xf = 0
forward.addEventListener('click', () => {

    main.style.backgroundImage = imgs[++xf]
})

backward.addEventListener('click', () => {
    main.style.backgroundImage = imgs[Math.abs(--xf)]
})