/*index 1*/

function cambiar() {
    let elsiane = document.querySelector (".elsiane")
        
        if (elsiane.style.borderColor != "") {
        elsiane.style.borderColor=""
        }

        else {elsiane.style.borderColor = "#850028"}

    }


/*index 2*/
        function comprar() {

            let sticker1 = document.querySelector (".sticker1").value
            let sticker2 = document.querySelector (".sticker2").value
            let sticker3 = document.querySelector (".sticker3").value
            let mensaje = document.querySelector (".mensaje")
            let suma = Number(sticker1) + Number(sticker2) + Number(sticker3)
            
            if ( suma > 10) {

                mensaje.innerHTML = 'llevas demasiados stickers!'
                
            }
            
            else { mensaje.innerHTML = suma }
            
        }

/*index 3*/

        function verificar() {

            let val1 = document.getElementById ("val1").value;
            let val2 = document.getElementById ("val2").value; 
            let val3 = document.getElementById ("val3").value; 
            let message = document.getElementById ("message");
            let total = val1+ val2 + val3 
            
            if (total== "911"){
                console.log (total)

                message.innerHTML = 'password 1 correcto'

            } else if (total == "714"){

                message.innerHTML = 'password 2 correcto'

            }           

            else { message.innerHTML =  'password incorrecto'}

        }