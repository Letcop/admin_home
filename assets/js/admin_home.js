let chat = document.querySelector('.chat i');
let chatText = document.querySelector('.chat_text');
const showChat = document.querySelector('.header_title');


showChat.addEventListener('click', () => {
  chatText.style.visibility = 'hidden'
});

let click;
chat.addEventListener('click', () => {
  if(click == 0) {
  chatText.style.visibility = 'hidden'
  return click = 1;
  }
  else {
  chatText.style.visibility = 'visible'
  return click = 0;
  }
});


// chart

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Январь', 'Февраль', 'Март', 'Aпреля', 'Май', 'Июнь', 'Июль'],
        datasets: [{
            label: 'Посешения платформы',
            // backgroundColor: 'rgb(255, 99, 132)',
            borderColor: '#00cf4d',
            data: [0, 50, 25, 20, 10, 30, 15 ]
        }]
    },

    // Configuration options go here
    options: {}
});


  let pathes = document.getElementsByTagName('path');
  let country = document.querySelector('#js-country');
  let digits = document.querySelector('#js-digits');
  let users = document.querySelector('#js-users');
  let enablezoom = false;

  jQuery('#vmap').vectorMap({
      map: 'world_en',
      backgroundColor: ' rgba(0, 0, 0, 0)',
      borderColor: '#818181',
      borderOpacity: 0.25,
      borderWidth: 1,
      color: '#5a5992',
      enableZoom: enablezoom,
      hoverColor: '#00cf4d',
      hoverOpacity: null,
      normalizeFunction: 'linear',
      scaleColors: ['#b6d6ff', '#005ace'],
      selectedColor: '#5a5992',
      selectedRegions: null,
      showTooltip: false,
      onRegionOver: function(event, code, region) {

          country.style.opacity = '0';
          let k = 0;
          country.textContent = region;
          let animation = setInterval(() => {
              k += 0.2;
              console.log(k);
              country.style.opacity = String(k);
              if (k >= 1) {
                  clearInterval(animation);
                  k = 0;
              }
          }, 70)

          let usersQuantity = 9348;
          digits.textContent=usersQuantity;
          let temp = usersQuantity - 50;
          let l = 0;
          let animationDigits = setInterval(() => {
              if (l > temp) {
                  l++;
              } else {
                  l += 100;
              }
              digits.textContent = String(l);
              if (l >= usersQuantity) {
                  clearInterval(animationDigits);
                  l = 0;
              }
          }, 10);
      }
  });


  
