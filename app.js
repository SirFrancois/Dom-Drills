let arr = [];
let arr1 = [];



document.addEventListener("DOMContentLoaded", function() {

let div = document.createElement('div');
    div.className = 'header-container';
    



let h1 = document.createElement('h1');
    h1.className = 'h1'
    let text = document.createTextNode('This is an h1');

    h1.appendChild(text);
    div.appendChild(h1);



let h2 = document.createElement('h2');
    h2.className = 'h2'
    let text2 = document.createTextNode('This is an h2');

    h2.appendChild(text2);
    div.appendChild(h2);


let h3 = document.createElement('h3');
    h3.className = 'h3'
    let text3 = document.createTextNode('This is an h3')

    h3.appendChild(text3);
    div.appendChild(h3);


let h4 = document.createElement('h4');
    h4.className = 'h4'
    let text4 = document.createTextNode('This is an h4');

    h4.appendChild(text4);
    div.appendChild(h4);


let h5 = document.createElement('h5');
    h5.className = 'h5'
    let text5 = document.createTextNode('This is an h5');

    h5.appendChild(text5);
    div.appendChild(h5);


let h6 = document.createElement('h6')
    h6.className = 'h6'
    let text6= document.createTextNode('This is an h6');
    
    h6.appendChild(text6);
    div.appendChild(h6);


//this is where #11 should go


    let button = document.createElement('button');
    let btntext = document.createTextNode('Click to add new list item')
    button.className = 'The Best Button'


//this is 12 but i cant figure out how to properly right out the function 
    button.addEventListener('click', function(){
        let h1 = document.createElement('h1');


    
    })

});