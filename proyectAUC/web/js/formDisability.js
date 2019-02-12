
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
            case "description":
                error=document.getElementById(box.id+"Error");
                break;
            case "grade":
                error=document.getElementById(box.id+"Error");
                break;
        }
    }else{
        switch (box.id) {
            case "name":
                if(box.value.length>=3){
                    correct=document.getElementById(box.id+"Correct");
                }else{
                    error=document.getElementById(box.id+"Error");
                }
                break;
            case "description":
                if(box.value.length>=10){
                    correct=document.getElementById(box.id+"Correct");
                }else{
                    error=document.getElementById(box.id+"Error");
                }
                break;
            case "grade":
                if(box.value.length>=1 && isNaN(box.value)===false && box.value.length<=2){
                    correct=document.getElementById(box.id+"Correct");
                }else{
                    error=document.getElementById(box.id+"Error");
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

let form=document.getElementById('formDisability');
form.addEventListener("focusout", isFull);
