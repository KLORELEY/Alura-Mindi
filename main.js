function playSonido(idElementoAudio) {
    document.querySelector (idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(contador)

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)

    tecla.onclick = function (){
        playSonido(idAudio);
    };

    tecla.onkeydown = function(evento){
        console.log(evento.code==='space')
        if(evento.code==='space'){
            tecla.classList.add('activa');
        }
        
        if(evento.code==='space'|| evento.code==='enter'){
            tecla.classList.add('activa');
        }
        console.log(evento.code==='space'|| evento.code==='enter')
            
    }
    
    // código necesario para eliminar la clase 'activa' tan pronto como la tecla deje de ser presionada.
    tecla.onkeyup = function(){
        tecla.classList.remove('activa');
    }


}

   

    
   
   
//document.querySelector ('.tecla_pom').onclick=playSonidoPom;



//function playSonidoClap() {
    /* document.querySelector('#sonido_tecla_clap').play()
}
document.querySelector('.tecla_clap').onclick=playSonidoClap;



function playSonidoTim() {
    document.querySelector('#sonido_tecla_tim').play()
}
document.querySelector('.tecla_tim').onclick=playSonidoTim;



function playSonidoPuff() {
    document.querySelector('#sonido_tecla_puff').play()
}
document.querySelector('.tecla_puff').onclick=playSonidoPuff;



function playSonidoSplash() {
    document.querySelector('#sonido_tecla_splash').play()
}
document.querySelector('.tecla_splash').onclick=playSonidoSplash;



function playSonidoToim() {
    document.querySelector('#sonido_tecla_toim').play()
}
document.querySelector('.tecla_toim').onclick=playSonidoToim;




function playSonidoPsh() {
    document.querySelector('#sonido_tecla_psh').play()
}
document.querySelector('.tecla_psh').onclick=playSonidoPsh;




function playSonidoTic() {
    document.querySelector('#sonido_tecla_tic').play()
}
document.querySelector('.tecla_tic').onclick=playSonidoTic;




function playSonidoTom() {
    document.querySelector('#sonido_tecla_tom').play()
}
document.querySelector('.tecla_tom').onclick=playSonidoTom;

 */

 