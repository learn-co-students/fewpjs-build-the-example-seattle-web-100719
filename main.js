// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", addLikeEvents)

function addLikeEvents() {
  const likes = document.querySelectorAll(".like-glyph")
  for (let i = 0; i < likes.length; i++) {
    likes[i].addEventListener("click", event => { clickEvent(event) })
  }
};

function clickEvent(event) {
  mimicServerCall()
    .then(() => toggleHeart(event))
    .catch(error => { toggleError()})
};

function toggleHeart(event) {
  if (event.target.className === "activated-heart") {
    event.target.className = ""
  } else {
    event.target.className = "activated-heart"
  }
}

function toggleError() {
  const errorMessage = document.getElementById("modal")
  errorMessage.className = ""
  setTimeout(() => { errorMessage.className = "hidden"}, 5000)
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
