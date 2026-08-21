// change flowers to random colour when they're toggled
const colours = ['#8acbea', '#30599d', '#87b861', '#286a32']
const flowers = document.getElementsByClassName('play-flower')

Array.from(flowers).forEach(function(flower) {
  flower.addEventListener('click', function (event) {
    if ([... event.target.classList].includes('toggled')) {
      const colour = colours[Math.floor(Math.random()*colours.length)];
      flower.style.color = colour
    } else {
      flower.style.color = '#FAFAFA'
    }
  })
})
