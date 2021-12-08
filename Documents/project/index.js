const form = document.getElementById('form');
const main = document.getElementById('main');
const output = document.getElementById('output');



// //adding event listener to form
 form.addEventListener('submit', addItem);


// USE FORM INSTEAD OF UL
function addItem(e){
    e.preventDefault();
    //create a form
    const form2 = document.createElement('form');
    form2.id = 'form2';
    //create date input
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.id = 'dateInput';
    //create text input
    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.id = 'textInput';
    textInput.placeholder = 'Add plans'
    //create a submit button
    submit = document.createElement('input');
    submit.type = 'submit';
    //appending both input and submit to form2
    form2.appendChild(dateInput);
    form2.appendChild(textInput);
    form2.appendChild(submit);
    //submit event listener
    form2.addEventListener('submit', secondForm);

    main.insertBefore(form2, output)

};

function secondForm(e){
    e.preventDefault();
    //create a div element
    div = document.createElement('div')
    div.className = 'divclass';
    //create divtext
    divText = document.createElement('div');
    divTextNode = document.createTextNode(textInput.value);
    divText.appendChild(divTextNode)
    //create div date
    divDate = document.createElement('div');
    divDateNode = document.createTextNode(dateInput.value);
    divDate.appendChild(divDateNode);
    //appending both to the roiginal div
    div.appendChild(divDate);
    div.appendChild(divText)

    console.log(div)

    
    
}











// function addItem(e){
//     e.preventDefault();
//     //getting the value of the input addtext
//     const addText = document.getElementById('addText');
//     //create a ul
//     const ul = document.createElement('ul');
//     //create li's
//     const dateli = document.createElement('li');
//     const textli = document.createElement('li');
//     //create div for text
//     div = document.createElement('div');
//     div.append(addText.value)
//     //append div to dateli
//     dateli.append(div);
//     //create input date
//     inputDate = document.createElement('input');
//     inputDate.type='date';
//     inputDate.id = 'dateId'
//     //create input text
//     inputText = document.createElement('input')
//     inputText.type = 'text';
//     //adding id to input
//     inputText.id = 'bodyInput'
//     inputText.placeholder='Add plans'
//     //create a submit button
//     submitInput =  document.createElement('input');
//     submitInput.type = 'submit'
//     //append input date and inputtext to dateli
//     dateli.appendChild(inputDate)
//     textli.appendChild(inputText);
//     //append dateli nd textli to ul
//     ul.appendChild(dateli)
//     ul.appendChild(textli)
//     //append submitinput to textli
//     textli.appendChild(submitInput)
//     main.insertBefore(ul, output);
// };



//things to do
//1. add date and plans (should be moreof a calender)
//2. remove date and plans
//should update last seen on each update of items