let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.getElementById('bard').addEventListener('click', function (){
    offset = 0;
    sliderLine.style.left = -offset + 'px';
});

document.getElementById('monk').addEventListener('click', function (){
    offset = 500;
    sliderLine.style.left = -offset + 'px';
});

document.getElementById('warlock').addEventListener('click', function (){
    offset = 1000;
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-next').addEventListener('click', function (){
    offset = offset + 500;
    if (offset > 1000) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function (){
    offset = offset - 500;
    if (offset < 0) {
        offset = 1000;
    }
    sliderLine.style.left = -offset + 'px';
});

function fun1() {
    var rad=document.getElementsByName('group');
    for (var i=0;i<rad.length; i++) {
      if (rad[i].checked) {
        alert('Выбран '+i+' radiobutton');
      }
    }
  }