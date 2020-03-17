// add active class to MENU

const MENU = document.getElementById('menu');
const HEADER = document.querySelector('.header');
const SERVICES = document.getElementById('our_services');
const PORTFOLIO = document.getElementById('portfolio');
const ABOUT_US = document.getElementById('about_us');
const CONTACT = document.getElementById('contact');
const FOOTER = document.getElementById('footer');

MENU.addEventListener('click', (event) => {
    if(event.target.tagName == 'LI') {
        MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
        event.target.classList.add('active');
        if(event.target.id == 'services_scroll') {
            window.scroll(0, SERVICES.offsetTop - HEADER.offsetHeight + 2);
        }
        if(event.target.id == 'portfolio_scroll') {
            window.scroll(0, PORTFOLIO.offsetTop - HEADER.offsetHeight + 2);
        }
        if(event.target.id == 'about_us_scroll') {
            window.scroll(0, ABOUT_US.offsetTop - HEADER.offsetHeight + 2);
        }
        if(event.target.id =='contact_scroll') {
            window.scroll(0, CONTACT.offsetTop - HEADER.offsetHeight + 2);
        }
    }
});

//change active links when scroll page 

window.addEventListener('scroll', () => {
    if(window.scrollY < SERVICES.offsetTop - HEADER.offsetHeight) {
        MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
        document.getElementById('home_scroll').classList.add('active');
    }
    if(window.scrollY >= SERVICES.offsetTop - HEADER.offsetHeight && window.scrollY < PORTFOLIO.offsetTop - HEADER.offsetHeight) {
        MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
        document.getElementById('services_scroll').classList.add('active');
    }
    if(window.scrollY >= PORTFOLIO.offsetTop - HEADER.offsetHeight) {
        MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
        document.getElementById('portfolio_scroll').classList.add('active');
    }
    if(window.scrollY >= ABOUT_US.offsetTop - HEADER.offsetHeight) {
        MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
        document.getElementById('about_us_scroll').classList.add('active');
    }
    if(window.scrollY >= CONTACT.offsetTop - HEADER.offsetHeight) {
        MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
        document.getElementById('contact_scroll').classList.add('active');
    }
    if(window.scrollY+1 >= document.documentElement.scrollHeight-document.documentElement.clientHeight) {
        MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
        document.getElementById('contact_scroll').classList.add('active');
    }
});

// flip sliders

const slidersContainer = document.getElementById('slidersContainer');
const slidersArr = slidersContainer.querySelectorAll('.sliders');
const leftArrow = document.getElementById('left_arrow');
const rightArrow = document.getElementById('right_arrow');
let line = document.querySelector('.line');
let sliderWidth = document.querySelector('.sliders').offsetWidth;
let widthArray = [0];
let lineWidth = 0;
let offSet = 0;
let step = 1;
let remainder = 0;

for(let i = 0; i < slidersArr.length; i++) {
    widthArray.push(slidersArr[i].offsetWidth);
    lineWidth += slidersArr[i].offsetWidth;
}

line.style.width = lineWidth+'px';

rightArrow.addEventListener('click', flippingSlides);
leftArrow.addEventListener('click', flippingSlides);

function flippingSlides() {
    remainder = lineWidth - sliderWidth - (offSet + widthArray[step]);  
    if(remainder >= 0) {
        offSet = offSet + widthArray[step];
        line.style.left = -offSet+'px';
    } else {
        offSet = 0;
        step = 0;
    }
    if(step + 1 == slidersArr.length) {
        offSet = 0;
        step = 0;
    } else {
        step++;
    }
}

//screen on / off

const screen_on_off_first = document.getElementById('screen_on_off_first');
const screen_on_off_second = document.getElementById('screen_on_off_second');
const screen_off_phone1 = document.getElementById('screen_off_phone1');
const screen_off_phone2 = document.getElementById('screen_off_phone2');

screen_on_off_first.addEventListener('click', addRemoveClassHidden);
screen_on_off_second.addEventListener('click', addRemoveClassHiddenSec);

function addRemoveClassHidden() {
    screen_off_phone1.className === 'hidden'?
    screen_off_phone1.classList.remove('hidden') : screen_off_phone1.classList.add('hidden');
}
function addRemoveClassHiddenSec() {
    screen_off_phone2.className === 'hidden'?
    screen_off_phone2.classList.remove('hidden') : screen_off_phone2.classList.add('hidden');
}

// add portfolio_active class to menu 

const portfolio_ul = document.getElementById('portfolio_ul');

portfolio_ul.addEventListener('click', (event) => {
    portfolio_ul.querySelectorAll('li').forEach(el => el.classList.remove('portfolio_active'));
    event.target.classList.add('portfolio_active');
});


// add active_border class to portfolio img 

const PORTFOLIO_CONTAINER = document.getElementById("portfolio_img_container");

PORTFOLIO_CONTAINER.addEventListener('click', (event) => {
    PORTFOLIO_CONTAINER.querySelectorAll('div > img').forEach(el => el.classList.remove('active_border'));
    if(event.target.tagName === 'IMG') {
        event.target.classList.add('active_border');
    }
});

// Suffle portfolio img 

let portfolio_img_src = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
let portfolio_img_src_original = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

function suffleImg() {
    suffle(portfolio_img_src);
    PORTFOLIO_CONTAINER.querySelectorAll('div > img').forEach((el, i) => {
        el.src = "assets/singolo_2_img/" + portfolio_img_src[i] + ".png";
    });
}

function suffle(arr){
    let j, temp;
    for(let i = arr.length-1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;        
}

// message form

const FORM = document.getElementById('form');
const BUTTON = document.getElementById('subm');
const CLOSE_BUTTON = document.getElementById('close_btn');
const NAME_INPUT = document.getElementById('name');
const EMAIL_INPUT = document.getElementById('email');

FORM.addEventListener('submit', (event) => {
    event.preventDefault();
    if(NAME_INPUT.checkValidity() && EMAIL_INPUT.checkValidity()) {
        const subject = document.getElementById('subject').value.toString();
        const describe = document.getElementById('describe').value.toString();
        document.getElementById('result_subject').innerText = subject ? " " + subject: " Без темы";
        document.getElementById('result_describe').innerText = describe ? " " + describe: " Без описания";
        document.getElementById('message_block').classList.remove('hidden');
    }
});

CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('result_subject').innerText = "";
    document.getElementById('result_describe').innerText = "";
    document.getElementById('message_block').classList.add('hidden');
    FORM.reset();
});



