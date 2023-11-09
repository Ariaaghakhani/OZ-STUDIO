let _scroll=0

document.querySelectorAll('main')[0].addEventListener('scroll', (e) => {
    _scroll = e.target.scrollTop
    

    if (_scroll >= 790) {
        document.querySelectorAll('.navBar')[0].classList.add("mix-blend-difference")

    }else{
        document.querySelectorAll('.navBar')[0].classList.remove("mix-blend-difference")
    }
    console.log(_scroll);
    

    if(_scroll>=2000){
        let x = (4526 - _scroll)/10.5
        console.log();
        _sw1.style.transform=`translateX(${(x/2)-60}%)`
        _sw2.style.transform=`translate(${20-(x/2)}%,700%)`
        document.querySelectorAll(".svg1")[0].style.transform=`translateY(${(x)-30}%)`
        document.querySelectorAll(".svg2")[0].style.transform=`translate(${20+x/5}%,${((x*5)/8)+30}%)`
    }else{

    }
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
_contact = document.querySelectorAll('.btn')[0]
let flag = 1
_menu.addEventListener('click', () => {
    flag++
    console.log(flag);
    if (flag % 2 == 0) {
        _menu.querySelectorAll('a')[0].innerText = 'CLOSE'
        document.querySelectorAll('.menu')[0].classList.remove('invisible')
        document.querySelectorAll('.menu')[0].classList.remove('opacity-0')
        _hamMenu[0].classList.remove('translate-y-[-3px]')
        _hamMenu[2].classList.remove('translate-y-[3px]')
        _drop[0].classList.add('top-5')
        _drop[1].classList.add('top-8')
        _drop[0].classList.remove('-top-20')
        _drop[1].classList.remove('-top-16')
        _menuList.classList.remove('top-[105%]')
        _menuList.classList.add('top-[75%]')
        _contact.classList.add('opacity-0')
        _contact.classList.add('translate-x-[-200px]')
        document.querySelectorAll('.navBar')[0].classList.remove("mix-blend-difference")


    } else {
        _menu.querySelectorAll('a')[0].innerText = 'MENU'
        document.querySelectorAll('.menu')[0].classList.add('invisible')
        document.querySelectorAll('.menu')[0].classList.add('opacity-0')
        _hamMenu[0].classList.add('translate-y-[-3px]')
        _hamMenu[2].classList.add('translate-y-[3px]')
        _drop[0].classList.remove('top-5')
        _drop[1].classList.remove('top-8')
        _drop[0].classList.add('-top-20')
        _drop[1].classList.add('-top-16')
        _menuList.classList.add('top-[105%]')
        _menuList.classList.remove('top-[75%]')
        _contact.classList.remove('opacity-0')
        _contact.classList.remove('translate-x-[-200px]')
        document.querySelectorAll('.navBar')[0].classList.add("mix-blend-difference")
    }
})



let _sweat = document.querySelectorAll('.contact .sweat')[0]
let _sw1 = _sweat.querySelectorAll('span')[0]
let _sw2 = _sweat.querySelectorAll('span')[1]
let _contactHeight = document.querySelectorAll('.contact')[0].offsetTop
// if(_scroll)
