window.onload=()=>{
const $ = document.querySelector.bind(document);
const $All = document.querySelectorAll.bind(document);

$('#menu').onclick=()=>{              
$('#menu').classList.toggle('rotate')
$('.nav-page1').classList.toggle('transform')
$('.menu-line1').classList.toggle('rotate1')
$('.menu-line2').classList.toggle('rotate2')
$('.menu-line3').classList.toggle('rotate3')
}
}
