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






