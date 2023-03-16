

# ※ MAP API 사용 ※

- [공식문서](https://apis.map.kakao.com/web/guide/)
- [샘플](https://apis.map.kakao.com/web/sample/)

## [1] 기본 설정

1. Kakao 개발자 사이트에서 개발자 등록 및 앱생성
2. 웹 플랫폼 -> 사이트 도메인 등록 `http://127.0.0.1:5500/`

## [2] 튜토리얼

### [기본] Kakao MAP 렌더링

1. html코드에 id="map"인 div 태그 추가
2. javaScript 코드로 생성

```javaScript
var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
var options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
```

### [라이브러리] 지도 라이브러리

> 라이브러리 추가

- APIKEY : 자신의 API KEY 추가
- LIBRARY : 불러올 라이브러리명 추가
  - `clusterer` : 마커 클러스터링
  - `services` : 장소 검색, 주소<->좌표 변환
  - `drawing` : 그리기 모드 지원

```html
<script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=APIKEY&libraries=LIBRARY"
></script>
```

## [3] 지도 URL

> 특정 위치 표시 & Kakao 지도에서 크게 보기, 길찾기로 연결

### 길찾기 바로가기

> 해당 위치를 목적지로 지정한 상태의 길찾기 URL

- `/link/to/이름,위도,경도`
- `/link/to/장소ID`

### 지도 바로가기

> 좌표나 장소ID 이용하여 Kakao 지도에서 해당 위치를 표시한 상태의 URL을 만들 수 있음

- 장소ID : `키워드로 장소 검색 API`, `카테고리로 장소 검색 API`

- `/link/map/위도,경도`
- `/link/map/이름,위도,경도`
- `/link/map/장소ID`

### ~(난안써)로드뷰 바로가기~

### 지도 검색결과 바로가기

- `/link/search/검색어`
