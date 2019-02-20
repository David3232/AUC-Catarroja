function getURL(){
    let url = window.location.pathname;
    let splitURL = url.split("/");
    return String(splitURL[1]);
}

function changeBg(id){
    let liNav = document.getElementById(id);
    liNav.style.backgroundColor="#019db5";
}

changeBg(getURL());



