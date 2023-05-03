## JavaScript this ?
- 대부분의 경우 this의 값은 함수를 호출한 방법에 의해 결정 => `함수를 호출할 때 마다` 다를 수 있음
- ES5는 함수를 어떻게 호출했는지 상관하지 않고 this 값을 설정할 수 있는 bind 메서드를 도입했고, ES2015는 스스로의 this 바인딩을 제공하지 않는 화살표 함수를 추가
## [1] `this` in a Method
```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(person.fullName()); // output: "John Doe"
```
> this refers to the person object

## [2] `this` in a Constructor Function
```javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getMakeAndModel() {
    return `${this.make} ${this.model}`;
  }
}

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.getMakeAndModel()); // output: "Toyota Corolla"
```

## [3] `this` in a Callback Function
```javascript
const button = document.querySelector('button');

button.addEventListener('click', function() {
  console.log(this);
});
```
### `this` in an Arrow Function
```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: () => {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(person.fullName()); // output: "undefined undefined"
```
> Arrow functions do not have their own this value, so the this keyword inside fullName refers to the enclosing scope, which is the global object. Since firstName and lastName are not defined on the global object, the function returns undefined undefined.

### `this` in a Callback Function with Arrow Function
```javascript
const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log(this);
});

```
> this also refers to the global object, not the button element, because the callback function is defined as an arrow function. Arrow functions do not have their own this value, so this refers to the enclosing scope, which is the global object.

### `this` in a Callback Function with function(){}
```javascript
const button = document.querySelector('button');

button.addEventListener('click', function() {
  console.log(this);
});

```
> In this example, this refers to the button element, because the callback function is defined as a regular function, which has its own this value that is set to the button element when the event listener is called.