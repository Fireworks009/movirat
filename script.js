var attack = document.querySelector("#attack");
var interstellar = document.querySelector("#interstellar");
var mr_robot = document.querySelector("#mr-robot");

function showSidebar(){
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.width = "250px";
    return true;
}

function hideSidebar(){
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.width = "0px";
    return true;
}

attack.addEventListener('click',function(){
    window.location.href = "attack.html";
});

interstellar.addEventListener('click',function(){
    window.location.href = "interstellar.html";
});

mr_robot.addEventListener('click',function(){
    window.location.href = "mr-robot.html"
});
