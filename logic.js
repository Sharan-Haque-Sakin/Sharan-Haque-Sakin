// Selectons
const input = document.getElementById('Add');
const AddBtn = document.getElementById("add")
const Tasks = document.getElementById('Tasks')
// const DoneBtn = document.getElementById('Done')
// const Dlt = document.getElementById('Dlt')
let li = document.querySelector('li')

// Funtions


AddBtn.addEventListener('click',(e)=>{
    let num = 0;
    
    // bg.style.opacity = '1'
    // Creating New Lists
    let NewTask = document.createElement('li')
    NewTask.innerHTML = input.value 
    let ol  = document.querySelector('ol.noish')
    ol.appendChild(NewTask)
    //Creating New Buttons
    const DoneBtn = document.createElement('button') //Done Button
    DoneBtn.setAttribute('id','Done')
    DoneBtn.innerHTML= 'Done'
    let noish = document.querySelector('.noish')
    noish.appendChild(DoneBtn)
    NewTask.appendChild(DoneBtn)
    DoneBtn.classList.add('done')
    // Delete Button
    const DltBtn = document.createElement('button')
    DltBtn.innerHTML = "Delete"
    DltBtn.setAttribute('id','Dlt')
    noish.appendChild(DltBtn)
    NewTask.appendChild(DltBtn)
    DltBtn.classList.add("trash")

            let j = document.querySelector('.Tasks')
        input.value = ""
let bg = document.getElementById('bg') // Parent class of the Tasks
    // Delete button Funtion
noish.addEventListener('click',(e)=>{
    let item = e.target;
    
    if(item.classList[0] === 'trash'){
        let j = item.parentElement;
        j.classList.add('bhag')
        //Function
        function End(){
            j.remove()
        }
        let timeout = setTimeout(End,1000)

    }
    if(item.classList[0] === 'done'){
        let t = item.parentElement
        t.classList.toggle('completed')
    }
})                   
            })
            input.addEventListener('keypress',(e)=>{
                if(e.key === 'Enter'){

                
                let num = 0;
                
                // bg.style.opacity = '1'
                // Creating New Lists
                      let NewTask = document.createElement('li')
                         NewTask.innerHTML = input.value 
                     let ol  = document.querySelector('ol.noish')
                  ol.appendChild(NewTask)
                //Creating New Buttons
                const DoneBtn = document.createElement('button') //Done Button
                DoneBtn.setAttribute('id','Done')
                DoneBtn.innerHTML= 'Done'
                let noish = document.querySelector('.noish')
                noish.appendChild(DoneBtn)
                NewTask.appendChild(DoneBtn)
                DoneBtn.classList.add('done')
                // Delete Button
                const DltBtn = document.createElement('button')
                DltBtn.innerHTML = "Delete"
                DltBtn.setAttribute('id','Dlt')
                noish.appendChild(DltBtn)
                NewTask.appendChild(DltBtn)
                DltBtn.classList.add("trash")
            
                        let j = document.querySelector('.Tasks')
                    input.value = ""
            let bg = document.getElementById('bg') // Parent class of the Tasks
                // Delete button Funtion
            noish.addEventListener('click',(e)=>{
                let item = e.target;
                
                if(item.classList[0] === 'trash'){
                    let j = item.parentElement;
                    j.classList.add('bhag')
                    //Function
                    function End(){
                        j.remove()
                    }
                    let timeout = setTimeout(End,600)
            
                }
                if(item.classList[0] === 'done'){
                    let t = item.parentElement
                    t.classList.toggle('completed')
                }
            })  
        }                 
                        })


// console.log(DltBtn)