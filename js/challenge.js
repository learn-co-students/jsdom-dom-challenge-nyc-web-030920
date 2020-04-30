
// many click listeners needed 
// put it on the body or document and then 
// event target === if else will work out
const likeList = document.querySelector('.likes')
let likeCount = {}
// good way to keep track of likes 
// {
// a: 3 likes,
// b: 8 likes 
// }

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  // startTimer()

let timer = setInterval(() => {
    incrementCounter(1)
  }, 1000)


  document.addEventListener('click', (e) => {

  // for likes need to check if it exists 
  // if it does increment if not make it.  
  
    switch (event.target.id) {
      case 'minus':
        incrementCounter(-1)
        break;
  
      case 'plus':
        incrementCounter(1)
      break;

      case 'heart':
        const counter = document.getElementById('counter')
        let currentNum = counter.textContent
  
        if (likeCount[currentNum]){
          likeCount[currentNum]++
          const li = document.querySelector(`[data-number="${currentNum}"]`)
          li.textContent = `${currentNum} has been liked times ${likeCount[currentNum]} 🍑⛄`
  
        } else {
          likeCount[currentNum] = 1
          const li = document.createElement('li')
          li.dataset.number = currentNum
          li.textContent = `${currentNum} has been liked! 🍑` 
          likeList.append(li)
        }
      break;

      case 'pause':
        clearInterval(timer)
    
        document.getElementById('minus').disabled = true
        document.getElementById('plus').disabled = true
        document.getElementById('heart').disabled = true
        document.getElementById('submit').disabled = true
        // only works for buttons
        
        event.target.textContent = 'Resume'
        event.target.id = 'resume'
        console.log(event.target)

        break;

      case 'resume':
        timer = setInterval(() => {
          incrementCounter(1)
        }, 1000)

        document.getElementById('minus').disabled = false
        document.getElementById('plus').disabled = false
        document.getElementById('heart').disabled = false
        document.getElementById('submit').disabled = false
        event.target.textContent = 'Pause'
        event.target.id = 'pause'
        console.log(event.target)

      break;
  
      default: 
      "that didn't work"
        break;
    }
  })
  
  document.addEventListener('submit', (e) => {
    e.preventDefault()

    // console.log(event.target)

    const comment = event.target.comment.value 
    // console.log(comment)
    const p = document.createElement('p')
    p.textContent = comment
    const list = document.getElementById('list')

    list.append(p)
    event.target.reset()


  })

});

function incrementCounter (n) {
  const counter = document.getElementById('counter')
  let currentNum = parseInt(counter.textContent)
  let newNum = currentNum + n
  counter.textContent = parseInt(newNum)
}


// As a user, I should see the timer increment every second once the page has loaded.
// As a user, I can manually increment and decrement the counter using the plus and minus buttons.
// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
// As a user, I can pause the counter, which should
// pause the counter
// disable all buttons except the pause button
// the pause button should then show the text "resume."
// When 'resume' is clicked, it should restart the counter and re-enable the buttons.

// As a user, I can leave comments on my gameplay