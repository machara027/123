// const places = ["BMW","MERCEDES",'AUDI', "PORSCHE", "HONDA","FORD","TOYOTA"];

// function showList(list){
//     res.innerHTML = "";

//     list.forEach((item) =>{
//         res.innerHTML += `${item} <hr>`
//     })
// }

// showList(places);

// function filterList(){
//     const list = places.filter((item) =>{
//      return item.includes(todoInput.value);
//     })
//     showList(list)
// }



// const todoList = [];


// function addToTodo(){
//     todoList.push(todoInput.value);
    
//     res.innerHTML = ''

    // todoList.forEach((todo,i) =>{
//         res.innerHTML += `${i + 1}) ${todo} <hr>`
//     })
// }



// const gallImags = document.querySelectorAll(".imgs img");


// gallImags.forEach(el =>{
//     el.addEventListener("click", param =>{
//         coverImg.src = param.target.src;
//         document.querySelector(".imgs img.active").classList.remove('active');
//         el.classList.add('active')
//     })
// })

if(localStorage.darkMode && Number (localStorage.darkMode)){
  switchDarkMode()
}


function switchDarkMode(){
    document.body.classList.toggle('dark');
    localStorage.darkMode = document.body.classList.contains("dark") ? 1 : 0;
}