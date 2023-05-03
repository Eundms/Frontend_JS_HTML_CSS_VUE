// Propery Shorthand (단축 속성명)
// 객체를 정의 할 때 객체의 key값과 value값이 같을경우, 각각 표기하지 않고 한번만 표기.

// ES6 이전
const id = "eundms";
const name = "박은정"; //name 예약어니까 사용하지 말것
const age = 31;
const user = {
  id: id,
  name: name,
  age: age,
};
console.log(user);

// ES6 이후
const userAfterES6 = {
  id,
  name,
  age,
};
console.log("after ES6: ", userAfterES6);
