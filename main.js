//----------------------------------------------------------defino variables----------------------------
let palabras = ['elefante', 'biblioteca', 'camioneta', 'acordeon', 'relampago'];

let palabra = palabras[Math.floor(Math.random() * palabras.length)]; //redondeo y saco palabra al azar

let palabraConGuiones = palabra.replace(/./g, "_ "); //para transformar en guines las palabras

//---------------------------------------------------------------------------------------------------



String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); } 


//USO DE LA FUNCIÓN DE ARRIBA:
//palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);

//---------------------------------------------------------------------------------------------------


document.querySelector('#calcular').addEventListener('click', () => {
        
    let letra = document.querySelector('#letra').value;
    alert(palabra);
    //-----------------------------reviso si hay coincidencias
    for(let i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra); //donde encunetra la coincidencia, pone la letra
        }
    }
    
    alert(palabraConGuiones);
});