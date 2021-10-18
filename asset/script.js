let timeEl = moment().format("LLLL");
$("#currentDay").text(timeEl)

const textArea = document.querySelector(".description") 
let saveButton = document.querySelectorAll(".saveBtn")
let data = localStorage.getItem("textArea")
let nineAm = document.querySelector("#am-9 .description")
let tenAm = document.querySelector("#am-10 .description")
let elevenAm =  document.querySelector("#am-11 .description")
let twelvePm =  document.querySelector("#pm-12 .description")
let onePm =  document.querySelector("#pm-1 .description")
let twoPm =  document.querySelector("#pm-2 .description")
let threePm =  document.querySelector("#pm-3 .description")
let fourPm =  document.querySelector("#pm-4 .description")
let fivePm =  document.querySelector("#pm-5 .description")


saveButton.forEach(function (saveButton) {
    saveButton.addEventListener("click", function(){
        localStorage.setItem(saveButton.parentElement.getAttribute("id"),saveButton.previousElementSibling.value);
        console.log(saveButton.previousElementSibling.value);
        console.log(saveButton.parentElement.getAttribute("id"))
    })
})

const textAreas = document.querySelectorAll("textarea")
console.log(textAreas)
    textAreas.forEach(function(text) {
        text.value
    })

function showvalue(){
    let storedText = localStorage.getItem("textAreas");

    if (storedText != null) {
        document.getElementById("textAreas").value = storedText;
    } else
        document.getElementById("textAreas").value = 0;
}

$(".saveBtn").on("click",function(){
    var time = $(this).parent().attr("id")
    var input = $(this).siblings(".description").val()
    localStorage.setItem(time, input)
})

$("#am-9 .description").val(localStorage.getItem("am-9"))
$("#am-10 .description").val(localStorage.getItem("am-10"))
$("#am-11 .description").val(localStorage.getItem("am-11"))
$("#pm-12 .description").val(localStorage.getItem("pm-12"))
$("#pm-1 .description").val(localStorage.getItem("pm-1"))
$("#pm-2 .description").val(localStorage.getItem("pm-2"))
$("#pm-3 .description").val(localStorage.getItem("pm-3"))
$("#pm-4 .description").val(localStorage.getItem("pm-4"))
$("#pm-5 .description").val(localStorage.getItem("pm-5"))



