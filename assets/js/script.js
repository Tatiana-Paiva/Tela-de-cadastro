class Validator {
    constructor() {
        this.validations = [
            'data-min-length',
        ]
    }
    //iniciar  a validação de todos os campos
    validate(form) {
    //pegar os insputs
    let inputs = form.getElementsByTagName('input')



    // transformo uma HTMLCollection -> Array
    let inputsArray = [...inputs]

    // loop nos inputs e validação mediante ao que for encontrado
     inputsArray.forEach(function(input) {
         
        //Loop em todas as validações existentes
        for(let i = 0; this.validations.length > i; i++) {
            //verifica se a validação atual existe no input
            if(input.getAttribute(this.validations[i]) != null) {
                
            }
            
        }
     }, this)
     
    }

   
    }








let form = document.getElementById("register-form")
let submit = document.getElementById("btn-submit")

let validator = new Validator()

// Evento que dispara as validações

submit.addEventListener('click', function(e){

    e.preventDefault()

    validator.validate(form)

    
} ) 



