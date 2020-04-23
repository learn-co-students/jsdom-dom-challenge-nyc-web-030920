let likeNumber = {};
let likeList = document.getElementsByClassName('likes')[0];
let commentList = document.getElementById('list')
document.addEventListener('DOMContentLoaded', function(event) {
    let timer = setInterval(function() {
        incrementCounter(1);
    }, 1000);

    document.addEventListener('click', function(event) {
        if (event.target.id === 'minus') {
            incrementCounter(-1);
        }
        if (event.target.id === 'plus') {
            incrementCounter(1);
        }
        if (event.target.id === 'heart') {
            let number = counter.textContent;

            if (likeNumber[number]) {
                likeNumber[number]++;
                let li = document.querySelector(`[data-number = '${number}']`);
                li.textContent = `${number} has been liked ${likeNumber[number]} times!`;
            } else {
                likeNumber[number] = 1;
                let li = document.createElement('li');
                li.dataset.number = number;
                li.textContent = `${number} has been liked!`;
                likeList.append(li);
            }
        }
        if (event.target.id === 'pause') {
            clearInterval(timer)
            document.getElementById("minus").disabled = true
            document.getElementById("plus").disabled = true
            document.getElementById("heart").disabled = true
            document.getElementById("submit").disabled = true

            event.target.textContent = "resume"
            event.target.id = 'resume'
        } else if (event.target.id === 'resume'){
            timer = setInterval(function(){
                incrementCounter(1)
            }, 1000)
            document.getElementById("minus").disabled = false
            document.getElementById("plus").disabled = false
            document.getElementById("heart").disabled = false
            document.getElementById("submit").disabled = false

            event.target.textContent = 'pause'
            event.target.id = 'pause'
        }
    });
    
    document.addEventListener('submit', function(event){
        event.preventDefault()
        let comment = event.target.comment.value
        let p = document.createElement('p')
        p.textContent = comment
        list.appendChild(p)
        event.target.reset()
    })
});


function incrementCounter(number) {
	counter.innerText = parseInt(counter.innerText) + number;
}
