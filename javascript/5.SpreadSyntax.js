// SpreadSyntax (전개구문)
// spread operator는 반복 가능한(iterable) 객체에 적용할 수 있는 문법.
// 배열이나 문자열 등을 풀어서 요소 하나 하나로 전개시킬 수 있다.
const user1 = { id: "eundms1" };
const user2 = { id: "eundms2" };
const arr = [user1, user2];
console.log(arr);

const copyArr = [...arr];
console.log(copyArr);

const refArr = arr;
console.log(refArr);
console.log("reference에 값(eundms3)을 추가한다.");
refArr.push({ id: "eundms3" });
console.log("원본값이 변경된다 : " + arr);
console.log(refArr);

console.log("다른 주소값 가짐 (copyArr===arr) ", copyArr === arr);
console.log("같은 주소값 가짐 (refArr===arr)", refArr === arr);

const addArr = [...arr, { id: "park" }];
console.log(addArr);

let team1 = ["서울", "부산"];
let team2 = ["광주", "울산"];
console.log("team1 : ", team1);
console.log("team2 : ", team2);

let mergeTeam = [...team1, ...team2];
console.log("mergedTeam : ", mergeTeam);

let team3 = ["광주", "울산"];
let insertTeam = ["서울", ...team3, "부산"];
console.log("insertTeam : " + insertTeam);

const copyUser = { ...user1 };
console.log(copyUser);

const u1 = { id: "eundms1" };
const u2 = { id: "eundms2" };
const u = { ...u1, ...u2 };
console.log(u);

const num = [1, 3, 5, 7];
function plus(a, b, c) {
  return a + b + c;
}
let result = plus(...num); // 1 + 3 + 5 = 9
console.log(result);
