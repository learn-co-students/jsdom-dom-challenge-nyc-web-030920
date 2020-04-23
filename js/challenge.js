// the code adds an li when you click like
// so the click event has a create <li></li> function in side of it. 
// make an abstracted function that does this. pass in event.target
// follow code below for like button
//const upVoteButtons = document.querySelectorAll(".up-vote")

// upVoteButtons.forEach(function(button){
//   button.addEventListener("click", function(event){
//     const parentLi = event.target.parentNode
//     const span = parentLi.querySelector('span')

//     let currentScore = parseInt(span.textContent)
//     const newScore = currentScore + 1
    
//     span.textContent = newScore

// we need to target the span inside the li to get the like counter to go up. 
{/* <li><span></span></li> */}

document.addEventListener('DOMContentLoaded', (event) => {
  console.log("dom running")
  
  submitComment()
  start()
  increase(num, i, isPaused)
  // buttonClicked() 
  


});

// function startStop () {
//   if {
//     isPaused = true;
//     pauseButton.textContent = "resume"
//   } else {
//     e.preventDefault();
//     isPaused = false;
//     pauseButton.textContent = "pause"
//   }
// }

const bodyTag = document.getElementsByTagName('body')

// function buttonClicked () {
//   bodyTag.addEventListener("click", function(e) {
//     console.log(e.target)
//   // if click it stops increase function
//       // button.textContent = "resume"
//       // 
//   // else 
//     // starts increase function 
//     // button.textContent = "pause"
//   let pauseButton = document.getElementById('pause')
//     if (e.target.id === "pause") {
//       e.preventDefault();
//       if {
//         isPaused = true;
//         pauseButton.textContent = "resume"
//       } else {
//         e.preventDefault();
//         isPaused = false;
//         pauseButton.textContent = "pause"
//       }

//     // } else if {
      
//     // }

//   })
// }



function submitComment() {
  document.querySelector('#submit').addEventListener("click", function(event){
    event.preventDefault();
    // console.log(event.target)
    let div = document.querySelector('#list')
    let p = document.createElement('p')
    let commentValue = document.querySelector('#comment-input').value
    p.textContent = commentValue
    div.append(p)
    document.querySelector('#comment-input').value = ""
    
  })

}

let i = 0;
let num = document.getElementById('counter');
let isPaused = false;

function start() {
  setInterval(increase, 1000);
}


function increase() {
    if (!isPaused) {
      i = i + 1;
      num.textContent = i;
    }
} 



