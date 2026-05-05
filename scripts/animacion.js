window.onload = function () {

document.querySelector(".article-first .chincheta").classList.add("chincheta1");

setTimeout(() => {
document.querySelector(".article-first").classList.add("article1");
}, 1000);

setTimeout(() => {
document.querySelector(".article-second .chincheta").classList.add("chincheta2");
}, 1500);

setTimeout(() => {
document.querySelector(".article-third .chincheta").classList.add("chincheta3");
}, 2500);

setTimeout(() => {
document.querySelector(".article-third").classList.add("article3");
}, 3500);
};
