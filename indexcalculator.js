


document.body.innerHTML = `<div class="main">
<h1>CALCULATOR</h1>
<div>
 <input type="text" id="number1"/>   
</div>
<br>
<div>
 <input type="text" id="number2"/>   
</div>
<br>
<div>
 <button id="add">+</button>
 <button id="minus">-</button>
 <button id="mul">*</button>
 <button id="div">/</button>
 <button id="mol">%</button>
</div>
<div>
 <h2 id="result"></h2>
</div>

</div>
`;
const getValues = function(){
  const number1 = document.getElementById("number1").value;
 const number2 = document.getElementById("number2").value;

  resultObject= {
    "number1" : number1,
    "number2" : number2
  }
  return resultObject;
}

showResult = function(result){
  const resultElement = document.getElementById("result");
  resultElement.innerText = result;
}

//add
 const plus = document.getElementById("add");
const plusOperation = function() {
 const numberValues = getValues();

  const sum = parseInt(numberValues.number1) + parseInt(numberValues.number2);
showResult(sum);
 console.log(sum);
 
}

plus.addEventListener("click", plusOperation);

 //minus
 const minus = document.getElementById("minus");
const minusOperation = function() {
 const numberValues = getValues();

  const diff = parseInt(numberValues.number1) - parseInt(numberValues.number2);
showResult(diff);
 console.log(diff);
}

minus.addEventListener("click", minusOperation);

//mul
const mul = document.getElementById("mul");
const mulOperation = function() {
 const numberValues = getValues();

  const product = parseInt(numberValues.number1) * parseInt(numberValues.number2);
showResult(product);
 console.log(product);
}

mul.addEventListener("click", mulOperation);

//div
const div = document.getElementById("div");
const divOperation = function() {
 const numberValues = getValues();

  const division = parseInt(numberValues.number1) / parseInt(numberValues.number2);
showResult(division);
 console.log(division);
}

div.addEventListener("click", divOperation);

//moldulus
 const mol = document.getElementById("mol");
const molOperation = function() {
 const numberValues = getValues();

  const modulus = parseInt(numberValues.number1) % parseInt(numberValues.number2);
showResult(modulus);
 console.log(modulus);
}

mol.addEventListener("click", molOperation);


