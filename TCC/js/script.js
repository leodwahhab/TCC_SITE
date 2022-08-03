//DECLARAÇÃO DE VARIÁVEIS

const imgs = document.getElementById("painel")
const img = document.querySelectorAll("#painel img")
const h3Sensor = document.querySelector("#sensores h3")
const pSensor = document.querySelector("#sensores p")
let i = 0

//DECLARAÇÃO DE FUNÇÕES

function definirTamanhoCarrossel(wTela){
    let f = 0
    if(wTela >= 1366){
        f = 500
    }
    else if(wTela >= 1024){
        f = 350
    }
    else{
        f = 420
    }
    return f
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
