const counterValue = document.querySelector('#value');

const decrementBtn = document.querySelector('[data-action ="decrement"]');
 const incrementBtn = document.querySelector('[data-action ="increment"]');
// decrementBtn.addEventListener('click', );
console.log(decrementBtn)
console.log(incrementBtn )  

decrementBtn.addEventListener('click', () =>{
counterValue.textContent -= 1;

}
)

incrementBtn.addEventListener('click', () =>{
    counterValue.textContent = Number(counterValue.textContent) +1;
    
    }
    )