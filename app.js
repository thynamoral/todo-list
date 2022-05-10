const form = document.querySelector('.input-form');
const input = document.querySelector('#to-do');
const submit = document.querySelector('#submit');
const lists = document.querySelector('#lists');
const clearList = document.querySelector('#clear-list');

function showList() {
    let makeList = document.createElement('li');
    makeList.textContent = input.value + "  ";
    lists.append(makeList);

    let makeDelete = document.createElement('button');
    makeDelete.textContent = 'Delete';
    makeList.append(makeDelete);
    makeDelete.classList.add('addMargin','delete');

    makeDelete.addEventListener('click',() => {
        makeList.remove();
    })

    let makeDone = document.createElement('button');
    makeDone.textContent = 'Done';
    makeList.append(makeDone);
    makeDone.classList.add('done');

    makeDone.addEventListener('click',() => {
        makeList.style.textDecoration = 'line-through';
        makeList.style.textDecorationColor = 'red';
    })

    input.value = "";
}

form.addEventListener('submit',(e) => {
    e.preventDefault();
    showList();
})

clearList.addEventListener('click',() => {
    lists.remove();
})


