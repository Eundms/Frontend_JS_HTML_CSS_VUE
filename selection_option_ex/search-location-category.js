let serviceKey =
  "서비스키"; // 깃헙에 올리기전 지우기

let areaUrl = `https://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=${serviceKey}&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json`;
axios
  .get(areaUrl)
  .then((result) => {
    makeAreaOption(result.data);
  })
  .catch(() => {
    console.log("에러 발생!!!");
  });
function makeAreaOption(data) {
  console.log(data);
  let areas = data.response.body.items.item;
  let sel = document.getElementById("search-area");

  areas.forEach(function (area) {
    let opt = document.createElement("option"); // <option value="1"> 서울 </option>
    opt.setAttribute("value", area.code);
    opt.appendChild(document.createTextNode(area.name));
    sel.appendChild(opt);
  });
}

async function changeArea() {
  let selectedArea = document.getElementById("search-area");
  var selectedAreaCode = selectedArea.options[selectedArea.selectedIndex].value;
  var selectedAreaName = selectedArea.options[selectedArea.selectedIndex].text;
  console.log(`selectedAreaCode: ${selectedAreaCode} selectedAreaName: ${selectedAreaName}`);

  let sigunguUrl = areaUrl + `&areaCode=${selectedAreaCode}`;
  let response = await fetch(sigunguUrl);
  let data = await response.json();
  makeSigunguOption(data);

  function makeSigunguOption(data) {
    let sel2 = document.getElementById("search-sigungu");
    while (sel2.firstChild) {
      sel2.removeChild(sel2.firstChild);
    }
    let areas = data.response.body.items.item;
    areas.forEach(function (area) {
      let opt2 = document.createElement("option");
      opt2.setAttribute("value", area.code);
      opt2.appendChild(document.createTextNode(area.name));
      sel2.appendChild(opt2);
    });
  }
}

async function searchTourBasedOnLocationAndCategory() {
  let selectedArea = document.getElementById("search-area"); // 지역 선택
  let areaCode = selectedArea.options[selectedArea.selectedIndex].value;

  let selectedSigungu = document.getElementById("search-sigungu"); // 시군구 선택
  let sigunguCode = selectedSigungu.options[selectedSigungu.selectedIndex].value;

  let selectedType = document.getElementById("search-content-id"); // 관광지 유형 선택
  let contentTypeId = selectedType.options[selectedType.selectedIndex].value;

  //let keyWord = document.getElementById("search-keyword").value; // 검색어
  console.log(
    "지역코드: " + areaCode + " 시군구코드:" + sigunguCode + " 관광지유형:" + contentTypeId
  );

  // 예제) 대구, 동구, 숙박
  let searchUrl = `https://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=${serviceKey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&contentTypeId=${contentTypeId}&areaCode=${areaCode}&sigunguCode=${sigunguCode}`;
  let response = await fetch(searchUrl);
  let data = await response.json();
  if (data.response.body.numOfRows > 0) {
    setTable(data.response.body.items); // 이곳에서 googleMap에 요청 보내서, 구글 맵 띄우면 됨
    showKakaoMap(data.response.body.items);
  }
}
function showKakaoMap(items) {}

/* 디버깅용 */
function setTable(data) {
  console.log(data);
  let tbody = document.getElementById("trip-list");
  data.item.forEach(function (item) {
    let tRow = document.createElement("tr");
    // 이미지
    let tdImg = document.createElement("td");
    let imgURL = item.firstimage;
    let Dom_img = document.createElement("img");
    Dom_img.setAttribute("src", imgURL);
    Dom_img.setAttribute("width", 200);
    tdImg.appendChild(Dom_img);
    // 제목
    let tdTitle = document.createElement("td");
    let title = item.title;
    tdTitle.textContent = title;
    // 주소
    let tdaddr = document.createElement("td");
    let addr = item.addr1;
    tdaddr.textContent = addr;
    // 위도
    let tdmapx = document.createElement("td");
    let mapx = item.mapx;
    tdmapx.textContent = mapx;
    // 경도
    let tdmapy = document.createElement("td");
    let mapy = item.mapy;
    tdmapy.textContent = mapy;

    tRow.appendChild(tdImg);
    tRow.appendChild(tdTitle);
    tRow.appendChild(tdaddr);
    tRow.appendChild(tdmapx);
    tRow.appendChild(tdmapy);

    tbody.appendChild(tRow);
  });
}
