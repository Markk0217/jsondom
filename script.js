var dog = document.getElementsByTagName('img')[0];
var hat = document.getElementsByTagName('img')[1];
var girl = document.getElementsByTagName('img')[2];


dog.addEventListener("click", puppyWalk);

document.addEventListener('DOMContentLoaded', function(event) {
  window.setInterval(puppyWalk, 10);
});

dog.style.left = '0px'
hat.style.left = '0px'
girl.style.left = '-20px'

function puppyWalk() {

  var oldLeft = parseInt(dog.style.left);
  var oldLeft = parseInt(hat.style.left);
  var oldLeft = parseInt(girl.style.left);
  var newLeft = oldLeft + 3;

  if (newLeft > window.innerWidth){
    newLeft = -300;
  }

  dog.style.left = newLeft + 'px';
  hat.style.left = newLeft + 'px';
  girl.style.left = newLeft + 'px';
}
