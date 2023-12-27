const input = document.querySelector('#input');
const button = document.querySelector('#get');
const message = document.querySelector('.message');
const img = document.querySelector('.img');

button.addEventListener('click', () => {
    if(input.value > 20 || input.value < 0){
        message.innerHTML = 'Please enter a number between 0 to 20';
    }else{
        img.innerHTML = '';
        for(let j = 0; j < input.value; j++){
            img.innerHTML += `<img src="https://picsum.photos/500/300?random=${j}" alt="random image">`;
        }
        message.innerHTML = '';
    }
})

