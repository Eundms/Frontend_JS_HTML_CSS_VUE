# ※ 서버에 요청 보내고 받기 ※

## [방법1] fetch() 사용

```javaScript
  let response = await fetch(searchUrl);
  let data = await response.json();
  if (data.response.body.numOfRows > 0) {/*생략*/}
```

## [방법2] Axios 사용 🌟

### 1) Axios 라이브러리 추가

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

### 2) JavaScript에서 GET 요청 보내기

```javaScript
axios
  .get(areaUrl)
  .then((result) => {
    makeAreaOption(result.data);
  })
  .catch(() => {
    console.log("에러 발생!!!");
  });

```

```javaScript
async function request(){
    let data = await axios.get(areaUrl);
    let areas = data.response.body.items.item;
    areas.forEach(function (area) {
        console.log(area);
    });
}
```