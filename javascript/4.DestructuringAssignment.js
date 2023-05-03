// DestructuringAssignment (구조 분해 할당)
// 배열이나 객체에 입력된 값을 개별적인 변수에 할당하는 간편한 방식 제공.

// 배열
const areas = ["서울", "부산", "전주", "여수", "속초"];
// ES6 이전
{
  const a1 = areas[0];
  const a2 = areas[1];
  const a3 = areas[2];
  const a4 = areas[3];
  const a5 = areas[4];
}

// ES6 이후
{
  const [a1, a2, a3, a4, a5] = areas; // 구조 분해 할당
  console.log(a1, a2, a3, a4, a5);
}

// 객체
const user = {
  id: "eundms",
  name: "박은정",
  age: 25,
};
// ES6 이전
{
  let id = user.id;
  let name = user.name;
  let age = user.age;
}
// ES6 이후
// 객체의 property와 변수명이 같을 경우.
{
  let { id, name, age } = user;
  console.log(id, name, age);
}
// 변수명을 객체의 property명과 다르게 만들 경우.
{
  let { id: userid, name: username, age: userage } = user;
  console.log(userid, username, userage);
}

// 객체를 return 하는 함수.

// ES6 이전
function showUser1(user) {
  console.log("showUser1 call");
  let id = user.id;
  let name = user.name;
  let age = user.age;
  let age10 = age + 10;
  console.log(id + ": " + name + "님 10년 후 나이 : " + age10);
}
showUser1(user);
// ES6 이후
function showUser2({ id, name, age }) {
  console.log("showUser2 call");
  let age10 = age + 10;
  console.log(name + "님 10년 후 나이 : " + age10);
}
showUser2(user);
