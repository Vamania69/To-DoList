const btn = document.querySelector('.todo-btn')
const list = document.querySelector('.todo-list')
const  inputValue = document.querySelector("input")
// let itemDele
// console.log(btn)
// btn.onclick=()=>{

//         console.log('varun')

// }
// let n =0


//event listner
btn.addEventListener('click', addTodo)
list.addEventListener('click',deletCheck)



function addTodo() {
    // if (n < 4) {
     //getting input text in inputValue
        // const inputValue

    //creating div item container for li and delet 
        const item = document.createElement('div')
        //givig class to div
        // itemDele=item;
        item.classList.add('todo')

        //creating list li 
        const listValue = document.createElement('li')
        //giving li its input value
        listValue.innerText = inputValue.value
        // console.log(listValue)

       //creating delet button for item
        const deleteButton = document.createElement('button')
    //setting id for delet button
        deleteButton.setAttribute('id', "delet-btn")
        deleteButton.setAttribute('class',"delet-btn")
       //giving delet button its value
        deleteButton.innerHTML = "<i class='fas fa-trash' onclick='deletCheck()'></i>"
        console.log(deleteButton)

      //making both children of item
        item.appendChild(listValue);
        item.appendChild(deleteButton);

        //making item childern of list 
        list.appendChild(item)
//increaing value of n 
        // n = n + 1
//         console.log(item)
// console.log(list)
    //calling function to get delet id
    inputValue.value=""
    //  getDeletId()


    // } else {
    //     const contianer = document.querySelector(".todo-container")
    //     const max = document.createElement("h1")
    //     max.setAttribute('class','error')
    //     max.innerText="Eroor"
    //     contianer.appendChild(error.value)
    //     console.log(max)
    //     console.log(max.value)
    //    contianer.appendChild(max)
    //    console.log(contianer.value)
    //     // contianer.insertBefore(max, contianer.children[0])
    // }
}
function deletCheck(e) {
    //storing the delet when click on
    const delet= e.target;
    // console.log(delet)
    console.log(delet.classList)
    if(delet.classList[0]==='delet-btn'){
          const todo=delet.parentElement
          todo.remove()
       
// console.log("delete called")

//           n=n-1
    }
}





//     console.log(list.firstChild)
//     list.firstChild.remove()
//     console.log(list.firstChild)
//    console.log(n)






        // function getVal(){
        //     // console.log(inputValue)
        // }
        // getVal()
        //function to create li 
        
        //  console.log(list.children)
        
        // function createLi(){
        //     // task=list
        // }
        // createLi()
        //function to merge created li and combine with valueInput
        
        
        // console.log(list)
        
        // console.log(value.textContent)
        // function getvalue(){
        //     const val=document
        // }
        
        
        // console.log(list.children)
        // //delet function
        // let del
        
        // function getDeletId(){
        //     const delet = document.querySelector('#delet-btn')
        //     // console.log(delet.textContent)
        //     del=delet
        //     // console.log)
        // }
        //  del.addEventListener('click', deleteI)
        
          //this function targets the elemnt you click in a list-item