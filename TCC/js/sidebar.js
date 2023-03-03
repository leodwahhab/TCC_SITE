//cria uma animação para a sidebar
const container = document.querySelector('.container')
const checkbox = document.getElementById('check')
const menu = document.getElementById('menu')
const sidebar = document.querySelector('.sidebar')

container.addEventListener('click', function(){
    if(checkbox.checked){
        container.style.opacity = '0.8'
        sidebar.style.left = '0vw';
        menu.style.transform = 'rotate(90deg)'
        checkbox.checked = false
    }
    else{
        sidebar.style.left = '-60vw';
        container.style.opacity = '1'
        menu.style.transform = 'rotate(0deg)'
    }
})
