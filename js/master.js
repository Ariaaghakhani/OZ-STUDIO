document.querySelectorAll('main')[0].addEventListener('scroll', (e) => {
    let _scroll = e.target.scrollTop
    console.log(_scroll);
})

let loadBar = document.querySelectorAll('.lineLoad span')
let _btn = document.querySelectorAll('.lineLoad a')
let _text = document.querySelectorAll('.lineLoad p')

function anime() {

    setTimeout(() => {
        loadBar[0].classList.add('animate-load')
        // _img[0].classList.add('animate-load-img')
        _btn[0].classList.remove('opacity-50')
        _text[0].classList.remove('opacity-50')
    }, 0);
    setTimeout(() => {
        loadBar[1].classList.add('animate-load')
        loadBar[0].classList.remove('animate-load')
        _btn[0].classList.add('opacity-50')
        _text[0].classList.add('opacity-50')
        _btn[1].classList.remove('opacity-50')
        _text[1].classList.remove('opacity-50')

    }, 5000);
    setTimeout(() => {
        loadBar[2].classList.add('animate-load')
        loadBar[1].classList.remove('animate-load')
        _btn[1].classList.add('opacity-50')
        _text[1].classList.add('opacity-50')
        _btn[2].classList.remove('opacity-50')
        _text[2].classList.remove('opacity-50')
    }, 10000);
    setTimeout(() => {
        loadBar[2].classList.remove('animate-load')
        _btn[2].classList.add('opacity-50')
        _text[2].classList.add('opacity-50')
    }, 15000);
}

anime()

setInterval(() => {
    anime()
}, 15000);


_menu = document.querySelectorAll('.menuBtn')[0]
_hamMenu = _menu.querySelectorAll('span')
_drop = document.querySelectorAll('.drop')
_menuList = document.querySelectorAll('.mobileMenuList')[0]
let flag = 1
_menu.addEventListener('click', () => {
    flag++
    console.log(flag);
    if (flag%2==0) {
        _menu.querySelectorAll('a')[0].innerText = 'CLOSE'
        document.querySelectorAll('.menu')[0].classList.remove('invisible')
        document.querySelectorAll('.menu')[0].classList.remove('opacity-0')
        _hamMenu[0].classList.remove('translate-y-[-3px]')
        _hamMenu[2].classList.remove('translate-y-[3px]')
        _drop[0].classList.add('top-2')
        _drop[1].classList.add('top-5')
        _drop[0].classList.remove('-top-20')
        _drop[1].classList.remove('-top-16')
        _menuList.classList.remove('top-[105%]')
        _menuList.classList.add('top-[75%]')

    } else {
        _menu.querySelectorAll('a')[0].innerText = 'MENU'
        document.querySelectorAll('.menu')[0].classList.add('invisible')
        document.querySelectorAll('.menu')[0].classList.add('opacity-0')
        _hamMenu[0].classList.add('translate-y-[-3px]')
        _hamMenu[2].classList.add('translate-y-[3px]')
        _drop[0].classList.remove('top-2')
        _drop[1].classList.remove('top-5')
        _drop[0].classList.add('-top-20')
        _drop[1].classList.add('-top-16')
        _menuList.classList.add('top-[105%]')
        _menuList.classList.remove('top-[75%]')
    }
})


// _slider=document.querySelectorAll('.slideInfo')

// function slider() {
//     setTimeout(() => {
//         _slider.classList.add('left-[0%]')
//     }, 0);
//     setTimeout(() => {
//         _slider.classList.add('left-[-104%%]')
//         _slider.classList.remove('left-[0%]')
//     }, 4750);
//     setTimeout(() => {
//         _slider.classList.remove('left-[-104%%]')
//         _slider.classList.add('left-[-208%]')
//     }, 9750);
//     setTimeout(() => {
//         _slider.classList.remove('left-[-208%]')
//         _slider.classList.add('left-[0%]')
//     }, 14750);
// }
// slider()
// setInterval(() => {
//     slider()
// }, 15000);