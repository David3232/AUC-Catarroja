
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
            case "appbundle_user_username":
                error=document.getElementById(box.id+"Error");
                break;
            case "appbundle_user_surname1":
                error=document.getElementById(box.id+"Error");
                break;
            case "appbundle_user_surname2":
                error=document.getElementById(box.id+"Error");
                break;
            case "appbundle_user_address":
                error=document.getElementById(box.id+"Error");
                break;
            case "appbundle_user_zipCode":
                error=document.getElementById(box.id+"Error");
                break;
            case "appbundle_user_location":
                error=document.getElementById(box.id+"Error");
                break;
            case "appbundle_user_email":
                error=document.getElementById(box.id+"Error");
                break;
            case "appbundle_user_telephone":
                error=document.getElementById(box.id+"Error");
                break;
            case "appbundle_user_plainPassword":
                error=document.getElementById(box.id+"Error");
                break;
            case "appbundle_user_idDocument":
                if(box.value.length>=5){
                    correct=document.getElementById(box.id+"Correct");
                }else{
                    error=document.getElementById(box.id+"Error");
                }
                break;
        }
    }else{
        switch (box.id) {
            case "appbundle_user_username":
                if(box.value.length>=2 && isNaN(box.value)===true){
                    correct=document.getElementById(box.id+"Correct");
                }else {
                    error = document.getElementById(box.id + "Error");
                }
                break;
            case "appbundle_user_surname1":
                if(box.value.length>=2 && isNaN(box.value)===true){
                    correct=document.getElementById(box.id+"Correct");
                }else {
                    error = document.getElementById(box.id + "Error");
                }
                break;
            case "appbundle_user_surname2":
                if(box.value.length>=2 && isNaN(box.value)===true){
                    correct=document.getElementById(box.id+"Correct");
                }else {
                    error = document.getElementById(box.id + "Error");
                }
                break;
            case "appbundle_user_address":
                if(box.value.length>=2){
                    correct=document.getElementById(box.id+"Correct");
                }else{
                    error=document.getElementById(box.id+"Error");
                }
                break;
            case "appbundle_user_zipCode":
                if(box.value.length===5 && isNaN(box.value)===false){
                    correct=document.getElementById(box.id+"Correct");
                }else {
                    error = document.getElementById(box.id + "Error");
                }
                break;
            case "appbundle_user_location":
                if(box.value.length>=3 && isNaN(box.value)===true){
                    correct=document.getElementById(box.id+"Correct");
                }else {
                    error = document.getElementById(box.id + "Error");
                }
                break;
            case "appbundle_user_email":
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
            case "appbundle_user_telephone":
                if(box.value.length>=9 && isNaN(box.value)===false && box.value.length<=15){
                    correct=document.getElementById(box.id+"Correct");
                }else{
                    error=document.getElementById(box.id+"Error");
                }
                break;
            case "appbundle_user_plainPassword":
                if(box.value.length>=5){
                    correct=document.getElementById(box.id+"Correct");
                }else{
                    error=document.getElementById(box.id+"Error");
                }
                break;
            case "appbundle_user_idDocument":
                if(box.value.length>=8 && box.value.length<=9){
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

let form=document.getElementById('formUser');
form.addEventListener("input", isFull);
