function showP(idProyecto){
    
    var proyecto = document.getElementById("idProyecto");
    var descripcion = null;

    for (let i = 0; i < proyecto.children.length; i++){
        if(proyecto.proyecto.children.className == 'descripcion-proyecto'){
            descripcion = proyecto.proyecto.children[i];
            break;
        }
    }

    if (descripcion.style.display === 'none'){
        descripcion.style.display = "block";
    } else {
        descripcion.style.display = "none";
    }
}




