
function showComment(correct,error,box,button){
    //Si hay algun campo incorrecto
    if(correct!==undefined){
        box.style.borderColor="#28A745";
        correct.style.display = "block";
        error=document.getElementById(box.id+"Error");
        error.style.display = "none";
        error=undefined;
    }
    //Si estan todos los campos correctos
    if(error!==undefined){
        box.style.borderColor="#E73568";
        error.style.display = "block";
        correct=document.getElementById(box.id+"Correct");
        correct.style.display = "none";
        correct=undefined;
    }
}
/**
 * funcion que muestra si el campo esta correcto o incorrecto
 * @param box
 */
function showInformation(box){
    let correct;
    let error;
    let button = document.getElementById("formButton");
    console.log(box.value.length);
    if(box.value.length===0){
        switch (box.id) {
            case "name":
                error=document.getElementById(box.id+"Error");
                break;
            case "surname":
                error=document.getElementById(box.id+"Error");
                break;
            case "username":
                error=document.getElementById(box.id+"Error");
                break;
            case "city":
                error=document.getElementById(box.id+"Error");
                break;
            case "state":
                error=document.getElementById(box.id+"Error");
                break;
            case "zip":
                error=document.getElementById(box.id+"Error");
                break;
        }
    }else{
        switch (box.id) {
            case "name":/*
                if(box.value.length>=5){
                    correct=document.getElementById(box.id+"Correct");
                }else{
                    error=document.getElementById(box.id+"Error");
                }*/
                correct=document.getElementById(box.id+"Correct");
                break;
            case "surname":
                correct=document.getElementById(box.id+"Correct");
                //error=document.getElementById(box.id+"Error");
                break;
            case "username":
                correct=document.getElementById(box.id+"Correct");
                //error=document.getElementById(box.id+"Error");
                break;
            case "city":
                correct=document.getElementById(box.id+"Correct");
                //error=document.getElementById(box.id+"Error");
                break;
            case "state":
                correct=document.getElementById(box.id+"Correct");
                //error=document.getElementById(box.id+"Error");
                break;
            case "zip":
                correct=document.getElementById(box.id+"Correct");
                //error=document.getElementById(box.id+"Error");
                break;
        }
    }
    showComment(correct,error,box,button);
}

/**
 * Funcion que cuando la caja está vacia o el campo no es correct lo notifica
 * @param event
 */
function isFull(event){
    let box = event.target;
    showInformation(box);
}

let form=document.getElementsByClassName('needs-validation')[0];

form.addEventListener("focusout", isFull);

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}