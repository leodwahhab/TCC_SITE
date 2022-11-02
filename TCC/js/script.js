//DECLARAÇÃO E ATRIBUIÇÃO DE VARIÁVEIS

const carrossel = document.querySelector('.carrossel')
const imgs = document.getElementById("painel")
const img = document.querySelectorAll("#painel img")
const h3Sensor = document.querySelector("#sensores .texto-principal-sensores h3")
const pSensor = document.querySelector("#sensores .texto-principal-sensores p")
const textoSensor = document.querySelector('#sensores .texto-principal-sensores')
let i = 0

//DECLARAÇÃO DE FUNÇÕES

// ajusta o tamanho do carrossel de acordo com a largura da tela
function definirTamanhoCarrossel(wTela){
    if(wTela < 901){
        textoSensor.style.display = 'block'
        carrossel.style.display = 'flex'
        
        return wTela * 0.35
    }
    else{
        textoSensor.style.display = 'none'
        carrossel.style.display = 'none'
        return false
    }
}

//move as imagens do carrossel
function moverCarrossel(){
    i++
    switch(i){
        case 1:
            h3Sensor.innerHTML = 'Sensor PH'
            pSensor.innerHTML = '&nbsp&nbsp&nbsp&nbspO Sensor de pH Arduino é um sensor muito funcional e prático desenvolvido especialmente para trabalhar em conjunto com microcontroladores, podendo atuar em inclusive com o Arduino UNO.'
            break
        case 2:
            h3Sensor.innerHTML = 'ESP32'
            pSensor.innerHTML = '&nbsp&nbsp&nbsp&nbspO módulo ESP32 é um módulo de alta performance para aplicações envolvendo wifi, contando com um baixíssimo consumo de energia.'
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

// intervalo para a função de mover o carrossel acontecer
setInterval(moverCarrossel, 4000)

//cria uma sombra no header quando a tela é scrollada para baixa
window.onscroll = function(){
    if(document.body.scrollTop > 35 || document.documentElement.scrollTop > 35){
        document.querySelector('header').style.boxShadow = '0px 0px 15px 3px #00000090'
    }
    else{
        document.querySelector('header').style.boxShadow = 'none'
    }
}