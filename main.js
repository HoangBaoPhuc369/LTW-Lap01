const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const login = $('.header-top__login')
const loginForm = $('.modal')
const btnClose = $('.btn-close')


login.addEventListener('click', () => {
    loginForm.style.display = 'flex'
})

btnClose.addEventListener('click', () => {
    loginForm.style.display = 'none'
})

