document.addEventListener("DOMContentLoaded", function(event){
    const counter = document.getElementById("counter")

    const minusButton = document.getElementById("minus")

    const plusButton = document.getElementById("plus")

    const heartButton = document.getElementById("heart")
    
    const pauseButton = document.getElementById("pause")
    
    const submitButton = document.getElementById("submit")

    const likes = document.getElementsByClassName("likes")[0]

    const body = document.getElementsByTagName("body")[0]
    
    const likeCount = {}

    let timer = setInterval(myTimer, 1000);

    function myTimer() {
        counter.innerText = parseInt(counter.textContent) +1
        
    }

    body.addEventListener("click", function(e){
        if (e.target === plusButton){
            incrementCounter(1)            
        } else if (e.target === minusButton){
            incrementCounter(-1)
        } else if (e.target === heartButton){
            let number = counter.innerText
                if(likeCount[number]) {
                    likeCount[number]++
                    let li = document.querySelector(`li[data-num="${number}"]`) 
                    li.innerText = `${number} has been liked ${likeCount[number]} times!`

                }else {
                    likeCount[number] = 1
                    const li = document.createElement("li");
                    li.innerText = `${counter.textContent} has been liked 1 times`
                    li.setAttribute('data-num', `${counter.textContent}`)
                    likes.append(li)
            }
        } else if (e.target === pauseButton){
            // * disable all buttons except the pause button
            // * the pause button should then show the text "resume."
            if(pauseButton.innerText === "pause"){
                clearInterval(timer)
                minusButton.disabled = true
                plusButton.disabled = true
                heartButton.disabled = true
                submitButton.disabled = true
                pauseButton.innerText = "resume"
            }else {
                timer = setInterval(myTimer, 1000);
                minusButton.disabled = false
                plusButton.disabled = false
                heartButton.disabled = false
                submitButton.disabled = false
                pauseButton.innerText = "pause"
            }
        } else if (e.target === submitButton){
            e.preventDefault();
            let commentText = document.getElementById("comment-input").value
            let comment = document.getElementById("comment-input")
            let commentList = document.getElementById("list")
            let div = document.createElement("div")
            div.textContent = commentText
            commentList.append(div)
            comment.value= ""
            
        }
    

    })


    function incrementCounter(number){
        let currentNumber = parseInt(counter.innerText)
        newNumber = currentNumber + number 
        counter.innerText = newNumber
    }

});



