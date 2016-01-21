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
    var elemento=document.getElementById('subMenusRisoterapia');
    
    if(elemento.style.display=="none"){
        document.getElementById('subMenusRisoterapia').style.display = 'block';
    }
    else{
        document.getElementById('subMenusRisoterapia').style.display = 'none';
    }
}

function mostrarOutdoor(){
    var elemento=document.getElementById('subMenusOutdoor');
    
    if(elemento.style.display=="none"){
        document.getElementById('subMenusOutdoor').style.display = 'block';
    }
    else{
        document.getElementById('subMenusOutdoor').style.display = 'none';
    }
}
