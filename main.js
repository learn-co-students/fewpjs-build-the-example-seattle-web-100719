// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

buildSite();

function buildSite()
{
  let domCollection = collectAllDoms();
  addEventListenersOnLikeBtns(domCollection);
  console.log(domCollection);
}

// Your JavaScript code goes here!
function collectAllDoms()
{
  domHash = {}
  domHash["likeButtons"] = document.querySelectorAll('span.like-glyph');
  domHash["errorMessage"] = document.querySelector("div.hidden");

  return domHash
}

function addEventListenersOnLikeBtns(domHash)
{
  for(likeGlyph of domHash["likeButtons"])
  {
    likeGlyph.addEventListener("click", toggleHeartIcon);
  }
}

function toggleHeartIcon(event) {
  mimicServerCall()
  .then(resp => resp)
    .catch(e => {
      domHash["errorMessage"].textContent = e;
      domHash["errorMessage"].removeAttribute("class");
      setTimeout(function() {domHash["errorMessage"].setAttribute("class", "hidden");}, 2000)
    }).then(function(promiseValidation) {
        if (promiseValidation != undefined)
        {
          if (event.target.getAttribute("class") != "activated-heart")
          {
            event.target.textContent = FULL_HEART;
            event.target.setAttribute("class", "activated-heart");
          }
          else
          {
            event.target.textContent = EMPTY_HEART;
            event.target.setAttribute("class", "non-activated-heart");
          }
        }
      });
      
}



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
