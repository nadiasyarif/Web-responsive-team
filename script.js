const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if(window.scrollY > 1){
        navbar.classList.replace('bg-transparent','nav-color');
    }else if(this.window.scrollY <= 1){
        navbar.classList.replace('nav-color','bg-transparent');
    }
});

var swiper = new Swiper(".slide-content", {
   loop:false,
   grabCursor: true,
   spaceBetween: 30,
   navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
   breakpoints: {
      280:{
         slidesPerView: 1,
         spaceBetween: 5,
     },
     320:{
         slidesPerView: 2,
         spaceBetween: 10,
     },
     510:{
         slidesPerView: 2,
         spaceBetween: 10,
     },
     758:{
         slidesPerView: 3,
         spaceBetween: 15,
      },
   },
});