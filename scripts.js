var withButtonClass = document.getElementsByClassName('button');

//console.log(withButtonClass);

var buttonListLenght = withButtonClass.length;

for (var i=0; i < buttonListLenght; i++) {
  alert(withButtonClass[i].innerText);
};

