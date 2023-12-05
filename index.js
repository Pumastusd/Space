document.addEventListener('load', scroll)
function scroll () {
window.scrollTo({
    top: 1000,
    left: 1000,
})
cookie = true;
}
console.log("Приветствуем на нашем сайте!");
let cookie;
localStorage.setItem("load", cookie)
