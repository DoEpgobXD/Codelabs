let colors = ['red', 'blue', 'purple','white','black']

function ChangeBackgroundColor(){
    let randomNumber = Math.floor(Math.random() * 5);
document.body.style.backgroundColor = colors[randomNumber]
}