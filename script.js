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

// SIDE MENU

const open_mini_menu = document.querySelector('.open_mini_menu');
const opened_mini_menu = document.querySelector('.opened_mini_menu');
const side_menu = document.querySelector('.side-menu');
const mini_menu = document.getElementById('mini_menu');
const shadow_block = document.getElementById('shadow_block');
const mini_singolo = document.getElementById('mini_singolo');

mini_singolo.addEventListener('click', function(){
    side_menu.style.display = 'none';
    shadow_block.style.display = 'none'; 
})

open_mini_menu.addEventListener('click', function(){
    side_menu.style.display = 'block';
    shadow_block.style.display = 'block';
});

opened_mini_menu.addEventListener('click', function(){
    side_menu.style.display = 'none';
    shadow_block.style.display = 'none';
});

shadow_block.addEventListener('click', function(){
    side_menu.style.display = 'none';
    shadow_block.style.display = 'none';
});

mini_menu.addEventListener('click', (event) => {
    if(event.target.tagName == 'LI') {
        mini_menu.querySelectorAll('li').forEach(el => el.classList.remove('active'));
        event.target.classList.add('active');
        side_menu.style.display = 'none';
        shadow_block.style.display = 'none';
        if(event.target.id == 'mini_services_scroll') {
            window.scroll(0, SERVICES.offsetTop - HEADER.offsetHeight + 2);
        }
        if(event.target.id == 'mini_portfolio_scroll') {
            window.scroll(0, PORTFOLIO.offsetTop - HEADER.offsetHeight + 2);
        }
        if(event.target.id == 'mini_about_us_scroll') {
            window.scroll(0, ABOUT_US.offsetTop - HEADER.offsetHeight + 2);
        }
        if(event.target.id =='mini_contact_scroll') {
            window.scroll(0, CONTACT.offsetTop - HEADER.offsetHeight + 2);
        }
    }
});

window.addEventListener('scroll', () => {
    if(window.scrollY < SERVICES.offsetTop - HEADER.offsetHeight) {
        mini_menu.querySelectorAll('li').forEach(el => el.classList.remove('active'));
        document.getElementById('mini_home_scroll').classList.add('active');
    }
    if(window.scrollY >= SERVICES.offsetTop - HEADER.offsetHeight && window.scrollY < PORTFOLIO.offsetTop - HEADER.offsetHeight) {
        mini_menu.querySelectorAll('li').forEach(el => el.classList.remove('active'));
        document.getElementById('mini_services_scroll').classList.add('active');
    }
    if(window.scrollY >= PORTFOLIO.offsetTop - HEADER.offsetHeight) {
        mini_menu.querySelectorAll('li').forEach(el => el.classList.remove('active'));
        document.getElementById('mini_portfolio_scroll').classList.add('active');
    }
    if(window.scrollY >= ABOUT_US.offsetTop - HEADER.offsetHeight) {
        mini_menu.querySelectorAll('li').forEach(el => el.classList.remove('active'));
        document.getElementById('mini_about_us_scroll').classList.add('active');
    }
    if(window.scrollY >= CONTACT.offsetTop - HEADER.offsetHeight) {
        mini_menu.querySelectorAll('li').forEach(el => el.classList.remove('active'));
        document.getElementById('mini_contact_scroll').classList.add('active');
    }
    if(window.scrollY+1 >= document.documentElement.scrollHeight-document.documentElement.clientHeight) {
        MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
        document.getElementById('mini_contact_scroll').classList.add('active');
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

let items = document.querySelectorAll('.item');
let currentItem = 0;
let = isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem (direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('active_slider', direction);
    });
} 

function showItem (direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('next', direction);
        this.classList.add('active_slider');
        isEnabled = true;
    });
} 

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem( n - 1 );
    showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem( n + 1 );
    showItem('from-right');
}

document.querySelector('#left_arrow').addEventListener('click', function(){
    if(isEnabled) {
        previousItem(currentItem);
    }
});

document.querySelector('#right_arrow').addEventListener('click', function(){
    if(isEnabled){
        nextItem(currentItem);
    }
});

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
const PORTFOLIO_CONTAINER = document.getElementById("portfolio_img_container");

portfolio_ul.addEventListener('click', (event) => {
    portfolio_ul.querySelectorAll('li').forEach(el => el.classList.remove('portfolio_active'));
    event.target.classList.add('portfolio_active');
    PORTFOLIO_CONTAINER.querySelectorAll('div > img').forEach(el => el.classList.remove('active_border'));
});


// add active_border class to portfolio img 

PORTFOLIO_CONTAINER.addEventListener('click', (event) => {
    PORTFOLIO_CONTAINER.querySelectorAll('div > img').forEach(el => el.classList.remove('active_border'));
    if(event.target.tagName === 'IMG') {
        event.target.classList.add('active_border');
    }
});

// Suffle portfolio img 

let portfolio_img_src = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

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



