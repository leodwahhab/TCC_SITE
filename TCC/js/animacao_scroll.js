//cria uma sombra no header quando a tela é scrollada para baixa
window.onscroll = function(){
    if(document.body.scrollTop > 5 || document.documentElement.scrollTop > 5){
        document.querySelector('header').style.boxShadow = '0px 0px 15px 3px #00000090'
    }
    else{
        document.querySelector('header').style.boxShadow = 'none'
    }
}