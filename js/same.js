var showNav = document.getElementsByClassName("showNav")[0];
var nav = document.getElementsByClassName("nav")[0];
var navLi = nav.getElementsByTagName("li");
var lastLi = document.getElementsByClassName("lastLi")[0];
var Icon = lastLi.getElementsByClassName("iconfont")[0];
var num = navLi.length;
var onOff = true;
showNav.onclick = function () {
    if (onOff) {
        onOff = false;
        nav.classList.add("showHidden");
        for (var i = 1; i < num - 1; i++) {
            navLi[i].style.display = "block";
        }
        Icon.innerHTML = "&#xe64a;";
    } else {
        onOff = true;
        nav.classList.remove("showHidden");
        for (var i = 1; i < num - 1; i++) {
            navLi[i].style.display = "";
        }
        Icon.innerHTML = "&#xe653;";
    }
}
