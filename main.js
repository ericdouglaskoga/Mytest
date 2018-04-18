/*
 * Este é um exemplo de Javascript onde criamos uma variável
 * e colocamos um objeto dentro dele e disparamos uma nova mensagem.
 */
var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');

    if(mySrc === '_imagens/logo.png'){
        myImage.setAttribute('src','_imagens/logo2.png');    
    }else{
        myImage.setAttribute('src','_imagens/logo.png');
    }
}

function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;

    if(!localStorage.getItem('name')){
        setUserName();
    }else{
        var storedName = localStorage.getItem('name');
        myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
    }
}

myButton.onclick = function(){
    setUserName();
}
