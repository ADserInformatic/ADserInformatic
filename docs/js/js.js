
var menu=document.getElementById('menu');
//var scroll=window.pageYOffset;

window.addEventListener('scroll',()=>(revisar()));

function revisar (){
if (window.pageYOffset>60){
    menu.classList.add("moviendo");
    menu.classList.remove("quieto");

}else{  menu.classList.add("quieto");
        menu.classList.remove("moviendo");

    }
}



// ACTIVA Y DESACTIVA OPCIONES DE MOSTRADOR
var all=document.querySelector('#all');
var design=document.querySelector('#design');
var web=document.querySelector('#web');
var branding=document.querySelector('#branding');
var printeee=document.querySelector('#print');
all.addEventListener('click',()=>{esconder(all)});
design.addEventListener('click',()=>(esconder(design)));
web.addEventListener('click',()=>{esconder(web)});
branding.addEventListener('click',()=>{esconder(branding)});
printeee.addEventListener('click',()=>{esconder(printeee)});
var taaag=document.querySelectorAll('#taaag');
function desactive (){
    all.classList.remove('active');
    design.classList.remove('active');
    web.classList.remove('active');
    branding.classList.remove('active');
    printeee.classList.remove('active');
};

// CLASES PARA EFECTOS DE TARJETAS DE MOSTRADOR
function desocultar(){
    for(let i=0;i<taaag.length;i++){
        taaag[i].classList.remove('ocultar');
        taaag[i].classList.add('aparece');
    }
}
function destransicion(){for(let i=0;i<taaag.length;i++){
    taaag[i].classList.remove('escondercontransicion'); 
    
}}
function ocultar (list){    
    for(let i=0; i<list.length;i++){
    var indice = list[i];
    taaag[indice].classList.add('ocultar');
}}

function transicion(list){
    for(let i=0; i<list.length;i++){
        var indice = list[i];
        taaag[indice].classList.remove('aparece');
        taaag[indice].classList.add('escondercontransicion');
    }
}
function agranda(){for(let i=0;i<taaag.length;i++){
    taaag[i].classList.add('agranda');
}}




// SWITCH SELECTOR DE BOTON DE MOSTRADOR
function esconder(e){
    desactive();e.classList.add('active');
    switch(e.innerHTML){
        case "ALL": desocultar(); break;
        case "DESIGN": 
                desocultar();
                setTimeout('destransicion()',500);
                transicion([0,1,2]);
                setTimeout('ocultar([0,1,2])',500);
                break;
        case "WEB": 
                    desocultar();
                    setTimeout('destransicion()',500);
                    transicion([0,2,3,4]);
                    setTimeout('ocultar([0,2,3,4])',500);break;
        case "BRANDING": 
                         desocultar();
                         setTimeout('destransicion()',500);
                         transicion([3,4,5]);
                         setTimeout('ocultar([3,4,5])',500);break;
  
        case "PRINT":
                    desocultar();
                    setTimeout('destransicion()',500);
                    transicion([1,2,3,4,5]);
                    setTimeout('ocultar([1,2,3,4,5])',500);break;

    }
}




// AUMENTA NUMEROS 
var numerosfinales=[5600,220,108,650];
var aumenta1=document.querySelector('.aumenta1');
var aumenta2=document.querySelector('.aumenta2');
var aumenta3=document.querySelector('.aumenta3');
var aumenta4=document.querySelector('.aumenta4');

const num1=new Odometer({
    el:aumenta1,
    duration: 4000
})
aumenta1.innerHTML=5600;
// num1.update(5600);

const num2=new Odometer({
    el:aumenta2,
    // animation:'count',
    duration: 3000})
num2.update(220);

const num3=new Odometer({
    el:aumenta3,
    // animation:'count',
    duration: 3000})
    num3.update(108);

const num4=new Odometer({
    el:aumenta4,
    // animation:'count',
    duration: 3000})
num4.update(650);