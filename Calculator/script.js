const buttons=document.querySelectorAll('button');

function getInputValue(){
    // let input = event.target.innerText
    // console.log(input);
    // printValue(input);
    console.log('clicked')
}

buttons.forEach(button =>{
    button.addEventListener('click','getInputValue()');
})