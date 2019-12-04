var alturaTASK=27


document.getElementById("pendentes").style="height:"+alturaTASK+"px;";
document.getElementById("feitas").style="height:"+alturaTASK+"px;";
document.getElementById("fazendo").style="height:"+alturaTASK+"px;";

function pegaItem(evt){
    evt.dataTransfer.setData("TAREFA",evt.target.id);
}

function habilitaArrastar(evt){
    evt.preventDefault();   
}

function recebeItem(evt){
    var idTarefa = evt.dataTransfer.getData("TAREFA");
    var tarefa = document.getElementById(idTarefa);
    
    if (evt.target.id === "fazendo" || evt.target.id === "feitas" || evt.target.id === "pendentes"){
        evt.target.appendChild(tarefa);
    }
    
    // para debug is on the table
    console.log("-------------------------------------");
    console.log("Numero de pendentes "+document.getElementById("pendentes").childElementCount);
    console.log("Numero de fazendo "+document.getElementById("fazendo").childElementCount);
    console.log("Numero de feitas "+document.getElementById("feitas").childElementCount);

    
    
    

    if(document.getElementById("pendentes").childElementCount == 0){

        document.getElementById("pendentes").style =" height:27px;"; 
        
    }
    else{
        document.getElementById("pendentes").style =" height:"+document.getElementById("pendentes").childElementCount*alturaTASK+"px;";
    }

    if(document.getElementById("fazendo").childElementCount == 0){

        document.getElementById("fazendo").style =" height:27px;"; 
        
    }
    else{
        document.getElementById("fazendo").style =" height:"+document.getElementById("fazendo").childElementCount*alturaTASK+"px;";
    }
    if(document.getElementById("feitas").childElementCount == 0){

        document.getElementById("feitas").style =" height:27px;"; 
        
    }
    else{
        document.getElementById("feitas").style =" height:"+document.getElementById("feitas").childElementCount*alturaTASK+"px;";
    }

}

function buscaTarefas(){

    fetch("http://www.professorisidro.com.br/tarefas.php",{"method":"GET"})
      .then(response => response.json())
      .then(json => mostraTarefa(json));
}

function mostraTarefa(json){
    let qtde = document.getElementById("qtde").value;
    let task;
    for(i=1; i<=qtde; i++){
        task = json[i];
        document.getElementById("pendentes").innerHTML += "<div class='itemTarefa' draggable='true' ondragstart='pegaItem(event);' id='t"+i+"'>"+task+"</div>";
    }
    document.getElementById("pendentes").style="height:"+(alturaTASK*qtde)+"px;";
   
}