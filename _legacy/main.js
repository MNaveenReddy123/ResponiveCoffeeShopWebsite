let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick=() => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}
let header =document.querySelector('header');
window.addEventListener('scroll',()=> {
    header.classList.toggle('shadow', window.scrollY > 0);

});
let navbar =document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick=() => {
            navbar.classList.toggle('active');
            search.classList.remove('active');

};
window.onscroll = () => {
    search.classList.remove('active');
    navbar.classList.remove('active');
}
let mainImg = document.getElementById('main-img');
window.onload =() =>{
    mainImg.style.transform = "scale(1.1)";
    mainImg.style.transition = "1s";

}

