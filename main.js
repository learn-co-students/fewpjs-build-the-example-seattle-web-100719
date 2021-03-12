// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likes = document.querySelectorAll(".like-glyph");
// console.log(likes)
likes.forEach(like => {
  // console.log(like);
  like.addEventListener("click", function(){
    // console.log(like)
    mimicServerCall()
    .then(function(resolveMessage){
      // console.log(resolveMessage);
      // console.log(like.innerText);
      if(like.innerText === '♡'){
        like.innerText = FULL_HEART;
        like.className = "activated-heart";
      } else {
        like.innerText = EMPTY_HEART;
        like.className = "like-glyph";
      }
      
    }).catch(function(rejectMessage){
      // console.log(recectMessage)
      let modal = document.getElementById("modal");
      modal.className = "not-hidden";
      document.getElementById("modal-message").innerText = rejectMessage;
      setTimeout(function(){
        modal.className = "hidden";
      }, 5000)
    })

  });
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
