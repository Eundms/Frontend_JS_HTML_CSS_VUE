// var VS let Scope Test
function scope1() {
    var x = 11;
    if (true) {
      var x = 99;
      console.log(x);
    }
    console.log(x);
  }
  // scope1();
  
  function scope2() {
    let x = 11;
    if (true) {
      let x = 99;
      console.log(x);
    }
    console.log(x);
  }
  // scope2();
  
  function scope3() {
    if (true) {
      var x = 99;
      console.log(x);
    }
    console.log(x);
  }
  //scope3();
  
  function scope4() {
    let x = 99;
    if (true) {
      console.log(x);
    }
    console.log(x);
  }
  // scope4();
  
  function scope5() {
    if (true) {
      let x = 99;
      console.log(x);
    }
    console.log(x);
  }
  // scope5();
  
  // 비교하기
  var i = 10;
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(">> " + i); // 5
  
  let k = 10;
  for (let k = 0; k < 5; k++) {
    console.log(k);
  }
  console.log("!! " + k); // 10
  