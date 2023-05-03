// Arrow Function (화살표 함수)
// function name(param) { }
// 위의 형식을 축약.
// 함수의 이름이 없는 익명함수 이므로 반드시 변수에 담아서 사용.
// const name = (param) => { };

// 매개변수 따른 설정
// () => {}; // 매개변수가 없을 경우.
// (param) => {}; // 매개변수가 한개 있을 경우. (param)의 소괄호 생략 가능.
// (param1, param2) => {}; // 매개변수가 여러개 있을 경우. (param1, param2)의 소괄호 생략 불가능.

// function body 설정.
// body의 내용이 한줄일 경우.
// (x) => {
//   return x + 10;
// };
// body의 내용이 한줄일 경우 {} 생략 가능하고 자동으로 결과값이 return된다. 위와 동일.
// (x) => x + 10;

// object return시 () 사용.
// () => {
//   return { id: "eundms" };
// };
// () => ({ id: "eundms" });

// // body가 여러줄일 경우 {}, return 생략 불가.
// (x) => {
//   const y = x + 100;
//   return y;
// };
function add(x, y) {
    return x + y;
  }
  let result = (x, y) => x + y;
  console.log(result(1, 2));
  
  function reverse(x) {
    return -x;
  }
  
  let result2 = (x) => -x;
  console.log(result2(10));
  
  let result3 = (x) => -x;
  console.log(result3(10));
  
  function func7() {
    return {
      id: "eundms",
      name: "박은정",
    };
  }
  
  let user = func7();
  console.log(user.id);
  
  let func8 = () => ({ id: "eundms", name: "eunjeongpark" });
  user = func8();
  console.log(user.id);
  // Arrow Function에서는 this가 바인딩 되지 않음.
  const id = "eundms";
  const name = "parkeunjeong";
  const age = 25;
  const users = {
    id,
    name,
    age,
    // info(){
    // console.log()
    // }
    info: () => {
      console.log(this.name + "(" + this.id + ") 나이 : " + this.age);
    },
  };
  // javascript this 정리하기
  // 호출한 시점의 this
  console.log(">>>", users); // { id: 'eundms', name: 'parkeunjeong', age: 25, info: [Function: info] }
  //
  users.info(); // undefined(undefined) 나이 : undefined
  