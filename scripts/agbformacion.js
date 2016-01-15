var click=1;
function mostrar(){
    var elemento=document.getElementById('oculto');
    
    if(elemento.style.display="none"){
        document.getElementById('oculto').style.display = 'block';
    }
    else{
        document.getElementById('oculto').style.display = 'none';
    }
    //if (click==1){
    //    document.getElementById('oculto').style.display = 'block';
    //    click=click+1;
    //}
    //else{
    //    document.getElementById('oculto').style.display = 'none';
    //}
    
}
