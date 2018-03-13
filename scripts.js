var withButtonClass = document.getElementsByClassName('button');

//console.log(withButtonClass);

var ButtonList = withButtonClass.length;

for (var i=1; i <= ButtonList; i++) {
  alert(withButtonClass[i-1].innerText);
};

