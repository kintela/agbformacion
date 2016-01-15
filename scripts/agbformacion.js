function mostrar(){
    var elemento=document.getElementById('descargaPpts');
    
    if(elemento.style.display=="none"){
        document.getElementById('descargaPpts').style.display = 'block';
    }
    else{
        document.getElementById('descargaPpts').style.display = 'none';
    }
}

function mostrarRisoterapia(){
    var elemento=document.getElementById('subMenus');
    
    if(elemento.style.display=="none"){
        document.getElementById('subMenus').style.display = 'block';
    }
    else{
        document.getElementById('subMenus').style.display = 'none';
    }
}
