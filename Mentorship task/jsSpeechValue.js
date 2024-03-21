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

// https://8d5e-2a09-bac0-1000-cc5-00-17a-71.ngrok-free.app/

// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

// Below is lesson in real form

function persistChange(elm) {
    const elm_type = elm.type.toLowerCase();
    let value;
  
    if (elm_type === 'checkbox' )  {
      value = elm.checked;
    } else if (elm_type == 'select-one') {
      value = elm.selectedIndex;
    } else {
      value = elm.value;
    }
  
    localStorage.setItem(elm.id, value);
  }
  
  function loadPersistedOption(id) {
    const elm = document.getElementById(id);
    const persisted_val = localStorage.getItem(id);
  
    if (!elm) {
      return;
    }
  
    if (persisted_val === null) {
      return;
    }
  
    let elm_type = elm.type.toLowerCase();
    if (elm_type === 'checkbox' )  {
      elm.checked = persisted_val === 'true';
    } else if (elm_type == 'select-one') {
      elm.selectedIndex = persisted_val;
    } else {
      elm.value = persisted_val;
    }
  }
  
  function loadPersistedSpeechOptions() {
    loadPersistedOption('rate-option');
    loadPersistedOption('volume-option');
    loadPersistedOption('pitch-option');
    loadPersistedOption('speech-option');
    loadPersistedOption('voice-option');
  }
  
  window.addEventListener('load', (event) => {
    // console.log('-t- load');
    loadPersistedSpeechOptions();
  });
  
  document.addEventListener('change', (event) => {
    persistChange(event.target);
  });