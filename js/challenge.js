document.addEventListener("DOMContentLoaded", () => {
    let timer = setInterval(incTime, 1000);
    let body = document.querySelector("body")

    body.addEventListener('click', function (e) {
        let minus = document.getElementById("minus")
        let plus = document.getElementById("plus")
        let heart = document.getElementById("heart")
        let submit = document.getElementById("submit")

        switch (e.target.id) {
            case "minus":
                decTime()
                break;
            case "plus":
                incTime()
                break;
            case "heart":
                addLikes()
                break;
            case "pause":
                clearInterval(timer)
                heart.disabled = true
                plus.disabled = true
                minus.disabled = true
                submit.disabled = true
                e.target.id = "resume"
                e.target.innerText = "resume"
                break;
            case "resume":
                heart.disabled = false
                plus.disabled = false
                minus.disabled = false
                submit.disabled = true
                timer = setInterval(incTime, 1000)
                e.target.id = "pause"
                e.target.innerText = "pause"
                break;
            case "submit":
                e.preventDefault();
                let reviewbox = document.getElementById("comment-input")
                let list = document.getElementById("list")
                let li = document.createElement("li")
                li.innerText = reviewbox.value
                list.append(li)
                reviewbox.value = ""
                break;
        }
    })

    let minus = document.getElementById("minus")
    let plus = document.getElementById("plus")

})

let incTime = function () {
    let counter = document.getElementById("counter")
    counter.innerText = parseInt(counter.innerText) + 1
}

let decTime = function () {
    let counter = document.getElementById("counter")
    counter.innerText = parseInt(counter.innerText) - 1
}

function addLikes() {
    let likesWall = document.querySelector("ul")
    let counter = document.getElementById("counter")
    let currentPost = document.getElementById(`${counter.innerText}`)

    if (currentPost) {
        currentPost["count"] = currentPost["count"] + 1
        currentPost.innerHTML = `${counter.innerText} is liked ${currentPost["count"]} times`
    }
    else {
        let likePost = document.createElement("li")
        likePost.id = counter.innerHTML
        likePost["count"] = 1
        likePost.innerHTML = `${counter.innerText} is liked ${likePost["count"]} times`
        likesWall.append(likePost)
    }
}