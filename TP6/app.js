
let elemento = document.querySelector('p')
let botoncolorfondo= document.querySelector('#boton1')

botoncolorfondo.onclick=function(){
    elemento.style.backgroundColor= 'violet'
}

let botontexto= document.querySelector('#boton2')
//let elemento = document.querySelector('#p)
botontexto.onclick=function(){
    elemento.textContent=('soy ami')
}
let botoncambiarcolor= document.querySelector('#boton3')

botoncambiarcolor.onclick=function(){
    elemento.style.color='black'
}
let botonletra= document.querySelector('#boton4')

botonletra.onclick=function(){
    elemento.style.fontFamily= 'Comic Sanz'
}
