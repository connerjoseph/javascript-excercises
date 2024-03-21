localStorage.getItem("pitch-option");
'0.6'
var x = document.getElementById('pitch-option');
undefined
x
<input id=​"pitch-option" type=​"range" value=​"0.5" min=​"0" max=​"1" step=​"0.05">​
x.value
'0.5'
x.value
'0.7'
x.value = 1
1
x.value = 0
0



localStorage.setItem("pitch-option", document.getElementById('pitch-option').value);

document.getElementById('pitch-option').value;


const rate = document.getElementById('rate-option').value;

// add Var
var rate = document.getElementById('rate-option').value;