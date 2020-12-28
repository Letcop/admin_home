let chat = document.querySelector('.chat i');
let chatText = document.querySelector('.chat_text');
const showChat = document.querySelector('.header_title');
let questionsLists = document.querySelectorAll('.questions_list');
let removeErrorQuestions = document.querySelectorAll('.remove_error_questions');
let detailedBtns = document.querySelectorAll('.error_questions .detailed_btn');
let addTaskText = document.getElementById('addTaskText');
let addText = document.querySelector('.add_task');
let tasks = document.querySelector('.tasks');

// start chat
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
// End chat


// Start chart

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Январь', 'Февраль', 'Март', 'Aпреля', 'Май', 'Июнь', 'Июль'],
        datasets: [{
            label: '',
            // backgroundColor: 'rgb(255, 99, 132)',
            borderColor: '#00cf4d',
            data: [0, 10, 15, 25, 20, 35, 45 ]
        }]
    },

    // Configuration options go here
    options: {}
});
// End Chart

// start map
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
// End map

// Start  Ошибки и тех. вопросы
questionsLists.forEach(elem => {
    elem.addEventListener('mouseover', handleMouseover);
    elem.addEventListener('mouseout', handleMouseout);
});

removeErrorQuestions.forEach(remove => {
    remove.addEventListener('click', handleRemoveQuestion)
});

detailedBtns.forEach(openText => {
    openText.addEventListener('click', handleOpenClick)
})

function handleMouseover() {
    this.style.backgroundColor = '#efefef'
    this.children[2].children[0].style.visibility = 'visible'
    this.children[2].children[2].children[0].style.visibility = 'visible'
}

function handleMouseout() {
    this.style.backgroundColor = '#fff'
    this.children[2].children[0].style.visibility = 'hidden'
    this.children[2].children[2].children[0].style.visibility = 'hidden'
}

function handleRemoveQuestion() {
    this.parentElement.parentElement.remove();
}


let clickNumText;
function handleOpenClick() {
    this.parentElement.parentElement.parentElement.children[1].children[2]
    let text = this.parentElement.parentElement.parentElement.children[1].children[2];

    if(clickNumText == 0) {
        this.innerHTML = 'Подробное'
        text.classList.remove('error_questions_text')

        return clickNumText = 1
    } else {
    this.innerHTML = 'Свернуть'
    text.classList.add('error_questions_text')

    return clickNumText = 0
    }
}



// to do list & tasks list

addText.addEventListener('click', () => {

    if(addTaskText.value == '') {
        addTaskText.style.border = '1px solid #ff8fb4'
    }else {
    let taskList = document.createElement('div');

    taskList.classList.add('task_list');
    tasks.append(taskList);

    taskList.innerHTML = `<input type="checkbox" class="checkTask">
     <textarea class="task_text" disabled>${addTaskText.value}</textarea>
      <i class="fas fa-times-circle remove_task"></i>`
      addTaskText.value = ''
      addTaskText.style.border = '1px solid #efefef'
    }


let taskLists = document.querySelectorAll('.task_list');
let removeTask = document.querySelectorAll('.remove_task');


taskLists.forEach(tasklist => {
    tasklist.addEventListener('mouseover', hanleMouseOverTask);
    tasklist.addEventListener('mouseout', hanleMouseOutTask);
});

removeTask.forEach(remove => {
    remove.addEventListener('click', () => {
        console.dir(remove.parentElement.remove())
    })
})

function hanleMouseOverTask() {
    this.style.border = '1px solid #efefef'
    this.children[2].style.visibility = 'visible'
}

function hanleMouseOutTask() {
    this.style.border = '1px solid #fff'
    this.children[2].style.visibility = 'hidden'
}

});







//когда будет готова backend част это коды не нужно
//^^^^^^^^^^^^^^
let taskLists = document.querySelectorAll('.task_list');
let removeTask = document.querySelectorAll('.remove_task');


taskLists.forEach(tasklist => {
    tasklist.addEventListener('mouseover', hanleMouseOverTask);
    tasklist.addEventListener('mouseout', hanleMouseOutTask);
});

function hanleMouseOverTask() {
    this.style.border = '1px solid #efefef'
    this.children[2].style.visibility = 'visible'
}

function hanleMouseOutTask() {
    this.style.border = '1px solid #fff'
    this.children[2].style.visibility = 'hidden'
}

removeTask.forEach(remove => {
    remove.addEventListener('click', () => {
        console.dir(remove.parentElement.remove())
    })
});
// ^^^^^^^^^^^^^^^^^^




  
