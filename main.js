//----------------------------------------------------------defino variables----------------------------
let palabras = ['casa', 'nena', 'pino', 'perro', 'pie', 'gato'];
let palabra = palabras[Math.floor(Math.random() * palabras.length)]; //redondeo y saco palabra al azar
let palabraConGuiones = palabra.replace(/./g, "_ "); //para transformar en guines las palabras
let contadorFallos = 0;


//---------------------------------------------------------------------------------------------------


String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); } 


//USO DE LA FUNCIÓN DE ARRIBA:
//palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);

//---------------------------------------------------------------------------------------------------

document.querySelector('#calcular').addEventListener('click', () => {
        
    let letra = document.querySelector('#letra').value;
    let fallaste = true;
    //-----------------------------reviso si hay coincidencias
    for(let i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra); //donde encunetra la coincidencia, pone la letra
            fallaste = false;
        }
    }

        if(fallaste){
            contadorFallos++;
            document.querySelector('#ahorcado').style.backgroundPosition = - (307 * contadorFallos) + 'px 0'; //como el slider
            if(contadorFallos == 5){
                document.querySelector('#perdedor').style.display = 'flex';
            }
        }else{
            if(palabraConGuiones.indexOf('_') < 0){
                document.querySelector('#ganador').style.display = 'flex';
            }
        }

    document.querySelector('#output').innerHTML = palabraConGuiones;
    //alert(palabraConGuiones);
    document.querySelector('#letra').value = '';
    document.querySelector('#letra').focus();  //focus en el cuadro de texto a escribir


});