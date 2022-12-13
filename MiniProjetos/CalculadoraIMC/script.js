var res = document.querySelector('div.result')

function Calculate(){
    res.innerHTML = ``
    var txtalt = document.getElementById('height')
    var txtpeso = document.getElementById('weight')
    var alt = Number(txtalt.value)
    var peso = Number(txtpeso.value)

    var imc = peso / (alt * alt)
    imc = imc.toFixed(2)
    
    if (alt == 0 || peso == 0 ){
        alert('Informações faltando!')
    }
    else{
        if (imc < 18.5){
            res.innerHTML += ` Seu IMC é de ${imc}, classificado como <strong> ABAIXO DO PESO! </strong>`
        }
        else if(imc > 18.5 && imc < 24.9){
            res.innerHTML += ` Seu IMC é de ${imc}, classificado como <strong> NORMAL! </strong>` 
        }
        else if(imc > 25 && imc < 29.9){
            res.innerHTML += ` Seu IMC é de ${imc}, classificado como <strong> SOBREPESO! </strong>`
        }
        else{
            res.innerHTML += ` Seu IMC é de ${imc}, classificado como <strong> OBESO! </strong>`
        }
    }
    
}

function somenteNumeros(e) {
    var charCode = e.charCode ? e.charCode : e.keyCode;
    // charCode 8 = backspace   
    // charCode 9 = tab
    if (charCode != 8 && charCode != 9 && charCode != 46) {
        // charCode 48 equivale a 0   
        // charCode 57 equivale a 9
        if (charCode < 48 || charCode > 57) {
            return false;
        }
    }

    
}

function Erase(e){
    var inp = e.target
    inp.removeAttribute("placeholder");
}