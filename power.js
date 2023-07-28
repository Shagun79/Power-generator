function Power() {
    let valueone = document.getElementById("digitone").value;
    let valuetwo = document.getElementById("digittwo").value;
    let output = Math.pow(valueone, valuetwo);
    valueone= "";
    valuetwo= "";
    document.getElementById("value").innerHTML = output;

  }
  let x = document.getElementById("digitone");

  let y = document.getElementById("digittwo");

  x.addEventListener("focus", focusFunctionOne);
  function focusFunctionOne() {
    x.style.background = "wheat";
  
  }
  x.addEventListener("blur",blurFunctionOne)
  function blurFunctionOne() {
    x.style.background = "white";
  }

 
  y.addEventListener("focus", focusFunctionTwo);
  function focusFunctionTwo() {
    y.style.background = "wheat";
  }


  y.addEventListener("blur", blurFunctionTwo);

  function blurFunctionTwo() {
    y.style.background = "white";
  }