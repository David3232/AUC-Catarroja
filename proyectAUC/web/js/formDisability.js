
function showComment(correct,error,box,button){
    //Si hay algun campo incorrecto
    if(correct!==undefined){
        box.setAttribute('style', 'border-color: #28A745 !important');
        correct.style.display = "block";
        error=document.getElementById(box.id+"Error");
        error.style.display = "none";
        error=undefined;
    }
    //Si estan todos los campos correctos
    if(error!==undefined){
        box.setAttribute('style', 'border-color: #E73568 !important');
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
    if(box.value.length===0){
        switch (box.id) {
            case "appbundle_disability_name":
                error=document.getElementById(box.id+"Error");
                break;
            case "appbundle_disability_description":
                error=document.getElementById(box.id+"Error");
                break;
            case "appbundle_disability_grade":
                error=document.getElementById(box.id+"Error");
                break;
        }
    }else{
        switch (box.id) {
            case "appbundle_disability_name":
                if(box.value.length>=3){
                    correct=document.getElementById(box.id+"Correct");
                }else{
                    error=document.getElementById(box.id+"Error");
                }
                break;
            case "appbundle_disability_description":
                if(box.value.length>=10){
                    correct=document.getElementById(box.id+"Correct");
                }else{
                    error=document.getElementById(box.id+"Error");
                }
                break;
            case "appbundle_disability_grade":
                if(box.value>=0 && isNaN(box.value)===false && box.value<=100){
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
form.addEventListener("input", isFull);
