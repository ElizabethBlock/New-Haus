document.addEventListener('DOMContentLoaded', function () {
   let burger = document.querySelector('.burger');
   let menuActive = document.querySelector('.menu__active');
 
   burger.addEventListener('click', function () {
     burger.classList.toggle('active');
     menuActive.classList.toggle('active');
   });
 
   window.addEventListener('resize', function () {
     if (window.innerWidth > 800) {
       burger.classList.remove('active');
       menuActive.classList.remove('active');
     }
   });
 });