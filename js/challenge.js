
let counter = document.querySelector("#counter").innerText // this is the 0 start and counter
let flag = true; 

if (flag === true) {
 interval = setInterval(function(){
    document.querySelector("#counter").innerText = counter++;
}, 1000);
}

let pauseBtn = document.querySelector("#pause")

pauseBtn.addEventListener("click", function(e){
    flag = false;
})

const minusBtn = document.querySelector("#minus")

minusBtn.addEventListener("click", function(e){
    
    document.querySelector("#counter").innerText = counter -= 1;
})

const plusBtn = document.querySelector("#plus")

plusBtn.addEventListener("click", function(e){
    
    document.querySelector("#counter").innerText = counter += 1;
})



//-------------- likes  ----------------

const likeBtn = document.querySelector("#heart");
const likes = document.querySelector(".likes"); // insert into this ul

let likeCtn = {};

likeBtn.addEventListener("click", function(e){
   
    if (likeCtn[counter]){
        likeCtn[counter] += 1;
        let thisLike = document.querySelector(`[data-number="${counter}"]`)
        thisLike.innerText = `${counter} has been liked ${likeCtn[counter]} times`
    }
    else {likeCtn[counter] = 1
    const like = document.createElement("li")
    like.dataset.number = counter
    like.innerText = `${counter} has been liked ${likeCtn[counter]} time`
    likes.appendChild(like);
    }
    console.log(likeCtn)
})



//-------------- comments ----------------

const submitBtn = document.querySelector("#submit");

const comments = document.querySelector(".comments");
const ul = document.createElement("ul")
comments.appendChild(ul)

const list = comments.firstChild

document.addEventListener("submit", function(e){
    e.preventDefault();
   
    const li = document.createElement("li")
    const input = document.querySelector("#comment-input").value
    li.innerText = input
    list.appendChild(li);
})


