
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
            case "appbundle_company_name":
                error=document.getElementById(box.id+"Error");
                break;
            case "appbundle_company_address":
                error=document.getElementById(box.id+"Error");
                break;
            case "appbundle_company_zipcode":
                error=document.getElementById(box.id+"Error");
                break;
            case "appbundle_company_town":
                error=document.getElementById(box.id+"Error");
                break;
            case "appbundle_company_contactname":
                error=document.getElementById(box.id+"Error");
                break;
            case "appbundle_company_telephone":
                error=document.getElementById(box.id+"Error");
                break;
            case "appbundle_company_email":
                error=document.getElementById(box.id+"Error");
                break;
        }
    }else{
        switch (box.id) {
            case "appbundle_company_name":
                if(box.value.length>=2){
                    correct=document.getElementById(box.id+"Correct");
                }else{
                    error=document.getElementById(box.id+"Error");
                }
                break;
            case "appbundle_company_address":/*
                let hasBar = false;
                for (let i=0;i<box.value.length;i++){
                    if(box.value[i]==='/'){
                        hasBar=true;
                    }
                }*/
                if(/*hasBar===true &&*/ box.value.length>=3){
                    correct=document.getElementById(box.id+"Correct");
                }else {
                    error = document.getElementById(box.id + "Error");
                }
                break;
            case "appbundle_company_zipcode":
                if(box.value.length===5 && isNaN(box.value)===false){
                    correct=document.getElementById(box.id+"Correct");
                }else {
                    error = document.getElementById(box.id + "Error");
                }
                break;
            case "appbundle_company_town":
                if(box.value.length>=2 && isNaN(box.value)===true){
                    correct=document.getElementById(box.id+"Correct");
                }else{
                    error=document.getElementById(box.id+"Error");
                }
                break;
            case "appbundle_company_contactname":
                if(box.value.length>=2){
                    correct=document.getElementById(box.id+"Correct");
                }else{
                    error=document.getElementById(box.id+"Error");
                }
                break;
            case "appbundle_company_telephone":
                if(box.value.length>=9 && isNaN(box.value)===false){
                    correct=document.getElementById(box.id+"Correct");
                }else{
                    error=document.getElementById(box.id+"Error");
                }
                break;
            case "appbundle_company_email":
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

let form=document.getElementById('formCompany');
form.addEventListener("input", isFull);
