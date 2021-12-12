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
