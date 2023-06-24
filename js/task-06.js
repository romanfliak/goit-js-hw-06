const inputEi = document.querySelector('#validation-input') 
console.log(inputEi)
const dataLength =inputEi.getAttribute('data-length');
console.log(dataLength)
// const inputValueLength = inputEi.value.length;
const checkInputValueLength = (event) => {
const currentValue = event.currentTarget.value
    if (Number(dataLength) === Number(currentValue.length)){
    inputEi.classList.add("valid")
}
else{
    inputEi.classList.add("invalid")
}

}
inputEi.addEventListener("blur", checkInputValueLength)
console.log(checkInputValueLength);
