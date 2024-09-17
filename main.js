// import { spawn } from "child_process"

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let allLikes = document.querySelectorAll('.like')
allLikes.forEach(like => {
  like.addEventListener('click', function(event) {
    mimicServerCall()
    // .then(resp => resp.json()) --> already have the promise defined in function
    .then(json => {
      console.log(json)  
      console.log(event.target.querySelector('span'))

      let heart = event.target.querySelector('span') 

      if (heart.textContent === EMPTY_HEART) {
        heart.textContent = FULL_HEART;
        heart.className = 'activated-heart'
      }
        else if (heart.textContent === FULL_HEART){
          heart.textContent = EMPTY_HEART;
          heart.className = ''
        }
    })
    .catch(error => {
      console.error(error);
      let modal = document.getElementById('modal')
      modal.className = '';
      let modalMessage = document.getElementById('modal-message')
      modalMessage.textContent = (error);
      setTimeout(function(){
        modal.className = 'hidden'; 
      }, 3000);
    })
  })
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
