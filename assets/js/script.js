var app = document.getElementById('atext');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .deleteChars(25)
  .typeString('A full time idiot.')
  .pauseFor(300)
  .deleteChars(25)
  .typeString('A Web designer.')
  .pauseFor(300)
  .deleteChars(25)
  .typeString('Master at bypassing school filters.')
  .pauseFor(300)
  .deleteChars(35)
  .typeString('A Gamer.')
  .pauseFor(350)
  .start();