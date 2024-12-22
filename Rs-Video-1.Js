
//------=====================--------------=========================--------//
//--------Search----Start------------//
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
//--------Search----End------------//
//--------Search----Start------------//
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active'); 
}

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
//--------Search----End------------//
//------====================-----------------==========================--------//





//------===================-----------------===========================--------//
//--------Login----Start------------//
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#from-close');
//--------Login----End------------//
//--------Login----Start------------//
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
})

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});
//--------Login----End------------//
//------===================------------------===========================--------//



//------===================-------------------===========================--------//
//--------Menu--------Start--------//
let menu = document.querySelector('#memu-bar');
let navbar = document.querySelector('.navbar');
//--------Menu--------End--------//
//--------Menu--------Start--------//
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})
//--------Menu--------End--------//
//------=================----------------------=============================--------//


//------=================----------------------=============================--------//
//----------Video--------Slider------Start-----------//
let videoBtn = document.querySelectorAll('.vid-btn');

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});
//----------Video--------Slider------End-----------//
//------=================----------------------=============================--------//



var swiper = new Swiper(".review-slider", {
   
spaceBetween: 20,
loop:true,
autoplay: {
    delay: 2500,
    disableOnInteraction: false,
},

breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    },
},

});
