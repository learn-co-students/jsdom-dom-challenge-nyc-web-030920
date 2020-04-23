window.addEventListener('DOMContentLoaded', () => {
    const likedNumber = {}
    const counter = document.querySelector('#counter')
    const commentForm = document.querySelector('#comment-form')

    let timer = setInterval(function(){
        incrementCounter(1)
    }, 1000)

    document.addEventListener('click', function(event){
        if (event.target.id === 'minus') {
            incrementCounter(-1)
        }
        if (event.target.id === 'plus') {
            incrementCounter(1)
        }
        if (event.target.id === 'heart') {
            displayLikes()
        }
        if (event.target.id === 'pause') {
            pause(event.target)
        } else if (event.target.id === 'resume') {
            resume(event.target)
        }
    });

    commentForm.addEventListener('submit', function(event){
        addComments(event)
    });
    
    
    function displayLikes(){
        let number = counter.textContent
        if (likedNumber[number]){
            likedNumber[number]++
            let li = document.querySelector(`[data-id = '${number}']`)
            li.textContent = `${number} has been liked ${likedNumber[number]} times!`
        } else {
            likedNumber[number] = 1
            const commentContainer = document.querySelector('.likes')
            const pTag = document.createElement('p')
            pTag.dataset.id = number 
            pTag.textContent = `${number} has been liked!`
            commentContainer.append(pTag) 
        }     
    }
    
    function pause(pauseButton){
        clearInterval(timer)
        document.querySelector('#minus').disabled = true
        document.querySelector('#plus').disabled = true
        document.querySelector('#heart').disabled = true
        document.querySelector('#submit').disabled = true
        pauseButton.id = 'resume'
        pauseButton.textContent = 'resume'   
    };
    
    function resume(resumeButton){
        timer = setInterval(function(){
            incrementCounter(1)
        }, 1000)
        document.querySelector('#minus').disabled = false
        document.querySelector('#plus').disabled = false
        document.querySelector('#heart').disabled = false
        document.querySelector('#submit').disabled = false
        resumeButton.id = 'pause'
        resumeButton.textContent = 'pause' 
    };
    
    function addComments(form){
        form.preventDefault()
        const commentList = document.querySelector('#list')
        const newComment = document.createElement('p')
        const userInput = document.querySelector('#comment-input').value
        newComment.textContent = userInput
        commentList.append(newComment)
        commentForm.reset()
    };
    
    function incrementCounter(num){
        counter.textContent = parseInt(counter.textContent) + num   
    };
    
    
    
    
    





//end of DOMContentLoaded    
})