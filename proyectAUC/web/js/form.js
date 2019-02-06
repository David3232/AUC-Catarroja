/*(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        let validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();*/
function showInformation(event){
    let div_correct = document.getElementById();
    let div_incorrect = document.getElementById();

}
function isFull(event){
    let box = event.currentTarget;
    if(box.textContent===""){

    }
    console.log(box);
}

let form=document.getElementsByClassName('needs-validation')[0];

form.addEventListener("focusout", isFull);