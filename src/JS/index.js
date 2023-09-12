const menu = document.querySelector(".Menu")
const nav = document.getElementById('navUser')
const list = document.getElementById('userAcess')
let cartoesLivros = document.querySelectorAll(".CardLivro")
menu.addEventListener('click', () => {
    if(nav.classList.contains('navResponsive') && list.classList.contains('userLResponsive')){
        nav.classList.remove('navResponsive')
        list.classList.remove('userLResponsive')
        menu.classList.remove('cancelIcon')
    }else{
        nav.classList.add('navResponsive')
        list.classList.add('userLResponsive')
        menu.classList.add('cancelIcon')
    }
});

window.addEventListener('scroll', () =>{
    nav.classList.remove('navResponsive')
    list.classList.remove('userLResponsive')
    menu.classList.remove('cancelIcon')
})

cartoesLivros.forEach((cartao, index) => {
    cartao.addEventListener('mouseenter', () =>{
        if (!cartao.classList.contains("target")){
        cartao.innerHTML = `<label class="infLivro" for="submit${index}">
        <h1>Titulo - ${index + 1}</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequuntur recusandae, distinctio facilis illum expedita nam necessitatibus sequi praesentium esse porro possimus eveniet quod sunt a fugiat error autem nobis? </p>
            <a href="./src/pages/leitura.html" id="submit${index}" class="buttonRead">Iniciar leitura</a>
        </label>`
        cartao.classList.add("target")
    } setTimeout(() => {
        cartao.classList.remove('target')
        cartao.innerHTML = '?'
    }, 5000) 
    })
})