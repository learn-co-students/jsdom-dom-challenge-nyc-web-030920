let counter = parseInt(document.getElementById("counter").innerText)
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
let likes = document.getElementById("likes")

document.addEventListener("DomContentLoaded", function(){


    let timerFunction = function(){
        counter++

    }

    setInterval(timerFunction, 1000)
    timerFunction()

    plus.addEventListener("click", function(e) {
        counter++
      })


})