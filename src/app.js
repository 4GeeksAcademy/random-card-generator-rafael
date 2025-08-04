
window.onload = cardgenerator;

function cardgenerator() {
  let simbols = ['♠', '♣', '♥', '♦'];
  let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  let simbol = simbols[Math.floor(Math.random() * simbols.length)];
  let number = numbers[Math.floor(Math.random() * numbers.length)];

  document.getElementById('top-simbol').textContent = simbol;
  document.getElementById('number').textContent = number;
  document.getElementById('bottom-simbol').textContent = simbol;

  let color;
  if (simbol === '♥' || simbol === '♦') {
    color = 'red';
  } else {
    color = 'black';
  }

  document.getElementById('top-simbol').style.color = color;
  document.getElementById('bottom-simbol').style.color = color;
  document.getElementById('number').style.color = color;
}
