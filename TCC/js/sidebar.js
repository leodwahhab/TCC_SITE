//cria uma animação para a sidebar
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