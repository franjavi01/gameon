let cuadro_btn = document.querySelectorAll(".cuadro");
let info = document.getElementById("info");
const juego_btn = document.getElementById("button")
let i = 0;
let n_boton;
const jBtn_e =  "pointer-events:initial;opacity:initial;"
const jBtn_d =  "pointer-events:none;opacity:40%;"

juego_btn.onclick = function(){

  
    for(n_boton = 0; n_boton < cuadro_btn.length; n_boton++){    
        cuadro_btn[n_boton].style.cssText = "pointer-events:initial;";
        cuadro_btn[n_boton].innerHTML = "";
    }
    nEmpieza();
}

cuadro_btn.forEach(boton => {
    
 boton.onclick = function(){
           
    info.innerHTML = ""; 
     
     if(i %= 2){    
        boton.innerHTML = "<h1>X</h1>";
        comprobar();
    } else {
        boton.innerHTML = "<h1>O</h1>"; 
        comprobar();
    }  
    boton.style.setProperty("pointer-events","none"); 
    i++;   
  }

});


function comprobar(){
    
    juego_btn.style.cssText = jBtn_d;
        
   if ((cuadro_btn[0].innerHTML == "<h1>X</h1>" && cuadro_btn[1].innerHTML == "<h1>X</h1>" && cuadro_btn[2].innerHTML == "<h1>X</h1>") ||
       (cuadro_btn[3].innerHTML == "<h1>X</h1>" && cuadro_btn[4].innerHTML == "<h1>X</h1>" && cuadro_btn[5].innerHTML == "<h1>X</h1>") ||
       (cuadro_btn[6].innerHTML == "<h1>X</h1>" && cuadro_btn[7].innerHTML == "<h1>X</h1>" && cuadro_btn[8].innerHTML == "<h1>X</h1>") ||
       (cuadro_btn[0].innerHTML == "<h1>X</h1>" && cuadro_btn[3].innerHTML == "<h1>X</h1>" && cuadro_btn[6].innerHTML == "<h1>X</h1>") ||
       (cuadro_btn[1].innerHTML == "<h1>X</h1>" && cuadro_btn[4].innerHTML == "<h1>X</h1>" && cuadro_btn[7].innerHTML == "<h1>X</h1>") ||
       (cuadro_btn[2].innerHTML == "<h1>X</h1>" && cuadro_btn[5].innerHTML == "<h1>X</h1>" && cuadro_btn[8].innerHTML == "<h1>X</h1>") ||
       (cuadro_btn[0].innerHTML == "<h1>X</h1>" && cuadro_btn[4].innerHTML == "<h1>X</h1>" && cuadro_btn[8].innerHTML == "<h1>X</h1>") ||
       (cuadro_btn[6].innerHTML == "<h1>X</h1>" && cuadro_btn[4].innerHTML == "<h1>X</h1>" && cuadro_btn[2].innerHTML == "<h1>X</h1>"))  {
       
        info.innerHTML = '<h1>"X" Gana</h1>';
       deshabilitarCasillas();
       
        } else if ((cuadro_btn[0].innerHTML == "<h1>O</h1>" && cuadro_btn[1].innerHTML == "<h1>O</h1>" && cuadro_btn[2].innerHTML == "<h1>O</h1>") ||
        (cuadro_btn[3].innerHTML == "<h1>O</h1>" && cuadro_btn[4].innerHTML == "<h1>O</h1>" && cuadro_btn[5].innerHTML == "<h1>O</h1>") ||
        (cuadro_btn[6].innerHTML == "<h1>O</h1>" && cuadro_btn[7].innerHTML == "<h1>O</h1>" && cuadro_btn[8].innerHTML == "<h1>O</h1>") ||
        (cuadro_btn[0].innerHTML == "<h1>O</h1>" && cuadro_btn[3].innerHTML == "<h1>O</h1>" && cuadro_btn[6].innerHTML == "<h1>O</h1>") ||
        (cuadro_btn[1].innerHTML == "<h1>O</h1>" && cuadro_btn[4].innerHTML == "<h1>O</h1>" && cuadro_btn[7].innerHTML == "<h1>O</h1>") ||
        (cuadro_btn[2].innerHTML == "<h1>O</h1>" && cuadro_btn[5].innerHTML == "<h1>O</h1>" && cuadro_btn[8].innerHTML == "<h1>O</h1>") ||
        (cuadro_btn[0].innerHTML == "<h1>O</h1>" && cuadro_btn[4].innerHTML == "<h1>O</h1>" && cuadro_btn[8].innerHTML == "<h1>O</h1>") ||
        (cuadro_btn[6].innerHTML == "<h1>O</h1>" && cuadro_btn[4].innerHTML == "<h1>O</h1>" && cuadro_btn[2].innerHTML == "<h1>O</h1>"))  {
        
         info.innerHTML = '<h1>"O" Gana</h1>';
        deshabilitarCasillas();
 
         } else{  if (cuadro_btn[0].innerHTML != "" && cuadro_btn[1].innerHTML != "" && cuadro_btn[2].innerHTML != "" &&
        cuadro_btn[3].innerHTML != "" && cuadro_btn[4].innerHTML != "" && cuadro_btn[5].innerHTML != "" &&
        cuadro_btn[6].innerHTML != "" && cuadro_btn[7].innerHTML != "" && cuadro_btn[8].innerHTML != "" &&
        cuadro_btn[0].innerHTML != "" && cuadro_btn[3].innerHTML != "" && cuadro_btn[6].innerHTML != "" &&
        cuadro_btn[1].innerHTML != "" && cuadro_btn[4].innerHTML != "" && cuadro_btn[7].innerHTML != "" &&
        cuadro_btn[2].innerHTML != "" && cuadro_btn[5].innerHTML != "" && cuadro_btn[8].innerHTML != "" &&
        cuadro_btn[0].innerHTML != "" && cuadro_btn[4].innerHTML != "" && cuadro_btn[8].innerHTML != "" &&
        cuadro_btn[6].innerHTML != "" && cuadro_btn[4].innerHTML != "" && cuadro_btn[2].innerHTML != "")  {
         
          info.innerHTML = "<h1>Empate</h1>";
          deshabilitarCasillas(false);
          } 
        }   
}

function  deshabilitarCasillas(y){
  
  if (y == false){
    i = Math.floor(Math.random() * (3 - 1)) + 1;
 }
 console.log(i);
    for(n_boton = 0; n_boton < cuadro_btn.length; n_boton++){    
    cuadro_btn[n_boton].style.setProperty("pointer-events","none"); 
    }
    juego_btn.style.cssText = jBtn_e;
}