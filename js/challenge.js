
let currentCounterValue = 0;

const likes = {};

let intervalTimerId = null;

////////////////////////
// SETUP
////////////////////////

document.addEventListener("DOMContentLoaded", (event) => {

    startTimer();

    addCounterListeners();

    addLikesListener();

    addPauseResumeListener();

    addCommentSubmitListener();

});

function addCounterListeners(){
    document.getElementById("plus").addEventListener("click", event => {
        if(intervalTimerId){
            incrementCounter();
        }
    });

    document.getElementById("minus").addEventListener("click", event => {
        if(intervalTimerId){
            decrementCounter();
        }
    });
}

function addLikesListener(){
    const likeList = document.querySelector(".likes");

    document.getElementById("heart").addEventListener("click", event => {
        if(intervalTimerId){
            addLike(currentCounterValue, likeList);
        }
    });
}

function addPauseResumeListener(){

    const pauseResumeButton = document.getElementById("pause");

    pauseResumeButton.addEventListener("click", event => {
        if(intervalTimerId){
            stopTimer();
            pauseResumeButton.innerText = " resume ";
        }
        else{
            startTimer();
            pauseResumeButton.innerText = " pause ";
        }
    });
}

function addCommentSubmitListener(){

    const commentList = document.getElementById("list");
    const commentTextInput = document.getElementById("comment-input");

    document.querySelector("#comment-form").addEventListener("submit", event => {
        event.preventDefault();
        addComment(commentList, commentTextInput);
    });
}

////////////////////////
// TIMERS
////////////////////////

function startTimer(){
    intervalTimerId = setInterval(incrementCounter, 2000);
}

function stopTimer(){
    clearInterval(intervalTimerId);
    intervalTimerId = null;
}

////////////////////////
// COUNTERS
////////////////////////

function decrementCounter(){
    currentCounterValue--;
    console.log(currentCounterValue);
    updateCounterDisplay();
}

function incrementCounter(){
    currentCounterValue++;
    console.log(currentCounterValue);
    updateCounterDisplay();
}

function updateCounterDisplay(){
    const counter = document.getElementById("counter");
    counter.innerText = currentCounterValue;
}

////////////////////////
// LIKES
////////////////////////

function addLike(count, likeList){
    let li;

    if(likes[count]){
        likes[count]++;
        li = document.querySelector(`li[data-count='${count}']`);
    }
    else{
        li = document.createElement("li");
        li.dataset.count = count;
        likes[count] = 1;
        likeList.append(li);
    }

    const plural = likes[count] > 1 ? "s" : "";
    li.textContent = `${count} has ${likes[count]} like${plural}`;
}

////////////////////////
// COMMENTS
////////////////////////

function addComment(commentList, commentTextInput){
    const comment = document.createElement("p");
    comment.innerText = commentTextInput.value;

    comment.removeMyself = function() {
        console.log(`${comment.innerText} removed!`);
        console.dir(this);
        this.remove();
    };

    comment.addEventListener("click", event => {
        event.target.removeMyself();
    });

    commentList.append(comment);
}