console.time(1);
var uldom = document.createElement('ul');

for(var i=0 ; i<1000; i++){
  var lidom = document.createElement('li');
  uldom.appendChild(lidom);
}
console.timeEnd(1);

console.time(2);
var uldom = document.createElement('ul');
var str = '';

for(var i=0 ; i<1000; i++){
  str += '<li></li>'
}
uldom.innerHTML = str;
console.timeEnd(2);
