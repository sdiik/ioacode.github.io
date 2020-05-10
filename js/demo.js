
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#000000',
    lineColor: '#7F7F7F'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 1 + 'px';
}, false);
