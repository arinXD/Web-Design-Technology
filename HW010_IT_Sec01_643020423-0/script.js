let button=document.querySelector(".book-ticket");

window.onload = function changeTitle() {
    let title = document.querySelector(".page-title").innerText;
    document.title = title;
}

function fixdeHeader() {
    let nav = document.querySelector("#nav-header");

    if (document.body.scrollTop > 156 || document.documentElement.scrollTop > 156) {
        nav.classList.add("fixed-top");
    } else{
        nav.classList.remove("fixed-top");
    }
}

function warp(param) {
    // console.log(param);
    window.open(param);
}
function warp2(param) {
    // console.log(param);
    window.location.replace(param);
}

function popUp() {
    alert("643020423-0\nArinchawut Kanlayanam\nsection 1");
    // swal("Here's a message!", "It's pretty, isn't it?");
}

