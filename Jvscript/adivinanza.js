var cont=4; var respuesta=1852; var contRecibido=0;

function contador(){
    cont-=1;
    document.getElementById("intentos").innerHTML = ("Te quedan " + cont + " intentos");
    if (contador==0 && contador== respuesta) {
        document.getElementById("resultados").innerHTML = ("Te quedaste sin intentos");
    }
}
function contenido() {
    contRecibido = document.getElementById("ingreso").value;
    if (contRecibido == respuesta) {
        document.getElementById("resultados").innerHTML= ("Has acertado");
        document.getElementById("botonEnv").disabled = true;
        document.getElementById("resultados").style.backgroundColor="green";
    }
    if (cont==3 && contRecibido != respuesta) { 
        document.getElementById("pista1").innerHTML=("Después de 1842");
    }
    if (cont==2 && contRecibido != respuesta) {
        document.getElementById("pista2").innerHTML = ("Antes de 1857");
    }
    if(cont==1 && contRecibido != respuesta){
        document.getElementById("resultados").innerHTML = ("Has Perdio");
        document.getElementById("botonEnv").disabled = true;
        document.getElementById("resultados").style.backgroundColor="red";
    }
}
    