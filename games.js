var items = [
  {name: 'apple', valve: 4},
  {name:'orange', value:3},
{name:'elephant',value:650}
];

var first = document.querySelector('#first');
var second = document.querySelector('#fsecond');
var first = document.querySelector('#first');
var second = document.querySelector('#fsecond');


second.addEventListener('click', function(){
  if(firstDiv.value > secondDiv.value) {
    count++;
  } else {
    console.log("wrong");
  }
});

function setItems() {
    function rand(first) {
      var i = Math.floor(Math.random()*(items.length));
      if(i == first) {
       rand(first);
     }else{
       return i;
     }
      }
      var i = rand();
      firstDiv.value = item[i].value;
      firstDiv.innertext=item[i].name;
    }
