let hours;
let minits;
let seconds;
let siv;
let btn=document.querySelector('#init');
let btnInit=document.querySelector('#btnInit');

let p = document.querySelector("#p");

function init() {
  hours = parseInt(document.querySelector("#hs").value);
  minits = parseInt(document.querySelector("#ms").value);
  seconds = parseInt(document.querySelector("#sc").value);
  if (isNaN(hours)) {
    hours = 0;
  }

  if (isNaN(minits)) {
    minits = 0;
  }

  if (isNaN(seconds)) {
    seconds = 0;
  }
  if (hours === 0 && minits === 0 && seconds === 0) {
    reset();
    let btns = document.querySelector("#btns");
    btns.innerHTML += `<hr><h2 class="text-center">FIN</h2>`;
  } else {
      //btnInit.className="d-none";
      btn.innerHTML+=` <button class="btn btn-outline-primary" onclick="init2()" >
      Continuar
    </button>`
  p.innerHTML = `${hours} : ${minits} : ${seconds}`;
  time();
  siv = setInterval(time, 999);

  }
}

function init2(){
    if (hours === 0 && minits === 0 && seconds === 0) {
        reset();
        let btns = document.querySelector("#btns");
        btns.innerHTML += `<hr><h2 class="text-center">FIN</h2>`;
      } else {
        
      p.innerHTML = `${hours} : ${minits} : ${seconds}`;
      time();
      siv = setInterval(time, 999);
    
      }
}
function time() {
  if (hours === 0 && minits === 0 && seconds === 0) {
    reset();
    let btns = document.querySelector("#btns");
    btns.innerHTML += `<hr><h2 class="text-center">FIN</h2>`;
  } else {
    let hax, max, sax;
    //p.innerHTML=`00 : 00 : 00 `;
    seconds--;
    if (seconds < 0) {
      minits--;
      seconds = 59;
    }
    if (minits < 0) {
      hours--;
      minits = 59;
    }

    if (hours < 0) {
      hours = 0;
    }

    if (seconds < 10) {
      sax = "0" + seconds;
    } else {
      sax = seconds;
    }

    if (minits < 10) {
      max = "0" + minits;
    } else {
      max = minits;
    }

    if (hours < 10) {
      hax = "0" + hours;
    } else {
      hax = hours;
    }

    p.innerHTML = `${hax} : ${max} : ${sax}`;
}
}

function reset() {
  window.clearInterval(siv);
  hours = 0;
  minits = 0;
  seconds = 0;
  p.innerHTML = `0${hours} : 0${minits} : 0${seconds}`;
  //btnInit.className='btn btn-outline-success';
}

function pause() {
  window.clearInterval(siv);
}
