const form = document.querySelector('.form')
const submitBtn = document.querySelector('.submitBtn');
const inputTodo = document.querySelector('.inputTodo');
const todo = inputTodo.value;

// //adding event listener to form
submitBtn.addEventListener('click', addItem);


// Adding of todos Item
function addItem(e){
    e.preventDefault();
    if (!inputTodo.value){
        alert("We need info!!..")
        return ;
    }
    console.log(todo);
};

