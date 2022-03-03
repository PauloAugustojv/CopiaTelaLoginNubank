const input = document.querySelector('login')

input.addEventListener('keypress', () =>{
        let inputlength = input.value.length

        if (inputlength === 3){
            input.value += '.'
        }
    })