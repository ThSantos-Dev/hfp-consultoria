'use strict'

let show = true

const menuSection = document.querySelector('.menu-section')
const menuToggle = menuSection.querySelector('.menu-toggle')
const menuNav = document.querySelector('.menu-section nav')

menuToggle.addEventListener('click', () => {
    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuSection.classList.toggle('on', show)
    show = !show
})

menuNav.addEventListener('click', (e) => {
    if(e.target.dataset.navItem == 'a' && !show) {
        document.body.style.overflow = 'initial'
        menuSection.classList.remove('on')
    }
})


