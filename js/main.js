// when the user presses a key, find the corresponding audio file on the page and play it //
(()=> {
  console.log('drumkit js file is loaded');

  function removeHighlight(e)
  {
    //console.log(e);
    if (e.propertyName !== "transform"){
      return;
    } else {
      e.target.classList.remove('playing');
    }
  }

// run this whenever a key gets pressed //
function logKey(e) {
  //debugger;
  //console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);//const is a variable that should not change//
// if theres no matching audio element, then dont do anything (avoid errors)//
  if(!key) {return;}
// add a highlight to the key artwork on the screen //
  key.classList.add('playing');

  if(!audio) {return;}

  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeHighlight));


  window.addEventListener('keydown', logKey);
})();
