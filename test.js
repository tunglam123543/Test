/////////////////////dongho1////////////////////////////////
///////////////////////////start dong ho 1 //////////////////////
let time1 = document.getElementById("time1");
let start1 = document.getElementById("start1");
let pause1 = document.getElementById("pause1");
let reset1 = document.getElementById("reset1");
let status1 = true;

function Start1() {
  status1 = true;
  setInterval(function () {
    if (status1 == true) {
      if (Number(localStorage.getItem("1 Centiseconds")) <= 8) {
        localStorage.setItem(
          "1 Centiseconds",
          "0" + (Number(localStorage.getItem("1 Centiseconds")) + 1)
        );
      } else if (Number(localStorage.getItem("1 Centiseconds")) <= 98) {
        localStorage.setItem(
          "1 Centiseconds",
          Number(localStorage.getItem("1 Centiseconds")) + 1
        );
      } else {
        localStorage.setItem("1 Centiseconds", "00");
        if (Number(localStorage.getItem("1 Seconds")) <= 8) {
          localStorage.setItem(
            "1 Seconds",
            "0" + (Number(localStorage.getItem("1 Seconds")) + 1)
          );
        } else if (Number(localStorage.getItem("1 Seconds")) <= 58) {
          localStorage.setItem(
            "1 Seconds",
            Number(localStorage.getItem("1 Seconds")) + 1
          );
        } else {
          localStorage.setItem("1 Seconds", "00");
          if (Number(localStorage.getItem("1 Minutes")) <= 8) {
            localStorage.setItem(
              "1 Minutes",
              "0" + (Number(localStorage.getItem("1 Minutes")) + 1)
            );
          } else if (Number(localStorage.getItem("1 Minutes")) <= 58) {
            localStorage.setItem(
              "1 Minutes",
              Number(localStorage.getItem("1 Minutes")) + 1
            );
          } else {
            localStorage.setItem("1 Minutes", "00");
          }
        }
      }
      time1.innerText =
        localStorage.getItem("1 Minutes") +
        ":" +
        localStorage.getItem("1 Seconds") +
        ":" +
        localStorage.getItem("1 Centiseconds");
    }
  }, 10);
} ////////////////////////////dunglai dongho1 ////////////////////////
function Pause1() {
  if (pause1.innerText == "Pause") {
    status1 = false;
    pause1.innerText = "Resume";
  } else {
    status1 = true;
    pause1.innerText = "Pause";
  }
} //////////////////////////////////////////////////////////////////////////
start1.addEventListener("click", function () {
  Reset1();
  Start1();
});
pause1.addEventListener("click", function () {
  Pause1();
});
reset1.addEventListener("click", function () {
  Reset1();
}); /////////////////////////reset1/////////////////////////////////////////////////
function Reset1() {
  localStorage.setItem("1 Minutes", "00");
  localStorage.setItem("1 Seconds", "00");
  localStorage.setItem("1 Centiseconds", "00");
  time1.innerText = "00:00:00";
  pause1.innerText = "Pause";
  status1 = false;
}

//////////////////////dongho2////////////////////////////////
let time2 = document.getElementById("time2");
let start2 = document.getElementById("start2");
let pause2 = document.getElementById("pause2");
let reset2 = document.getElementById("reset2");
let status2 = true;
function Start2() {
  status2 = true;
  setInterval(function () {
    if (status2 == true) {
      if (Number(localStorage.getItem("2 Centiseconds")) <= 8) {
        localStorage.setItem(
          "2 Centiseconds",
          "0" + (Number(localStorage.getItem("2 Centiseconds")) + 1)
        );
      } else if (Number(localStorage.getItem("2 Centiseconds")) <= 98) {
        localStorage.setItem(
          "2 Centiseconds",
          Number(localStorage.getItem("2 Centiseconds")) + 1
        );
      } else {
        localStorage.setItem("2 Centiseconds", "00");
        if (Number(localStorage.getItem("2 Seconds")) <= 8) {
          localStorage.setItem(
            "2 Seconds",
            "0" + (Number(localStorage.getItem("2 Seconds")) + 1)
          );
        } else if (Number(localStorage.getItem("2 Seconds")) <= 58) {
          localStorage.setItem(
            "2 Seconds",
            Number(localStorage.getItem("2 Seconds")) + 1
          );
        } else {
          localStorage.setItem("2 Seconds", "00");
          if (Number(localStorage.getItem("2 Minutes")) <= 8) {
            localStorage.setItem(
              "2 Minutes",
              "0" + (Number(localStorage.getItem("2 Minutes")) + 1)
            );
          } else if (Number(localStorage.getItem("2 Minutes")) <= 58) {
            localStorage.setItem(
              "2 Minutes",
              Number(localStorage.getItem("2 Minutes")) + 1
            );
          } else {
            localStorage.setItem("2 Minutes", "00");
          }
        }
      }
      time2.innerText =
        localStorage.getItem("2 Minutes") +
        ":" +
        localStorage.getItem("2 Seconds") +
        ":" +
        localStorage.getItem("2 Centiseconds");
    }
  }, 10);
} /////////////////////////////////////reset 2 //////////////////////////////////////
function Reset2() {
  localStorage.setItem("2 Minutes", "00");
  localStorage.setItem("2 Seconds", "00");
  localStorage.setItem("2 Centiseconds", "00");
  time2.innerText = "00:00:00";
  pause2.innerText = "Pause";
  status2 = false;
} ///////////////////////dung lai 2 ////////////////////////
function Pause2() {
  if (pause2.innerText == "Pause") {
    status2 = false;
    pause2.innerText = "Resume";
  } else {
    status2 = true;
    pause2.innerText = "Pause";
  }
} //////////////////////////////////////////////////////////////////////
start2.addEventListener("click", function () {
  Reset2();
  Start2();
});
pause2.addEventListener("click", function () {
  Pause2();
});
reset2.addEventListener("click", function () {
  Reset2();
});

//////////////////////////////////dongho3////////////////////////////////////////
let time3 = document.getElementById("time3");
let start3 = document.getElementById("start3");
let pause3 = document.getElementById("pause3");
let reset3 = document.getElementById("reset3");
let status3 = true;
function Start3() {
  status3 = true;
  setInterval(function () {
    if (status3 == true) {
      if (Number(localStorage.getItem("3 Centiseconds")) <= 8) {
        localStorage.setItem(
          "3 Centiseconds",
          "0" + (Number(localStorage.getItem("3 Centiseconds")) + 1)
        );
      } else if (Number(localStorage.getItem("3 Centiseconds")) <= 98) {
        localStorage.setItem(
          "3 Centiseconds",
          Number(localStorage.getItem("3 Centiseconds")) + 1
        );
      } else {
        localStorage.setItem("3 Centiseconds", "00");
        if (Number(localStorage.getItem("3 Seconds")) <= 8) {
          localStorage.setItem(
            "3 Seconds",
            "0" + (Number(localStorage.getItem("3 Seconds")) + 1)
          );
        } else if (Number(localStorage.getItem("3 Seconds")) <= 58) {
          localStorage.setItem(
            "3 Seconds",
            Number(localStorage.getItem("3 Seconds")) + 1
          );
        } else {
          localStorage.setItem("3 Seconds", "00");
          if (Number(localStorage.getItem("3 Minutes")) <= 8) {
            localStorage.setItem(
              "3 Minutes",
              "0" + (Number(localStorage.getItem("3 Minutes")) + 1)
            );
          } else if (Number(localStorage.getItem("3 Minutes")) <= 58) {
            localStorage.setItem(
              "3 Minutes",
              Number(localStorage.getItem("3 Minutes")) + 1
            );
          } else {
            localStorage.setItem("3 Minutes", "00");
          }
        }
      }
      time3.innerText =
        localStorage.getItem("3 Minutes") +
        ":" +
        localStorage.getItem("3 Seconds") +
        ":" +
        localStorage.getItem("3 Centiseconds");
    }
  }, 10);
} ///////////////////////////////////////reset 3 /////////////////////////////
function Reset3() {
  localStorage.setItem("3 Minutes", "00");
  localStorage.setItem("3 Seconds", "00");
  localStorage.setItem("3 Centiseconds", "00");
  time3.innerText = "00:00:00";
  pause3.innerText = "Pause";
  status3 = false;
} /////////////////////////dung lai 3 ///////////////////////////////////
function Pause3() {
  if (pause3.innerText == "Pause") {
    status3 = false;
    pause3.innerText = "Resume";
  } else {
    status3 = true;
    pause3.innerText = "Pause";
  }
} /////////////////////////////////reset 3 ///////////////////
function Reset3() {
  localStorage.setItem("3 Minutes", "00");
  localStorage.setItem("3 Seconds", "00");
  localStorage.setItem("3 Centiseconds", "00");
  time3.innerText = "00:00:00";
  pause3.innerText = "Pause";
  status3 = false;
} //////////////////////////kich hoat /////////////////////////////////
start3.addEventListener("click", function () {
  Reset3();
  Start3();
});
pause3.addEventListener("click", function () {
  Pause3();
});
reset3.addEventListener("click", function () {
  Reset3();
});

///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////
let time4 = document.getElementById("time4");
let start4 = document.getElementById("start4");
let pause4 = document.getElementById("pause4");
let reset4 = document.getElementById("reset4");
let status4 = true;

function Start4() {
  status4 = true;
  setInterval(function () {
    if (status4 == true) {
      if (Number(localStorage.getItem("4 Centiseconds")) <= 8) {
        localStorage.setItem(
          "4 Centiseconds",
          "0" + (Number(localStorage.getItem("4 Centiseconds")) + 1)
        );
      } else if (Number(localStorage.getItem("4 Centiseconds")) <= 98) {
        localStorage.setItem(
          "4 Centiseconds",
          Number(localStorage.getItem("4 Centiseconds")) + 1
        );
      } else {
        localStorage.setItem("4 Centiseconds", "00");
        if (Number(localStorage.getItem("4 Seconds")) <= 8) {
          localStorage.setItem(
            "4 Seconds",
            "0" + (Number(localStorage.getItem("4 Seconds")) + 1)
          );
        } else if (Number(localStorage.getItem("4 Seconds")) <= 58) {
          localStorage.setItem(
            "4 Seconds",
            Number(localStorage.getItem("4 Seconds")) + 1
          );
        } else {
          localStorage.setItem("4 Seconds", "00");
          if (Number(localStorage.getItem("4 Minutes")) <= 8) {
            localStorage.setItem(
              "4 Minutes",
              "0" + (Number(localStorage.getItem("4 Minutes")) + 1)
            );
          } else if (Number(localStorage.getItem("4 Minutes")) <= 58) {
            localStorage.setItem(
              "4 Minutes",
              Number(localStorage.getItem("4 Minutes")) + 1
            );
          } else {
            localStorage.setItem("4 Minutes", "00");
          }
        }
      }
      time4.innerText =
        localStorage.getItem("4 Minutes") +
        ":" +
        localStorage.getItem("4 Seconds") +
        ":" +
        localStorage.getItem("4 Centiseconds");
    }
  }, 10);
}
//////////////////////////reset 4 ////////////////////////
function Reset4() {
  localStorage.setItem("4 Minutes", "00");
  localStorage.setItem("4 Seconds", "00");
  localStorage.setItem("4 Centiseconds", "00");
  time4.innerText = "00:00:00";
  pause4.innerText = "Pause";
  status4 = false;
}

/////////////////////////dung lai 4 /////////////////////////
function Pause4() {
  if (pause4.innerText == "Pause") {
    status4 = false;
    pause4.innerText = "Resume";
  } else {
    status4 = true;
    pause4.innerText = "Pause";
  }
}
////////////////////kich hoat 4 ///////////////////////
start4.addEventListener("click", function () {
  Reset4();
  Start4();
});
pause4.addEventListener("click", function () {
  Pause4();
});
reset4.addEventListener("click", function () {
  Reset4();
});

///////////////////////////dong ho 5//////////////////////////////////////////////
let time5 = document.getElementById("time5");
let start5 = document.getElementById("start5");
let pause5 = document.getElementById("pause5");
let reset5 = document.getElementById("reset5");
let status5 = true;
function Start5() {
  status5 = true;
  setInterval(function () {
    if (status5 == true) {
      if (Number(localStorage.getItem("5 Centiseconds")) <= 8) {
        localStorage.setItem(
          "5 Centiseconds",
          "0" + (Number(localStorage.getItem("5 Centiseconds")) + 1)
        );
      } else if (Number(localStorage.getItem("5 Centiseconds")) <= 98) {
        localStorage.setItem(
          "5 Centiseconds",
          Number(localStorage.getItem("5 Centiseconds")) + 1
        );
      } else {
        localStorage.setItem("5 Centiseconds", "00");
        if (Number(localStorage.getItem("5 Seconds")) <= 8) {
          localStorage.setItem(
            "5 Seconds",
            "0" + (Number(localStorage.getItem("5 Seconds")) + 1)
          );
        } else if (Number(localStorage.getItem("5 Seconds")) <= 58) {
          localStorage.setItem(
            "5 Seconds",
            Number(localStorage.getItem("5 Seconds")) + 1
          );
        } else {
          localStorage.setItem("5 Seconds", "00");
          if (Number(localStorage.getItem("5 Minutes")) <= 8) {
            localStorage.setItem(
              "5 Minutes",
              "0" + (Number(localStorage.getItem("5 Minutes")) + 1)
            );
          } else if (Number(localStorage.getItem("5 Minutes")) <= 58) {
            localStorage.setItem(
              "5 Minutes",
              Number(localStorage.getItem("5 Minutes")) + 1
            );
          } else {
            localStorage.setItem("5 Minutes", "00");
          }
        }
      }
      time5.innerText =
        localStorage.getItem("5 Minutes") +
        ":" +
        localStorage.getItem("5 Seconds") +
        ":" +
        localStorage.getItem("5 Centiseconds");
    }
  }, 10);
}
//////////////////////////////////dung lai 5//////////////////////
function Pause5() {
  if (pause5.innerText == "Pause") {
    status5 = false;
    pause5.innerText = "Resume";
  } else {
    status5 = true;
    pause5.innerText = "Pause";
  }
}

////////////////////////////reset////////////////////////
function Reset5() {
  localStorage.setItem("5 Minutes", "00");
  localStorage.setItem("5 Seconds", "00");
  localStorage.setItem("5 Centiseconds", "00");
  time5.innerText = "00:00:00";
  pause5.innerText = "Pause";
  status5 = false;
}
////////////////////////////////////kich hoat///////////

start5.addEventListener("click", function () {
  Reset5();
  Start5();
});
pause5.addEventListener("click", function () {
  Pause5();
});
reset5.addEventListener("click", function () {
  Reset5();
});

/////////////////////dung tat ca //////////////////
pauseAll.addEventListener("click", function () {
  status1 = false;
  status2 = false;
  status3 = false;
  status4 = false;
  status5 = false;
  pause1.innerText = "Resume";
  pause2.innerText = "Resume";
  pause3.innerText = "Resume";
  pause4.innerText = "Resume";
  pause5.innerText = "Resume";
});
////////////////////bat dau tat ca //////////////////
startAll.addEventListener("click", function () {
  for (let i = 0; i < 10; i++) {
    Reset1();
    Reset2();
    Reset3();
    Reset4();
    Reset5();
    Start1();
    Start2();
    Start3();
    Start4();
    Start5();
  }
});
