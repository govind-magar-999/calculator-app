const selectElements = document.querySelectorAll('input[type="button"]');
//let InputData = document.getElementsByClassName('textview')[0];
selectElements.forEach(item => {
  item.addEventListener('click', ()=> {
    let Elvalue = item.value;
    switch(Elvalue){
      case 'AC': 
      clean();
      break;
      case 'C':
        document.querySelector(".textview").value = document.querySelector(".textview").value.slice(0,-1);
      break;
      case '0':
        document.querySelector(".textview").value = document.querySelector(".textview").value.concat('0');
      break;
      case '1':
        document.querySelector(".textview").value = document.querySelector(".textview").value.concat('1');
      break;
      case '2':
        document.querySelector(".textview").value = document.querySelector(".textview").value.concat('2');
      break;
      case '3':
        document.querySelector(".textview").value = document.querySelector(".textview").value.concat('3');
      break;
      case '4':
        document.querySelector(".textview").value = document.querySelector(".textview").value.concat('4');
      break;
      case '5':
        document.querySelector(".textview").value = document.querySelector(".textview").value.concat('5');
      break;
      case '6':
        document.querySelector(".textview").value = document.querySelector(".textview").value.concat('6');
      break;
      case '7':
        document.querySelector(".textview").value = document.querySelector(".textview").value.concat('7');
      break;
      case '8':
        document.querySelector(".textview").value = document.querySelector(".textview").value.concat('8');
      break;
      case '9':
        document.querySelector(".textview").value = document.querySelector(".textview").value.concat('9');
      break;
      case '.':
        document.querySelector(".textview").value = document.querySelector(".textview").value.concat('.');
      break;
      case '+':
        document.querySelector(".textview").value = document.querySelector(".textview").value.concat('+');
      break;
      case '-':
        document.querySelector(".textview").value = document.querySelector(".textview").value.concat('-');
      break;
      case '/':
        document.querySelector(".textview").value = document.querySelector(".textview").value.concat('/');
      break;
      case '%':
        document.querySelector(".textview").value = document.querySelector(".textview").value.concat('%');
      break;
      case 'x':
        document.querySelector(".textview").value = document.querySelector(".textview").value.concat('*');
      break;
      case '=':
        equals(document.querySelector(".textview").value)
      break;
    }
  })
})
  
  function equals(Sum){
    let result = "";
    result = result.concat(eval(Sum).toString());
    document.querySelector(".textview").value = result;
  }
  
  function clean(){
    document.querySelector(".textview").value = '';
  }
