var theRandomNumber = Math.floor(Math.random() * 1000) + 1;
console.log (theRandomNumber)

var divs = document.querySelectorAll('.post-content');
for(var i = 0; i < divs.length; i++) {
    var rgb = [];

    for(var i = 0; i < 3; i++)
        rgb.push(Math.floor(Math.random() * 255));
}
console.log(divs)
for(let i = 0;i <= 100;i++){
    console.log(i);
}