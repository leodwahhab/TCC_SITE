//DECLARAÇÃO DE VARIÁVEIS

const carrossel = document.querySelector('.carrossel')
const imgs = document.getElementById("painel")
const img = document.querySelectorAll("#painel img")
const h3Sensor = document.querySelector("#sensores .texto-principal-sensores h3")
const pSensor = document.querySelector("#sensores .texto-principal-sensores p")
const textoSensor = document.querySelector('#sensores .texto-principal-sensores')
let i = 0

//DECLARAÇÃO DE FUNÇÕES

function definirTamanhoCarrossel(wTela){
    let f = 0
    if(wTela < 900){
        textoSensor.style.display = 'block'
        carrossel.style.display = 'flex'
        
        return wTela * 0.45
    }
    else{
        textoSensor.style.display = 'none'
        carrossel.style.display = 'none'
        return false
    }
}

console.log(window.innerWidth)
console.log(definirTamanhoCarrossel(window.innerWidth))

function moverCarrossel(){
    i++
    switch(i){
        case 1:
            h3Sensor.innerHTML = 'Sensor PH'
            pSensor.innerHTML = '&nbsp&nbsp&nbsp&nbspO Sensor de pH Arduino é um sensor muito funcional e prático desenvolvido especialmente para trabalhar em conjunto com microcontroladores, podendo atuar em inclusive com o Arduino UNO.'
            break
        case 2:
            h3Sensor.innerHTML = 'Arduino UNO'
            pSensor.innerHTML = '&nbsp&nbsp&nbsp&nbspArduino UNO é a placa mais recomendada para quem está começando na plataforma. Ela possui excelente custo-benefício, quantidade de portas suficiente para a criação de protótipos com sensores e módulos conectados.'
            break
        case 3:
            i = 0
            h3Sensor.innerHTML = 'Sensor TDS'
            pSensor.innerHTML = '&nbsp&nbsp&nbsp&nbspO sensor de TDS é um equipamento amplamente utilizado para medir o valor TDS.'
            break
    }

    imgs.style.transition = "all 0.5s ease"
    imgs.style.transform = "translateX(" + -i*(definirTamanhoCarrossel(window.innerWidth)) + "px)"
}

setInterval(moverCarrossel, 4000)

window.onscroll = function(){
    if(document.body.scrollTop > 35 || document.documentElement.scrollTop > 35){
        document.querySelector('header').style.boxShadow = '0px 0px 15px 3px #00000090'
    }
    else{
        document.querySelector('header').style.boxShadow = 'none'
    }
}

function animarMenu(){
    let container = document.querySelector('.container')
    let checkbox = document.getElementById('check')
    let menu = document.getElementById('menu')
    let sidebar = document.querySelector('.sidebar')
    
    if(checkbox.checked){
        container.style.opacity = '0.8'
        sidebar.style.left = '0vw';
        menu.style.transform = 'rotate(90deg)'
    }
    else{
        sidebar.style.left = '-60vw';
        container.style.opacity = '1'
        menu.style.transform = 'rotate(0deg)'
    }
}