var targetDate = new Date("August 19, 2023 00:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = now - targetDate;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("clock").innerHTML =  days+" Days <br>" + hours+ ' Hours <br> ' + minutes +' Minutes <br> ' + seconds + ' Seconds';
}, 1000);

clock.classList.add("beautiful-clock");


var currentDate = new Date();

var dayOfMonth = currentDate.getDate();

if (dayOfMonth !== 19) {
    document.querySelector('h2').innerHTML = 'check again on the 19th of the month'
    document.getElementById("invisible").classList.add('invisible');
}