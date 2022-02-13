    // Selections
const Name = document.getElementById('Name')
const Review = document.getElementById('Review')
const bg = document.getElementById('bg')

        // Order Menu
const OrderBtn = document.getElementById('Order')
OrderBtn.addEventListener('click',(e)=>{
     alert("Thanks For Ordering!")
})
        // Menu
const MenuBtn = document.getElementById('Something')
MenuBtn.addEventListener('click',(e)=>{
    alert("Check your Kichen or Ask your Mom:)")
})


    // Reviews
var reviews = [
    {
        Name:"Tahsin Ahmed",
        Txt:"It's a very nice resturant !! There Food quality is very good! And the  taste is just No words!!"
    },
    {
        Name:"Afnan Sadid Rafin",
        Txt:"What a tasty food they made!"
    },{
        Name:"Saud Ibne Gias!",
        Txt:"They made my favourite Potato(ALU) Fires!!Oh...Those are just amazing!"
    }
]
let count; // Count
count = 0;
    // New classes
const NewDiv = document.createElement('div') 
NewDiv.classList.add('Flex')
bg.appendChild(NewDiv)
NewDiv.appendChild(Name)
NewDiv.appendChild(Review)



Name.innerHTML = reviews[count].Name
Review.innerHTML = reviews[count].Txt   



    // Button Change
const pre = document.getElementById('pre')
const ne = document.getElementById('next')
ne.addEventListener('click',(e)=>{
    count++
    if(count >= reviews.length){
        count = 0
    }
    Name.innerHTML = reviews[count].Name
    Review.innerHTML = reviews[count].Txt
    console.log("IT Works!")
})
pre.addEventListener('click',(e)=>{
    count--
    if(count < 0){
        count = reviews.length -1
    }
    Name.innerHTML = reviews[count].Name
    Review.innerHTML = reviews[count].Txt
})