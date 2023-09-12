const labelsAndInputs = document.querySelectorAll('.boxRelative')
const submitRegister = document.getElementById('register')
const form = document.querySelectorAll('.formRegister')

labelsAndInputs.forEach(labelAndInput => {
    let input = labelAndInput.lastElementChild
    input.addEventListener('focus', () => {
        let label = labelAndInput.firstElementChild
        label.classList.add('labelActive')
        if(label.classList.contains('labelLogin')){
            label.style.color = '#8C451C'
        } else{
            label.style.color = '#c9c9c9'
        }
    })
    input.addEventListener('focusout', () =>{
        let label = labelAndInput.firstElementChild
        if(label.classList.contains('labelLogin')){
            label.style.color = '#8C451C'
        }else{
            label.style.color = '#fff'
        }
        if (input.value == ''){
            label.classList.remove('labelActive')
        }
    })
    form.forEach(formulario =>{
        formulario.addEventListener('submit', (e) => {
            e.preventDefault
            console.log(input.value)
        })
    })
});



//lastElementChild - input
//firstElementChild - label
