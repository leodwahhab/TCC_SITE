const faq = [
    ['Como posso instalar o aplicativo?', 'Por enquanto o nosso aplicativo Allfishes funciona somente para fins acadêmicos, mas no futuro ele estará disponível na PlayStore.'],
    ['Como posso comprar um sistema com os sensores?', 'Por enquanto nosso sistema foi desenvolvido sem finalidades comercias então para o cliente adquirir deverá nós avisar e agendar um pedido à longo prazo.'],
    ['Quem são os responsáveis pelo trabalho?', 'Alex Cruz, Kaliq Aboarrage, Leonardo Wahhab, Luan Juvêncio, Paulo Santana, Pedro Henrique e Vinícius Brait.'],
    ['Como posso entrar em contato com a empresa?', 'Você pode enviar um e-mail para allfishestcc@gmail.com que  assim que possível te responderemos.'],
    ['O sistema fornece algum tipo de garantia?', 'Como ele ainda só foi desenvolvido para fins acadêmimos, nós não fornecemos nenhum tipo de garantia.']
]

const ul = document.querySelector('#faq ul')

faq.forEach(function(valor, indice, faqArray){ //a cada linha do array 
    const li = document.createElement("li")//cria o elemento li
    ul.appendChild(li)//adiciona o li no html
    
    for(let i = 0; i < faqArray[indice].length; i++){
        const div = document.createElement("div")
        div.innerHTML = faqArray[indice][i]
        
        if(i == 0){
            div.className = 'pergunta'
            div.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"/></svg>'
        }
        else if(i == 1){
            div.className = 'resposta'
            div.style.maxHeight = '0px'
            div.style.height = '0px'
            div.style.padding = '0'
        }
        
        li.appendChild(div)
    }
})

//expande as respostas na página de suporte
const perguntaFAQ = document.querySelectorAll('.pergunta')

perguntaFAQ.forEach(perguntaFAQ => {
    perguntaFAQ.addEventListener('click', function(){
        const respostaFAQ = perguntaFAQ.nextElementSibling
        const seta = perguntaFAQ.lastElementChild
        

        if(respostaFAQ.style.height == '0px'){
            respostaFAQ.style.maxHeight = '300px'
            respostaFAQ.style.height = 'auto'
            respostaFAQ.style.padding = '20px'
            seta.style.transform = 'rotate(-90deg)'
        }
        else{
            respostaFAQ.style.maxHeight = '0px'
            respostaFAQ.style.height = '0px'
            respostaFAQ.style.padding = '0'
            seta.style.transform = 'rotate(0deg)'
        }
    })
})