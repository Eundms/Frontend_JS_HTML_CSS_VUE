let serviceKey = "";
let areaUrl = `https://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=${serviceKey}&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json`;
fetch(areaUrl)
  .then((response) =>response.json())
  .then((data) => makeAreaOption(data));

function makeAreaOption(data) {
  console.log(data);
  let areas = data.response.body.items.item;
  let sel = document.getElementById("search-area");

  areas.forEach( function(area) {
    let opt = document.createElement("option");     // <option value="1"> 서울 </option>
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

function searchTourLoc() {
  let selectedArea = document.getElementById("search-area");
  let selectedAreaName = selectedArea.options[selectedArea.selectedIndex].text;
  
  let selectedSigungu = document.getElementById("search-sigungu");
  let selectedSigunguName = selectedSigungu.options[selectedSigungu.selectedIndex].text;

  let selectedType = document.getElementById("search-content-id");
  let selectedTypeName = selectedType.options[selectedType.selectedIndex].text;
  console.log(selectedAreaName + " " + selectedSigunguName + " " + selectedTypeName);
  
  // 여기서 서버에 요청 보내면 됨
}



/* 5. 공통정보조회 */
//https://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=${serviceKey}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=126508&contentTypeId=${contentTypeId}&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&numOfRows=10&pageNo=1