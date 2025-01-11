function showSidebar() {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.width = "250px";
    return true;
}

function hideSidebar() {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.width = "0px";
    return true;
}

function removeElement() {
    let box = document.querySelector(".box");
    box.style.display = "none";
    return true;
}