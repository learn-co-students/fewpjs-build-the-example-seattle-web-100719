// import { lookupService } from 'dns';

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', function() {
   let likes = document.querySelectorAll('.like');
   likes.forEach(function(el) {
      el.addEventListener('click', function(e) {
         mimicServerCall()
            .then(function() {
               const heart = e.target;
               if (heart.textContent === FULL_HEART) {
                  heart.textContent = EMPTY_HEART;
                  heart.classList.remove('activated-heart');
               } else {
                  heart.textContent = FULL_HEART;
                  heart.classList.add('activated-heart');
               }
            })
            .catch(function(error) {
               const hidden = document.querySelector('.hidden');
               hidden.classList.remove('hidden');
               const modalMessage = document.querySelector('#modal-message');
               modalMessage.textContent = error;
               setTimeout(function() {
                  hidden.classList.add('hidden');
               }, 5000);
            });
      });
   });
});

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = 'http://mimicServer.example.com', config = {}) {
   return new Promise(function(resolve, reject) {
      setTimeout(function() {
         let isRandomFailure = Math.random() < 0.2;
         if (isRandomFailure) {
            reject('Random server error. Try again.');
         } else {
            resolve('Pretend remote server notified of action!');
         }
      }, 300);
   });
}
