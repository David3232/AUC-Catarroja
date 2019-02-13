
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
            case "surname1":
                error=document.getElementById(box.id+"Error");
                break;
            case "surname2":
                error=document.getElementById(box.id+"Error");
                break;
            case "adress":
                error=document.getElementById(box.id+"Error");
                break;
            case "zip":
                error=document.getElementById(box.id+"Error");
                break;
            case "location":
                error=document.getElementById(box.id+"Error");
                break;
            case "email":
                error=document.getElementById(box.id+"Error");
                break;
            case "role":
                error=document.getElementById(box.id+"Error");
                break;
        }
    }else{
        switch (box.id) {
            case "name":
                if(box.value.length>=2 && isNaN(box.value)===true){
                    correct=document.getElementById(box.id+"Correct");
                }else {
                    error = document.getElementById(box.id + "Error");
                }
                break;
            case "surname1":
                if(box.value.length>=2 && isNaN(box.value)===true){
                    correct=document.getElementById(box.id+"Correct");
                }else {
                    error = document.getElementById(box.id + "Error");
                }
                break;
            case "surname2":
                if(box.value.length>=2 && isNaN(box.value)===true){
                    correct=document.getElementById(box.id+"Correct");
                }else {
                    error = document.getElementById(box.id + "Error");
                }
                break;
            case "adress":
                let hasBar = false;
                for (let i=0;i<box.value.length;i++){
                    if(box.value[i]==='/'){
                        hasBar=true;
                    }
                }
                if(hasBar===true && box.value.length>=3){
                    correct=document.getElementById(box.id+"Correct");
                }else {
                    error = document.getElementById(box.id + "Error");
                }
                break;
            case "zip":
                if(box.value.length===5 && isNaN(box.value)===false){
                    correct=document.getElementById(box.id+"Correct");
                }else {
                    error = document.getElementById(box.id + "Error");
                }
                break;
            case "location":
                if(box.value.length>=3 && isNaN(box.value)===true){
                    correct=document.getElementById(box.id+"Correct");
                }else {
                    error = document.getElementById(box.id + "Error");
                }
                break;
            case "email":
                let hasDot = false;
                let hasAt = false;
                for (let i=0;i<box.value.length;i++){
                    if(box.value[i]==='@'){
                        hasAt=true;
                    }
                    if(box.value[i]==='.'){
                        hasDot=true;
                    }
                }
                if(hasDot===true && hasAt===true && box.value.length>=5){
                    correct=document.getElementById(box.id+"Correct");
                }else {
                    error = document.getElementById(box.id + "Error");
                }
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

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

let form=document.getElementById('formUser');
form.addEventListener("focusout", isFull);
