let timeEl = moment().format("LLLL");
$("#currentDay").text(timeEl)

const textArea = document.querySelector(".description") 
let saveButtons = document.querySelectorAll(".saveBtn")
let data = localStorage.getItem(textArea)

let eightAm =  document.querySelector("#am-8 .description")
let nineAm = document.querySelector("#am-9 .description")
let tenAm = document.querySelector("#am-10 .description")
let elevenAm =  document.querySelector("#am-11 .description")
let twelvePm =  document.querySelector("#pm-12 .description")
let onePm =  document.querySelector("#pm-1 .description")
let twoPm =  document.querySelector("#pm-2 .description")
let threePm =  document.querySelector("#pm-3 .description")
let fourPm =  document.querySelector("#pm-4 .description")
let fivePm =  document.querySelector("#pm-5 .description")
let sixPm  =  document.querySelector("#pm-6 .description")

// console.log(eightAm)

saveButtons.forEach(function (saveButton) {
    saveButton.addEventListener("click", function(){
        localStorage.setItem(this.parentNode.id, this.previousElementSibling.value);
        // console.log(this.previousElementSibling.value);
        // console.log(this.parentNode.id)
    })
})

















 

