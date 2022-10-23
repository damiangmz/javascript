if (nombre === "" || apellidos === ""  || correo === "" || usuario === "" || clave === "" || telefono === ""){
    alert("Todos los campos son obligatorios");
    return false;
}
else if (nombre.length>2){
    
    return false;
}
else if (apellidos.length>80){
    alert("Los apellidos son muy largos");
    
    return false;
    
}
else if (correo.length>100){
    alert("El correo es muy largo");
    return false;
}
else if (!expresion.test(correo)){
    alert("El correo no es válido");
    return false;
}
else if (usuario.length>20 || clave.length>20){
    alert("El usuario y la clave solo deben tener 20 caracteres como máximo");
    return false;
    
}
else if (telefono.length>2){
    alertaMensaje()
    alert("El teléfono es muy largo");
    return false;
}
else if (isNaN(telefono)){
    alert("El teléfono ingresado no es de tipo numerico");
    return false;
}
else{
    location.remplace("login.html")
}
}