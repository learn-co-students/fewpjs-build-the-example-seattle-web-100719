// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function hideError() {
  const error = document.querySelector("#modal")
  error.classList.add("hidden")
}

function displayError() {
  const error = document.querySelector("#modal")
  error.classList.remove("hidden")
  setTimeout(function() {hideError()}, 1000)
}

function allLikes() {
  const like = document.querySelectorAll(".like-glyph")
  like.forEach(e => e.addEventListener("click", function(e) {
    mimicServerCall()
      .then(() => {
        if (e.srcElement.textContent === EMPTY_HEART) {
          e.srcElement.textContent = FULL_HEART
          e.srcElement.classList.add("activated-heart")
        } else {
          e.srcElement.textContent = EMPTY_HEART
          e.srcElement.classList.remove("activated-heart")
        }
      })
      .catch(() => {
          displayError()
      })

  }))
}

function singleLike(e) {
  console.log("You've been clicked")
  if (e.textContent===EMPTY_HEART) {
    e.textContent = FULL_HEART
  } else {
    e.textContent = EMPTY_HEART
  }
}

document.addEventListener('DOMContentLoaded', (e) => {
  hideError()
  allLikes()
})



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
