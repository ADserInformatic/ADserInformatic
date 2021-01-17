
const boton = document.getElementById('boton');

boton.addEventListener('click', ()=>{
    document.documentElement.scrollTop = 0;
})

let tarjeta = document.querySelectorAll('#tarjeta');

let i = 1;

function move(){
    setInterval(()=>{ 
    if(i <= 3){ 
        tarjeta[0].style.transform += 'translateX(-120%)';
        tarjeta[1].style.transform += 'translateX(-120%)';
        tarjeta[2].style.transform += 'translateX(-120%)';
        tarjeta[3].style.transform += 'translateX(-120%)';
        tarjeta[4].style.transform += 'translateX(-120%)';
        tarjeta[5].style.transform += 'translateX(-120%)';
        tarjeta[6].style.transform += 'translateX(-120%)';
        tarjeta[7].style.transform += 'translateX(-120%)';
    }else{
        tarjeta[0].style.transform = 'translateX(0px)';
        tarjeta[1].style.transform = 'translateX(0px)';
        tarjeta[2].style.transform = 'translateX(0px)';
        tarjeta[3].style.transform = 'translateX(0px)';
        tarjeta[4].style.transform = 'translateX(0px)';
        tarjeta[5].style.transform = 'translateX(0px)';
        tarjeta[6].style.transform = 'translateX(0px)';
        tarjeta[7].style.transform = 'translateX(0px)';
        i = 0;
    }
    i++
}, 2000);
};
move();
