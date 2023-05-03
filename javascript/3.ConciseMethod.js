// ConciseMethod (간결한 메소드)

// 함수 선언 형식
// function a() { } // 명명(익명) 함수 선언
// const a = function () { } // 명명 함수 표현
// const a = new Function('x', 'y', 'return x + y') // 함수 생성자

// ES6 이전
const id = "eundms";
const name = "박은정"; //name 예약어니까 사용하지 말것
const age = 31;
const user = {
  id: id,
  name: name,
  age: age,
  info: function () {
    console.log(name + " (" + id + ") " + age);
  },
};
console.log(user); //{ id: 'eundms', name: '박은정', age: 31, info: [Function: info] }
user.info();

// ES6 이후
const userAfterES6 = {
  id: id,
  name: name,
  age: age,
  info() {
    console.log(name + " (" + id + ") " + age);
  },
};
userAfterES6.info();
