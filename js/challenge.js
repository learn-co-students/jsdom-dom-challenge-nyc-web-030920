document.addEventListener('DOMContentLoaded', function(){
    let counter = parseInt(document.getElementById("counter").innerText)
    const minus = document.getElementById("minus")
    const plus = document.getElementById("plus")
    const heart = document.getElementById("heart")
    let likes = document.getElementById("likes")

    let incTime = function(){
        counter++
    }
    let timer = setInterval(incTime, 1000);


    plus.addEventListener("click", function(e) {
        counter
        console.log(counter)
      })

})
