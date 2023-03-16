var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다
var positions = [
  {
    content: `    <div style="max-width: 270px; border-radius: 0; border: none;">
    <div style="align-items: center">
      <div class="row g-0" style="align-items: center">
        <div class="col-4">
          <img src="./component/img.png" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-8 ps-2">
          <div class="h5 fw-bold mb-0">상호명</div>
          <small>주소 블라블라블라</small><br />
          <small class="text-black-50">(우) 우편번호</small><br />
          <small class="text-black-50">(전화번호) 전화번호</small>
        </div>
      </div>
    </div>
  </div>`,
    latlng: new kakao.maps.LatLng(33.450705, 126.570677),
  },
  {
    content: "<div>생태연못</div>",
    latlng: new kakao.maps.LatLng(33.450936, 126.569477),
  },
];

for (var i = 0; i < positions.length; i++) {
  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: positions[i].latlng, // 마커의 위치
  });

  // 마커에 표시할 인포윈도우를 생성합니다
  var infowindow = new kakao.maps.InfoWindow({
    content: positions[i].content, // 인포윈도우에 표시할 내용
  });

  // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
  // 이벤트 리스너로는 클로저를 만들어 등록합니다
  // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
  kakao.maps.event.addListener(marker, "mouseover", makeOverListener(map, marker, infowindow));
  kakao.maps.event.addListener(marker, "mouseout", makeOutListener(infowindow));
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다
function makeOverListener(map, marker, infowindow) {
  return function () {
    infowindow.open(map, marker);
  };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
function makeOutListener(infowindow) {
  return function () {
    infowindow.close();
  };
}
