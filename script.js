const inputbox = document.getElementById('inputbox')
const list = document.getElementById('list')

const addTask = (e) => {

    if(inputbox.value === ' '){
        alert("Please Type something");
    }
    else{
        const li = document.createElement('li')
        li.innerHTML = inputbox.value
        list.appendChild(li)
        const span = document.createElement('span')
        span.innerHTML = '\u00d7' --> // Code For Cancel-Icon
        li.appendChild(span)
    }
    inputbox.value = ' '
}

document.getElementById('btn').addEventListener('click', ()=>{
    addTask();
})


list.addEventListener('click' , (e)=>{
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked')
    }
    else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove()
        alert("You want to Remove Task")
    }
})


