const contNot = document.querySelector('#contNot')
const notis = document.querySelectorAll('.noti')
const readAll = document.querySelector('#readAll')

readAll.addEventListener('click', () => {
    notis.forEach(e => {
        e.classList.remove('unread')
    })
})